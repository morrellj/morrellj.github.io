let DB = {};

function csvFileToString() {
  let fileCSV = document.getElementById("fileItem").files[0];
  Papa.parse(fileCSV, {
    complete: function (parsedOutput) {
      let myModel = clientRecordFieldSettings;
      let importedKeys = parsedOutput.data[0];
      let importedClientKeyIndex = importedKeys.findIndex(
        (ele) => ele == "key"
      );
      parsedOutput.data.forEach((importedRecord, ind) => {
        if (ind > 0) {
          DB[importedRecord[importedClientKeyIndex]] = {};
          importedRecord.forEach((importedRecordField, index) => {
            let final = importedRecordField; //importedRecordField.replaceAll("#", "\n");
            let isMyModelProperty = myModel[importedKeys[index]]
              ? myModel[importedKeys[index]]
              : false;
            if (isMyModelProperty) {
              let isSelect =
                isMyModelProperty.tag == "select" ||
                importedKeys[index] == "followUps"
                  ? true
                  : false;
              if (isSelect) {
                final = final.split(",");
                final = final.map((ele) => {
                  return ele.trim();
                });
              }
              //Need to determine what fields are multiple selects and need to be put back to arrays
              DB[importedRecord[importedClientKeyIndex]][importedKeys[index]] =
                final;
            }
            DB[importedRecord[importedClientKeyIndex]].key =
              importedRecord[importedClientKeyIndex];
          });
        }
      });
    },
  });
}
function replaceRecordsByKey(keys, data) {
  keys.forEach((key) => {
    store.dispatch("replaceMany", { [`${key}`]: data[key] });
  });
}
function replaceRecordsByRecordsObject(data) {
  store.dispatch("replaceMany", data);
}
