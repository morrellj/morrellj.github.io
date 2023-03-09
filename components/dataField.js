class DataField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.variations = dataFieldVariations;
    self.schema = {
      $_dataField: {
        tag: self.fieldSettings.tag,
        props: {
          oninput: self.dataFieldOnInput,
          classList: [...self.fieldSettings.classes, "rootInput"],
          name: self.fieldSettings.fieldName,
          oncontextmenu: self.dataFieldOncontextmenuPopUpPop,
        },
      },
    };
    if (self.fieldSettings.type) {
      self.schema.$_dataField.props.type = self.fieldSettings.type;
    }
    if (self.fieldSettings.default) {
      self.schema.$_dataField.props.value = self.fieldSettings.default;
    }
    self.schema =
      self.variations[self.fieldSettings.tag]?.(
        self.schema,
        self.fieldSettings
      ) || self.schema;

    self.manufacture(self.schema);
  }
  dataFieldOnInput = function () {
    let changeObject = {};
    if (store.state.activeRecord) {
      changeObject[this.name] =
        this.tagName == "SELECT"
          ? app.elements.getMultiSelectValues(this)
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
