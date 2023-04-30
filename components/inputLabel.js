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
  contextClick = (event) => {
    if (this.fieldSettings.classes.indexOf("review") >= 0) {
      if (this.fieldSettings.classes.length > 2) {
        // return function (event) {
        event.preventDefault();
        app.pageActions.setPage(this.fieldSettings.classes[1]);
        // };
      } else {
        return null;
      }
    } else {
      return null;
    }
  };
}
