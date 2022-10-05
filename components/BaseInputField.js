class BaseInputField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.template = {
      $_inputDiv: {
        tag: "div",
        props: { id: self.fieldSettings.fieldName, classList: ["flex-item"] },
        children: {
          $_inputLabel: {
            tag: "p",
            props: {
              onclick: popUpPop,
              oncontextmenu: this.contextClick,
              innerHTML: self.fieldSettings.label,
            },
          },
          [`$_${self.fieldSettings.fieldName}`]: {},
        },
      },
    };
  }
  contextClick = () => {
    if (self.fieldSettings.classes.indexOf("review") >= 0) {
      if (self.fieldSettings.classes.length > 2) {
        return function (event) {
          event.preventDefault();
          setPage(self.fieldSettings.classes[1]);
        };
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
}
