// function papaParseToCSV(data) {
//   let object = JSON.parse(localStorage.getItem(key));
//   let keys = Object.keys(object);
//   let values = Object.values(object);
// }
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

//   function csv() {
//     let allClients = getAllStorage();
//     let fields = Object.keys(Client.schema);
//     fields.unshift("key");
//     fields.unshift("lastModified");
//     fields.unshift("lastDate");
//     fields.unshift("followUps");
//     let replacer = function (value) {
//       return value ? value : "";
//     };
//     let csv = allClients.map(function (row) {
//       //iterating
//       return fields
//         .map(function (fieldName) {
//           let thisString = "";
//           if (Array.isArray(row[fieldName])) {
//             row[fieldName].forEach((element, index) => {
//               let comma = index > 0 ? ", " : "";
//               thisString = thisString + comma + element;
//             });
//           } else {
//             if (row[fieldName]) {
//               let final = row[fieldName].replaceAll("\n", "#");
//               thisString = final;
//             } else {
//               thisString = row[fieldName];
//             }
//           }
//           return JSON.stringify(replacer(thisString));
//         })
//         .join(",");
//     });
//     csv.unshift(fields.join(","));
//     csv = csv.join("\r\n");
//     console.log(csv);
//     return csv;
//   }
