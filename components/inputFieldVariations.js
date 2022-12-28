inputFieldVariations = {
  multipleChoiceGrid(fieldSettings, elementsObject) {
    let newFields = {};
    for (const [fieldName, fieldValues] of Object.entries(
      fieldSettings.gridResponseFields
    )) {
      thisFieldSettings = {
        fieldName: fieldName,
        tag: "select",
        multiple: true,
        label: fieldValues.label,
        selectOptions: fieldSettings.subjects,
        classes: fieldSettings.classes,
      };
      newFields[fieldName] = new BaseInputField({
        fieldSettings: thisFieldSettings,
      });
    }
    return newFields;
  },
};
