console.log("HI");
let root = document.getElementById("root");
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

elements = new Elements(clientRecordFieldSettings);

function setPage(category) {
  let child = root.lastElementChild;
  while (child) {
    root.removeChild(child);
    child = root.lastElementChild;
  }
  elements.addSpecifiedElementsToTargetDiv(category, root);
  // window.scroll({ top: 0, behaviour: "smooth" });
  //highlights button of active catergory
  let current = document.getElementsByClassName("active");
  if (current[0]) {
    current[0].className = current[0].className.replace(" active", "");
  }
  document.getElementById(category + "-btn").className += " active";
  // show or hide care plans for each category
  let setCarePlanDivState = {
    showCarePlan: "block",
    hideCarePlan: "none",
  };
  document.getElementById("careplan").style.display =
    setCarePlanDivState[
      document.getElementById("carePlanToggle").dataset.state
    ];
  app.pageActions.hideAll();
  setTimeout(() => {
    setButtonNavPositionOnSetPage();
  }, 100);
}

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
  elements.updateElements(store.dispatch("setActiveRecord", { id: clientKey }));
  setPage("demographic");
}
clientListSelect.onkeyup = function (e) {
  if (e.code == "Enter") {
    let data = store.state.records[this.value];
    output.innerHTML = data.firstName + " " + data.surname;
    document.title = data.firstName + " " + data.surname;
    elements.updateElements(
      store.dispatch("setActiveRecord", { id: this.value })
    );
    app.pageActions.hideAll();
    setPage("demographic");
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
function linkPopUpPop(event) {
  removePopUpContent();
  let category = event.target.id.split("-")[0];
  let elementSchema = Elements.links[category].groupLinks;
  popUp.style.display = "block";
  elementSchema.forEach((ele) => {
    let linkDiv = document.createElement("div");
    let linkElement = document.createElement("a");
    linkDiv.classList.add("link");
    linkDiv.appendChild(linkElement);
    linkElement.innerHTML = ele[0];
    linkElement.target = "_blank";
    let linkAddy =
      ele[1].indexOf("http") >= 0
        ? ele[1]
        : window.location.href.slice(0, window.location.href.lastIndexOf("/")) +
          "/documents/" +
          ele[1];
    linkElement.href = linkAddy;
    popUpContent.appendChild(linkDiv);
  });
}
function popUpPop(event) {
  removePopUpContent();
  let elementSchema = clientRecordFieldSettings[event.target.parentNode.id];
  if (elementSchema?.notes) {
    popUp.style.display = "block";
    // needs to attach to the body otherwise will appear underneath a PopUp pop up.
    document.getElementById("body").appendChild(popUp);
    elementSchema.notes.forEach((ele) => {
      let newParagraph = document.createElement("p");
      newParagraph.innerHTML = ele;
      newParagraph.classList.add("temp");
      newParagraph.name = event.target.parentNode.id;
      if (
        elements.inputObjects[
          event.target.parentNode.id
        ].$_dataField?.value?.indexOf(ele) >= 0
      ) {
        newParagraph.style.color = "red";
      } else {
        newParagraph.style.color = "black";
      }
      newParagraph.onclick = function () {
        let result = addOrRemovePartOfElementValue(
          this.innerHTML,
          elements.inputObjects[this.name].$_dataField
        );
        this.style.color = result ? "red" : "black";
        elements.inputObjects[this.name].$_dataField.dispatchEvent(
          new Event("input")
        );
        function addOrRemovePartOfElementValue(partString, elementToChange) {
          let spacer = elementToChange.value == "" ? "" : "\n";
          let firstName =
            store.state.records[store.state.activeRecord].firstName;
          let preferredName =
            store.state.records[store.state.activeRecord].preferredName;
          firstName =
            preferredName == "" ||
            preferredName == null ||
            preferredName == undefined
              ? firstName
              : preferredName;
          let gender = store.state.records[store.state.activeRecord].gender;
          let genderId;
          let genderId2;
          let genderOwnership;
          if (!gender) {
            alert("Gender has not been specified");
            genderId = "TBA";
            genderId2 = "TBA";
            genderOwnership = "TBA";
            return false;
          } else {
            genderId = gender == "Male" ? "he" : "she";
            genderOwnership = gender == "Male" ? "his" : "her";
            genderId2 = gender == "Male" ? "him" : "her";
          }
          let personalPartString = partString.replaceAll("client", firstName);
          personalPartString = personalPartString.replaceAll(
            "Client",
            firstName
          );
          personalPartString = personalPartString.replaceAll(
            "he/she",
            genderId
          );
          personalPartString = personalPartString.replaceAll(
            "him/her",
            genderId2
          );
          personalPartString = personalPartString.replaceAll(
            "his/her",
            genderOwnership
          );
          if (elementToChange.value.indexOf(personalPartString) >= 0) {
            let stringWithoutCarriageReturn = elementToChange.value;
            if (
              elementToChange.value[
                elementToChange.value.indexOf(personalPartString) - 1
              ] == "\n"
            ) {
              stringWithoutCarriageReturn = elementToChange.value
                .slice(0, elementToChange.value.indexOf(personalPartString) - 1)
                .concat(
                  "",
                  elementToChange.value.slice(
                    elementToChange.value.indexOf(personalPartString)
                  )
                );
            }

            if (
              stringWithoutCarriageReturn.length === personalPartString.length
            ) {
              elementToChange.value = "";
            } else {
              elementToChange.value = stringWithoutCarriageReturn
                .replace(personalPartString, "")
                .trim();
            }
            return false;
          } else {
            elementToChange.value =
              elementToChange.value + spacer + personalPartString.trim();
            return true;
          }
        }
      };
      popUpContent.appendChild(newParagraph);
    });
  } else {
    popUp.style.display = "block";
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "There are no notes for this field";
    newParagraph.classList.add("temp");
    popUpContent.appendChild(newParagraph);
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
function consoleReview() {
  // Client.getClient(clientListSelect.value, function (client) {
  let client = store.state.records[store.state.activeRecord];
  let string = "";
  for (const [key, value] of Object.entries(clientRecordFieldSettings)) {
    if (value.classes) {
      if (
        value.classes.includes("review") &&
        client[key] != null &&
        client[key] != ""
      ) {
        let substring = value.label;
        let data =
          client[key].current != undefined ? client[key].current : client[key];
        string = string + "\n---- " + substring + ": ----\n" + data;
      }
    }
  }
  console.log(string);
  setTimeout(
    async () => await window.navigator.clipboard.writeText(string),
    500
  );
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
