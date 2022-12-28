inputFieldVariations = {
  multipleChoiceGrid(fieldSetSettings, elementsObject) {
    let newFields = {};
    for (const [fieldName, fieldValues] of Object.entries(
      fieldSetSettings.gridResponseFields
    )) {
      let fieldSettings = {
        fieldSetName: fieldSetSettings.fieldName,
        label: fieldValues.label,
        fieldName: fieldName,
        tag: "select",
        multiple: true,
        selectOptions: fieldSetSettings.selectOptions,
        classes: fieldSetSettings.classes,
      };
      newFields[fieldName] = new MultipleChoiceGridField({
        fieldSettings: fieldSettings,
        elementsObject: elementsObject,
      });
    }
    return newFields;
  },
};
