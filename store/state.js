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
    let client = state[changeObject.id];
    if (!client) {
      console.error("Client record with matching key not found.");
      return state;
    }
    for (const [thisKey, value] of Object.entries(changeObject.data)) {
      client[thisKey] = value;
    }
    state[changeObject.id] = client;
    return state;
  },
  add(state, newObject) {
    if (state[newObject.id]) {
      console.error(
        "Record with same first and second name already exists. Records not changed"
      );
      return state;
    }
    state[newObject.id] = newObject.data;
    return state;
  },
  remove(state, changeObject) {
    if (state[changeObject.id]) {
      delete state[changeObject.id];
      return state;
    }
    console.error("Record with the entered id does not exist.");
    return state;
  },
};

let store;

class DataBase {
  #dataBaseName = "assessment_light";
  #getData() {
    if (JSON.parse(localStorage.getItem(this.#dataBaseName))) {
      return JSON.parse(localStorage.getItem(this.#dataBaseName));
    } else {
      localStorage.setItem(this.#dataBaseName, {});
      return {};
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

    self.state = new Proxy(this.#getData() || {}, {
      //the object returned by #getData will persist?
      set: function (state, key, value) {
        state[key] = value;
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
    return self.state[changeObject.id];
  }
}

store = new DataBase({ actions: actions, mutations: mutations });
