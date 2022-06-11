console.log("HI");
let root = document.getElementById("root");
let output = document.getElementById("output");
let clientList = document.getElementById("clientList");
let clientListSelect = document.getElementById("clientListSelect");
let client = {};

elements = new Elements(Client.schema);

var header = document.getElementById("buttonNav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current[0]) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

function setPage(heading) {
  let child = root.lastElementChild;
  while (child) {
    root.removeChild(child);
    child = root.lastElementChild;
  }
  elements.addSpecifiedElementsToTargetDiv(heading, root);
}

//Fill the client selection drop down list
for (const key in localStorage) {
  if (localStorage.hasOwnProperty(key)) {
    if (key) {
      let client = JSON.parse(localStorage.getItem(key));
      addNewClientSelectOption(key, client.firstName, client.surname);
    }
  }
}
function clientAdd() {
  let firstNameField = document.getElementById("addClient-firstName");
  let surnameNameField = document.getElementById("addClient-surname");
  let newKey = firstNameField.value + "_" + surnameNameField.value;
  let client = new Client(newKey, {
    firstName: firstNameField.value,
    surname: surnameNameField.value,
  });
  client.save();
  addNewClientSelectOption(client.key, client.firstName, client.surname);
  firstNameField.value = "";
  surnameNameField.value = "";
  clientSelectAction(client.key);
  let options = clientListSelect.options;
  let opt;
  for (let i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];
    opt.selected = opt.value == client.key ? true : false;
  }
  toggle(document.getElementById("newClientAddForm"));
}
function addNewClientSelectOption(thisKey, thisFirstName, thisSurname) {
  let newOption = document.createElement("option");
  newOption.value = thisKey;
  newOption.innerHTML = thisFirstName + " " + thisSurname;
  clientListSelect.appendChild(newOption);
}

function clientSelectAction(clientKey) {
  Client.getClient(clientKey, function (data) {
    //clientListSelect.value
    output.innerHTML = data.firstName + " " + data.surname;
    elements.updateElements(data);
  });
}

function clientDelete() {
  alert("Open developer tools and delete manually from local storage.");
}
function refreshState() {
  let all = document.getElementsByTagName("input");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].value = "x";
  }
}
function toggle(element) {
  if (element.hidden == false) {
    element.hidden = true;
  } else {
    element.hidden = false;
  }
}

function getAllStorage() {
  let values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    let client = JSON.parse(localStorage.getItem(keys[i]));
    client.key = keys[i];
    values.push(client);
  }

  return values;
}
function csv() {
  let allClients = getAllStorage();
  let fields = Object.keys(Client.schema);
  fields.unshift("key");
  fields.unshift("lastModified");
  fields.unshift("lastDate");
  let replacer = function (value) {
    return value ? value : "";
  };
  let csv = allClients.map(function (row) {
    //iterating
    return fields
      .map(function (fieldName) {
        let thisString = "";
        if (Array.isArray(row[fieldName])) {
          row[fieldName].forEach((element, index) => {
            let comma = index > 0 ? ", " : "";
            thisString = thisString + comma + element;
          });
        } else {
          thisString = row[fieldName];
        }
        return JSON.stringify(replacer(thisString));
      })
      .join(",");
  });
  csv.unshift(fields.join(","));
  csv = csv.join("\r\n");
  console.log(csv);
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

function checkLocalStorage() {
  var _lsTotal = 0,
    _xLen,
    _x;
  for (_x in localStorage) {
    if (!localStorage.hasOwnProperty(_x)) {
      continue;
    }
    _xLen = (localStorage[_x].length + _x.length) * 2;
    _lsTotal += _xLen;
    console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB");
  }
  console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
}
