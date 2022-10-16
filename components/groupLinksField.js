class GroupLinksField extends Builder {
  /**
   *
   * @param {object} {fieldSettings:{fieldName:{string},}}
   *
   */
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.fieldSettings.classes = [props.fieldSettings.fieldName];
    self.schema = {
      $_linksField: {
        tag: "div",
        props: {
          id: self.fieldSettings.fieldName + "-groupLinkDiv",
          classList: ["flex-item", "link"],
        },
        children: {
          // linksLabel needed for addSpecifiedElementsToTargetDiv() to work at switch
          //default as it is node[0]
          $_linksLabel: { tag: "p", props: {} },
          $_linksField: {
            tag: "a",
            props: {
              id: `${self.fieldSettings.fieldName}-groupLink`,
              classList: [self.fieldSettings.fieldName, "link-link"],
              onclick: linkPopUpPop,
              innerHTML: "Click for more links...",
              href: "#",
            },
          },
          // $_checkBox: new FollowUpCheckBox(self.fieldSettings).schema,
        },
      },
    };

    self.manufacture(self.schema);
  }
}
