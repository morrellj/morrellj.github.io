let dataFieldVariations = {
  select(schema, fieldSettings) {
    schema.$_dataField.props.multiple = fieldSettings.multiple;
    schema.$_dataField.props.size = "6";
    schema.$_dataField.children = new SelectFieldOptions(fieldSettings).schema;
    return schema;
  },
};
