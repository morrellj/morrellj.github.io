class SingleLikertField {
  constructor(props) {
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.schema = {
      tag: "div",
      props: { classList: [...self.fieldSettings.classes, "inputFieldDiv"] },
      children: {
        $_inputSet: {
          tag: "div",
          props: {},
          children: {
            $_question: {
              tag: "p",
              props: { innerHTML: self.fieldSettings.question },
            },
            $_responses: {
              tag: "p",
              props: { innerHTML: "this is the response" },
            },
          },
        },
        $_hiddenDataField: {
          tag: "textarea",
          props: {
            oninput: self.dataFieldOnInput,
            classList: ["hiddenDataField"],
            name: self.fieldSettings.fieldName,
            oncontextmenu: self.dataFieldOncontextmenuPopUpPop,
          },
        },
      },
    };
  }
  dataFieldOnInput = function () {
    let changeObject = {};
    if (store.state.activeRecord) {
      changeObject[this.name] =
        this.tagName == "SELECT"
          ? elements.getMultiSelectValues(this)
          : this.value;
      store.dispatch("update", {
        id: store.state.activeRecord,
        data: changeObject,
      });
    } else {
      alert("Select a client");
    }
  };
  dataFieldOncontextmenuPopUpPop = function (event) {
    if (
      store.state.records[store.state.activeRecord][this.name].constructor !=
      Object
    )
      return;
    event.preventDefault();
    removePopUpContent();
    popUp.style.display = "block";
    let paragraphDiv = document.createElement("p");
    let paragraph = Array.isArray(
      store.state.records[store.state.activeRecord][this.name].previous
    )
      ? store.state.records[store.state.activeRecord][this.name].previous.join(
          ", "
        )
      : store.state.records[store.state.activeRecord][this.name].previous;

    paragraphDiv.innerHTML = paragraph;
    popUpContent.appendChild(paragraphDiv);
  };
}
