let mutations = {
  update(state, changeObject) {
    let client = state.records[changeObject.id];
    if (!client) {
      console.error("Client record with matching key not found.");
      return state.records;
    }
    for (const [thisKey, value] of Object.entries(changeObject.data)) {
      if (client.hasOwnProperty(thisKey)) {
        if (
          client[thisKey]?.constructor === Object &&
          value.constructor !== Object
        ) {
          client[thisKey].current = value;
        } else {
          client[thisKey] = value;
        }
      } else {
        client[thisKey] = value;
      }
    }
    state.records[changeObject.id] = client;
    return state.records;
  },
  updateConsolidated(state, changeObject) {
    let client = state.records[changeObject.id];
    if (!client) {
      console.error("Client record with matching key not found.");
      return state.records;
    }
    store.dispatch("update", { id: changeObject.id, data: {} });
    client[changeObject.accessProperties.formName] =
      client[changeObject.accessProperties.formName] || {};
    for (const [thisKey, value] of Object.entries(changeObject.data)) {
      if (
        client[changeObject.accessProperties.formName].hasOwnProperty(thisKey)
      ) {
        if (
          client[changeObject.accessProperties.formName][thisKey]
            ?.constructor === Object &&
          value.constructor !== Object
        ) {
          client[changeObject.accessProperties.formName][thisKey].current =
            value;
        } else {
          client[changeObject.accessProperties.formName][thisKey] = value;
        }
      } else {
        client[changeObject.accessProperties.formName][thisKey] = value;
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
