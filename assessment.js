console.log("HI");
let root = document.getElementById("root");
let output = document.getElementById("output");
// let clientList = document.getElementById("clientList");
let clientListSelect = document.getElementById("clientListSelect");
let client = {};
let popUp = document.getElementById("pop-up");
let popUpContent = document.getElementById("pop-up-content");
let searchBox = document.getElementById("searchBox");

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
Client.forEachClientInLocal(addNewClientSelectOption);

function clientAdd() {
  let firstNameField = document.getElementById("addClient-firstName");
  let surnameNameField = document.getElementById("addClient-surname");
  let newKey = firstNameField.value + "_" + surnameNameField.value;
  let client = new Client(newKey, {
    firstName: firstNameField.value,
    surname: surnameNameField.value,
  });
  client.save();
  addNewClientSelectOption(client);
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
function addNewClientSelectOption(client) {
  let newOption = document.createElement("option");
  newOption.value = client.key;
  newOption.innerHTML = client.firstName + " " + client.surname;
  clientListSelect.appendChild(newOption);
}

function clientSelectAction(clientKey) {
  Client.getClient(clientKey, function (data) {
    //clientListSelect.value
    output.innerHTML = data.firstName + " " + data.surname;
    document.title = data.firstName + " " + data.surname;
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
function popUpPop(event) {
  let elementSchema = Client.schema[event.target.parentNode.id];
  if (elementSchema.notes !== undefined && elementSchema.notes !== null) {
    popUp.style.display = "block";
    elementSchema.notes.forEach((ele) => {
      let newParagraph = document.createElement("p");
      newParagraph.innerHTML = ele;
      newParagraph.classList.add("temp");
      newParagraph.name = event.target.parentNode.id;
      newParagraph.onclick = function () {
        addOrRemovePartOfElementValue(this.innerHTML, elements[this.name]);
        elements[this.name].dispatchEvent(new Event("input"));
        function addOrRemovePartOfElementValue(partString, elementToChange) {
          let spacer = elementToChange.value == "" ? "" : "\n";
          let firstName = JSON.parse(
            localStorage.getItem(elementToChange.name)
          ).firstName;
          let preferredName = JSON.parse(
            localStorage.getItem(elementToChange.name)
          ).preferredName;
          firstName =
            preferredName == null || preferredName == undefined
              ? firstName
              : preferredName;
          let gender = JSON.parse(
            localStorage.getItem(elementToChange.name)
          ).gender;
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
          } else {
            elementToChange.value =
              elementToChange.value + spacer + personalPartString.trim();
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
let closeSpans = document.getElementsByClassName("close");
for (let i = 0; i < closeSpans.length; i++) {
  closeSpans[i].onclick = function () {
    this.closest(".pop-up").style.display = "none";
    let contentList = Array.from(
      this.closest(".pop-up-content").childNodes
    ).reverse();
    contentList.forEach((node) => {
      let classLS = node.classList; //== undefined || node.classList == null
      //   ? []
      //   : node.classList;
      if (classLS != "pop-up-content-header") {
        node.remove();
      }
    });
  };
}
window.onclick = function (event) {
  if (event.target.classList.contains("pop-up")) {
    event.target.style.display = "none";

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
};

function searchReduce() {
  clientListSelect.innerHTML = "";
  let searchWord = searchBox.value.toLowerCase();
  searchWord = searchWord.toLowerCase();
  Client.getAllClients(function reduce(clients) {
    for (const [key, client] of Object.entries(clients)) {
      let clientName = client.firstName + " " + client.surname;
      clientName = clientName.toLowerCase();
      if (clientName.indexOf(searchWord) >= 0) {
        addNewClientSelectOption(client);
      }
    }
  });
}

function consoleReview() {
  console.log("Five seconds to press the tab key. ");
  Client.getClient(clientListSelect.value, function (client) {
    let string = "";
    for (const [key, value] of Object.entries(Client.schema)) {
      if (value.classes.includes("review") && client[key] != null) {
        let substring = value.label;
        string = string + "\n---- " + substring + ": ----\n" + client[key];
      }
    }
    console.log(string);
    setTimeout(
      async () => await window.navigator.clipboard.writeText(string),
      5000
    );
  });
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
  fields.unshift("followUps");
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
          if (row[fieldName]) {
            let final = row[fieldName].replaceAll("\n", "#");
            thisString = final;
          } else {
            thisString = row[fieldName];
          }
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
