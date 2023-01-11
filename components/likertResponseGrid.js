class LikertResponseGrid extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.question = props.question;
    self.responses = props.responses;
    self.propertyName = props.propertyName;
    self.elementsObject = props.elementsObject;

    self.schema = {
      $_likertResponseGrid: {
        tag: "form",
        props: { classList: ["likertGrid"] },
        children: {},
      },
    };
    let count = 0;

    self.responses.forEach((response) => {
      self.schema.$_likertResponseGrid.children[
        `$_${self.propertyName}Label_${count}`
      ] = {
        tag: "label",
        props: {
          classList: ["likertLabel"],
          innerHTML: response,
        },
      };
      self.schema.$_likertResponseGrid.children[
        `$_${self.propertyName}Radio_${count}`
      ] = {
        tag: "input",
        props: {
          id: `${self.propertyName}_radio_${count}`,
          classList: ["likertRadio"],
          name: self.propertyName,
          type: "radio",
          value: response,
          onclick: this.radioOnClick,
        },
      };
      count += 1;
    });

    self.manufacture(self.schema);

    self.elementsObject.events.subscribe(`updateFieldValues`, function () {
      let thisPropertyName = self.propertyName;
      self.element.childNodes.forEach((element) => {
        if (store.dispatch("fetch", [thisPropertyName])) {
          if (
            element.value ==
            store.dispatch("fetch", [thisPropertyName])[1]?.trim()
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
        [`${self.propertyName}`]: "",
      };
      store.dispatch("update", {
        id: store.state.activeRecord,
        data: changeObject,
      });
    });
    self.elementsObject.events.subscribe(
      `${self.propertyName}_change`,
      function (props) {
        let changeObject = {
          [`${self.propertyName}`]: [`${self.question} `, ` ${props.response}`],
        };
        return store.dispatch("update", {
          id: store.state.activeRecord,
          data: changeObject,
        });
      }
    );
  }

  radioOnClick = (e) => {
    let propertyName = e.target.name;
    let result = !this.elementsObject.events.publish(`${propertyName}_change`, {
      response: e.target.value,
    });
    // if (!result) {
    //   e.target.checked = false;
    // }
  };
}
// i l0ve y0u you crazy son of an accountant
