const app = {
  appName: "Grove Assessment Light",
  file: {
    handle: null,
    name: null,
    isModified: false,
  },
  settings: {},
  hasFSAccess:
    "chooseFileSystemEntries" in window || "showOpenFilePicker" in window,
  // isMac: navigator.userAgent.includes('Mac OS X'),
  elements: null,
};

/**
 * Attempts to close the window
 */

app.quitApp = () => {
  if (!app.confirmDiscard()) {
    return;
  }
  window.close();
};
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
        app.elements.inputObjects[
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
          app.elements.inputObjects[this.name].$_dataField
        );
        this.style.color = result ? "red" : "black";
        app.elements.inputObjects[this.name].$_dataField.dispatchEvent(
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

app.elements = new Elements(clientRecordFieldSettings);
