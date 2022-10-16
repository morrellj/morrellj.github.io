class SelectFieldOptions {
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {};
    let count = 0;
    if (!self.fieldSettings.multiple) {
      self.schema[count] = {
        tag: "option",
        props: {
          value: "",
          innerHTML: "",
          hidden: true,
          selected: "",
        },
      };
      count += 1;
    }
    self.fieldSettings.selectOptions.forEach((option) => {
      self.schema[count] = {
        tag: "option",
        props: {
          value: option,
          innerHTML: option,
        },
      };
      count += 1;
    });
  }
}
