class LikertResponseGrid extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.fieldName =
      self.fieldSettings.fieldName + "_" + self.fieldSettings.questionIndex;
    self.schema = {
      $_likertResponseGrid: {
        tag: "form",
        props: { classList: ["likertGrid"] },
        children: {},
      },
    };
    let count = 0;

    self.fieldSettings.responses.forEach((response) => {
      self.schema.$_likertResponseGrid.children[`label_${count}`] = {
        tag: "label",
        props: {
          classList: ["likertLabel"],
          innerHTML: response,
        },
      };
      self.schema.$_likertResponseGrid.children[`radio_${count}`] = {
        tag: "input",
        props: {
          id: `${self.fieldName}_radio_${count}`,
          classList: ["likertRadio"],
          name: self.fieldName,
          type: "radio",
          value: response,
          onclick: this.radioOnClick,
        },
      };
      count += 1;
    });

    self.manufacture(self.schema);

    self.elementsObject.events.subscribe(`updateFieldValues`, function () {
      let thisFieldName = self.fieldName;
      self.element.childNodes.forEach((element) => {
        if (store.dispatch("fetch", [thisFieldName])) {
          if (
            element.value == store.dispatch("fetch", [thisFieldName])[1]?.trim()
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
    self.elementsObject.events.subscribe("assessmentClear", function () {
      self.element.childNodes.forEach((element) => {
        element.checked = false;
      });
      let changeObject = {
        [`${self.fieldName}`]: "",
      };
      store.dispatch("update", {
        id: store.state.activeRecord,
        data: changeObject,
      });
    });
    self.elementsObject.events.subscribe(
      `${self.fieldName}_change`,
      function (props) {
        let changeObject = {
          [`${self.fieldName}`]: [
            self.fieldSettings.questionResponseFields[
              self.fieldSettings.questionIndex
            ][0],
            ` ${props.response}`,
          ],
        };
        return store.dispatch("update", {
          id: store.state.activeRecord,
          data: changeObject,
        });
      }
    );
  }

  radioOnClick = (e) => {
    let fieldName = e.target.name;
    let result = !this.elementsObject.events.publish(`${fieldName}_change`, {
      response: e.target.value,
    });
    // if (!result) {
    //   e.target.checked = false;
    // }
  };
}
// i l0ve y0u you crazy son of an accountant
