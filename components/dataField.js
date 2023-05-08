class DataField extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.variations = dataFieldVariations;
    self.schema = {
      $_dataField: {
        tag: self.fieldSettings.tag,
        props: {
          oninput: self.dataFieldOnInput,
          classList: [...self.fieldSettings.classes, "rootInput"],
          name: self.fieldSettings.fieldName,
          // oncontextmenu: self.dataFieldOncontextmenuPopUpPop,
        },
      },
    };
    if (self.fieldSettings.type) {
      self.schema.$_dataField.props.type = self.fieldSettings.type;
    }
    if (self.fieldSettings.default) {
      self.schema.$_dataField.props.value = self.fieldSettings.default;
    }
    self.schema =
      self.variations[self.fieldSettings.tag]?.(
        self.schema,
        self.fieldSettings
      ) || self.schema;

    self.manufacture(self.schema);

    // field is not a part of a form
    if (!self.fieldSettings?.form) {
      self.elementsObject.events.subscribe(
        "updateFieldValues",
        self.elementsObject.formFieldUpdaters.nakedDataField.bind(self)
      );
      self.elementsObject.events.subscribe(
        `${self.fieldSettings.fieldName}_Change`,
        self.elementsObject.recordsUpdaters.nakedDataField.bind(self)
      );
      if (self.fieldSettings?.assessmentClear) {
        self.elementsObject.events.subscribe(
          "assessmentClear",
          self.elementsObject.recordsUpdaters.clearAssessmentData.bind(self)
        );
      }
      if (self.fieldSettings?.reviewClear) {
        self.elementsObject.events.subscribe(
          "reviewClear",
          self.elementsObject.recordsUpdaters.clearReviewData.bind(self)
        );
      }
      //field is part of a form and a standalone field as well
    } else if (self.fieldSettings?.hasOwnField) {
      //form field updater
      self.elementsObject.events.subscribe(
        "updateFieldValues",
        self.elementsObject.formFieldUpdaters.nakedDataField.bind(self)
      );
      //records updaters
      self.elementsObject.events.subscribe(
        `${self.fieldSettings.fieldName}_Change`,
        self.elementsObject.recordsUpdaters.nakedDataField.bind(self)
      );
      self.elementsObject.events.subscribe(
        `${self.fieldSettings.fieldName}_Change`,
        self.elementsObject.recordsUpdaters.consolidatedDataField.bind(self)
      );
      //form reseters
      if (self.fieldSettings?.assessmentClear) {
        self.elementsObject.events.subscribe(
          "assessmentClear",
          self.elementsObject.recordsUpdaters.clearAssessmentData.bind(self)
        );
        self.elementsObject.events.subscribe(
          "assessmentClear",
          self.elementsObject.recordsUpdaters.clearAssessmentDataConsolidated.bind(
            self
          )
        );
      }
      if (self.fieldSettings?.reviewClear) {
        self.elementsObject.events.subscribe(
          "reviewClear",
          self.elementsObject.recordsUpdaters.clearReviewData.bind(self)
        );
        self.elementsObject.events.subscribe(
          "reviewClear",
          self.elementsObject.recordsUpdaters.clearReviewDataConsolidated.bind(
            self
          )
        );
      }
      //field is only a part of a form
    } else {
      self.elementsObject.events.subscribe(
        "updateFieldValues",
        self.elementsObject.formFieldUpdaters.consolidatedDataField.bind(self)
      );
      self.elementsObject.events.subscribe(
        `${self.fieldSettings.fieldName}_Change`,
        self.elementsObject.recordsUpdaters.consolidatedDataField.bind(self)
      );
      //form resetters
      if (self.fieldSettings?.assessmentClear) {
        self.elementsObject.events.subscribe(
          "assessmentClear",
          self.elementsObject.recordsUpdaters.clearAssessmentDataConsolidated.bind(
            self
          )
        );
      }
      if (self.fieldSettings?.reviewClear) {
        self.elementsObject.events.subscribe(
          "reviewClear",
          self.elementsObject.recordsUpdaters.clearReviewDataConsolidated.bind(
            self
          )
        );
      }
    }
  }
  dataFieldOnInput = (e) => {
    let propertyName = e.target.name;
    this.elementsObject.events.publish(`${propertyName}_Change`, e);
  };
  dataFieldOncontextmenuPopUpPop = function (event) {
    if (
      store.state.records[store.state.activeRecord][this.name].constructor !=
      Object
    )
      return;
    event.preventDefault();
    removePopUpContent();
    popUp.style.display = "block";
    let paragraphDiv = document.createElement("p");
    let paragraph = Array.isArray(
      store.state.records[store.state.activeRecord][this.name].previous
    )
      ? store.state.records[store.state.activeRecord][this.name].previous.join(
          ", "
        )
      : store.state.records[store.state.activeRecord][this.name].previous;

    paragraphDiv.innerHTML = paragraph;
    popUpContent.appendChild(paragraphDiv);
  };
}
