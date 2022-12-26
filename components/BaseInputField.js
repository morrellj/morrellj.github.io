class BaseInputField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.variations = baseInputFieldVariations;
    self.schema = {
      $_baseInputField: {
        tag: "div",
        props: { id: self.fieldSettings.fieldName, classList: ["flex-item"] },
      },
    };
    self.schema.$_baseInputField.children = self.variations[
      self.fieldSettings?.variation
    ]?.(self.schema, self.fieldSettings) || {
      $_inputLabel: new InputLabel(self.fieldSettings).schema,
      $_dataField: new DataField(self.fieldSettings).schema,
      $_checkBox: new FollowUpCheckBox(self.fieldSettings).schema,
    };
    self.manufacture(self.schema);
  }
}
