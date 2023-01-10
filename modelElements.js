class Elements {
  constructor(schema) {
    this.inputElementsArray = [];
    this.inputObjects = {};
    this.variations = inputFieldVariations;
    this.events = new PubSub();
    //create data field properties
    for (const [inputField, value] of Object.entries(schema)) {
      let fieldSettings = Object.assign({ fieldName: inputField }, value);
      let newFields = {};
      if (value.variation) {
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
          }).schema,
        });
      }
      for (const newField of Object.values(newFields)) {
        this.inputElementsArray.push(newField.element);
      }
      Object.assign(this.inputObjects, newFields);
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
  }
  static links = {
    mobility: {
      loneLinks: [
        [
          "FROP",
          "https://www.nari.net.au/Handlers/Download.ashx?IDMF=6c6b3e92-19e7-4e63-9c2d-e920fa6a7b71",
        ],
      ],
    },
    pain: {
      loneLinks: [
        [
          "Functional pain scale",
          "https://www.caltcm.org/assets/Pain-file/functional%20pain%20scale%20u%20of%20iowa_2001.pdf",
        ],
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
          "Anticholinergic medications",
          "https://www.dementia.org.au/sites/default/files/helpsheets/Helpsheet-DementiaQandA24_AnticholinergicDrugs_english.pdf",
        ],
      ],
    },
    environment: {
      loneLinks: [
        ["Falls Home assessment tool", "Falls-HomeAssessmentTool.pdf"],
      ],
    },
    nutrition: {
      loneLinks: [
        [
          "Eating Assessment Tool (EAT-10)",
          "https://www.nestlehealthscience.com/health-management/gastro-intestinal/dysphagia/eat-10",
        ],
      ],
    },
    personalCare: {
      loneLinks: [
        [
          "Functional Assessment and ADL Preferences",
          "Functional Assessment and ADL Preferences.pdf",
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
  };
}
Elements.prototype.updateElements = function (data) {
  for (let [name, element] of Object.entries(this.inputObjects)) {
    element.$_inputLabel.title = !data[name]
      ? ""
      : data[name].constructor === Object
      ? data[name].previous
      : data[name];
    let dataField = element.$_dataField;
    if (dataField.tagName == "SELECT" && dataField.multiple == true) {
      this.setMultiSelectValues(dataField, data);
    } else {
      dataField.value = !data[name]
        ? ""
        : data[name].constructor === Object
        ? data[name].current
        : data[name];
    }
    let thisFollowUpsCheckbox = element.$_checkBox;
    thisFollowUpsCheckbox.name = data.key;
    if (data.followUps) {
      thisFollowUpsCheckbox.checked = data.followUps.includes(name)
        ? true
        : false;
    } else {
      thisFollowUpsCheckbox.checked = false;
    }
  }
  this.events.publish("updateFieldValues");
};
Elements.prototype.setMultiSelectValues = function (element, clientData) {
  var options = element.options;
  let fieldName = element.parentNode.id;
  var opt;
  for (var i = 0, iLen = options.length; i < iLen; i++) {
    options[i].selected = false;
  }
  if (clientData[fieldName]) {
    let fieldValue =
      clientData[fieldName].constructor === Object
        ? clientData[fieldName].current
        : clientData[fieldName];
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
  if (!confirm("Are you sure?")) return;
  let changeObject = {};
  for (const [key, value] of Object.entries(this.inputObjects)) {
    if (value.$_dataField.type == "date") continue;
    if (value.$_dataField.classList) {
      if (value.$_dataField.classList.contains("review")) {
        changeObject[`${key}`] = {
          current: "",
          previous: value.$_dataField.value,
        };
      }
    }
  }
  store.dispatch("update", {
    id: store.state.activeRecord,
    data: changeObject,
  });
  this.updateElements(store.state.records[store.state.activeRecord]);
};
Elements.prototype.clearAndBackUpAssessmentFields = function () {
  if (!confirm("Are you sure?")) return;
  let changeObject = {};
  for (const [key, value] of Object.entries(this.inputObjects)) {
    let oldValue =
      store.state.records[store.state.activeRecord][key]?.constructor === Object
        ? store.state.records[store.state.activeRecord][key].current
        : store.state.records[store.state.activeRecord][key];
    oldValue = Array.isArray(oldValue) ? [...oldValue] : oldValue;
    if (value.$_dataField.classList) {
      if (value.$_dataField.classList.contains("assessment")) {
        changeObject[`${key}`] = {
          current: "",
          previous: oldValue,
        };
      }
    }
  }
  store.dispatch("update", {
    id: store.state.activeRecord,
    data: changeObject,
  });
  this.updateElements(store.state.records[store.state.activeRecord]);
};
