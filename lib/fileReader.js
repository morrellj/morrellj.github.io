let DB = {};

function csvFileToString() {
  // let fileCSV = document.getElementById("fileItem").files[0];
  let fileCSV = async () => {
    return new Promise((resolve) => {
      const input = document.createElement("input");
      input.type = "file";
      input.addEventListener("change", () => {
        resolve(input.files[0]);
      });
      input.click();
    });
  };
  fileCSV().then((csv) => {
    Papa.parse(csv, {
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
                //CSV date from excel dd/mm/yyy need to convert to yyy-mm-dd for
                //html elements
                if (isMyModelProperty.type == "date") {
                  if (importedRecordField) {
                    if (importedRecordField.includes("/")) {
                      let dateSplit = importedRecordField.split("/");
                      let d = dateSplit[0]
                        ? parseInt(dateSplit[0], 10).toLocaleString("en-US", {
                            minimumIntegerDigits: 2,
                            useGrouping: false,
                          })
                        : dateSplit[0];
                      final = dateSplit[2] + "-" + dateSplit[1] + "-" + d;
                    }
                  }
                }
                DB[importedRecord[importedClientKeyIndex]][
                  importedKeys[index]
                ] = final;
              }
              DB[importedRecord[importedClientKeyIndex]].key =
                importedRecord[importedClientKeyIndex];
            });
          }
        });
      },
    });
  });
}
//need to publish an event to update list same with add records through the form as a publish event
function replaceRecordsByKey(keys, data) {
  keys.forEach((key) => {
    store.dispatch("replaceMany", { [`${key}`]: data[key] });
  });
}
function replaceRecordsByRecordsObject(data) {
  store.dispatch("replaceMany", data);
}
