class LoneLinksField extends Builder {
  /**
   *
   * @param {object} {fieldSettings:{fieldName:{string},link:{array}}}
   *
   */
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.fieldSettings.classes = ["link-checkbox"];
    self.schema = {
      $_linksField: {
        tag: "div",
        props: {
          id: self.fieldSettings.fieldName,
          classList: ["flex-item", "link"],
        },
        children: {
          // linksLabel needed for addSpecifiedElementsToTargetDiv() to work at switch
          //default as it is node[0]
          $_linksLabel: { tag: "p", props: {} },
          $_linksField: new Link(self.fieldSettings).schema,
          $_checkBox: new FollowUpCheckBox(self.fieldSettings).schema,
        },
      },
    };

    self.manufacture(self.schema);
  }
}
