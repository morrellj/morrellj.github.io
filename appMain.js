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
function personaliseStatement(statement) {
  let firstName = store.state.records[store.state.activeRecord].firstName;
  let preferredName =
    store.state.records[store.state.activeRecord].preferredName;
  firstName =
    preferredName == "" || preferredName == null || preferredName == undefined
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
  let personalPartString = statement.replaceAll("client", firstName);
  personalPartString = personalPartString.replaceAll("Client", firstName);
  personalPartString = personalPartString.replaceAll("he/she", genderId);
  personalPartString = personalPartString.replaceAll("him/her", genderId2);
  personalPartString = personalPartString.replaceAll(
    "his/her",
    genderOwnership
  );
  return personalPartString;
}

app.elements = new Elements(clientRecordFieldSettings);
