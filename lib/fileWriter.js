
function exportData() {
  writeToCSVfile(csv(), "ALClientData.csv");
}
function csv() {
  let allClients = getAllRecordsAsArray();//an array of person data objects
  //need to capture all possible field headings for Papa Parse to export all data on all records
  let allFields = {};//an object of a model person with all possible data fields to act as type of header row
  allFields.key = "";
  Object.keys(clientRecordFieldSettings).forEach((key) => {
    if (clientRecordFieldSettings[key]?.propertyResponseFields) {
      Object.keys(
        clientRecordFieldSettings[key].propertyResponseFields
      ).forEach((property) => {
        allFields[property] = "";
      });
      allFields[key] = "";
    } else {
      allFields[key] = "";
    }
  });
  //sort the header row alphabetically so that it comes out that way on the cvs file for ease of navigation in adding merge fields 
  //to word documents and add to the start of the allClients array
  allFields = Object.fromEntries(Object.entries(allFields).sort())
  allClients.unshift(allFields);
  //let Papa do the magic....
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

