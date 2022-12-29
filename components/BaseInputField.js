class BaseInputField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.dataField = props.dataField;
    self.schema = {
      $_baseInputField: {
        tag: "div",
        props: { id: self.fieldSettings.fieldName, classList: ["flex-item"] },
        children: {
          $_inputLabel: new InputLabel(self.fieldSettings).schema,
          $_dataField: self.dataField,
          $_checkBox: new FollowUpCheckBox(self.fieldSettings).schema,
        },
      },
    };
    self.manufacture(self.schema);
  }
}
