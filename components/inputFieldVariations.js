inputFieldVariations = {
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
  form(fieldSettings, elementsObject) {
    let formFields = {};
    for (const [name, data] of Object.entries(fieldSettings.formFields)) {
      if (data?.hasOwnField) {
        elementsObject.additionalRecordFields[`${name}`] = data;
      }
      data.form = fieldSettings.fieldName;
      data.classes = data?.classes
        ? [...data.classes, fieldSettings.fieldName]
        : [fieldSettings.fieldName];
      Object.assign(formFields, elementsObject.elementsBuilder(name, data));
    }

    let formLinkField = new BaseInputField({
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
              "form-link",
            ],
            innerHTML: "FORM",
          },
        },
      }),
    });
    formLinkField.dataField.$_inputSet.onclick = () => {
      return app.pageActions.setPage(fieldSettings.fieldName, {
        showCarePlan: true,
      });
    };
    formFields[fieldSettings.fieldName] = formLinkField;
    formLinkField.$_inputLabel.oncontextmenu = (e) => {
      e.preventDefault();
      let string = "";
      let fieldName = e.target.parentElement.id;
      let data = store.dispatch("fetchGrossData", fieldName);
      string = formatConsolidatedField(fieldName, data);
      console.log(string);
      setTimeout(async () => {
        await window.navigator.clipboard.writeText(string);
        alert("Text copied to clip board");
      }, 500);
    };
    return formFields;
  },
};
