class SelectFieldOptions {
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {};
    let count = 0;
    //adds hidden blank option at the start of the options list
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
    //adds an option for each select option in the field
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
