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
        }).schema,
      });
      elementsObject.events.subscribe(
        fieldSettings.fieldSetName,
        function (props) {
          let sourceValues = getSelectValues(props.source);
          if (props.source != newFields[fieldName].$_dataField) {
            removeSelectValues(newFields[fieldName].$_dataField, sourceValues);
          }
        }
      );
    }
    function getSelectValues(select) {
      var result = [];
      var options = select && select.options;
      var opt;

      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
          result.push(opt.value || opt.text);
        }
      }
      return result;
    }
    function removeSelectValues(select, values) {
      values.forEach((element) => {
        var options = select && select.options;
        var opt;

        for (var i = 0, iLen = options.length; i < iLen; i++) {
          opt = options[i];

          if (opt.value == element || opt.text == element) {
            opt.selected = false;
          }
        }
      });
      select.dispatchEvent(new Event("input"));
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
      }).schema,
    });
    return newFields;
  },
};
