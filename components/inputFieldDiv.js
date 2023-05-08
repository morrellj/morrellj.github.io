class InputFieldDiv extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.schema = {
      $_inputFieldDiv: {
        tag: "div",
        props: { classList: [...self.fieldSettings.classes, "inputFieldDiv"] },
        children: {
          $_inputSet: props.inputSet,
        },
      },
    };
    self.manufacture(self.schema);
    self.elementsObject.events.subscribe(
      "updateFieldValues",
      self.elementsObject.formFieldUpdaters.nakedDataField.bind(self)
    );
  }
}
