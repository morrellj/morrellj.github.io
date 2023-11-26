class Elements {
  constructor(schema) {
    this.inputElementsArray = [];
    this.inputObjects = {};
    this.variations = inputFieldVariations;
    this.additionalRecordFields = {};
    this.events = new PubSub();
    this.elementsBuilder = (inputField, value) => {
      let fieldSettings = Object.assign({ fieldName: inputField }, value);
      let newFields = {};
      if (value?.variation) {
        Object.assign(
          newFields,
          this.variations[value?.variation]?.(fieldSettings, this) || {}
        );
      } else {
        newFields[inputField] = new BaseInputField({
          fieldSettings: fieldSettings,
          elementsObject: this,
          dataField: new DataField({
            fieldSettings: fieldSettings,
            elementsObject: this,
          }),
        });
      }
      return newFields;
    };
    this.addElements = (newFields) => {
      for (const newField of Object.values(newFields)) {
        this.inputElementsArray.push(newField.element);
      }
      Object.assign(this.inputObjects, newFields);
    };
    //create data field properties
    for (const [inputField, value] of Object.entries(schema)) {
      let newFields = this.elementsBuilder(inputField, value);
      this.addElements(newFields);
    }
    //Create links elements
    for (const [linkField, value] of Object.entries(Elements.links)) {
      //iterate lone links
      if (value.loneLinks) {
        value.loneLinks.forEach((link) => {
          this.inputElementsArray.push(
            new LoneLinksField({
              fieldSettings: { fieldName: linkField, link: link },
            }).element
          );
        });
      }
      if (value.groupLinks) {
        this.inputElementsArray.push(
          new GroupLinksField({ fieldSettings: { fieldName: linkField } })
            .element
        );
      }
    }
    Object.assign(schema, this.additionalRecordFields);
  }
  static links = {
    falls: {
      loneLinks: [
        [
          "FRAT",
          "https://southerncrosscarewa.sharepoint.com/formsanddocuments/SFG0101/Forms/AllItems.aspx?id=%2Fformsanddocuments%2FSFG0101%2FFalls%20Risk%20Assessment%20Tool%20FRAT%2Epdf&parent=%2Fformsanddocuments%2FSFG0101",
        ],
      ],
      groupLinks: [["Shoe Safety Checklist","https://www.injurymatters.org.au/wp-content/uploads/2021/05/SOYF-Shoe-Safety-Checklist-A4-v3-HIGHRES.pdf"],[
        "Medications that increase falls risk","https://www.unmc.edu/patient-safety/_documents/meds-with-fall-risk-brand-generic-table-2013.pdf"
      ]]
    },
    pain: {
      loneLinks: [
        [
          "Functional pain scale",
          "https://www.caltcm.org/assets/Pain-file/functional%20pain%20scale%20u%20of%20iowa_2001.pdf",
        ],
        ["Abbey Pain Scale", "https://southerncrosscarewa.sharepoint.com/:w:/r/formsanddocuments/_layouts/15/Doc.aspx?sourcedoc=%7BB7D8CCA6-5C76-4219-8FD6-258FC56AFC0F%7D&file=RC%20-%20Abbey%20Pain%20Scale.DOCX&action=default&mobileredirect=true&DefaultItemOpen=1"]
      ],
    },
    psychological: {
      loneLinks: [
        ["PAS", "PAS.pdf"],
        [
          "Beyond Blue anxiety and depression checklist.",
          "https://www.beyondblue.org.au/the-facts/anxiety-and-depression-checklist-k10",
        ],
      ],
      groupLinks: [
        [
          "Dementia communication guidelines (PDF)",
          "Helpsheet-Communication_english.pdf",
        ],
        [
          "DBMAS resources",
          "https://www.dementia.com.au/resource-hub?audience=healthcare-provider&topic=general",
        ],
        [
          "Dementia Australia resources",
          "https://www.dementia.org.au/resources/help-sheets",
        ],
        ["Life history booklet", "AWA-Life-Story-Template-Draft-3-003.pdf"],
      ],
    },
    medical: {
      groupLinks: [
        ["Non-Motor Symptoms in Parkinsons", "https://www.movementdisorders.org/MDS-Files1/Education/Rating-Scales/NMSQ.pdf"],
        ["COPD-Action-Plan", "COPD-Action-Plan.pdf"],
        [
          "Reducing ICS in Asthma sufferers",
          "https://www.nps.org.au/australian-prescriber/articles/how-to-step-down-asthma-preventer-treatment-in-patients-with-well-controlled-asthma-more-is-not-always-better?_cldee=Ddcru9bIlyGXhWQ3KHRJmjboRyw4eYs-8S3pd1VCuBndHPMd5VlZ1IEf1xfPpaWa&recipientid=contact-4f0fee49810cec1194ca0050568a45a5-39e351ab1fca4c5ab725bdc2887ae41b&utm_source=ClickDimensions&utm_medium=email&utm_campaign=Australian%20Prescriber%20August%202022&esid=b25db8bb-8808-ed11-94d4-000d3ad1b576",
        ],
      ],
    },
    biometrics: {
      groupLinks: [
        [
          "Nurse Labs head to toe guidlines",
          "https://nurseslabs.com/head-to-toe-assessment-complete-physical-assessment-guide/",
        ],
        [
          "Nursing Ax - Royal Childrens Hospital Melbourne",
          "https://www.rch.org.au/rchcpg/hospital_clinical_guideline_index/Nursing_assessment/#Neurological",
        ],
        ["Head to toe assessment form PDF", "H2Tassessment.pdf"],
      ],
    },
    skin: {
      loneLinks: [
        ["Skin tear guidelines", "istap-skin-tears-aged-skin.pdf"],
        [
          "Braden scale",
          "RC - Braden Scale - Predicting Pressure Sore Risk.DOCX",
        ],
        ["Pressure injury guidelines", "ACSQHC_factsheet_pressureinjury.pdf"],
        [
          "Dressings in PI prevention",
          "Dressing_for_PI_Prevention_Algorithm.pdf",
        ],
      ],
    },
    communicationSensory: {
      loneLinks: [
        ["Whisper test.", "whisper-test.png"],
        [
          "Dementia communication guidelines",
          "Helpsheet-Communication_english.pdf",
        ],
      ],
    },
    carePlan: {
      loneLinks: [
        ["Nurseslabs care plans", "https://nurseslabs.com/nursing-care-plans/"],
      ],
    },
    medication: {
      groupLinks: [
        [
          "Dementia and anticholinergic medications (PDF)",
          "https://www.dementia.org.au/sites/default/files/helpsheets/Helpsheet-DementiaQandA24_AnticholinergicDrugs_english.pdf",
        ],
        [
          "Home Medication Review - Health Direct",
          "https://www.healthdirect.gov.au/home-medicines-review",
        ],
      ],
    },
    environment: {
      loneLinks: [
        ["Falls Home assessment tool", "Falls-HomeAssessmentTool.pdf"],
      ],
    },
    nutrition: {
      groupLinks: [
        [
          "Eating Assessment Tool (EAT-10)",
          "https://www.nestlehealthscience.com/health-management/gastro-intestinal/dysphagia/eat-10",
        ],
        [
          "SP Oral Health Assessment",
          "https://southerncrosscarewa.sharepoint.com/:w:/r/formsanddocuments/_layouts/15/Doc.aspx?sourcedoc=%7B6638488F-4C41-40DE-B45F-918D16FD5330%7D&file=RC%20-%20Oral%20Assessment.DOCX&action=default&mobileredirect=true&DefaultItemOpen=1",
        ],
        ["Aged Care Quality food and dinning preferences.",
          "https://www.agedcarequality.gov.au/sites/default/files/media/c-food_and_dining_preferences_sheet.pdf"
        ],[
          "SP nutrition hydration assessment",
          "https://southerncrosscarewa.sharepoint.com/:w:/r/formsanddocuments/_layouts/15/Doc.aspx?sourcedoc=%7B405E8775-2E20-49D9-99D3-6D9740C39D9A%7D&file=RC%20-%20Nutrition%20and%20Hydration%20Assessment.DOCX&action=default&mobileredirect=true&DefaultItemOpen=1"
        ]
      ],
    },
    personalCare: {
      loneLinks: [
        [
          "Functional Assessment and ADL Preferences",
          "https://forms.office.com/Pages/ResponsePage.aspx?id=1Kl9eju510eSzvcYs1m1SiSSDYhZXZVCvftee-LgCW5UNVNCUFRGSEhCVFM5RzVaSTQ1TzlPRDE1UC4u",
        ],
      ],
    },
    carer: {
      loneLinks: [["Care Giver Strain Index", "Caregiver Strain Index.pdf"]],
    },
    social: {
      groupLinks: [
        [
          "Social isolation nursing assessment and plan",
          "https://www.nursetogether.com/social-isolation-nursing-diagnosis-care-plan/",
        ],
      ],
    },
    eliminaton: {
      groupLinks: [
        [
          "Bowel Care Guidelines",
          "https://www.kemh.health.wa.gov.au/~/media/HSPs/NMHS/Hospitals/WNHS/Documents/Clinical-guidelines/Obs-Gyn-Guidelines/Bowel-Care.pdf?thn=0",
        ],
      ],
    },
  };
}
Elements.prototype.updateElements = function (data) {
  this.events.publish("updateFieldValues");
};
Elements.prototype.setMultiSelectValues = function (element, clientData) {
  var options = element.options;
  let fieldName = element.parentNode.id;
  var opt;
  for (var i = 0, iLen = options.length; i < iLen; i++) {
    options[i].selected = false;
  }
  let fieldValue =
    clientData?.constructor === Object ? clientData.current : clientData;
  if (Array.isArray(fieldValue)) {
    fieldValue.map((value) => {
      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];
        if (opt.value == value) {
          opt.selected = true;
        }
      }
    });
  } else if (typeof fieldValue === "string") {
    for (var i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];
      if (opt.value == fieldValue) {
        opt.selected = true;
      }
    }
  }
};
Elements.prototype.getMultiSelectValues = function (select) {
  var result = [];
  var options = select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
};
Elements.prototype.addSpecifiedElementsToTargetDiv = function (
  category,
  targetDiv
) {
  let count = 0;

  let assessmentRoot = subRootDiv("assessment", ["root"]);
  let carePlanRoot = subRootDiv("careplan", ["root"]);
  let clinicalRoot = subRootDiv("clinical", ["root"]);
  let carePlanDiv = subRootDiv("careplan-1", ["input-container"]);
  let clinicalDiv = subRootDiv("clinical-1", ["input-container"]);
  let assessmentDiv = subRootDiv("assessment-1", ["input-container"]);

  let subRootCollection = [carePlanRoot, assessmentRoot, clinicalRoot];
  subRootCollection.forEach((div) => {
    targetDiv.appendChild(div);
  });
  let inputContainerCollection = [assessmentDiv, carePlanDiv, clinicalDiv];
  inputContainerCollection.forEach((div) => {
    let id = div.id.slice(0, -2);
    document.getElementById(id).appendChild(div);
  });
  let carePlanToggle = document.getElementById("carePlanToggle");
  carePlanToggle.classList.toggle("hidden", true);
  this.inputElementsArray.forEach(function (element) {
    switch (category) {
      case "followUp":
        if (
          element.lastChild.checked == true ||
          element.childNodes[1].classList.contains(category)
        ) {
          assessmentDiv.appendChild(element);
          if (divFull(assessmentDiv)) {
            assessmentDiv = getNextDiv(assessmentDiv);
          }
        }
        break;
      case "review":
        if (element.childNodes[1].classList.contains(category)) {
          assessmentDiv.appendChild(element);
          if (divFull(assessmentDiv)) {
            assessmentDiv = getNextDiv(assessmentDiv);
          }
        }
        break;
      case "carePlan":
        if (element.childNodes[1].classList.contains(category)) {
          assessmentDiv.appendChild(element);
          if (divFull(assessmentDiv)) {
            assessmentDiv = getNextDiv(assessmentDiv);
          }
        }
        break;
      default:
        let classList = element.childNodes[1].classList;
        if (classList.contains(category)) {
          if (classList.contains("carePlan") || classList.contains("review")) {
            carePlanToggle.classList.toggle("hidden", false);
            carePlanDiv.appendChild(element);
            if (divFull(carePlanDiv)) {
              carePlanDiv = getNextDiv(carePlanDiv);
            }
          } else if (classList.contains("clinical")) {
            clinicalDiv.appendChild(element);
            if (divFull(clinicalDiv)) {
              clinicalDiv = getNextDiv(clinicalDiv);
            }
          } else {
            assessmentDiv.appendChild(element);
            if (divFull(assessmentDiv)) {
              assessmentDiv = getNextDiv(assessmentDiv);
            }
          }
        }
        break;
    }
  });
  inputContainerCollection = [assessmentDiv, carePlanDiv, clinicalDiv];
  inputContainerCollection.forEach((div) => {
    while (!divFull(div)) {
      topUpDiv(div);
    }
  });

  function subRootDiv(id, classList = []) {
    let tempDiv = document.createElement("div");
    tempDiv.id = id;
    classList.forEach((ele) => {
      tempDiv.classList.add(ele);
    });
    return tempDiv;
  }
  function divFull(div) {
    return div.children.length > 2 ? true : false;
  }
  function getNextDiv(div) {
    let lastCharacters = parseInt(div.id.slice(-2));
    lastCharacters =
      lastCharacters < 0
        ? parseInt(div.id.slice(-1))
        : parseInt(div.id.slice(-2));
    let count = lastCharacters + 1;
    let divId = div.id;
    let baseIdString = divId.slice(0, divId.indexOf("-"));
    let newDiv = subRootDiv(baseIdString + "-" + count, ["input-container"]);
    document.getElementById(baseIdString).appendChild(newDiv);
    return newDiv;
  }
  function topUpDiv(div) {
    let newBlank = blankDiv();
    div.appendChild(newBlank);
  }
  function blankDiv() {
    let thisBlank = document.createElement("div");
    thisBlank.classList.add("flex-item");
    thisBlank.classList.add("blank-fill");
    return thisBlank;
  }
};
Elements.prototype.clearAndBackUpReviewFields = function () {
  if (!store.state.activeRecord) {
    alert("No client selected.");
    return false;
  }
  if (
    !confirm(
      `Are you sure to remove review data from ${store.dispatch(
        "fetchCurrentValue",
        "firstName"
      )}'s record?`
    )
  )
    return;
  this.events.publish("reviewClear", {});
  this.updateElements(store.state.records[store.state.activeRecord]);
};
Elements.prototype.clearAndBackUpAssessmentFields = function () {
  if (!store.state.activeRecord) {
    alert("No client selected.");
    return false;
  }
  if (
    !confirm(
      `Are you sure to remove assessment data from ${store.dispatch(
        "fetchCurrentValue",
        "firstName"
      )}'s record?`
    )
  )
    return;
  this.events.publish("assessmentClear", {});
  this.updateElements(store.state.records[store.state.activeRecord]);
};
Elements.prototype.formFieldUpdaters = {
  nakedDataField: function () {
    let fieldRecordData = store.dispatch(
      "fetchGrossData",
      this.fieldSettings.fieldName
    );
    let inputObject =
      this.elementsObject.inputObjects[this.fieldSettings.fieldName];
    inputObject.$_inputLabel.title =
      fieldRecordData?.constructor === Object
        ? fieldRecordData.previous
        : fieldRecordData;
    let dataField = this.$_dataField || this.$_inputFieldDiv;
    if (dataField.tagName == "SELECT" && dataField.multiple == true) {
      this.elementsObject.setMultiSelectValues(dataField, fieldRecordData);
    } else {
      dataField.value =
        fieldRecordData?.constructor === Object
          ? fieldRecordData.current
          : fieldRecordData;
    }
    let thisFollowUpsCheckbox = inputObject.$_checkBox;
    thisFollowUpsCheckbox.name = store.state.activeRecord;
    let followUps = store.dispatch("fetchCurrentValue", "followUps");
    if (followUps) {
      thisFollowUpsCheckbox.checked = followUps?.includes(
        this.fieldSettings.fieldName
      );
      // ? true
      // : false;
    } else {
      thisFollowUpsCheckbox.checked = false;
    }
  },
  consolidatedDataField: function () {
    let fieldName = this.fieldSettings.fieldName;
    let formName = this.fieldSettings.form;
    let fieldRecordData = store.dispatch("fetchGrossData", formName) || {};
    let inputObject =
      this.elementsObject.inputObjects[this.fieldSettings.fieldName];
    inputObject.$_inputLabel.title =
      fieldRecordData[fieldName]?.constructor === Object
        ? fieldRecordData[fieldName].previous
        : fieldRecordData[fieldName] || "";
    let dataField = this.$_dataField;
    if (dataField.tagName == "SELECT" && dataField.multiple == true) {
      this.elementsObject.setMultiSelectValues(
        dataField,
        fieldRecordData[fieldName]
      );
    } else {
      dataField.value =
        fieldRecordData[fieldName]?.constructor === Object
          ? fieldRecordData[fieldName].current
          : fieldRecordData[fieldName] || "";
    }
    let thisFollowUpsCheckbox = inputObject.$_checkBox;
    thisFollowUpsCheckbox.name = store.state.activeRecord;
    let followUps = store.dispatch("fetchCurrentValue", "followUps");
    if (followUps) {
      thisFollowUpsCheckbox.checked = followUps?.includes(
        this.fieldSettings.fieldName
      );
      // ? true
      // : false;
    } else {
      thisFollowUpsCheckbox.checked = false;
    }
  },
  nakedLikertResponseGrid: function () {
    let thisPropertyName = this.propertyName;
    this.element.childNodes.forEach((element) => {
      if (store.dispatch("fetchCurrentValue", [thisPropertyName])) {
        if (
          element.value ==
          store.dispatch("fetchCurrentValue", [thisPropertyName])[1]?.trim()
        ) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        element.checked = false;
      }
    });
  },
};
Elements.prototype.recordsUpdaters = {
  nakedDataField: function (event) {
    let changeObject = {};
    if (store.state.activeRecord) {
      changeObject[event.target.name] =
        event.target.tagName == "SELECT"
          ? this.elementsObject.getMultiSelectValues(event.target)
          : event.target.value;
      store.dispatch("update", {
        id: store.state.activeRecord,
        data: changeObject,
      });
    } else {
      alert("Select a client");
    }
  },
  consolidatedDataField: function (event) {
    let fieldName = this.fieldSettings.fieldName;
    let formName = this.fieldSettings.form;
    let changeObject = {};
    if (store.state.activeRecord) {
      changeObject[fieldName] =
        event.target.tagName == "SELECT"
          ? this.elementsObject.getMultiSelectValues(event.target)
          : event.target.value;
      store.dispatch("updateConsolidated", {
        id: store.state.activeRecord,
        data: changeObject,
        accessProperties: { formName: formName, fieldName: fieldName },
      });
    } else {
      alert("Select a client");
    }
  },
  nakedLikertResponseGrid: function (props) {
    let changeObject = {
      [`${this.propertyName}`]: [`${this.question} `, ` ${props.response}`],
    };
    return store.dispatch("update", {
      id: store.state.activeRecord,
      data: changeObject,
    });
  },
  clearNakedLikertResponseField: function () {
    let changeObject = {
      [`${this.propertyName}`]: "",
    };
    store.dispatch("update", {
      id: store.state.activeRecord,
      data: changeObject,
    });
  },
  clearAssessmentData: function () {
    let changeObject = {};
    let oldValue =
      store.state.records[store.state.activeRecord][
        this.fieldSettings.fieldName
      ]?.constructor === Object
        ? store.state.records[store.state.activeRecord][
            this.fieldSettings.fieldName
          ].current
        : store.state.records[store.state.activeRecord][
            this.fieldSettings.fieldName
          ];
    oldValue = Array.isArray(oldValue) ? [...oldValue] : oldValue;

    changeObject[`${this.fieldSettings.fieldName}`] = {
      current: "",
      previous: oldValue,
    };

    store.dispatch("update", {
      id: store.state.activeRecord,
      data: changeObject,
    });
  },
  clearAssessmentDataConsolidated: function () {
    let fieldName = this.fieldSettings.fieldName;
    let formName = this.fieldSettings.form;
    let changeObject = {};
    changeObject[fieldName] = "";
    store.dispatch("updateConsolidated", {
      id: store.state.activeRecord,
      data: changeObject,
      accessProperties: { formName: formName, fieldName: fieldName },
    });
  },
  clearReviewData: function () {
    let changeObject = {};
    let oldValue =
      store.state.records[store.state.activeRecord][
        this.fieldSettings.fieldName
      ]?.constructor === Object
        ? store.state.records[store.state.activeRecord][
            this.fieldSettings.fieldName
          ].current
        : store.state.records[store.state.activeRecord][
            this.fieldSettings.fieldName
          ];
    oldValue = Array.isArray(oldValue) ? [...oldValue] : oldValue;
    changeObject[`${this.fieldSettings.fieldName}`] = {
      current: "",
      previous: oldValue,
    };
    store.dispatch("update", {
      id: store.state.activeRecord,
      data: changeObject,
    });
  },
  clearReviewDataConsolidated: function () {
    let fieldName = this.fieldSettings.fieldName;
    let formName = this.fieldSettings.form;
    let changeObject = {};
    changeObject[fieldName] = "";
    store.dispatch("updateConsolidated", {
      id: store.state.activeRecord,
      data: changeObject,
      accessProperties: { formName: formName, fieldName: fieldName },
    });
  },
};
Elements.prototype.popUpPop = function (event) {
  removePopUpContent();
  // let elementSchema = clientRecordFieldSettings[event.target.parentNode.id];
  let elementSchema = this.fieldSettings;
  if (elementSchema?.notes) {
    popUp.style.display = "block";
    // needs to attach to the body otherwise will appear underneath a PopUp pop up.
    document.getElementById("body").appendChild(popUp);
    elementSchema.notes.forEach((ele) => {
      let newParagraph = document.createElement("p");
      newParagraph.innerHTML = ele;
      newParagraph.classList.add("temp");
      newParagraph.name = event.target.parentNode.id;
      if (
        app.elements.inputObjects[
          event.target.parentNode.id
        ].$_dataField?.value?.indexOf(personaliseStatement(ele)) >= 0
      ) {
        newParagraph.style.color = "red";
      } else {
        newParagraph.style.color = "black";
      }

      newParagraph.onclick = function () {
        let result = addOrRemovePartOfElementValue(
          this.innerHTML,
          app.elements.inputObjects[this.name].$_dataField
        );
        this.style.color = result ? "red" : "black";
        app.elements.inputObjects[this.name].$_dataField.dispatchEvent(
          new Event("input")
        );

        function addOrRemovePartOfElementValue(
          initialStatement,
          elementToChange
        ) {
          let spacer = elementToChange.value == "" ? "" : "\n";

          let personalisedStatement = personaliseStatement(initialStatement);

          if (elementToChange.value.indexOf(personalisedStatement) >= 0) {
            let stringWithoutCarriageReturn = elementToChange.value;
            if (
              elementToChange.value[
                elementToChange.value.indexOf(personalisedStatement) - 1
              ] == "\n"
            ) {
              stringWithoutCarriageReturn = elementToChange.value
                .slice(
                  0,
                  elementToChange.value.indexOf(personalisedStatement) - 1
                )
                .concat(
                  "",
                  elementToChange.value.slice(
                    elementToChange.value.indexOf(personalisedStatement)
                  )
                );
            }

            if (
              stringWithoutCarriageReturn.length ===
              personalisedStatement.length
            ) {
              elementToChange.value = "";
            } else {
              elementToChange.value = stringWithoutCarriageReturn
                .replace(personalisedStatement, "")
                .trim();
            }
            return false;
          } else {
            elementToChange.value =
              elementToChange.value + spacer + personalisedStatement.trim();
            return true;
          }
        }
      };
      popUpContent.appendChild(newParagraph);
    });
  } else {
    popUp.style.display = "block";
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = "There are no notes for this field";
    newParagraph.classList.add("temp");
    popUpContent.appendChild(newParagraph);
  }
};
