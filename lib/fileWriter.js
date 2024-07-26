
function exportData() {
  writeToCSVfile(csv(), "ALClientData.csv");
}
function csv() {
  let allClients = getAllRecordsAsArray();
  let allFields = {};
  allFields.key = "";
  Object.keys(clientRecordFieldSettings).forEach((key) => {
    if (clientRecordFieldSettings[key]?.propertyResponseFields) {
      Object.keys(
        clientRecordFieldSettings[key].propertyResponseFields
      ).forEach((property) => {
        allFields[property] = "";
      });
    } else {
      allFields[key] = "";
    }
  });
  //need to capture all possible field headings for Papa Parse to export all data on all records
  allClients.unshift(allFields);
  let csv = Papa.unparse(allClients);
  return csv;
}
function writeToCSVfile(csv, name) {
  let blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, name);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", name);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
