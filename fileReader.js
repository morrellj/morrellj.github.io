let DB;

function csvFileToString() {
  let file = document.getElementById("fileItem").files[0];
  let reader = new FileReader();
  reader.onload = function (event) {
    DB = csvToArray(event.target.result); // the CSV content as string
  };
  reader.readAsText(file);
}

function csvToArray(str, delimiter = ",") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  let DB = rows.reduce((databaseObject, row) => {
    let values = row.split(delimiter);
    let record = headers.reduce(function (recordObject, property, index) {
      recordObject[property] = values[index];
      return recordObject;
    }, {});
    databaseObject[record.key] = record;
    return databaseObject;
  }, {});

  return DB;
}
