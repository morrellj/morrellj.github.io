class LikertResponseGrid extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.schema = {
      $_likertResponseGrid: {
        tag: "form",
        props: { classList: ["likertGrid"] },
        children: {},
      },
    };
    let count = 0;

    self.fieldSettings.responses.forEach((response) => {
      self.schema.$_likertResponseGrid.children[`label-${count}`] = {
        tag: "label",
        props: {
          classList: ["likertLabel"],
          innerHTML: response,
        },
      };
      self.schema.$_likertResponseGrid.children[`radio-${count}`] = {
        tag: "input",
        props: {
          id: `${self.fieldSettings.fieldName}-radio-${count}`,
          classList: ["likertRadio"],
          name: self.fieldSettings.fieldName,
          type: "radio",
          value: response,
          onclick: this.radioOnClick,
        },
      };
      count += 1;
    });

    self.manufacture(self.schema);

    self.elementsObject.events.subscribe(`updateFieldValues`, function () {
      let thisFieldName = self.fieldSettings.fieldName;
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
    self.elementsObject.events.subscribe(
      self.fieldSettings.fieldName,
      function (props) {
        let changeObject = {
          [`${self.fieldSettings.fieldName}`]: [
            self.fieldSettings.question[0],
            ` ${props.response}`,
          ],
        };
        store.dispatch("update", {
          id: store.state.activeRecord,
          data: changeObject,
        });
      }
    );
  }

  radioOnClick = (e) => {
    let fieldName = e.target.id.split("-")[0];
    this.elementsObject.events.publish(fieldName, {
      response: e.target.value,
    });
  };
}
// i l0ve y0u you crazy son of an accountant
