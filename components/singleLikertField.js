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
    let count = 0;
    self.fieldSettings.questionResponseFields.forEach((field) => {
      (self.schema.$_inputSet.children[`$_question-${count}`] = {
        tag: "p",
        props: { innerHTML: field[0], classList: ["likertFieldLabel"] },
      }),
        (self.schema.$_inputSet.children[`$_responses-${count}`] =
          new LikertResponseGrid({
            fieldSettings: Object.assign(
              { responses: field[1], questionIndex: count },
              self.fieldSettings
            ),
            elementsObject: self.elementsObject,
          })),
        (count += 1);
    });
    self.manufacture(self.schema);
  }
}
