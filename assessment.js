console.log("HI");
let root = document.getElementById("root");
let output = document.getElementById("output");
let clientList = document.getElementById("clientList");
let clientListSelect = document.getElementById("clientListSelect");
let client = {};

elements = new Elements(Client.schema);

function setPage(heading) {
  var child = root.lastElementChild;
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
}
function addNewClientSelectOption(thisKey, thisFirstName, thisSurname) {
  let newOption = document.createElement("option");
  newOption.value = thisKey;
  newOption.innerHTML = thisFirstName + " " + thisSurname;
  clientListSelect.appendChild(newOption);
}

function clientSelectAction() {
  Client.getClient(clientListSelect.value, function (data) {
    output.innerHTML = data.firstName + " " + data.surname;
    elements.updateElements(data);
  });
}

function clientDelete() {
  alert("Open developer tools and delete manually from local storage.");
}
function refreshState() {
  var all = document.getElementsByTagName("input");
  for (var i = 0, max = all.length; i < max; i++) {
    all[i].value = "x";
  }
}
