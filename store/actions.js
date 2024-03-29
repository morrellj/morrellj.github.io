let actions = {
  fetchCurrentValue(context, fieldName) {
    let client = context.state.records[context.state.activeRecord];
    return !client[fieldName]
      ? null
      : client[fieldName].constructor === Object
      ? client[fieldName].current
      : client[fieldName];
  },
  fetchGrossData(context, fieldName) {
    let client = context.state.records[context.state.activeRecord];
    return !client[fieldName] ? null : client[fieldName];
  },
  updateConsolidated(context, changeObject) {
    if (!store.state?.activeRecord) {
      alert("Select a client.");
      return false;
    }
    return context.commit("updateConsolidated", changeObject);
  },
  update(context, changeObject) {
    if (!store.state?.activeRecord) {
      alert("Select a client.");
      return false;
    }
    addDateStamps(changeObject.data);
    return context.commit("update", changeObject);
  },
  add(context, newObject) {
    let changeObject = {};
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
    changeObject.id = `${newObject.firstName}_${newObject.surname}`;
    changeObject.data = newObject;
    changeObject.data.key = changeObject.id;
    changeObject = addOrCreateFields(changeObject);
    return context.commit("add", changeObject);
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

function addOrCreateFields(changeObject) {
  //add all other properties as per schema
  for (const [thisKey, value] of Object.entries(clientRecordFieldSettings)) {
    changeObject.data[thisKey] = changeObject.data[thisKey]
      ? changeObject.data[thisKey]
      : value.default
      ? value.default
      : "";
  }
  addDateStamps(changeObject.data);
  return changeObject;
}
