class LikertResponseGrid extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.question = props.question;
    self.responses = props.responses;
    self.fieldSettings = props.fieldSettings;
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

    // insert if props.fieldSettings.consilidateRecords = true
    // save the data in a storage property that has multiple properties pertaining to the form
    //

    self.elementsObject.events.subscribe(
      `updateFieldValues`,
      self.elementsObject.formFieldUpdaters.nakedLikertResponseGrid.bind(self)
    );
    if (self.fieldSettings?.assessmentClear) {
      self.elementsObject.events.subscribe(
        "assessmentClear",
        self.elementsObject.recordsUpdaters.clearNakedLikertResponseField.bind(
          self
        )
      );
    }
    self.elementsObject.events.subscribe(
      `${self.propertyName}_change`,
      self.elementsObject.recordsUpdaters.nakedLikertResponseGrid.bind(self)
    );
  }

  radioOnClick = (e) => {
    let propertyName = e.target.name;
    let result = !this.elementsObject.events.publish(`${propertyName}_change`, {
      response: e.target.value,
    });
  };
}
// i l0ve y0u you crazy son of an accountant
