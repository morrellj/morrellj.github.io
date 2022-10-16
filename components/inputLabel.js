class InputLabel {
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {
      tag: "p",
      props: {
        onclick: popUpPop,
        oncontextmenu: this.contextClick,
        innerHTML: self.fieldSettings.label,
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
