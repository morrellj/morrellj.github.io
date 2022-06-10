class Client {
  static colors = {
    carePlan: "#D4F9C8",
    important: "LemonChiffon",
  };
  static schema = {
    //demographic
    servicePreferences: {
      tag: "textarea",
      label: "Service preferences",
      classes: ["chsp", "carePlan", "largeText"],
    },
    ACnumber: {
      tag: "input",
      type: "text",
      label: "AC number",
      classes: ["demographic", "important"],
    },
    firstName: {
      tag: "input",
      type: "text",
      label: "First name",
      classes: ["demographic", "important"],
    },
    middleName: {
      tag: "input",
      label: "Middle Name",
      type: "text",
      classes: ["demographic"],
    },
    surname: {
      tag: "input",
      label: "Surname",
      type: "text",
      classes: ["demographic", "important"],
    },
    dateOfBirth: {
      tag: "input",
      label: "Date of Birth",
      classes: ["demographic", "important"],
      type: "date",
    },
    preferredName: {
      tag: "input",
      type: "text",
      label: "Preferred name",
      classes: ["demographic"],
    },
    gender: {
      tag: "input",
      type: "text",
      label: "Gender",
      classes: ["demographic"],
    },
    streetAdress: {
      tag: "input",
      type: "text",
      label: "Street Address",
      classes: ["demographic", "important"],
    },
    suburb: {
      tag: "input",
      type: "text",
      label: "suburb",
      classes: ["demographic", "important"],
    },
    postCode: {
      tag: "input",
      type: "text",
      label: "Post code",
      classes: ["demographic", "important"],
    },
    homePhone: {
      tag: "input",
      type: "text",
      label: "Home phone number",
      classes: ["demographic", "important"],
    },
    mobileNumber: {
      tag: "input",
      type: "text",
      label: "Mobile number",
      classes: ["demographic", "important"],
    },
    email: {
      tag: "input",
      label: "Email",
      classes: ["demographic"],
      type: "email",
    },
    countryOfBirth: {
      tag: "input",
      type: "text",
      label: "Country of Birth",
      classes: ["demographic"],
    },
    maritalStatus: {
      tag: "select",
      label: "Marital status",
      classes: ["demographic"],
      selectOptions: [
        "Defacto",
        "Divorced",
        "Married",
        "Seperated",
        "Single",
        "Widowed",
        "Not stated/indadequately described",
      ],
    },
    accomodationType: {
      tag: "select",
      label: "Accomodation type",
      classes: ["demographic"],
      selectOptions: [
        "Aboriginal rental",
        "Boarding/priv.hotel",
        "ILU-retirement villiage",
        "Institutional",
        "Not stated",
        "Other",
        "Prison/remand centre/youth training centre",
        "Private residence - owning purchasing",
        "Private - rental",
        "Private - public rental",
        "Short term crises",
        "Stat. client accom",
        "Supported accom",
        "Temorary shelter",
        "Treatment residence",
      ],
    },
    livingSituation: {
      tag: "select",
      label: "Living situation",
      classes: ["demographic"],
      selectOptions: [
        "Homeless",
        "Lives alone",
        "Lives with family",
        "Lives with others",
        "Lives in a couple",
        "Lives with relatives",
        "No fixed address",
        "Not stated/indadequately described",
      ],
    },
    pensionTypeIncome: {
      tag: "select",
      label: "Pension type/income",
      classes: ["demographic"],
      selectOptions: [
        "Aged pension",
        "Disability pension",
        "Veterans affairs pension",
        "Carers allowance",
        "Carer payment",
        "No pension or benefit",
        "Not stated/indadequately described",
        "Other pension/benefit",
        "Unemployment related benefit",
      ],
    },
    pensionStatus: {
      tag: "select",
      label: "Pension status",
      classes: ["demographic"],
      selectOptions: [
        "Full",
        "Part",
        "Not stated",
        "Non",
        "Self funded",
        "Employed",
      ],
    },
    incomeAssetsTest: {
      tag: "select",
      label: "Income assets test",
      classes: ["demographic"],
      selectOptions: ["Completed", "Pending", "Not stated", "NA"],
    },
    dvaType: {
      tag: "select",
      label: "DVA Type",
      classes: ["demographic"],
      selectOptions: ["Gold", "White", "Other", "NA"],
    },
    dvaNumber: {
      tag: "input",
      label: "DVA number",
      type: "text",
      classes: ["demographic"],
    },
    medicareNumber: {
      tag: "input",
      label: "Medicare number",
      type: "text",
      classes: ["demographic"],
    },
    medicareExpiry: {
      tag: "input",
      label: "Medicare expiry",
      type: "date",
      classes: ["demographic"],
    },
    pensionNumber: {
      tag: "input",
      label: "Pension number",
      type: "text",
      classes: ["demographic"],
    },
    pensionExpiry: {
      tag: "input",
      label: "Pension expiry",
      type: "date",
      classes: ["demographic"],
    },
    ambulanceCover: {
      tag: "select",
      label: "Ambulance cover",
      selectOptions: ["Has ambulance cover", "No ambulance cover"],
      classes: ["demographic"],
    },
    privateHealth: {
      tag: "select",
      label: "Private health cover",
      classes: ["demographic"],
      selectOptions: ["Has private health cover", "No private health cover"],
    },
    language: {
      tag: "input",
      label: "Language",
      type: "text",
      classes: ["demographic"],
    },
    ethnicity: {
      tag: "input",
      label: "Ethnicity",
      type: "text",
      classes: ["demographic"],
    },
    religion: {
      tag: "input",
      label: "Religion",
      type: "text",
      classes: ["demographic"],
    },

    atsiStatus: {
      tag: "select",
      label: "ATSI status",
      classes: ["demographic"],
      selectOptions: ["Aboriginal", "Torres Straight Islander", "Neither ATSI"],
    },
    carerStatus: {
      tag: "select",
      label: "Carer Status",
      classes: ["demographic"],
      selectOptions: ["No Carer", "Non co resident carer", "Co resident carer"],
      multiple: true,
    },
    culturalImapact: {
      tag: "textarea",
      label: "Cultural impact on services.",
      classes: ["largeText", "demographic"],
    },
    religiousImpact: {
      tag: "textarea",
      label: "Religious impact on services.",
      classes: ["largeText", "demographic"],
    },
    risk: {
      tag: "select",
      label: "risk",
      classes: ["demographic"],
      selectOptions: [
        "Living alone or with an individual with similar or greater level of needs",
        "Receiving nursing services (such as wound management)",
        "Receiving life-sustaining services including meals, or technologies such as oxygen",
        "Unlikely to be able to relocate without assistance",
        "Unable to make an independent decision due to cognitive or other impairment",
        "Socially or geographically isolated",
        "Living in a particularly high risk area (e.g. bushfire, flood)",
        "Difficult to make contact with in the event of an emergency (i.e. have limited or unreliable telephone services or are hearing impaired)",
      ],
      multiple: true,
    },
    disability: {
      tag: "select",
      label: "Disability",
      classes: ["demographic"],
      selectOptions: [
        "Intellectual/learning",
        "Psychiatric",
        "Sensory/speech",
        "Physical/diverse",
        "None",
        "Not stated / inadequately described",
      ],
      multiple: true,
    },
    //contacts and medical
    nextOfKin: {
      tag: "input",
      label: "NOK",
      type: "text",
      classes: ["contactsMedical", "important"],
    },
    primaryContact: {
      tag: "input",
      label: "Primary contact",
      type: "text",
      classes: ["contactsMedical", "important"],
    },
    scondaryContact: {
      tag: "input",
      label: "Secondary contact",
      type: "text",
      classes: ["contactsMedical", "important"],
    },
    contactsComments: {
      tag: "input",
      label: "Contacts comments",
      type: "text",
      classes: ["contactsMedical", "important"],
    },
    epaEpgAcp: {
      tag: "textarea",
      label: "EPA/EPG/ACP",
      classes: ["contactsMedical", "largeText"],
    },

    pharmacy: {
      tag: "input",
      label: "Pharmacy",
      type: "text",
      classes: ["contactsMedical", "medical"],
    },
    doctor: {
      tag: "input",
      label: "GP",
      type: "text",
      classes: ["contactsMedical", "medical", "important"],
    },
    specialist: {
      tag: "input",
      label: "Specialists",
      type: "text",
      classes: ["contactsMedical", "medical", "important"],
    },
    allergiesDrug: {
      tag: "textarea",
      label: "Drug allergies",
      classes: ["contactsMedical", "medical", "important", "largeText"],
    },
    allergiesFood: {
      tag: "textarea",
      label: "Food allergies",
      classes: ["contactsMedical", "medical", "important", "largeText"],
    },
    medicalCurrent: {
      tag: "textarea",
      label: "Medical current",
      classes: ["contactsMedical", "medical", "important", "largeText"],
    },
    medicalHistory: {
      tag: "textarea",
      label: "Medical history",
      classes: ["contactsMedical", "medical", "important", "largeText"],
    },
    surgicalHistory: {
      tag: "textarea",
      label: "Surgical current",
      classes: ["contactsMedical", "medical", "largeText"],
    },
    recentHospitalisations: {
      tag: "textarea",
      label: "Recent hospitalisations",
      classes: ["contactsMedical", "medical", "largeText"],
    },
    medicalOther: {
      tag: "textarea",
      label: "Medical other",
      classes: ["contactsMedical", "medical", "largeText"],
    },
    vaccinations: {
      tag: "textarea",
      label: "Vaccinations",
      classes: ["medical", "largeText"],
      default: "COVID ?\nFlu ?\nShingles ?\nPneumovax ?\nTetnus ?\n",
    },
    acatDate: {
      tag: "input",
      label: "ACAT date",
      type: "date",
      classes: ["medical"],
    },

    //CHSP
    chspGoals: {
      tag: "textarea",
      label: "CHSP goals",
      classes: ["chsp", "largeText"],
    },
    chspTimeframe: {
      tag: "textarea",
      label: "CHSP time frame",
      classes: ["chsp", "largeText"],
    },
    chspPlan: {
      tag: "textarea",
      label: "CHSP plan",
      classes: ["chsp", "largeText"],
    },
    //schedule
    mondayAM: {
      tag: "input",
      label: "Monday morning services",
      type: "text",
      classes: ["schedule"],
    },
    mondayPM: {
      tag: "input",
      label: "Monday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    mondayEve: {
      tag: "input",
      label: "Monday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //tue
    tuesdayAM: {
      tag: "input",
      label: "Tuesday morning services",
      type: "text",
      classes: ["schedule"],
    },
    tuesdayPM: {
      tag: "input",
      label: "Tuesday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    tuesdayEve: {
      tag: "input",
      label: "Tuesday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //wed
    wednesdayAM: {
      tag: "input",
      label: "Wednesday morning services",
      type: "text",
      classes: ["schedule"],
    },
    wednesdayPM: {
      tag: "input",
      label: "Wednesday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    wednesdayEve: {
      tag: "input",
      label: "Wednesday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //thu
    thursdayAM: {
      tag: "input",
      label: "Thursday morning services",
      type: "text",
      classes: ["schedule"],
    },
    thursdayPM: {
      tag: "input",
      label: "Thursday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    thursdayEve: {
      tag: "input",
      label: "Thursday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //fri
    fridayAM: {
      tag: "input",
      label: "Friday morning services",
      type: "text",
      classes: ["schedule"],
    },
    fridayPM: {
      tag: "input",
      label: "Friday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    fridayEve: {
      tag: "input",
      label: "Friday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //sat
    saturdayAM: {
      tag: "input",
      label: "Saturday morning services",
      type: "text",
      classes: ["schedule"],
    },
    saturdayPM: {
      tag: "input",
      label: "Saturday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    saturdayEve: {
      tag: "input",
      label: "Saturday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //sun
    sundayAM: {
      tag: "input",
      label: "Sunday morning services",
      type: "text",
      classes: ["schedule"],
    },
    sundayPM: {
      tag: "input",
      label: "Sunday afternoon services",
      type: "text",
      classes: ["schedule"],
    },
    sundayEve: {
      tag: "input",
      label: "Sunday evening services",
      type: "text",
      classes: ["schedule"],
    },
    //preamble
    aboutMe: {
      tag: "textarea",
      label: "About me.",
      classes: ["largeText", "preamble"],
    },
    importantPeople: {
      tag: "textarea",
      label: "Who are the important people in my life?",
      classes: ["largeText", "preamble"],
    },
    whatMatters: {
      tag: "textarea",
      label: "What matters to me?",
      classes: ["largeText", "preamble"],
    },
    goodDay: {
      tag: "textarea",
      label: "What does a good day look like?",
      classes: ["largeText", "preamble"],
    },
    badDay: {
      tag: "textarea",
      label: "What does a bad day look like?",
      classes: ["largeText", "preamble"],
    },
    strengths: {
      tag: "textarea",
      label: "My srengths are...",
      classes: ["largeText", "preamble"],
    },
    likesDislikes: {
      tag: "textarea",
      label: "My likes and dislikes...",
      classes: ["preamble", "largeText"],
    },
    // medication
    medicationSupport: {
      tag: "textarea",
      label: "Medication support",
      classes: ["medication", "largeText"],
      default: [
        "No support required\nCarer supports client with medication\nFormal support services required administration/prompt",
      ],
    },

    medicationList: {
      tag: "textarea",
      label: "Medication list",
      classes: ["medication", "largeText"],
    },
    highRiskMedications: {
      tag: "textarea",
      label: "High risk medication list",
      classes: ["medication", "largeText"],
    },
    hmr: {
      tag: "select",
      multiple: true,
      label: "HMR",
      classes: ["medication"],
      selectOptions: [
        "HMR recently completed",
        "HMR discussed",
        "Client/carer to follow up HMR with GP",
      ],
    },
    medicationOther: {
      tag: "textarea",
      label: "Medication other",
      classes: ["medication", "largeText"],
    },

    medicationSupportPlanFactors: {
      tag: "textarea",
      label: "Medication support plan FACTORS",
      classes: ["carePlan", "medication", "largeText"],
    },
    medicationSupportPlanInterventions: {
      tag: "textarea",
      label: "Medication support plan INTERVENTIONS",
      classes: ["carePlan", "medication", "largeText"],
    },
    //communication and sensory
    CommunicationImpairements: {
      tag: "select",
      label: "Communication impairements",
      classes: ["communication"],
      selectOptions: [
        "Hearing impaired",
        "Vision impaired (glasses)",
        "Vision impaired (blindness)",
      ],
      multiple: true,
    },
    CommunicationAids: {
      tag: "select",
      label: "Communication aids",
      classes: ["communication"],
      selectOptions: [
        "Wears hearing aids",
        "Wears reading glasses",
        "Wears distance glasses",
        "Wears bifocal glasses",
      ],
      multiple: true,
    },
    sensory: {
      tag: "select",
      label: "Sensory",
      classes: ["communication"],
      selectOptions: [
        "Sense of smell present",
        "Feels light touch in periperies",
        "No numbness in periperies",
        "No tingling in periperies",
      ],
      multiple: true,
    },
    sensoryOther: {
      tag: "textarea",
      label: "Communication and sensory other",
      classes: ["communication", "largeText"],
    },
    communicationSupportPlanFactors: {
      tag: "textarea",
      label: "Communication support plan FACTORS",
      classes: ["carePlan", "communication", "largeText"],
    },
    communicationSupportPlanInterventions: {
      tag: "textarea",
      label: "Communication support plan INTERVENTIONS",
      classes: ["carePlan", "communication", "largeText"],
    },
    //Pain
    painSupportPlanFactors: {
      tag: "textarea",
      label: "Pain support plan FACTORS",
      classes: ["carePlan", "pain", "largeText"],
    },
    painSupportPlanInterventions: {
      tag: "textarea",
      label: "Pain support plan INTERVENTIONS",
      classes: ["carePlan", "pain", "largeText"],
    },
    //Skin care
    skinSupportPlanFactors: {
      tag: "textarea",
      label: "Skin care support plan FACTORS",
      classes: ["carePlan", "skin", "largeText"],
    },
    skinSupportPlanInterventions: {
      tag: "textarea",
      label: "Skin care support plan INTERVENTIONS",
      classes: ["carePlan", "skin", "largeText"],
    },
    //elimination

    eliminationSupportPlanFactors: {
      tag: "textarea",
      label: "Elimination support plan FACTORS",
      classes: ["carePlan", "elimination", "largeText"],
    },
    eliminationSupportPlanInterventions: {
      tag: "textarea",
      label: "Elimination support plan INTERVENTIONS",
      classes: ["carePlan", "elimination", "largeText"],
    },
    //cleaning
    cleaningSupportPlanFactors: {
      tag: "textarea",
      label: "Cleaning support plan FACTORS",
      classes: ["carePlan", "cleaning", "largeText"],
    },
    cleaningSupportPlanInterventions: {
      tag: "textarea",
      label: "Cleaning support plan INTERVENTIONS",
      classes: ["carePlan", "cleaning", "largeText"],
    },
    //transport and mobility
    mobilitySupportPlanFactors: {
      tag: "textarea",
      label: "Mobility/transport support plan FACTORS",
      classes: ["carePlan", "mobility", "largeText"],
    },
    mobilitySupportPlanInterventions: {
      tag: "textarea",
      label: "Mobility/transport support plan INTERVENTIONS",
      classes: ["carePlan", "mobility", "largeText"],
    },
  };

  constructor(key, data) {
    if (arguments.length != 2) {
      throw new Error("Wrong number of arguments.");
    }
    if (typeof arguments[0] != "string") {
      throw new Error("Key needs to be a string.");
    }
    (this.key = key),
      // this.data = {};
      (this.save = function () {
        if (!localStorage.getItem(this.key)) {
          let thisData = {};
          for (const [thisKey, value] of Object.entries(Client.schema)) {
            thisData[thisKey] = this[thisKey];
          }
          console.log(thisData);
          localStorage.setItem(this.key, JSON.stringify(thisData));
        } else {
          alert("Client already named in local storage.");
        }
      });
    this.update = function (data) {
      for (const [thisKey, value] of Object.entries(data)) {
        this[thisKey] = value;
      }
      this.save();
    };

    for (const [thisKey, value] of Object.entries(Client.schema)) {
      this[thisKey] = data[thisKey]
        ? data[thisKey]
        : value.default
        ? value.default
        : null;
    }
  }
  static new(key, data) {
    return new Client(key, data);
  }
  static getClient = function (key, callback) {
    let thisData = JSON.parse(localStorage.getItem(key));
    let client = new Client(key, thisData);
    callback(client);
  };
  static updateClient = function (key, newValues) {
    Client.getClient(key, function (data) {
      for (const [thisKey, value] of Object.entries(newValues)) {
        data[thisKey] = value;
      }
      localStorage.setItem(key, JSON.stringify(data));
    });
  };
}

// const getClient = function (key, callback) {
//   let thisData = JSON.parse(localStorage.getItem(key));
//   callback(thisData);
// };

// const updateClient = function (key, newValues) {
//   getClient(key, function (data) {
//     for (const [thisKey, value] of Object.entries(newValues)) {
//       data[thisKey] = value;
//     }
//     localStorage.setItem(key, JSON.stringify(data));
//   });
// };
