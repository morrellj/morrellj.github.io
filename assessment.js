console.log("HI");
let output = document.getElementById("output");
let clientListSelect = document.getElementById("clientListSelect");
// let client = {};
let popUp = document.getElementById("pop-up");
let popUpContent = document.getElementById("pop-up-content");
let searchBox = document.getElementById("searchBox");
let recordControl = document.getElementById("recordControl");
let closeSpans = document.getElementsByClassName("close");

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}

// elements = new Elements(clientRecordFieldSettings);

//Fill the client selection drop down list
// Client.forEachClientInLocal(addNewClientSelectOption);
for (const [key, client] of Object.entries(store.state.records)) {
  addNewClientSelectOption(client);
}
function addNewClientSelectOption(client) {
  let newOption = document.createElement("option");
  newOption.value = client.key;
  newOption.innerHTML = client.firstName + " " + client.surname;
  clientListSelect.appendChild(newOption);
}
function clientSelectAction(clientKey) {
  output.innerHTML =
    store.state.records[clientKey].firstName +
    " " +
    store.state.records[clientKey].surname;
  document.title =
    store.state.records[clientKey].firstName +
    " " +
    store.state.records[clientKey].surname;
  app.elements.updateElements(
    store.dispatch("setActiveRecord", { id: clientKey })
  );
  app.pageActions.setPage("demographic");
}
clientListSelect.onkeyup = function (e) {
  if (e.code == "Enter") {
    let data = store.state.records[this.value];
    output.innerHTML = data.firstName + " " + data.surname;
    document.title = data.firstName + " " + data.surname;
    app.elements.updateElements(
      store.dispatch("setActiveRecord", { id: this.value })
    );
    app.pageActions.hideAll();
    app.pageActions.setPage("demographic");
  }
};
function clientAdd() {
  let firstNameField = document.getElementById("addClient-firstName");
  let surnameNameField = document.getElementById("addClient-surname");
  let newKey = firstNameField.value + "_" + surnameNameField.value;
  let newClient = store.dispatch("add", {
    firstName: firstNameField.value,
    surname: surnameNameField.value,
  });
  addNewClientSelectOption(newClient);
  firstNameField.value = "";
  surnameNameField.value = "";
  clientSelectAction(newClient.key);
  let options = clientListSelect.options;
  let opt;
  for (let i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];
    opt.selected = opt.value == newClient.key ? true : false;
  }
  app.pageActions.hideSection(document.getElementById("newClientAddDiv"));
}

function toggle(element) {
  if (element.hidden == false) {
    element.hidden = true;
  } else {
    element.hidden = false;
  }
}

function carePlanToggle(force) {
  let carePlanDiv = document.getElementById("careplan");
  let carePlanToggle = document.getElementById("carePlanToggle");
  if (carePlanDiv.style.display == "none") {
    //care plan hidden
    //show care plan
    carePlanDiv.style.display = "block";
    carePlanToggle.dataset.state = "showCarePlan";
    carePlanToggle.innerHTML = "Hide CP ⎇3";
    setTimeout(() => {
      setButtonNavPositionOnSetPage();
    }, 100);
  } else {
    // hide care plan
    carePlanDiv.style.display = "none";
    carePlanToggle.dataset.state = "hideCarePlan";
    carePlanToggle.innerHTML = "Show CP ⎇3";
  }
}

for (let i = 0; i < closeSpans.length; i++) {
  closeSpans[i].onclick = function () {
    this.closest(".pop-up").style.display = "none";
    removePopUpContent();
  };
}

function removePopUpContent() {
  let contentList = Array.from(popUpContent.childNodes).reverse();
  contentList.forEach((node) => {
    let classLS = node.classList; //== undefined || node.classList == null
    //   ? []
    //   : node.classList;
    if (classLS != "pop-up-content-header") {
      node.remove();
    }
  });
}

function searchReduce() {
  clientListSelect.innerHTML = "";
  let searchWord = searchBox.value.toLowerCase();
  searchWord = searchWord.toLowerCase();
  // Client.getAllClients(function reduce(clients) {
  let clients = store.state.records;
  for (const [key, client] of Object.entries(clients)) {
    let clientName = client.firstName + " " + client.surname;
    clientName = clientName.toLowerCase();
    if (clientName.indexOf(searchWord) >= 0) {
      addNewClientSelectOption(client);
    }
  }
  // });
}
function getAllRecordsAsArray() {
  let values = [];
  for (let [key, value] of Object.entries(store.state.records)) {
    let exportable = {};
    for (let [fieldName, fieldValue] of Object.entries(value)) {
      if (fieldValue.constructor === Object) {
        exportable[fieldName] = fieldValue.current;
      } else {
        exportable[fieldName] = fieldValue;
      }
    }
    values.push(exportable);
  }
  return values;
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
