let store;

class Store {
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

store = new Store({ actions: actions, mutations: mutations });
