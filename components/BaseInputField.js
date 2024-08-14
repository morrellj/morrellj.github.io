class BaseInputField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.dataField = props.dataField;
    self.schema = {
      $_baseInputField: {
        tag: "div",
        props: { id: self.fieldSettings.fieldName, classList: ["flex-item"] },
        children: {
          $_inputLabel: new InputLabel(self.fieldSettings).schema,
          $_dataField: self.dataField,
          $_checkBox: new FollowUpCheckBox(self.fieldSettings).schema,
        },
      },
    };
    
    self.manufacture(self.schema);

    self.$_inputLabel.onclick = self.elementsObject.popUpPop.bind(self);

    //adds the "data-xxxx" tag to the element which will tag it as belonging to that particular
    // form.  Used in the PopUp class to create pop up forms.
    if (self.fieldSettings?.forms)
      self.fieldSettings.forms.forEach((element) => {
        self.$_baseInputField.dataset[element] = true;
      });
  }
}
