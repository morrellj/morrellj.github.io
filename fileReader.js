let theBegginingsOfDB;
let DB = {};

function csvFileToString() {
  let fileCSV = document.getElementById("fileItem").files[0];
  Papa.parse(fileCSV, {
    complete: function (parsedOutput) {
      console.log(parsedOutput);
      theBegginingsOfDB = parsedOutput;
      let myKeys = Client.schema;
      let keys = parsedOutput.data[0];
      let keyIndex = keys.findIndex((ele) => ele == "key");
      parsedOutput.data.forEach((ele, ind) => {
        if (ind > 0) {
          DB[ele[keyIndex]] = {};
          ele.forEach((field, index) => {
            let final = field.replaceAll("#", "\n");
            let hasSchemaKey = myKeys[keys[index]]
              ? myKeys[keys[index]]
              : false;
            let isSelect = hasSchemaKey.tag == "select" ? true : false;
            if (isSelect) {
              final = final.split(",");
              final = final.map((ele) => {
                return ele.trim();
              });
            }
            //Need to determine what fields are multiple selects and need to be put back to arrays
            DB[ele[keyIndex]][keys[index]] = final;
          });
        }
      });
    },
  });
}
function addCSVitemToLS(key) {
  localStorage.setItem(key, JSON.stringify(DB[key]));
}
