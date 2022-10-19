class DataField {
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {
      tag: fieldSettings.tag,
      props: {
        oninput: self.dataFieldOnInput,
        classList: fieldSettings.classes,
      },
    };
    if (self.fieldSettings.type) {
      self.schema.props.type = self.fieldSettings.type;
    }
    if (self.fieldSettings.default) {
      self.schema.props.value = self.fieldSettings.default;
    }
    switch (self.fieldSettings.tag) {
      case "select":
        self.schema.props.multiple = self.fieldSettings.multiple;
        self.schema.props.size = "6";
        self.schema.children = new SelectFieldOptions(fieldSettings).schema;
        break;
      default:
        break;
    }
  }
  dataFieldOnInput = function () {
    let changeObject = {};
    if (store.state.activeRecord) {
      changeObject[this.parentNode.id] =
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
}
