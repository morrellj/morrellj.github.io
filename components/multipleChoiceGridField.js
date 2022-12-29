class MultipleChoiceGridField extends DataField {
  constructor(props) {
    super(props);
    let self = this;
    self.schema.props.onclick = function () {
      self.elementsObject.events.publish(self.fieldSettings.fieldSetName, {
        source: this,
      });
    };
  }
}
