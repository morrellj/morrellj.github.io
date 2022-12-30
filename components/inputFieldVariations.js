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
    let fieldObj = newFields[fieldSettings.fieldName];
    elementsObject.events.subscribe(`updateFieldValues`, function () {
      fieldObj.$_responses.childNodes.forEach((element) => {
        if (store.dispatch("fetch", [fieldSettings.fieldName])) {
          if (
            element.value ==
            store.dispatch("fetch", [fieldSettings.fieldName])[1]?.trim()
          ) {
            element.checked = true;
          } else {
            element.checked = false;
          }
        } else {
          element.checked = false;
        }
      });
    });
    elementsObject.events.subscribe(fieldSettings.fieldName, function (props) {
      let changeObject = {
        [`${fieldSettings.fieldName}`]: [
          fieldSettings.question[0],
          ` ${props.response}`,
        ],
      };
      store.dispatch("update", {
        id: store.state.activeRecord,
        data: changeObject,
      });
      console.log(changeObject);
    });
    return newFields;
  },
};
