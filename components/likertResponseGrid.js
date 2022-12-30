class LikertResponseGrid {
  constructor(props) {
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.schema = {};
    let count = 0;

    self.fieldSettings.responses.forEach((response) => {
      self.schema[`label-${count}`] = {
        tag: "label",
        props: {
          classList: ["likertLabel"],
          innerHTML: response,
        },
      };
      self.schema[`radio-${count}`] = {
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
  }
  radioOnClick = (e) => {
    this.elementsObject.events.publish(this.fieldSettings.fieldName, {
      response: e.target.value,
    });
  };
}
