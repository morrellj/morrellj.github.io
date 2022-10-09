let actions = {
  update(context, changeObject) {
    changeObject.data.lastModified = new Date();
    changeObject.data.lastDate = ""; //Client.getLastDate();
    //need to check validity of changeObject key
    context.commit("update", changeObject);
  },
};

let mutations = {
  update(state, changeObject) {
    let client = state[changeObject.id];
    for (const [thisKey, value] of Object.entries(changeObject.data)) {
      client[thisKey] = value;
    }
    // update storage here or in the Proxy?
    state[changeObject.id] = client;
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
    self.actions[actionKey](self, changeObject);
  }

  commit(mutationKey, changeObject) {
    let self = this;
    // other good practice items
    if (typeof self.mutations[mutationKey] !== "function") {
      console.log(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }
    localStorage.setItem(
      this.#dataBaseName,
      JSON.stringify(self.mutations[mutationKey](self.state, changeObject))
    );
  }
}

store = new DataBase({ actions: actions, mutations: mutations });
