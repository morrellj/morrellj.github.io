class SingleLikertField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.schema = {
      $_inputSet: {
        tag: "div",
        props: {},
        children: {},
      },
    };

    for (const [propertyName, questionResponse] of Object.entries(
      self.fieldSettings.propertyResponseFields
    )) {
      (self.schema.$_inputSet.children[`$_${propertyName}`] = {
        tag: "p",
        props: {
          innerHTML: questionResponse[0],
          classList: ["likertFieldLabel"],
        },
      }),
        (self.schema.$_inputSet.children[`$_${propertyName}_responses`] =
          new LikertResponseGrid({
            question: questionResponse[0],
            responses: questionResponse[1],
            propertyName: propertyName,
            elementsObject: self.elementsObject,
          }));
    }
    self.manufacture(self.schema);
  }
}
