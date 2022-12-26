class BaseInputField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.schema = {
      $_baseInputField: {
        tag: "div",
        props: { id: self.fieldSettings.fieldName, classList: ["flex-item"] },
        children: {
          $_inputLabel: new InputLabel(self.fieldSettings).schema,
          $_dataField: new DataField(self.fieldSettings).schema,
          $_checkBox: new FollowUpCheckBox(self.fieldSettings).schema,
        },
      },
    };
    self.manufacture(self.schema);
  }
}
