class SingleLikertField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.schema = {
      $_singleLikertField: {
        tag: "div",
        props: { classList: [...self.fieldSettings.classes, "inputFieldDiv"] },
        children: {
          $_inputSet: {
            tag: "div",
            props: {},
            children: {
              $_question: {
                tag: "p",
                props: { innerHTML: self.fieldSettings.question },
              },
              $_responses: new LikertResponseGrid({
                fieldSettings: self.fieldSettings,
                elementsObject: self.elementsObject,
              }),
            },
          },
        },
      },
    };
    self.manufacture(self.schema);
  }
}
