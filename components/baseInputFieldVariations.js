baseInputFieldVariations = {
  singleCheck(schema, fieldSettings) {
    let singleCheck = {
      $_inputLabel: new InputLabel(fieldSettings).schema,
      $_dataField: new DataField(fieldSettings).schema,
      $_inputField: new SingleCheck(fieldSettings).schema,
      $_checkBox: new FollowUpCheckBox(fieldSettings).schema,
    };
    singleCheck.$_dataField.props.hidden = true;
    return singleCheck;
  },
};
