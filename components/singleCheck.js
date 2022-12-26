class SingleCheck {
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {
      tag: "div",
      props: {
        //oninput: self.dataFieldOnInput,
        classList: [...fieldSettings.classes, "inputFieldDiv"],
        name: fieldSettings.fieldName,
        //oncontextmenu: self.dataFieldOncontextmenuPopUpPop,
      },
      children: {
        $_checkQuestion: {
          tag: "label",
          props: { innerHTML: "Full ADL assessment required?" },
        },
        $_checkResponse: {
          tag: "input",
          props: { type: "checkbox", classList: ["singleCheckCheckBox"] },
        },
      },
    };
  }
}
