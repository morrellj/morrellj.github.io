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
  multiLikertField(fieldSettings, elementsObject) {
    let newFields = {};
    // fieldSettings.classes.push("popUpInputFieldDiv");
    let popUpLinkField = new BaseInputField({
      fieldSettings: fieldSettings,
      elementsObject: elementsObject,
      dataField: new InputFieldDiv({
        fieldSettings: fieldSettings,
        elementsObject: elementsObject,
        inputSet: {
          tag: "p",
          props: {
            classList: [
              fieldSettings.fieldName,
              ...fieldSettings.classes,
              "pop-up-form-link",
            ],
            innerHTML: fieldSettings.label,
          },
        },
      }),
    });
    let popUp = new PopUp({
      fieldSettings: fieldSettings,
      elementsObject: elementsObject,
      dataField: new InputFieldDiv({
        fieldSettings: Object.assign(fieldSettings, {
          classes: [...fieldSettings.classes, "popUpInputFieldDiv"],
        }),
        elementsObject: elementsObject,
        inputSet: new SingleLikertField({
          fieldSettings: fieldSettings,
          elementsObject: elementsObject,
        }),
      }),
    });
    popUpLinkField.$_popUp = popUp;
    popUpLinkField.dataField.$_inputSet.onclick = popUp.activatePopUp(
      document.getElementById("body")
    );
    newFields[fieldSettings.fieldName] = popUpLinkField;
    return newFields;
  },
  singleLikertField(fieldSettings, elementsObject) {
    let newFields = {};
    newFields[fieldSettings.fieldName] = new BaseInputField({
      fieldSettings: fieldSettings,
      elementsObject: elementsObject,
      dataField: new InputFieldDiv({
        fieldSettings: fieldSettings,
        elementsObject: elementsObject,
        inputSet: new SingleLikertField({
          fieldSettings: fieldSettings,
          elementsObject: elementsObject,
        }),
      }),
    });
    return newFields;
  },
};
