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
      newFields[fieldName] = new BaseInputField({
        fieldSettings: fieldSettings,
        elementsObject: elementsObject,
        dataField: new MultipleChoiceGridField({
          fieldSettings: fieldSettings,
          elementsObject: elementsObject,
        }),
      });
    }
    return newFields;
  },
  singleLikertField(fieldSettings, elementsObject) {
    let newFields = {};
    newFields[fieldSettings.fieldName] = new BaseInputField({
      fieldSettings: fieldSettings,
      elementsObject: elementsObject,
      dataField: new SingleLikertField({
        fieldSettings: fieldSettings,
        elementsObject: elementsObject,
      }),
    });
    return newFields;
  },
};
