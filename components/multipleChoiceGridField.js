class MultipleChoiceGridField extends DataField {
  constructor(props) {
    super(props);
    let self = this;
    self.$_dataField.onclick = function () {
      self.elementsObject.events.publish(self.fieldSettings.fieldSetName, {
        source: this,
      });
    };
    self.elementsObject.events.subscribe(
      self.fieldSettings.fieldSetName,
      function (props) {
        let sourceValues = self.getSelectValues(props.source);
        if (props.source != self.$_dataField) {
          self.removeSelectValues(self.$_dataField, sourceValues);
        }
      }
    );
  }
  getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;

    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  }
  removeSelectValues(select, values) {
    values.forEach((element) => {
      var options = select && select.options;
      var opt;

      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.value == element || opt.text == element) {
          opt.selected = false;
        }
      }
    });
    select.dispatchEvent(new Event("input"));
  }
}
