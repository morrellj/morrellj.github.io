let actions = {
  update(context, changeObject) {
    addDateStamps(changeObject.data);
    return context.commit("update", changeObject);
  },
  add(context, newObject) {
    let commitObject = {};
    //must contain firstName, surname properties
    if (
      !newObject.hasOwnProperty("firstName") ||
      !newObject.hasOwnProperty("surname")
    ) {
      console.error(
        "New client object must contain a 'firstName' and a 'surname' property at a minumum."
      );
      return false;
    }
    //add client key property
    newObject.key = `${newObject.firstName}_${newObject.surname}`;
    //add all other properties as per schema
    for (const [thisKey, value] of Object.entries(clientRecordFieldSettings)) {
      newObject[thisKey] = newObject[thisKey]
        ? newObject[thisKey]
        : value.default
        ? value.default
        : null;
    }
    // for (const [thisKey, value] of Object.entries(
    //   Client.supplementaryProperties
    // )) {
    //   newObject[thisKey] = newObject[thisKey]
    //     ? newObject[thisKey]
    //     : value.default
    //     ? value.default
    //     : null;
    // }
    addDateStamps(newObject);
    commitObject.id = newObject.key;
    commitObject.data = newObject;
    return context.commit("add", commitObject);
  },
  remove(context, changeObject) {
    context.commit("remove", changeObject);
  },
  setActiveRecord(context, key) {
    return context.commit("setActiveRecord", key);
  },
  replaceMany(context, changeObject) {
    for (let [key, value] of Object.entries(changeObject)) {
      addDateStamps(value);
    }
    return context.commit("replaceMany", changeObject);
  },
};
function addDateStamps(obj) {
  obj.lastModified = new Date();
  let thisDate = new Date();
  let day = thisDate.getDate();
  let month = thisDate.getMonth() + 1;
  let year = thisDate.getFullYear();
  obj.lastDate = day + "/" + month + "/" + year;
}
let mutations = {
  update(state, changeObject) {
    let client = state.records[changeObject.id];
    if (!client) {
      console.error("Client record with matching key not found.");
      return state;
    }
    for (const [thisKey, value] of Object.entries(changeObject.data)) {
      if (
        client[thisKey].constructor === Object &&
        value.constructor !== Object
      ) {
        client[thisKey].current = value;
      } else {
        client[thisKey] = value;
      }
    }
    state.records[changeObject.id] = client;
    return state.records;
  },
  add(state, newObject) {
    if (state.records[newObject.id]) {
      console.error(
        "Record with same first and second name already exists. Records not changed"
      );
      return state.records;
    }
    state.records[newObject.id] = newObject.data;
    return state.records;
  },
  remove(state, changeObject) {
    if (state.records[changeObject.id]) {
      delete state.records[changeObject.id];
      return state.records;
    }
    console.error("Record with the entered id does not exist.");
    return state.records;
  },
  setActiveRecord(state, key) {
    state.activeRecord = key.id;
    return state.records;
  },
  replaceMany(state, changeObject) {
    let yes = confirm(
      "WARNING: this will irreversably replace all data in the the local storage item. Back up current data to retain integrity. Continue?"
    );
    if (yes) {
      for (let [key, value] of Object.entries(changeObject)) {
        state.records[key] = value;
      }
    }
    return state.records;
  },
};

let store;

class DataBase {
  #dataBaseName = "assessment_light";
  #getData() {
    if (JSON.parse(localStorage.getItem(this.#dataBaseName))) {
      return { records: JSON.parse(localStorage.getItem(this.#dataBaseName)) };
    } else {
      localStorage.setItem(this.#dataBaseName, {});
      return { records: {} };
    }
  }
  constructor(params) {
    if (store) {
      return store;
    }

    let self = this;

    self.state = {};

    self.actions = params.actions || {};

    self.mutations = params.mutations || {};

    self.state = new Proxy(this.#getData() || { records: {} }, {
      //the object returned by #getData will persist?
      set: function (state, key, value) {
        state[key] = value;
        console.log(value);
        //update storage here or in the mutator?
        self.events.publish("stateChange", self.state);
      },
    });

    self.events = new PubSub();
  }

  dispatch(actionKey, changeObject) {
    let self = this;
    // other good practice items
    if (typeof self.actions[actionKey] !== "function") {
      console.error(`Action "${actionKey} doesn't exist.`);
      return false;
    }
    return self.actions[actionKey](self, changeObject);
  }

  commit(mutationKey, changeObject) {
    let self = this;
    // other good practice items
    if (typeof self.mutations[mutationKey] !== "function") {
      console.error(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }
    localStorage.setItem(
      this.#dataBaseName,
      JSON.stringify(self.mutations[mutationKey](self.state, changeObject))
    );
    return self.state.records[changeObject.id];
  }
}

store = new DataBase({ actions: actions, mutations: mutations });
