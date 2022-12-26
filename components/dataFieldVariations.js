let dataFieldVariations = {
  select(schema, fieldSettings) {
    schema.props.multiple = fieldSettings.multiple;
    schema.props.size = "6";
    schema.children = new SelectFieldOptions(fieldSettings).schema;
    return schema;
  },
};
