//wnen creating a review input textarea the first item in the class list must be "review" and
//the second item must be the relevant category or subpage which will be the parameter for
//app.pageActions.setPage() function triggered by a label oncontextmenu event (right click).
let recordsModel = {};
recordsModel.demographicData = {
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
    tag: "select",
    label: "Gender",
    selectOptions: ["Male", "Female"],
    classes: ["demographic", "important"],
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
    notes: ["Australia"],
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
    classes: ["demographic", "important"],
  },
  medicareExpiry: {
    tag: "input",
    label: "Medicare expiry",
    type: "date",
    classes: ["demographic", "important"],
  },
  pensionNumber: {
    tag: "input",
    label: "Pension number",
    type: "text",
    classes: ["demographic", "important"],
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
    default: ["English"],
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
  },
  culturalImapact: {
    tag: "textarea",
    label: "Cultural impact on services.",
    classes: ["largeText", "demographic"],
    notes: ["No cultural concerns impacting on service delivery."],
  },
  religiousImpact: {
    tag: "textarea",
    label: "Religious impact on services.",
    classes: ["largeText", "demographic"],
    notes: ["No religious concerns impacting on service delivery."],
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
};
recordsModel.contactsData = {
  //contacts and medical
  nextOfKin: {
    tag: "input",
    label: "NOK",
    type: "text",
    classes: ["contactsMedical", "important"],
    notes: ["Note one", "Note two", "Note three"],
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
    classes: ["contactsMedical", "important", "largeText",'review'],
    notes:['Information reviewed and discussed with client as per department of health guidelines, no changes','Information review and discussed with client, changes updated in the system including: '],
    reviewPrint: true,
    reviewClear:false
  },
  pharmacy: {
    tag: "input",
    label: "Pharmacy",
    type: "text",
    classes: ["contactsMedical", "medical"],
  },
  doctor: {
    tag: "textarea",
    label: "GP",
    classes: ["contactsMedical", "medical", "important", "largeText"],
  },
  notHome: {
    tag: "select",
    label: "Not home",
    multiple: true,
    selectOptions: [
      "Call my home phone",
      "Call my mobile",
      "Enter through the unlocked door",
      "Use the locked box to gain entry",
      "Call my next of kin",
      "Ask my neighbours if they have seen me",
    ],
    classes: ["contactsMedical", "important", "largeText"],
  },
  notContactable: {
    tag: "select",
    label: "Not contactable",
    multiple: true,
    selectOptions: [
      "Contact the emergency services (Police, Ambulance)",
      "Do not contact emergency services",
    ],
    classes: ["contactsMedical", "important", "largeText"],
  },
  ifUnwell: {
    tag: "select",
    label: "If unwell",
    multiple: true,
    selectOptions: [
      "Contact Ambulance services",
      "Contact my emergency contacts",
      "Contact my General Practitioner",
    ],
    classes: ["contactsMedical", "important", "largeText"],
  },
  keySafeLocation: {
    tag: "input",
    label: "Key safe location",
    type: "text",
    classes: ["contactsMedical", "important", "largeText"],
  },
  keySafeCode: {
    tag: "input",
    label: "Key safe code",
    type: "text",
    classes: ["contactsMedical", "important", "largeText"],
  },
  emergencyPlanningOther: {
    tag: "textarea",
    label: "Emergency planning other",
    classes: ["contactsMedical", "important", "largeText"],
  },
};
recordsModel.medicalData = {
  specialist: {
    tag: "textarea",
    label: "Specialists",
    classes: ["contactsMedical", "medical", "important", "largeText"],
  },
  allergiesDrug: {
    tag: "textarea",
    label: "Drug allergies",
    classes: ["contactsMedical", "medical", "important", "largeText"],
    notes: ["No known drug allergies"],
  },
  allergiesFood: {
    tag: "textarea",
    label: "Food allergies",
    classes: ["contactsMedical", "medical", "important", "largeText"],
    notes: ["No known food allergies"],
  },
  medicalConditons: {
    tag: "select",
    multiple: true,
    label: "Medical conditons",
    selectOptions: [
      "Diabetes type 2",
      "Diabetes type 1",
      "COPD",
      "Asthma",
      "Chronic Kidney disease",
      "Heart failure",
      "Parkinsons",
      "Dementia",
      "Osteoarthritis",
      "Other",
    ],
    classes: ["medical"],
  },
  medicalCurrent: {
    tag: "textarea",
    label: "Medical current",
    classes: ["contactsMedical", "review", "medical", "important", "largeText"],
    reviewPrint: true,
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
    variation: "multiLikertField",
    label: "Vaccinations",
    propertyResponseFields: {
      covidStatus: [
        "Covid status",
        ["Current", "Due", "Other"],
      ],
      fluVaxStatus: [
        "Flu vaccine status",
        ["Current", "Due", "Other"],
      ],
      shinglesVaxStatus: [
        "Shingles vaccine status",
        ["Current", "Due", "Other"],
      ],
      pneumovaxStatus: [
        "Pnuemovax status",
        ["Current", "Due", "Other"],
      ],
      tetnusStatus: [
        "Tetnus vaccine status",
        ["Current", "Due", "Other"],
      ],
    },
    consolidateRecords: true,
    classes: [
      "medical",
    ],
    notes: [],
    assessmentClear: true,
  },
  vaccineComments: {
    tag: "textarea",
    label: "Vaccination comments",
    classes: [],
    forms: ["vaccinations"],
    notes: [
      'Vaccinations discussed with client/family who report that they will follow up with GP annually.',
      'Clinical referral required'
    ],
  },
  oxygen: {
    tag: "textarea",
    label: "Oxygen",
    default: "Needs:NA\nSupplement:NA",
    classes: ["medical"],
    assessmentClear: true,
  },
  drugsAlcohol: {
    tag: "textarea",
    label: "Drugs and alcohol",
    classes: ["medical", "falls"],
    assessmentClear: true,
  },
  acatDate: {
    tag: "input",
    label: "ACAT date",
    type: "date",
    classes: ["medical"],
  },
  medicalNeeds: {
    tag: "textarea",
    label: "Medical needs",
    classes: ["clinical", "medical", "largeText"],
    notes: [
      "Client articulates/has a documented chronic disease management plan including access to urgent medical support",
    ],
    assessmentClear: true,
  },
  medicalNeedsActions: {
    tag: "textarea",
    label: "Medical actions",
    classes: ["clinical", "medical", "largeText"],
    notes: [
      "Southern Plus nurse to provide further support/education/referral to establish chronic disease management plan",
    ],
    assessmentClear: true,
  },
  // medicalSupportPlanGoals: {
  //   tag: "textarea",
  //   label: "Medical support GOALS",
  //   classes: ["medical", "carePlan", "goals", "largeText"],
  // },
  // medicalSupportPlanIntervention: {
  //   tag: "textarea",
  //   label: "Medical support INTERVENTIONS",
  //   classes: ["medical", "carePlan", "largeText"],
  //   notes: [
  //     "Southern Plus support workers will provide assistance with transport to and from medical and other health related appointments",
  //   ],
  // },
};
recordsModel.scheduleData = {
  //schedule
  mondayAM: {
    tag: "textarea",
    label: "Monday morning services",
    classes: ["schedule"],
  },
  mondayPM: {
    tag: "textarea",
    label: "Monday afternoon services",
    classes: ["schedule"],
  },
  mondayEve: {
    tag: "textarea",
    label: "Monday evening services",
    classes: ["schedule"],
  },
  //tue
  tuesdayAM: {
    tag: "textarea",
    label: "Tuesday morning services",

    classes: ["schedule"],
  },
  tuesdayPM: {
    tag: "textarea",
    label: "Tuesday afternoon services",
    classes: ["schedule"],
  },
  tuesdayEve: {
    tag: "textarea",
    label: "Tuesday evening services",
    classes: ["schedule"],
  },
  //wed
  wednesdayAM: {
    tag: "textarea",
    label: "Wednesday morning services",
    classes: ["schedule"],
  },
  wednesdayPM: {
    tag: "textarea",
    label: "Wednesday afternoon services",
    classes: ["schedule"],
  },
  wednesdayEve: {
    tag: "textarea",
    label: "Wednesday evening services",
    classes: ["schedule"],
  },
  //thu
  thursdayAM: {
    tag: "textarea",
    label: "Thursday morning services",
    classes: ["schedule"],
  },
  thursdayPM: {
    tag: "textarea",
    label: "Thursday afternoon services",
    classes: ["schedule"],
  },
  thursdayEve: {
    tag: "textarea",
    label: "Thursday evening services",
    classes: ["schedule"],
  },
  //fri
  fridayAM: {
    tag: "textarea",
    label: "Friday morning services",
    classes: ["schedule"],
  },
  fridayPM: {
    tag: "textarea",
    label: "Friday afternoon services",
    classes: ["schedule"],
  },
  fridayEve: {
    tag: "textarea",
    label: "Friday evening services",
    classes: ["schedule"],
  },
  //sat
  saturdayAM: {
    tag: "textarea",
    label: "Saturday morning services",
    classes: ["schedule"],
  },
  saturdayPM: {
    tag: "textarea",
    label: "Saturday afternoon services",
    classes: ["schedule"],
  },
  saturdayEve: {
    tag: "textarea",
    label: "Saturday evening services",
    classes: ["schedule"],
  },
  //sun
  sundayAM: {
    tag: "textarea",
    label: "Sunday morning services",
    classes: ["schedule"],
  },
  sundayPM: {
    tag: "textarea",
    label: "Sunday afternoon services",
    classes: ["schedule"],
  },
  sundayEve: {
    tag: "textarea",
    label: "Sunday evening services",
    classes: ["schedule"],
  },
};
recordsModel.personalHistoryData = {
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
    notes: [
      "• What sorts of things might improve my day-to-day life?",
      "• What do I enjoy doing most?",
      "• What support do I need to stay safe?",
      "• Where and when do I want support?",
      "• How does this fit in with the help I already have?",
    ],
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
};
recordsModel.medicationData = {
  // medication
  medicationSupport: {
    tag: "select",
    label: "Medication support",
    classes: ["medication"],
    selectOptions: [
      "No support required",
      "Carer supports client with medication",
      "Formal support services required administration/prompt",
    ],
    assessmentClear: true,
  },

  medicationList: {
    tag: "textarea",
    label: "Medication list",
    classes: ["medication", "largeText"],
    assessmentClear: true,
  },
  highRiskMedications: {
    tag: "textarea",
    label: "High risk medication list",
    notes: [
      "Sedatives",
      "Antidepressants",
      "Antiparkinsons",
      "Antipsychotics",
      "Diuretics",
      "Antihypertensives",
      "Hypnotics",
      "Anti cholinergic burden",
    ],
    classes: ["medication", "largeText", "falls"],
    assessmentClear: true,
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
    assessmentClear: true,
  },
  medicationOther: {
    tag: "textarea",
    label: "Medication other",
    classes: ["medication", "largeText"],
    assessmentClear: true,
  },

  medicationSupportPlanFactors: {
    tag: "textarea",
    label: "Medication support plan FACTORS",
    classes: ["carePlan", "medication", "largeText"],
    notes: [
      "Client has a self care deficit related to medication administration secondary to ___ ",
      "No self care deficits identified.",
      "Client has been prescribed high risk medication [name]",
    ],
  },
  medicationGoals: {
    tag: "textarea",
    label: "Medication support plan GOALS",
    classes: ["carePlan", "medication", "goals", "largeText"],
    notes: ["Client's medication will be managed safely and effectively"],
  },
  medicationSP_Client: {
    tag: "textarea",
    label: "Medication support plan CLIENT",
    classes: ["carePlan", "medication", "largeText"],
    notes: [
      "Southern Plus support workers will prompt client to take medications [days and times].",
      "Southern Plus support workers will provide physical assistance for client to take medications as directed by client.",
      "Southern Plus support workers will administer medications to client as per Southern Plus policy [days and times].",
      "Client's family will support client to manage and take medication in consultation with his/her GP.[days and times].",
      "Client will continue to manage and self administer his/her own medication in consultation with his/her GP and pharmacist.",
      "Client's family will support client to manage and self administer his/her own medication in consultation with his/her GP and pharmacist.",
    ],
  },
  medicationSupportPlanInterventions: {
    tag: "textarea",
    label: "Medication support plan SUPPORTS",
    classes: ["carePlan", "medication", "largeText"],
    notes: [
      "Southern Plus support workers will prompt client to take medications [days and times].",
      "Southern Plus support workers will provide physical assistance for client to take medications as directed by client.",
      "Southern Plus support workers will administer medications to client as per Southern Plus policy [days and times].",
      "Client's family will support client to manage and take medication in consultation with his/her GP.[days and times].",
      "Client will continue to manage and self administer his/her own medication in consultation with his/her GP.",
    ],
  },
  medicationSP_WellnessPartner: {
    tag: "textarea",
    label: "Medication support plan WELLNESS PARTNER",
    classes: ["carePlan", "medication", "largeText"],
    notes: [
      "Southern Plus support workers will prompt client to take medications [days and times].",
      "Southern Plus support workers will provide physical assistance for client to take medications as directed by client.",
      "Southern Plus support workers will administer medications to client as per Southern Plus policy [days and times].",
      "Client's family will support client to manage and take medication in consultation with his/her GP.[days and times].",
      "Client will continue to manage and self administer his/her own medication in consultation with his/her GP.",
    ],
  },
  medicationNeeds: {
    tag: "textarea",
    label: "Medication needs",
    classes: ["clinical", "medication", "largeText"],
    assessmentClear: true,
  },
  medicationNeedsActions: {
    tag: "textarea",
    label: "Medication actions",
    classes: ["clinical", "medication", "largeText"],
    assessmentClear: true,
    notes: ["Support plan current and effective."],
  },
  medicationReview: {
    tag: "textarea",
    label: "Medication",
    classes: ["review", "medication", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.communicationData = {
  //communication and sensory
  CommunicationImpairements: {
    tag: "select",
    label: "Communication impairements",
    classes: ["communicationSensory", "falls"],
    assessmentClear: true,
    selectOptions: [
      "Hearing impaired",
      "Vision impaired (glasses)",
      "Vision impaired (blindness)",
      "No vision impairment",
      "No hearing impairment",
    ],
    multiple: true,
  },
  makingSelfUnderstood: {
    tag: 'select',
    label: 'Making self understood',
    classes:['communicationSensory'],
    assessmentClear: true,
    selectOptions:[
      "Understood – expresses ideas without difficulty", 
      "Usually understood – difficulty finding words or finishing thoughts but if given time, little or no prompting required", 
      "Often understood – difficulty finding words or finishing thoughts and prompting usually required",
      "Sometimes understood – ability is limited to making concrete requests",
      "Rarely or never understood"
    ]
  },
  understandingOthers: {
    tag: 'select',
    label: 'Understanding Others',
    classes:['communicationSensory'],
    assessmentClear: true,
    selectOptions:[
      "Understands – understands ideas without difficulty",
      "Usually understands– " ,
      "Often understands – ",
      "Sometimes understands – " ,
      "Rarely or never understands",
    ]
  },
  CommunicationAids: {
    tag: "select",
    label: "Communication aids",
    classes: ["communicationSensory"],
    assessmentClear: true,
    selectOptions: [
      "Wears hearing aids",
      "Wears reading glasses",
      "Wears distance glasses",
      "Wears bifocal glasses",
    ],
    multiple: true,
  },
  OtherLanuguages:{
    tag: "input",
    type: "text",
    label: "Other languages",
    classes: ["communicationSensory"],
    assessmentClear: true,
  },
  sensory: {
    tag: "select",
    label: "Sensory",
    classes: ["communicationSensory", "falls"],
    assessmentClear: true,
    selectOptions: [
      "Sense of smell present",
      "Feels light touch in peripheries",
      "No numbness in peripheries",
      "No tingling in peripheries",
    ],
    multiple: true,
  },
  sensoryOther: {
    tag: "textarea",
    label: "Communication and sensory other",
    classes: ["communicationSensory", "largeText"],
    assessmentClear: true,
    notes: [
      "Client passed whisper test bilaterally.",
      "Client failed whisper test Right/Left/Both ear/s.",
    ],
  },
  mobilePhoneUse:{
    tag:'select',
    label:'Mobile phone use',
    classes:['communicationSensory'],
    assessmentClear: true,
    selectOptions:[
      'Independent – No help, setup, or supervision',
     ' Assistance required'
    ]
  },
  communicationSupportPlanFactors: {
    tag: "textarea",
    label: "Communication support plan FACTORS",
    classes: ["carePlan", "communicationSensory", "largeText"],
    notes: [
      "Client is aware of his/her care needs and can communicate independently.",
      "Client has a hearing impairment.",
      "Client has a vision impairment.",
      "Client has impaired verbal communication ",
    ],
  },
  communicationSupportGoals: {
    tag: "textarea",
    label: "Communication support plan GOALS",
    classes: ["carePlan", "communicationSensory", "goals", "largeText"],
    notes: [
      "Client will report he/she is able to communicate his/her care needs effectivley",
      "Client will report that he/she is able to engage in social interactions in a way that is satisfying for him/her.",
    ],
  },
  communicationSP_Client: {
    tag: "textarea",
    label: "Communication support plan CLIENT",
    classes: ["carePlan", "communicationSensory", "largeText"],
    notes: [
      "Support workers will support client with communication by speaking clearly and not shouting, facing client when speaking, reducing the  distance between them and client, reducing background noise, rephrase the sentence as needed, checking to see that client has understood what has been communicated.",
      "Support workers will prompt client to wear his/her hearing aids and glasses.",
      "Suport workers will assist client to ensure that his/her hearing aids are working effectively.",
      "Support workers will assist client to put on his/her glasses and hearing aids.",
      "Be flexible and always allow plenty of time for a response.",
      "Use touch to keep the client’s attention and to communicate feelings of warmth and affection",
      "Remain calm and talk in a gentle, matter of fact way",
      "Keep sentences short and simple, focusing on one idea at a time",
      "Always allow plenty of time for what you have said to be understood",
      "Use non verbal cues to aid communication (touch, pointing, hold hands to maintain attention, smile.",
      "Ensure environment is conducive to communication (avoid loud competing noises TV or radio, stay still and within line of sight, maintain routines and familiar surroundings/people)",
      "Utilise communication techniques that enable people living with dementia. Refer to help sheet.",
      "Client's carer will support him/her to ensure he/she stays up to date with vision and hearing checks and other sensory check ups including podiatry if required.",
      "Client will manage own hearing and vision check up and other sensory check ups including podiatry if required appointments.",
    ],
  },
  communicationSupportPlanInterventions: {
    tag: "textarea",
    label: "Communication support plan SUPPORTS",
    classes: ["carePlan", "communicationSensory", "largeText"],
    notes: [
      "Support workers will support client with communication by speaking clearly and not shouting, facing client when speaking, reducing the  distance between them and client, reducing background noise, rephrase the sentence as needed, checking to see that client has understood what has been communicated.",
      "Support workers will prompt client to wear his/her hearing aids and glasses.",
      "Suport workers will assist client to ensure that his/her hearing aids are working effectively.",
      "Support workers will assist client to put on his/her glasses and hearing aids.",
      "Be flexible and always allow plenty oftime for a response.",
      "Use touch to keep the client’s attention and to communicate feelings of warmth and affection",
      "Remain calm and talk in a gentle, matter of fact way",
      "Keep sentences short and simple, focusing on one idea at a time",
      "Always allow plenty of time for what you have said to be understood",
      "Use non verbal cues to aid communication (touch, pointing, hold hands to maintain attention, smile.",
      "Ensure environment is condusive to communication (avoid loud competing noises TV or radio, stay still and within line of sight, maintain routines and familiar surroundings/people)",
      "Utilise communication techniques that enable people living with dementia. Refer to help sheet.",
    ],
  },
  communicationSP_WellnessPartner: {
    tag: "textarea",
    label: "Communication support plan WELLNESS PARTNER",
    classes: ["carePlan", "communicationSensory", "largeText"],
    notes: [
      "WP will prompt client and facilitate supports as required to maintain regular hearing, vision and other sensory check ups including podiatry if required.",
    ],
  },
  communicationReview: {
    tag: "textarea",
    label: "Communication",
    classes: ["review", "communicationSensory", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  communicationNeeds: {
    tag: "textarea",
    label: "Communication needs",
    classes: ["clinical", "communicationSensory", "largeText"],
    assessmentClear: true,
  },
  communicationActions: {
    tag: "textarea",
    label: "Communication actions",
    classes: ["clinical", "communicationSensory", "largeText"],
    assessmentClear: true,
  },
};
recordsModel.psychologicalData = {
  //psychological cognitive sleep
  sleep: {
    tag: "textarea",
    label: "Sleep",
    classes: ["largeText", "psychological"],
    assessmentClear: true,
    notes:[ "Nocturia","Night time sleep hours: ", "Day time sleep hours: ", "Sleeping aids: ", "Sleep disorders: "

    ]
  },
  cognitionNeurological: {
    tag: "textarea",
    label: "Cognition and neurological",
    classes: ["largeText", "psychological"],
    assessmentClear: true,
  },
  depression: {
    tag: "textarea",
    label: "Depression",
    classes: ["largeText", "psychological"],
    assessmentClear: true,
    notes: [
      "Beyond Blue anxiety and depression checklist completed with client.",
    ],
  },
  psychologicalOther: {
    tag: "textarea",
    label: "Psychological other",
    classes: ["largeText", "psychological"],
    assessmentClear: true,
    notes: [
      "PAS scale completed.",
      "Further assessment/referral required.",
      "Assessments completed: ",
    ],
  },
  abbreviatedMentalTest: {
    tag: "textarea",
    label: "AMTS",
    classes: ["largeText", "psychological"],
    assessmentClear: true,
    notes: [
      "Age Correct",
      "Age Incorrect",
      "Time to the nearest hour Correct",
      "Time to the nearest hour Incorrect",
      "Address to recall - 42 West St Correct",
      "Address to recall - 42 West St Incorrect",
      "Current year Correct",
      "Current year Incorrect",
      "Current location (where are we?) Correct",
      "Current location (where are we?) Incorrect",
      "Recognition of two persons (Dr, nurse) Correct",
      "Recognition of two persons (Dr, nurse) Incorrect",
      "Date of birth Correct",
      "Date of birth Incorrect",
      "Years of first World War Correct",
      "Years of first World War Incorrect",
      "Name of current prime minister Correct",
      "Name of current prime minister Incorrect",
      "Count backwards from 20 by ones Correct",
      "Count backwards from 20 by ones Incorrect",
      "Score:___. A score of less than 8 in the AMTS implies the presence of cognitive impairment",
    ],
  },
  lonelinessScale: {
    variation: "multiLikertField",
    label: "6-Item Loneliness Scale",
    classes: ["social"],
    assessmentClear: true,
    propertyResponseFields: {
      emotionalLonelinessSection: [
        "Code EL: Level of emotional loneliness",
        [],
      ],
      emotionalLoneliness1: [
        "I experience a general sense of emptiness",
        ["Yes - 1", , "More or less - 1", "No - 0"],
      ],
      emotionalLoneliness2: [
        "There are plenty of people I can rely on when I have problems",
        ["Yes - 0", , "More or less - 1", "No - 1"],
      ],
      emotionalLoneliness3: [
        "There are many people I can trust completely",
        ["Yes - 0", , "More or less - 1", "No - 1"],
      ],
      socialLonelinessSection: ["Code SL: Level of social loneliness", []],
      socialLoneliness1: [
        "I miss having people around me",
        ["Yes - 1", , "More or less - 1", "No - 0"],
      ],
      socialLoneliness2: [
        "There are enough people I feel close to",
        ["Yes - 0", , "More or less - 1", "No - 1"],
      ],
      socialLoneliness3: [
        "I often feel rejected",
        ["Yes - 1", , "More or less - 1", "No - 0"],
      ], //
    },
    notes: [
      "We would like to ask you a few questions to enable us to measure how helpful our services are. You can choose to answer all or none of the questions, and choosing not to answer will not affect your access to any of our services in any way. When answering the questions, you could take account of the following:",
      "•There are no right or wrong answers",
      "•We would like you to be completely honest",
      "•In answering the questions, it is best to think of your life as it generally is now (we all have some good or bad days)",
      " ",
      "Code: EL - Emotional loneliness, missing an intimate relationship  Score of 3 indicates intense emotional loneliness",
      "Code: SL - Social loneliness, missing a wider social network.  Score of 3 indicates intense social loneliness",
    ],
  },
  psychologicalSupportPlanFactors: {
    tag: "textarea",
    label: "Pyschological support plan FACTORS",
    classes: ["carePlan", "psychological", "largeText"],
    notes: [
      "Disturbed Sleep Pattern",
      "Anxiety",
      "Chronic Confusion",
      "Disturbed Thought Process",
      "Impaired Memory",
      "Wandering",
      "Client is alert and orientated and able to communicate effectively.",
      "No cognitive impairments.",
    ],
  },
  psychologicalSupportPlanGoals: {
    tag: "textarea",
    label: "Pyschological support plan GOALS",
    classes: ["carePlan", "psychological", "goals", "largeText"],
    notes: [
      "Client will report he/she feels safe and secure at all times.",
      "Clients carers and support workers will identify what frequently triggers certain behaviours, anxiety and insecurity, what interventions are effective and the outcomes.",
      "Client will engage in meaningful activity on a daily basis and effectively complete all of his/her activities of daily living.",
    ],
  },
  psychologicalSP_Client: {
    tag: "textarea",
    label: "Pyschological support plan CLIENT",
    classes: ["carePlan", "psychological", "largeText"],
    notes: [
      "Client's carers and support workers will assist client to identify potential issues that are causing anxiety or agitation using the CAUSEd acronym, take appropriate actions and report outcomes.\n\u2022 Communication issues\n\u2022 Activity (is it appropriate and available)\n\u2022 Unwell/Unmet needs\n\u2022 Story (consider what we know about client that may be a clue)\n\u2022 Environment (what environmental factors are contributing to their feelings of anxiety)\n\u2022 dementia.",
      "Other services available for Client to reach out to for strategies to manage depression and anxiety and in times of crisis. - Beyond Blue Support Service, 1300 22 46 36 and Web Chat; - Lifeline, 13 11 14; - Suicide Call Back Service, 1300 659 467",
    ],
  },
  psychologicalSupportPlanInterventions: {
    tag: "textarea",
    label: "Pyschological support plan SUPPORTS",
    classes: ["carePlan", "psychological", "largeText"],
    notes: [
      "Clients carers and support workers will assist client to identify potential issues that are causing anxiety or agitation using the CAUSEd anacronym, take appropriate actions and report outcomes.\n\u2022 Communication issues\n\u2022 Activity (is it appropriate and available)\n\u2022 Unwell/Unmet needs\n\u2022 Story (consider what we know about client that may be a clue)\n\u2022 Environment (what environmental factors are contributing to their feelings of anxiety)\n\u2022 dementia.",
      "Support workers and carers will promote positive self esteem",
    ],
  },
  psychologicalSP_WellnessPartner: {
    tag: "textarea",
    label: "Pyschological support plan INTERVENTIONS",
    classes: ["carePlan", "psychological", "largeText"],
    notes: [
      "Clients carers and support workers will assist client to identify potential issues that are causing anxiety or agitation using the CAUSEd anacronym, take appropriate actions and report outcomes.\n\u2022 Communication issues\n\u2022 Activity (is it appropriate and available)\n\u2022 Unwell/Unmet needs\n\u2022 Story (consider what we know about client that may be a clue)\n\u2022 Environment (what environmental factors are contributing to their feelings of anxiety)\n\u2022 dementia.",
      "Support workers and carers will prompote positive self esteem",
    ],
  },
  pyscholigicalNeeds: {
    tag: "textarea",
    label: "Psychological needs",
    classes: ["clinical", "psychological", "largeText"],
    assessmentClear: true,
  },
  psychologicalActions: {
    tag: "textarea",
    label: "Psychological actions",
    classes: ["clinical", "psychological", "largeText"],
    assessmentClear: true,
    notes: [
      "Add dementia specific interventions to support plan",
      "Southern Plus clinical team to conduct further dementia specific assessment and care planning (ie HDR scale, behaviour management)",
      "Assist client/carer with referral to DBAMS and/or Dementia Australia",
      "Provide DBMAS/Dementia Australia help sheets (i.e. understanding apathy/communication...)",
      "Support plan current and effective",
    ],
  },
  psychologicalReview: {
    tag: "textarea",
    label: "Psychological",
    classes: ["review", "psychological", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.psychosocialData = {
  //social and family
  socialOther: {
    tag: "textarea",
    label: "Social other",
    classes: ["social"],
    assessmentClear: true,
    notes: [
      "Support from family/friends: type (phone, visit etc) and frequency",
      "Any difficulties in accessing this support?",
      "How do you keep in contact with family, friends or others? (Consider identifying if the client has any difficulties in this area, such as using the telephone or internet)",
      "I am still very active in my community	☐ Yes ☐ No",
      "I would like to join or reconnect with certain activities in the community (including social/religious groups). 	☐ Yes ☐ No",
      "I attend a Centre Based Day Care (CBDC) day centre?	☐ Yes ☐ No, Name: NA",
      "Current arrangements for accessing the community:",
    ],
  },
  socialSupportPlanFactors: {
    tag: "textarea",
    label: "Psycho social support plan FACTORS",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Client is at risk of social isolation secondary to ____",
      "Client is well supported and engages with family and friends independently.",
      "Client requires support to engage in social activities.",
    ],
  },
  socialSupportPlanGoals: {
    tag: "textarea",
    label: "Psycho social support plan GOALS",
    classes: ["carePlan", "psychological", "social", "goals", "largeText"],
    notes: [
      "Client will report that he/she is satisfied with the amount of social interaction that he/she engages in.",
      "Client will report that frequently engage in activities and have opportunity to build and maintain the relationships that are important to him/her.",
    ],
  },
  socialSP_CLient: {
    tag: "textarea",
    label: "Psycho social support plan CLIENT",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  socialSupportPlanInterventions: {
    tag: "textarea",
    label: "Psycho social support plan SUPPORTS",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
    ],
  },
  socialSP_WellnessPartner: {
    tag: "textarea",
    label: "Psycho social support plan WELLNESS PARTNER",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [],
  },
  socialReview: {
    tag: "textarea",
    label: "Psychosocial",
    classes: ["review", "psychological", "social", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  /*psychoSocialSupportPlanFactors: {
    tag: "textarea",
    label: "Psychosocial support plan FACTORS",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Client is at risk of social isolation secondary to ____",
      "Client is well supported and engages with family and friends independently.",
    ],
  },
  psychoSocialSupportPlanGoals: {
    tag: "textarea",
    label: "Psychosocial support plan GOALS",
    classes: ["carePlan", "psychological", "social", "goals", "largeText"],
    notes: [
      "Client will report that he/she is satisfied with the amount of social interaction that he/she receives.",
      "Client will report that frequently engage in activities and have opportunity to build and maintain the relationships that are important to him/her.",
    ],
  },
  psychoSocialSP_CLient: {
    tag: "textarea",
    label: "Psychosocial support plan CLIENT",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  psychoSocialSupportPlanInterventions: {
    tag: "textarea",
    label: "Psychosocial support plan SUPPORTS",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  psychoSocialSP_WellnessPartner: {
    tag: "textarea",
    label: "Psychosocial support plan WELLNESS PARTNER",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  psychoSocialReview: {
    tag: "textarea",
    label: "Psychosocial",
    classes: ["review", "psychological", "social", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
  },*/
};
recordsModel.painData = {
  //Pain (falls)
  painScale: {
    tag: "select",
    label: "Pain scale",
    classes: ["pain", "falls"],
    assessmentClear: true,
    selectOptions: [
      "0 No pain",
      "1 Tolerable (and does not prevent any activities)",
      "2 Tolerable (but does prevent some activities)",
      "3 Intolerable (but can use telephone, watch TV, or read)",
      "4 Intolerable (but cannot use telephone, watch TV, or read)",
      "5 Intolerable (and unable to verbally communicate because of pain)",
    ],
  },
  painLocation: {
    tag: "textarea",
    label: "Pain location",
    classes: ["largeText", "pain", "falls"],
    assessmentClear: true,
  },
  painFutherAssessment: {
    tag: "select",
    label: "Further assessment",
    selectOptions: [
      "Pain assessment completed",
      "Further pain assessment required",
      "Further pain assessment not required",
    ],
    classes: ["pain"],
    assessmentClear: true,
  },
  painOther: {
    tag: "textarea",
    label: "Pain other",
    classes: ["pain"],
    assessmentClear: true,
    notes: ["Pain scale completed."],
  },
  painSupportPlanFactors: {
    tag: "textarea",
    label: "Pain support plan FACTORS",
    classes: ["carePlan", "pain", "largeText"],
    notes: [
      "Client experiences chronic pain [location]",
      "Pain is a big issue for client and is often the difference between a good day and a bad day.",
    ],
  },
  painSupportPlanGoals: {
    tag: "textarea",
    label: "Pain support plan GOALS",
    classes: ["carePlan", "pain", "goals", "largeText"],
    notes: [
      "Client will report that his/her pain is managed effectively and that it does not prevent him/her form being engaged in meaningful activity.",
    ],
  },
  painSP_Client: {
    tag: "textarea",
    label: "Pain support plan CLIENT",
    classes: ["carePlan", "pain", "largeText"],
    notes: [
      "Client self manages pain on a day to day basis in consultation with his/her GP and/or specialist",
      "Client will pace his/her daily activities and rest when needed to prevent pain levels escalating beyond what is tolerable.",
    ],
  },
  painSupportPlanInterventions: {
    tag: "textarea",
    label: "Pain support plan SUPPORTS",
    classes: ["carePlan", "pain", "largeText"],
    notes: [
      "Client receives symptom management support by the palliative care team.",
      "Support services provided by Southern Plus will reduce the physical burdens and heavier tasks involved with managing client's day to day activities allowing him/her to be more rested and to exercise in moderation.",
    ],
  },
  painSP_WellnessPartner: {
    tag: "textarea",
    label: "Pain support plan WELLNESS PARTNER",
    classes: ["carePlan", "pain", "largeText"],
    notes: [
      "Southern Plus will facility referral for physiotherapy assessment.",
      "Southern Plus will facilitate ongoing Physiotherapy for pain management.",
    ],
  },
  painNeeds: {
    tag: "textarea",
    label: "Pain needs",
    classes: ["clinical", "pain", "largeText"],
    assessmentClear: true,
  },
  painActions: {
    tag: "textarea",
    label: "Pain actions",
    classes: ["clinical", "pain", "largeText"],
    assessmentClear: true,
    notes: [
      "Client receives symptom management support by the palliative care team.",
      "No further intervention required by Southern Plus at this time.",
      "Client self manages pain.",
      "Southern Plus will facility referral for physiotherapy assessment.",
      "Southern Plus will facilitate ongoing Physiotherapy for pain management.",
    ],
  },
  painReview: {
    tag: "textarea",
    label: "Pain",
    classes: ["review", "pain", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.skinData = {
  //Skin care---------------------------------------------------------------------
  woundCare: {
    tag: "select",
    label: "Wound Care",
    selectOptions: ["No wounds", "Wound assessment required"],
    assessmentClear: true,
    classes: ["skin"],
  },
  pressureInjury: {
    tag: "textarea",
    notes: [
      "Pressure injury risk assessment pending",
      "Pressure injury risk assessment completed",
    ],
    label: "Pressure injury",
    classes: ["skin"],
    assessmentClear: true,
  },
  skinIntegrity: {
    tag: "textarea",
    label: "Skin integrity",
    classes: ["skin"],
    assessmentClear: true,
    notes: [
      "Uses medications that increase risk of skin tears: corticosteroids, anticoagulants, polypharmacy.",
      "Assessment indicates high risk for pressure injury.",
      "Assessment indicates low risk for pressure injury.",
    ],
  },
  skinSupportPlanFactors: {
    tag: "textarea",
    label: "Skin care support plan FACTORS",
    classes: ["carePlan", "skin", "largeText"],
    notes: [
      "Client has impaired skin integrity related to ___ secondary to ____",
      "Client is at high risk of developing pressure injuries secondary to ___",
      "Potential risk for skin tears secondary to age related skin tears/self care deficits/medications.",
    ],
  },
  skinSupportPlanGoals: {
    tag: "textarea",
    label: "Skin care support plan GOALS",
    classes: ["carePlan", "skin", "goals", "largeText"],
    notes: [
      "Effective and appropriate wound care/management.",
      "Skin tears will be prevented.",
      "Pressure injuries will be prevented.",
      "Incontinence associated dermatitis will be prevented.",
    ],
  },
  skinSP_Client: {
    tag: "textarea",
    label: "Skin care support plan CLIENT",
    classes: ["carePlan", "skin", "largeText"],
    notes: [
      "Wound care will be provided by ____",
      "Support workers will prompt and remind client to keep a stock of and apply emollient moisturiser daily.",
      "Southern Plus will facilitate purchase of skin care products for the prevention of skin tears.",
      "S: pressure redistribution support surface in place/for OT assessment",
      "S: Regular skin inspection to be incorporated into support plan and/or client/carer education provided",
      "K: keep moving client/carer education provided.",
      "I: manage incontinence - refer to continence management assessment.",
      "N: optimise nutrition - refer to nutritional assessment.",
      "D: dressings for prevention indicated/not indicated",
      "Client will manage any incontinence associated dermatitis with good personal hygiene, regular cleaning and use of barrier creams and seeking further health advice when self care is not effective.",
      "Client will continue to manage his/her own skin care including regular moisturizing, monitoring for skin breakdown and seeking health services when not able to self manage.",
    ],
  },
  skinSupportPlanInterventions: {
    tag: "textarea",
    label: "Skin care support plan SUPPORTS",
    classes: ["carePlan", "skin", "largeText"],
    notes: [
      "Wound care will be provided by ____",
      "Support workers will prompt and remind client to keep a stock of and apply emollient moisturiser daily.",
      "Southern Plus will facilitate purchase of skin care products for the prevention of skin tears.",
      "S: pressure redistribution support surface in place/for OT assessment",
      "S: Regular skin inspection to be incorporated into support plan and/or client/carer education provided",
      "K: keep moving client/carer education provided.",
      "I: manage incontinence - refer to continence management assessment.",
      "N: optimise nutrition - refer to nutritional assessment.",
      "D: dressings for prevention indicated/not indicated",
      "Wound care plan to be implemented",
    ],
  },
  skinSP_WellnessPartner: {
    tag: "textarea",
    label: "Skin care support plan WELLNESS PARTNER",
    classes: ["carePlan", "skin", "largeText"],
    notes: [],
  },
  skinActions: {
    tag: "textarea",
    label: "Skin care clinical actions",
    classes: ["skin", "clinical", "largeText"],
    assessmentClear: true,
    notes: [
      "S: pressure redistribution support surface in place/for OT assessment",
      "S: Regular skin inspection to be incorporated into support plan and/or client/carer education provided",
      "K: keep moving client/carer education provided.",
      "I: manage incontinence - refer to continence management assessment.",
      "N: optimise nutrition - refer to nutritional assessment.",
      "D: dressings for prevention indicated/not indicated",
      "Wound care plan to be implemented",
    ],
  },
  skinReview: {
    tag: "textarea",
    label: "Skin review",
    classes: ["review", "skin", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.eliminationData = {
  //elimination (falls)
  eliminationUrinary: {
    tag: "textarea",
    label: "Urinary",
    classes: ["elimination", "falls"],
    assessmentClear: true,
    notes:['No bladder issues identified', "Client is continent"]
  },
  eliminationBowel: {
    tag: "textarea",
    label: "Bowel",
    classes: ["elimination", "falls"],
    assessmentClear: true,
    notes:['No bowel issues identified', "Client is continent"]
  },
  Toileting: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Independent toileting",
      "Requires assistance with toileting",
    ],
    label: "Toileting",
    classes: ["elimination"],
    assessmentClear: true,
  },
  incontinenceAids: {
    tag: "textarea",
    label: "Incontinence aids",
    classes: ["elimination"],
    assessmentClear: true,
  },
  eliminationOther: {
    tag: "textarea",
    label: "Elimination other",
    classes: ["elimination", "falls"],
    assessmentClear: true,
  },
  eliminationSupportPlanFactors: {
    tag: "textarea",
    label: "Elimination support plan FACTORS",
    classes: ["carePlan", "elimination", "largeText"],
    notes: ["Client experiences incontinence (stress/urge/mixed)"],
  },
  eliminationSupportPlanGoals: {
    tag: "textarea",
    label: "Elimination support plan GOALS",
    classes: ["carePlan", "elimination", "goals", "largeText"],
    notes: [
      "Client will be able to go out in public without fear of embarrassment",
      "Client will maintain social continence.",
      "Prevention of increased incontinence.",
      "Client continence will be restored.",
    ],
  },
  eliminationSP_Client: {
    tag: "textarea",
    label: "Elimination support plan CLIENT",
    classes: ["carePlan", "elimination", "largeText"],
    notes: [
      "Client will notify her Wellness Partner when she requires a supply of incontinence aids giving them 2 weeks notice for delivery.",
      "Client accesses financial support for incontinence aids via the Continence Aids Payment Scheme.",
    ],
  },
  eliminationSupportPlanInterventions: {
    tag: "textarea",
    label: "Elimination support plan SUPPORTS",
    classes: ["carePlan", "elimination", "largeText"],
    notes: [
      "Southern Plus will assist with provision of incontinence aids within the capacity of the budget.",
      "Southern Plus will provide support to access continence assessment services through - ",
    ],
  },
  eliminationSP_WellnessPartner: {
    tag: "textarea",
    label: "Elimination support plan WELLNESS PARTNER",
    classes: ["carePlan", "elimination", "largeText"],
    notes: [
      "The Wellness Partner will order pads as and when requested to ensure delivery within 2 weeks time frame.",
      "The Wellness Partner will facilitate continence assessment when there are changes to Clients care needs."
    ],
  },
  eliminationNeeds: {
    tag: "textarea",
    label: "Elimination needs",
    classes: ["clinical", "elimination", "largeText"],
    assessmentClear: true,
  },
  eliminationActions: {
    tag: "textarea",
    label: "Elimination actions",
    classes: ["clinical", "elimination", "largeText"],
    assessmentClear: true,
  },
  eliminationReview: {
    tag: "textarea",
    label: "Elimination",
    classes: ["review", "elimination", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.mobilityData = {
  //transport and mobility
  transport: {
    tag: "textarea",
    label: "Transport",
    classes: ["medical", "mobility", "largeText"],
    assessmentClear: true,
  },
  Driving: {
    tag:'select',
    label:'Driving',
    classes:['mobility'],
    assessmentClear:true,
    selectOptions:[
      "Yes",
      'No'
    ]
  },
  transfers: {
    tag: "select",
    selectOptions: [
      "Independent transfers inside the home.",
      "Supervise transfers inside the home.",
      "Standby assist transfers inside the home.",
      "Physical assist transfers inside the home.",
      "Physical assist x2 transfers inside the home.",
      "Not weight bearing inside the home.",
    ],
    label: "Transfers outside",
    classes: ["mobility"],
    assessmentClear: false,
  },
  ambulation: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Independent ambulation inside the home.",
      "Supervise ambulation inside the home.",
      "Standby assist ambulation inside the home.",
      "Physical assist ambulation inside the home.",
      "Physical assist x 2 ambulation inside the home.",
    ],
    label: "Ambulation outside",
    classes: ["mobility"],
    assessmentClear: false,
  },
  transfersOutside: {
    tag: "select",
    selectOptions: [
      "Independent transfers outside the home.",
      "Supervise transfers outside the home.",
      "Standby assist transfers outside the home.",
      "Physical assist transfers outside the home.",
      "Physical assist x2 transfers outside the home.",
      "Not weight bearing outside the home.",
    ],
    label: "Transfers",
    classes: ["mobility"],
    assessmentClear: false,
  },
  ambulationOutside: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Independent ambulation outside the home.",
      "Supervise ambulation outside the home.",
      "Standby assist ambulation outside the home.",
      "Physical assist ambulation outside the home.",
      "Physical assist xv2 ambulation outside the home.",
    ],
    label: "Ambulation",
    classes: ["mobility"],
    assessmentClear: false,
  },
  mobilityAids: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Zimmer frame",
      "Walking stick",
      "Four wheeled Walker",
      "Wheel chair for all ambulation",
      "Wheel chair for longer distances",
      "Standing hoist",
      "Sara steady (or equiv)",
      "Cradle hoist",
      "No mobility aids",
    ],
    label: "Mobility aids",
    classes: ["mobility"],
    assessmentClear: false,
  },
  mobilityAidsOutside: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Zimmer frame",
      "Walking stick",
      "Four wheeled Walker",
      "Wheel chair for all ambulation",
      "Wheel chair for longer distances",
      "Standing hoist",
      "Sara steady (or equiv)",
      "Cradle hoist",
      "No mobility aids",
    ],
    label: "Mobility aids outside",
    classes: ["mobility"],
    assessmentClear: false,
  },
  DistanceToWalk:{
    tag:"select",
    label: "Distance to walk",
    classes:["mobility"],
    assessmentClear: true,
    selectOptions: [
    "Did not walk",
    "less than 5 meters",
    "5-49 meters",
    "50-99 meters",
    "100 meters +"
    ]
  },
  Stairs:{
    tag:"select",
    label:"Stairs",
    classes:["mobility"],
    selectOptions:[
      "Independent – e.g., able to navigate up to flight 12/14 stairs",
      "Assistance- e.g., with grab rail or mobility aides standby etc",
      "Dependant- stair-chairlift",

    ],
    assessmentClear:true
  },
  BedMobility:{
    tag:'select',
    label:'Bed mobility',
    classes: ['mobility'],
    assessmentClear: true,
    selectOptions:[
      'Independent – No help, setup, or supervision',
      'Assistance required',
      'Dependant'
    ]
  },
  fallsRisk: {
    tag: "textarea",
    label: "Falls risk",
    notes: [
      "No falls in last 12 months - (0)",
      "1 fall in last 12 months - (1)",
      "2 falls in last 12 months - (2)",
      "3 or more falls in last 12 months -(3)",
      "-",
      "No assistance (completely independent) with instrumental activities of daily living (eg cooking, housework, laundry)(0)",
      "Supervision with instrumental activities of daily living (eg cooking, housework, laundry)(1)",
      "Some assistance required with instrumental activities of daily living (eg cooking, housework, laundry)(2)",
      "Completely dependent with instrumental activities of daily living (eg cooking, housework, laundry)(3)",
      "-",
      "No unsteadiness observed (0)",
      "minimally unsteady (1)",
      "moderately unsteady (needs supervision) (2)",
      "consistently and severely unsteady (needs constant hands on assistance) (3)",
      "-",
      "0 - 3 Low risk of falls - Further assessment and management if functional/balance problem identified",
      "4 - 9 High risk of falls - Perform the Full FROP-Com assessment and / or corresponding management recommendations",
    ],
    classes: ["falls", "mobility"],
    assessmentClear: true,
  },
  fallsRiskFactors: {
    variation: "multiLikertField",
    label: "Falls Risk Factors",
    propertyResponseFields: {
      fallsRiskFactorVision: [
        "Vision",
        ["Yes","No"],
      ],
      fallsRiskFactorMobility: [
        "Mobility",
        ["Yes","No"],
      ],
      fallsRiskFactorTransfers: [
        "Transfers",
        ["Yes","No"],
      ],
    },
    classes:["falls","mobility"],
    notes:["VISION/HEARING:  Reports/observed difficulty seeing - objects/signs/finding way around; uncorrected visual impairment/does not wear visual aids as recommended",
            "MOBILITY:  Mobility status unknown or appears unsafe/impulsive/forgets gait aid/requires assistance",
            "TRANSFERS:  Transfer status unknown or appears unsafe i.e., over-reaches, impulsive; Requires assistance with transfers"
      ],
    assessmentClear:true
  },
  fallsOther: {
    tag: "textarea",
    notes: [
      "High falls risk",
      "Further falls/environmental risk assessment/intervention required",
      "Falls risk interventions in place",
      "Client has own PERS",
      "Client requires PERS",
    ],
    label: "Falls other",
    classes: ["mobility", "environment", "falls"],
    assessmentClear: true,
  },
  mobilityOther: {
    tag: "textarea",
    label: "Mobility other",
    classes: ["mobility", "falls", "largeText"],
    assessmentClear: true,
  },
  mobilitySupportPlanFactors: {
    tag: "textarea",
    label: "Mobility support plan FACTORS",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Client has experienced numerous falls recently.",
      "Client has an increased falls risk",
      "Client's mobility is impaired secondary to ___",
      "Client has had no falls recently.",
      "Client mobilises independently with/without mobility aids.",
      "Client has increased risk for deconditioning of muscle strength and functional balance.",
    ],
  },
  mobilitySupportPlanGoals: {
    tag: "textarea",
    label: "Mobility support plan GOALS",
    classes: ["carePlan", "mobility", "goals", "falls", "largeText"],
    notes: [
      "Falls will be prevented.",
      "Improvement in functional mobility and improvements in pain management.",
      "Client will report he/she feels safe and confident when ambulating.",
    ],
  },
  mobilitySP_Client: {
    tag: "textarea",
    label: "Mobility support plan CLIENT",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Client will participate in his/her home exercise program as per physiotherapy plan.",
      "Client will use his/her mobility aid as recommended by his/her Physiotherapist.",
      "Client to wear appropriate footwear (as per Stay on Your Feet information)"
    ],
  },
  mobilitySupportPlanInterventions: {
    tag: "textarea",
    label: "Mobility support plan SUPPORTS",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Southern Plus will facilitate referral for Physiotherapy.",
      "Southern Plus will provide support to hire ___",
      "Southern Plus support workers will provide standby assists with mobility ___",
      "SUpport workers will encourage client to use her walking aid.",
      "Support workers will [address medical needs to prevent falls as required]",
      "Support workers will check and encourage client to wear appropriate footwear (information to be included in home folder.)",
      "Support workers will check that walkways are well lit and uncluttered/free of tripping hazards within client's home.",
    ],
  },
  mobilitySP_WellnessPartner: {
    tag: "textarea",
    label: "Mobility support plan WELLNESS PARTNER",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Southern Plus will facilitate referral for Physiotherapy.",
      "Southern Plus will provide support to hire ___",
      "Southern Plus will assist client with transport needs by ___",
    ],
  },
  mobilityReview: {
    tag: "textarea",
    label: "Mobility",
    classes: ["review", "mobility", "falls", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  transportFactors: {
    tag: "textarea",
    label: "Transport FACTORS",
    classes: ["mobility", "carePlan", "largeText"],
    notes: [
      "Client is not able to drive secondary to ____",
      "Client is unable to access the community without assistance secondary to _____",
      "Client is currently accessing the TUSS.",
    ],
  },
  transportGoals: {
    tag: "textarea",
    label: "Transport GOALS",
    classes: ["mobility", "carePlan", "goals", "largeText"],
    notes: [
      "Client will be able to access the community to attend medical and allied health appointments.",
    ],
  },
  transportSP_Client: {
    tag: "textarea",
    label: "Transport CLIENT",
    classes: ["mobility", "carePlan", "largeText"],
    notes: [
      "Client will contact Southern Plus office to advise of transport requirements providing as much notice as possible for requirements to be met.",
      "____ will provide transport assistance for client.",
    ],
  },
  transportSupportPlanFactors: {
    tag: "textarea",
    label: "Transport SUPPORTS",
    classes: ["mobility", "carePlan", "largeText"],
    notes: [
      "Southern Plus support workers will provide transport to appointments as required within capacity of HCP funding.",
      "Southern Plus will facilitate payment for wheelchair taxi services when these are not co funded by TUSS.",
      "Southern Plus Support workers will prompt/assist client to stay up to date with his/her medical/health related appointments and prompt him/her /assist him/her to notify the office to schedule transport.",
    ],
  },
  transportSP_WellnessPartner: {
    tag: "textarea",
    label: "Transport WELLNESS PARTNER",
    classes: ["mobility", "carePlan", "largeText"],
  },
  transportReview: {
    tag: "textarea",
    label: "Transport",
    classes: ["review", "mobility", "carePlan", "largeText"],
    notes: ["Care plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  mobilityFallsNeeds: {
    tag: "textarea",
    label: "Mobility and falls needs",
    classes: ["clinical", "falls", "mobility", "largeText"],
    assessmentClear: true,
  },
  mobilityFallsActions: {
    tag: "textarea",
    label: "Mobility and falls actions",
    classes: ["clinical", "falls", "mobility", "largeText"],
    assessmentClear: true,
  },
};
recordsModel.environmentPersonalSafetyData = {
  //environement and personal safety/security
  environment: {
    tag: "textarea",
    label: "Environmental",
    notes: [
      "Client reports working smoke alarms and RCD.",
      "Walkways uncluttered and clear of tripping hazards and rooms well lit.",
      "Client reports that he/she is able to sit to stand without undue effort to and from toilet/chairs and bed.",
      "Unmitigated hazards present (identify) and discussed with client who has/has_not agreed to occupational therapy referral or rectification.",
      "Dementia/Age related risks and emergency response plans/exiting the home/responding to alarms etc....",
    ],
    classes: ["mobility", "environment", "falls", "largText"],
    assessmentClear: true,
  },
  environmentFunctionalSafety: {
    tag: "textarea",
    label: "Environment Functional safety",
    default: "",
    classes: ["environment", "largText"],
    assessmentClear: true,
  },
  otherEquipmentUsed: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Shower chair/stool",
      "Over toilet seat",
      "High back chair",
      "Utility chair",
      "Recliner chair",
      "Hospital bed",
      "None"
    ],
    label: "Other equipment used",
    classes: ["mobility", "environment", "falls"],
    assessmentClear: true,
  },
  otherEquipmentRequired: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Shower chair/stool",
      "Over toilet seat",
      "High back chair",
      "Utility chair",
      "Recliner chair",
      "Hospital bed",
      "None"
    ],
    label: "Other equipment required",
    classes: ["mobility", "environment", "falls"],
    assessmentClear: true,
  },
  homeModificationsInstalled: {
    tag: "select",
    multiple: true,
    selectOptions: ["Railing toilet", "Railing bathroom", "Ramps", "Other", "None"],
    label: "Home modifications installed",
    classes: ["mobility", "environment", "falls"],
    assessmentClear: true,
  },
  homeModificationsRequired: {
    tag: "select",
    multiple: true,
    selectOptions: ["Railing toilet", "Railing bathroom", "Ramps", "Other", "None"],
    label: "Home modifications required",
    classes: ["mobility", "environment", "falls"],
    assessmentClear: true,
  },
  environmentSupportPlanFactors: {
    tag: "textarea",
    label: "Environment support plan FACTORS",
    classes: ["carePlan", "environment", "largeText"],
    notes: [
      "Client is at increased risk of falls and would benefit from review of his/her home and living spaces to assess and reduce risk factors.",
      "Client uses home oxygen.",
      "Client's home is well designed and laid out.",
      "Client maintains his/her home in a safe condition.",
      "Client does not live in a bush fire prone area.",
      "Fire risk factors include: ",
      "Client is at increased risk of heat related illness secondary to age related physiological and functional decline.",
    ],
  },
  environmentSupportPlanGoals: {
    tag: "textarea",
    label: "Environment support plan GOALS",
    classes: ["carePlan", "environment", "goals", "largeText"],
    notes: [
      "Environmental risks will be identified, reduced/mitigated.",
      "Client will be able to explain what strategies he/she plans to employ to stay cool and hydrated during extreme hot weather conditions.",
      "Client will be able to articulate her action plan to stay informed about fire emergency's and when and how she will evacuate if required.",
    ],
  },
  environmentSP_Client: {
    tag: "textarea",
    label: "Environment support plan CLIENT",
    classes: ["carePlan", "environment", "largeText"],
    notes: [
      "Client will take precautions to prevent overheating and dehydration during extreme heat weather conditions.",
      "Client will make emergency plan's to stay informed during high risk fire season and when and how to evacuate if required.  Client will review these annually.",
      "Client will perform their own risk and hazard assessments and seek support from WP to manage these when identified."
    ],
  },
  environmentSupportPlanInterventions: {
    tag: "textarea",
    label: "Environment support plan SUPPORTS",
    classes: ["carePlan", "environment", "largeText"], 
    notes: [
      "Interventions applicable for home oxygen use.",
      "Southern Plus support workers will prompt and support Client to action strategies to keep cool and hydrated during extreme heat weather conditions.",
      "SCC staff will conduct risk assessment at each home visit and report hazards and incidents.",
      "SCC staff will follow guidelines for safety in the home when oxygen concentrator/bottles are in use."
    ],
  },
  environmentSP_WellnessPartner: {
    tag: "textarea",
    label: "Environment support plan WELLNESS PARTNER",
    classes: ["carePlan", "environment", "largeText"],
    notes: [
      "Wellness Partner will make a referral to ___ for Occupation Therapy home safety assessment and facilitate provision of home modifications and equipment according to HCP inclusion/exclusion framework.",
      "Wellness Partener will discuss fire and emergency plans with client on admission and review annually.",
      "Wellness Partner will ensure that client has current up to date information about fire safety in the home or information on where to access this.",
      "Wellness Partner will ensure that client has current up to date information about oxygen use safety in the home or information on where to access this."
    ],
  },
  environmentReview: {
    tag: "textarea",
    label: "Environment",
    classes: ["review", "environment", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  PERS: {
    variation: "singleLikertField",
    label: "PERS",
    propertyResponseFields: {
      persStatus: [
        "Personal Emergeny Response System",
        ["Installed", "Required", "Not required"],
      ],
    },
    classes: ["environment", "falls"],
    assessmentClear: true,
  },
  personalSafetySupportPlanFactors: {
    tag: "textarea",
    label: "Personal safety support plan FACTORS",
    classes: [
      "carePlan",
      "environment",
      "falls",
      "communicationSensory",
      "largeText",
    ],
    notes: [
      "Client is at increased risk of medical emergency and falls and is often at home alone.",
      "Potential for delayed access to emergency services.",
      "Potential emergency situations: ",
    ],
  },
  personalSafetySupportPlanGoals: {
    tag: "textarea",
    label: "Personal safety support plan GOALS",
    classes: [
      "carePlan",
      "environment",
      "falls",
      "communicationSensory",
      "goals",
      "largeText",
    ],
    notes: [
      "Client will have the ability to gain timely access to emergency services as needed.",
      "Client's PERS will be functional when tested.",
      "Client will be demonstrate emergency response preparedness and have a plan in place in the event of a fire or other emergency situation.",
    ],
  },
  personalSafetySP_Client: {
    tag: "textarea",
    label: "Personal safety support plan CLIENT",
    classes: [
      "carePlan",
      "environment",
      "falls",
      "communicationSensory",
      "largeText",
    ],
    notes: [
      "Client will wear his/her PERS pendant at all times and keep it charged if needed.",
      "Client will test his/her PERS pendant monthly to ensure it is functional.",
      "Client will wear Personal Emergency Response pendant and ensure the battery is charged and renew sim card activation each year if required.",
      "Client identify potential emergency situations and make a plan to enact in case of an emergency and ensure that preparations are made accordingly.",
    ],
  },
  personalSafetySupportPlanInterventions: {
    tag: "textarea",
    label: "Personal safety support plan SUPPORTS",
    notes: [
      "Support workers will prompt client to check that he/she is wearing their PERS device, it is charged and functional",
      "Support workers will prompt client to lock his/her security door and/or windows at the end of each visit.",
      "Support workers will report any security concerns to the Wellness Partner.",
      "Support workers will be aware of clients emergency response plans and support clients to enact them in the event of an emergency if they are present.",
      "Southern Plus will facilitate the hire of a mobile pendant PERS that is monitored through Blue Assist.",
    ],
    classes: [
      "carePlan",
      "environment",
      "falls",
      "communicationSensory",
      "largeText",
    ],
  },
  personalSafetySP_WellnessPartner: {
    tag: "textarea",
    label: "Personal safety support plan WELLNESS PARTNER",
    classes: [
      "carePlan",
      "environment",
      "falls",
      "communicationSensory",
      "largeText",
    ],
    notes: [
      "Wellness Partner will arrange for quote and purchase of wrist based PERS, with geolocating capabilities.",
      "Wellness partner will review and assist client to ensure that he/she has an effective Personal Emergency Response system.",
      "Wellness partner will work with client to identify potential emergency situations and support them to make emergency response plans and be prepared for the eventuality.",
    ],
  },
  personalSafetyReview: {
    tag: "textarea",
    label: "Personal safety",
    classes: [
      "review",
      "environment",
      "carePlan",
      "falls",
      "communicationSensory",
      "largeText",
    ],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.carerData = {
  //carers
  carer: {
    tag: "textarea",
    label: "Carer factors/carer strain",
    classes: ["carer"],
    assessmentClear: true,
  },
  carerSupportPlanFactors: {
    tag: "textarea",
    label: "Carer support plan FACTORS",
    classes: ["carePlan", "carer", "largeText"],
    notes: [
      "High risk of carer strain related to ____",
      "Carer strain related to ____.",
    ],
  },
  carerSupportPlanGoals: {
    tag: "textarea",
    label: "Carer support plan GOALS",
    classes: ["carePlan", "carer", "goals", "largeText"],
    notes: [
      "Carer will report that they feel less burdened, have more time to attend to their own health, social and or personal needs and goals.",
      "Client and his/her carer will both report that their relationship is effective/supportive and sustainable.",
    ],
  },
  carerSP_CLient: {
    tag: "textarea",
    label: "Carer support plan CLIENT",
    classes: ["carePlan", "carer", "largeText"],
    notes: [
      "Client and client's family will report and seek assistance via Carers Gateway 1800 422 737, \r\n Southern Plus - for respite services\r\nif the caring role is becoming stressful",
    ],
  },
  carerSupportPlanInterventions: {
    tag: "textarea",
    label: "Carer support plan SUPPORTS",
    classes: ["carePlan", "carer", "largeText"],
    notes: [],
  },
  carerSP_WellnessPartner: {
    tag: "textarea",
    label: "Carer support plan WELLNESS PARTNER",
    classes: ["carePlan", "carer", "largeText"],
    notes: [
      "Wellness Partner will provide guidance and support for ________  to access Carers Gateway resources including Care Gateway Coaching.",
      "Southern Plus - to arrange respite services if required/requested",
    ],
  },
  carerReview: {
    tag: "textarea",
    label: "Carer",
    classes: ["review", "carer", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.personalCareData = {
  //personal care
  PersonalCare: {
    tag: "select",
    multiple: true,
    label: "Full support ADLs:",
    selectOptions: [
      "Dressing/undressing",
      "Hygiene: washing, showering, teeth/dentures",
      "Toileting: use of aids, clothing, cleaning, washing hands",
      "Grooming: shaving, hair, makeup...",
      "Putting on glasses and/or hearing aids",
      "Eating and or drinking: cutting up meals, feeding",
      "Meal preparation",
    ],
    classes: [
      "personalCare",
      "nutrition",
      "communication",
      "largeText",
      "assessment",
    ],
  },
  personalCareSupportPartial: {
    tag: "select",
    multiple: true,
    label: "Occasional/partial support ADLs:",
    selectOptions: [
      "Dressing/undressing",
      "Hygiene: washing, showering, teeth/dentures",
      "Toileting: use of aids, clothing, cleaning, washing hands",
      "Grooming: shaving, hair, makeup...",
      "Putting on glasses and/or hearing aids",
      "Eating and or drinking: cutting up meals, feeding",
      "Meal preparation",
    ],
    classes: [
      "personalCare",
      "nutrition",
      "communication",
      "largeText",
      "assessment",
    ],
  },
  personalCareSupportIndependent: {
    tag: "select",
    multiple: true,
    label: "Independent ADLs:",
    selectOptions: [
      "Dressing/undressing",
      "Hygiene: washing, showering, teeth/dentures",
      "Toileting: use of aids, clothing, cleaning, washing hands",
      "Grooming: shaving, hair, makeup...",
      "Putting on glasses and/or hearing aids",
      "Eating and or drinking: cutting up meals, feeding",
      "Meal preparation",
    ],
    classes: [
      "personalCare",
      "nutrition",
      "communication",
      "largeText",
      "assessment",
    ],
  },
  PersonalCareOther: {
    tag: "textarea",
    label: "Personal care other",
    classes: ["personalCare", "largeText"],
    assessmentClear: true,
    notes: [],
  },
  personalCareSupportPlanFactors: {
    tag: "textarea",
    label: "Personal care support plan FACTORS",
    classes: ["carePlan", "personalCare", "largeText"],
    notes: [
      "Client has difficulty completing self care tasks independently secondary to ___",
      "Client is independent with all personal care tasks.",
      "Client uses railing and Showering equipment to help him/her maintain his/her independence and safety while attending to his/her own personal care.",
    ],
  },
  personalCareSupportPlanGoals: {
    tag: "textarea",
    label: "Personal care support plan GOALS",
    classes: ["carePlan", "personalCare", "goals", "largeText"],
    notes: [
      "Client will maintain independence with personal care.",
      "Client will report he/she is maintaining a satisfactory level of personal hygiene/dress and grooming.",
    ],
  },
  personalCareSP_Client: {
    tag: "textarea",
    label: "Personal care support plan CLIENT",
    classes: ["carePlan", "personalCare", "largeText"],
    notes: [
      "Client will contiune to attend to his/her own personal care.",
      "Client will wait for the support worker and shower when they are present when he/she feels unsafe to do it on his/her own.",
    ],
  },
  personalCareSupportPlanInterventions: {
    tag: "textarea",
    label: "Personal care support plan SUPPORTS",
    classes: ["carePlan", "personalCare", "largeText"],
    notes: [
      "Southern Plus support workers will assist client with personal care x days per week.",
      "Southern Plus will arrange for home visiting podiatry approx 8 weekly.",
      "Southern Plus support workers will SET and MONITOR WATER TEMPERATURE AND FLUCTUATIONS AT ALL TIMES.",
    ],
  },
  personalCareSP_WellnessPartner: {
    tag: "textarea",
    label: "Personal care support plan WELLNESS PARTNER",
    classes: ["carePlan", "personalCare", "largeText"],
    notes: [
      "Southern Plus support workers will assist client with personal care x days per week.",
    ],
  },
  personalCareReview: {
    tag: "textarea",
    label: "Personal care",
    classes: ["review", "personalCare", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.mealsNutritionData = {
  //meals and shopping
  financesOther: {
    tag: "textarea",
    label: "Finances other",
    classes: ["domestic", "psychological", "social", "largeText"],
    assessmentClear: true,
    default: ["Person responsible for finances: Client/Spouse/EPOA"],
  },
  shoppingOther: {
    tag: "textarea",
    label: "Shopping other",
    classes: ["nutrition", "largeText"],
    assessmentClear: true,
  },
  mealsOther: {
    tag: "textarea",
    label: "Meals other",
    classes: ["nutrition", "largeText"],
    assessmentClear: true,
  },
  mealsAndShoppingSupportPlanFactors: {
    tag: "textarea",
    label: "Meals/shopping support plan FACTORS",
    classes: ["carePlan", "nutrition", "largeText"],
    notes: [
      "Client is able to prepare and cook his/her own meals.",
      "Client has a self care deficit related to meal preparation secondary to ___",
      "Client has a self care deficit related to shopping secondary to ___",
    ],
  },
  mealsAndShoppingSupportPlanGoals: {
    tag: "textarea",
    label: "Meals/shopping support plan GOALS",
    classes: ["carePlan", "nutrition", "goals", "largeText"],
    notes: [
      "Client will be adequately nourished and hydrated.",
      "Client will report he/she is able to access the community to do his/her weekly shopping.",
    ],
  },
  mealsAndShoppingSP_Client: {
    tag: "textarea",
    label: "Meals/shopping support plan CLIENT",
    classes: ["carePlan", "nutrition", "largeText"],
    notes: [
      "_____ will complete shopping general food items and supervise client with his/her meals/nutritional intake on a day to day basis.",
      "Client will contribute to the set up, cost of the food portion of and ongoing ordering of meals.",
      "_____ will contribute and prepare some home cooked meals to supplement home delivered meals.",
      "Client is able to prepare his/her own simple meals and snacks.",
      "Client's family will support client with meal preparation.",
      "Client will contribute to the set up, cost of the food portion of and ongoing ordering of home delivered meals.",
      "Client will participate in weekly/fortnightly shopping by - ",
      "Client will make a weekly shopping list in preperation for shopping service.",
    ],
  },
  mealsAndShoppingSupportPlanInterventions: {
    tag: "textarea",
    label: "Meals/shopping support plan SUPPORTS",
    classes: ["carePlan", "nutrition", "largeText"],
    notes: [
      "Southern Plus will facilitate the provision of prepared and home delivered meals through ___.",
      "Southern Plus support workers will assist client with shopping by list each week/fortnight.",
      "Southern Plus support workers will assist Client with shopping each week on <day> by supporting him/her to make a list, do the shopping and put away at home.",
    ],
  },
  mealsAndShoppingSP_WellnessPartner: {
    tag: "textarea",
    label: "Meals/shopping support plan WELLNESS PARTNER",
    classes: ["carePlan", "nutrition", "largeText"],
    notes: [
      "Southern Plus will facilitate the provision of prepared and home delivered meals through ___.",
    ],
  },
  mealsAndShoppingReview: {
    tag: "textarea",
    label: "Meals and shopping",
    classes: ["review", "nutrition", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  //nutrition
  eating: {
    tag: "textarea",
    label: "Eating",
    classes: ["nutrition", "largeText"],
    assessmentClear: true,
    notes: [],
  },
  nutritionalIntake: {
    tag: "textarea",
    label: "Nutritional intake",
    notes: [
      "Percentage of meals eaten\nDinner:\nLunch:\nBreakfast:\nSnacks:\nFeeding:",
      "24-hour recall",
      "Food frequency questionnaire",
      "Food group questionnaire",
    ],
    classes: ["nutrition", "falls", "woundProgress", "largeText"],
    assessmentClear: true,
  },
  mst: {
    tag: "textarea",

    notes: [
      "No weight loss in last six months (0)",
      "Client has lost 1-5kg weight in the last six months without trying (1)",
      "Client has lost 6-10kg weight in the last six months without trying (2)",
      "Client has lost 11-15kg weight in the last six months without trying (3)",
      "Client has lost >15kg weight in the last six months without trying (4)",
      "Unsure of weight loss in last six months. (2)",
      "---",
      "Client has been eating three quarters or more of usual intake and no loss of appetite (0)",
      "Client been eating poorly (for example, less than three quarters of usual intake) because of a decreased appetite (1)",
      "---",
      "0 - 1 Low risk of malnutrition - is eating well with no recent weight loss",
      "2 Medium risk of malnutrition - is eating poorly AND experienced recent weight loss of less than 5kg",
      "3-5 High risk of malnutrition - is eating poorly AND experienced recent weight loss of more than 5kg",
    ],
    label: "MST",
    classes: ["nutrition", "largeText"],
    assessmentClear: true,
    default:
      "The significance of the amount of weight loss will depend on the body weight of the resident.  For instance, a 3kg weight loss in a 40kg resident is significant",
  },
  oral: {
    tag: "textarea",
    label: "Oral",
    notes: [
      "Client has his/her own teeth",
      "Client has full denture.",
      "Client has partial denture",
      "No dental or oral issues.",
    ],
    classes: ["nutrition"],
    assessmentClear: true,
  },
  swallow: {
    tag: "textarea",
    label: "Swallow",
    classes: ["nutrition"],
    assessmentClear: true,
    notes: [
      "Client reports no swallowing problem.",
      "Further assessment/swallowing screen indicated.",
      "Referral to speach pathologist indicated.",
    ],
  },
  nutritionNeeds: {
    tag: "textarea",
    label: "Nutrition needs",
    classes: ["clinical", "nutrition", "largeText"],
    assessmentClear: true,
  },
  nutritionNeedsActions: {
    tag: "textarea",
    label: "Nutrition actions",
    classes: ["clinical", "nutrition", "largeText"],
    assessmentClear: true,
  },
};
recordsModel.biometricsData = {
  //Biometrics
  weight: {
    tag: "input",
    label: "Weight",
    type: "text",
    classes: ["biometrics", "nutrition"],
    assessmentClear: true,
  },
  pulse: {
    tag: "input",
    label: "Pulse",
    type: "text",
    classes: ["biometrics"],
    assessmentClear: true,
  },
  temperature: {
    tag: "input",
    label: "Temperature",
    type: "text",
    classes: ["biometrics"],
    assessmentClear: true,
  },
  respiratoryRate: {
    tag: "input",
    label: "Respiratory rate",
    type: "text",
    classes: ["biometrics"],
    assessmentClear: true,
  },
  bloodPressure: {
    tag: "input",
    label: "Blood pressure",
    type: "text",
    classes: ["biometrics"],
    assessmentClear: true,
  },
  bloodGlucose: {
    tag: "input",
    label: "Blood glucose",
    type: "text",
    classes: ["biometrics"],
    assessmentClear: true,
  },
  oxygenSaturation: {
    tag: "input",
    label: "Oxygen saturation",
    type: "text",
    classes: ["biometrics"],
    assessmentClear: true,
  },
  headToToe: {
    tag: "textarea",
    label: "Head to toe",
    classes: [
      "biometrics",
      "skin",
      "communicationSensory",
      "largeText",
      "assessment",
    ],
  },
};
recordsModel.domesticAssistanceData = {
  //cleaning
  cleaningAndHGM: {
    tag: "textarea",
    label: "Cleaning and HGM",
    default: "",
    classes: ["domestic", "largText"],
    assessmentClear: true,
  },
  cleaningSupportPlanFactors: {
    tag: "textarea",
    label: "Cleaning support plan FACTORS",
    classes: ["carePlan", "domestic", "largeText"],
    notes: ["Self care deficit related to household cleaning secondary to ___"],
  },
  cleaningSupportPlanGoals: {
    tag: "textarea",
    label: "Cleaning support plan GOALS",
    classes: ["carePlan", "domestic", "goals", "largeText"],
    notes: [
      "Clients home environment will be maintained in a clean and tidy state.",
    ],
  },
  cleaningSP_Client: {
    tag: "textarea",
    label: "Cleaning support plan CLIENT",
    classes: ["carePlan", "domestic", "largeText"],
    notes: [
      "Client will continue to ______ around the home.",
      "Client's family will support him/her with domestic assistance by ____",
    ],
  },
  cleaningSupportPlanInterventions: {
    tag: "textarea",
    label: "Cleaning support plan SUPPORTS",
    classes: ["carePlan", "domestic", "largeText"],
    notes: [
      "Southern Plus support workers will provide assistance with cleaning weekly/fortnightly for __ hours.",
      "Cleaning tasks will include\n\nSupport workers will assist with other household tasks as as requested by client as time permits and utilise any spare time to identify other jobs that need doing (empty/put out bins, tidy clean the fridge/microwave/dusting surfaces/skirting/window sills etc.)",
    ],
  },
  cleaningSP_WellnessPartner: {
    tag: "textarea",
    label: "Cleaning support plan WELLNESS PARTNER",
    classes: ["carePlan", "domestic", "largeText"],
    notes: [],
  },
  cleaningReview: {
    tag: "textarea",
    label: "Cleaning",
    classes: ["review", "domestic", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
  //HGM
  HGMSupportPlanFactors: {
    tag: "textarea",
    label: "Home and garden plan FACTORS",
    classes: ["carePlan", "domestic", "largeText"],
    notes: [
      "Self care deficit related to maintenance of safe, accessible outdoor areas and access to the home secondary to ___.",
    ],
  },
  HGMSupportPlanGoals: {
    tag: "textarea",
    label: "Home and garden plan GOALS",
    classes: ["carePlan", "domestic", "goals", "largeText"],
    notes: ["Clients home will be accessable and safe"],
  },
  HGMSP_Client: {
    tag: "textarea",
    label: "Home and garden support plan CLIENT",
    classes: ["carePlan", "domestic", "largeText"],
    notes: ["Southern plus will facilitate monthly gardening services."],
  },
  HGMSupportPlanInterventions: {
    tag: "textarea",
    label: "Home and garden support plan SUPPORTS",
    classes: ["carePlan", "domestic", "largeText"],
    notes: ["Southern plus will facilitate monthly gardening services."],
  },
  HGMSP_WellnessPartner: {
    tag: "textarea",
    label: "Home and garden support plan WELLNESS PARTNER",
    classes: ["carePlan", "domestic", "largeText"],
    notes: ["Southern plus will facilitate monthly gardening services."],
  },
  HGMReview: {
    tag: "textarea",
    label: "Home and Garden",
    classes: ["review", "domestic", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};
recordsModel.referralData = {
  referrals: {
    variation: "multiLikertField",
    label: "Referrals",
    propertyResponseFields: {
      ptReferralStatus: [
        "PT referral",
        ["Completed", "Required", "Not required", "NA"],
      ],
      otReferralStatus: [
        "OT referral",
        ["Completed", "Required", "Not required", "NA"],
      ],
      gpReferralStatus: [
        "GP referral",
        ["Completed", "Required", "Not required", "NA"],
      ],
      podiatryReferralStatus: [
        "Podiatry referral",
        ["Completed", "Required", "Not required", "NA"],
      ],
      dieticianReferralStatus: [
        "Dietician referral",
        ["Completed", "Required", "Not required", "NA"],
      ],
      speachReferralStatus: [
        "Speach pathologist referral",
        ["Completed", "Required", "Not required", "NA"],
      ],
      nursingReferralStatus: [
        "Nursing referral",
        ["Completed", "Required", "Not required", "NA"]
      ]
    },
    classes: [
      "medical",
      "skin",
      "environment",
      "mobility",
      "referral",
      "clinical",
      "falls",
      "nutrition",
      "pain",
      "psychological",
      "medication",
      "assessment",
    ],
    notes: [],
    assessmentClear: true,
  },
  referralsComments: {
    tag: "textarea",
    label: "Referrals comments",
    classes: [],
    forms: ["referrals", "newForm"],
    notes: [
      "OT referral and follow up of recommendations for pressure injury prevention/management devices",
      "OT referral and follow up of recommendations for environmental/seating/functional home safety review",
      "OT referral and follow up of recommendations for pain management equipment",
      "PT referral and follow up for falls prevention and mobility assessment.",
      "PT referral and follow up for mobility equipment assessment/recommendations.",
      "PT referral and follow up for pain management.",
      "GP referral and follow up for HMMR - information provided to client",
      "GP referral and follow up for nutritional review",
      "GP referral and follow up for review of vaccination status.",
      "GP referral and follow up for review chronic disease management plans including access to urgent medical attention",
    ],
  },
};
recordsModel.additionalAssessments = {
  additionalAssessments: {
    variation: "multiLikertField",
    label: "Additional Assessments",
    propertyResponseFields: {
      communicationAssessmentStatus: [
        "Communication Ax",
        ["Completed", "Required", "Not required"],
      ],
      continenceAssessmentStatus: [
        "Continence Ax",
        ["Completed", "Required", "Not required"],
      ],
      depressionScreenStatus: [
        "Depression screen",
        ["Completed", "Required", "Not required"],
      ],
      fallsRiskAssessmentStatus: [
        "Falls Risk",
        ["Completed", "Required", "Not required"],
      ],
      functionalAdlAssessmentStatus: [
        "Functional ADL Ax",
        ["Completed", "Required", "Not required"],
      ],
      hierarchicDemetiaScaleStatus: [
        "Hierarchic Dementia Scale Ax",
        ["Completed", "Required", "Not required"],
      ],
      MedicationManagementAssessmentStatus: [
        "Medication management Ax",
        ["Completed", "Required", "Not required"],
      ],
      mmseStatus: ["MMSE", ["Completed", "Required", "Not required"]],
      painAssessmentStatus: [
        "Pain Ax",
        ["Completed", "Required", "Not required"],
      ],
      pressureInjuryRiskAssessmentStatus: [
        "Pressure injury risk Ax",
        ["Completed", "Required", "Not required"],
      ],
      psychgeriatricAssessmentScaleStatus: [
        "Psychogeriatric Ax scale",
        ["Completed", "Required", "Not required"],
      ],
    },
    consolidateRecords: false,
    classes: [
      "assessment",
      "bogus",
      "medical",
      "carer",
      "communicationSensory",
      "medication",
      "psychological",
      "social",
      "personalCare",
      "mobility",
      "pain",
      "elimination",
      "environment",
      "falls",
      "clinical",
      "nutrition",
    ],
    assessmentClear: true,
  },
};
recordsModel.forms = {
  frailtyIndicators: {
    variation: "form",
    label: "Quick review (frailty changes)",
    formFields: {
      mobilityChanges: {
        tag: "textarea",
        label: "Mobility changes",
        notes: [
          "Client reports no changes to mobility",
          "WP/RN has observed client mobilising as per baseline.",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      acuteIllnessRecent: {
        tag: "textarea",
        label: "Recent acute illness",
        notes: [
          "Client reports hospital: ",
          "Client reports new medical issues: ",
          "Client reports chronic illness exacerbations: ",
          "No new issues.",
          "Client describes his/her health as excellent/very good/good/fair/poor.",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      medicationChanges: {
        tag: "textarea",
        label: "Medication changes",
        notes: [
          "Client reports no medication changes.",
          "Medication changes: ",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      recentFalls: {
        tag: "textarea",
        label: "Recent falls",
        notes: ["Client reports no new falls incidents since last review"],
        assessmentClear: true,
        reviewClear: true,
      },
      dietaryChanges: {
        tag: "textarea",
        label: "Dietary changes",
        notes: [
          "Client reports changes to appetite: ",
          "Client reports changes food and Fluid intake: ",
          "Client reports weight changes: ",
          "Client reports no new changes, dietary intake and weight stable.",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      fatigue: {
        tag: "textarea",
        label: "Fatigue",
        notes: [
          "Client reports feeling tired all or most of the time.",
          "Client reports feeling tired some, little or none of the time.",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      socialSupport: {
        tag: "textarea",
        label: "Social support",
        notes: [
          "Client reports there is someone who he/she can count on who is willing and able to meet his/her needs.",
          "Client reports there has been changes to his/her level of social support:",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      functionalIndependence: {
        tag: "textarea",
        label: "Functional independence",
        notes: [
          "Client reports there has been no changes to what he/she can and cannot do independently.",
          "Client reports there has been changes what he/she can and cannot do independently:",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      moodMentation: {
        tag: "textarea",
        label: "Mood and Mentation",
        notes: [
          "Client is alert and orientated",
          "Cllient denies any cognitive changes.",
          "Client reports there has been no changes to his/her mood.",
          "Client reports there has been changes to his/her mood:",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      continence: {
        tag: "textarea",
        label: "Continence",
        notes: [
          "Client reports he/she is not experincing any new incontinence.",
          "Client reports there has been changes to his/her continence:",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
    },
    classes: ["review"],
    reviewPrint: true,
  },
  woundProgress: {
    variation: "form",
    label: "Wound progress",
    formFields: {
      woundExudate: {
        tag: "textarea",
        label: "Exudate",
        notes: [
          "Exudate amount and quality consistent with last assessment.",
          "Increase in amount of exudate in comparison to last assessment.",
          "Decrease in exudate in comparison to last assessment.",
        ],
        assessmentClear: true,
        reviewClear: true,
      },
      periWound: {
        tag: "textarea",
        label: "Peri wound",
        notes: ["No changes", "Increased redness around wound."],
        assessmentClear: true,
        reviewClear: true,
      },
      woundEdges: {
        tag: "textarea",
        label: "Wound edges",
        notes: ["No changes."],
        assessmentClear: true,
        reviewClear: true,
      },
      woundBase: {
        tag: "textarea",
        label: "Wound base",
        notes: ["No changes"],
        assessmentClear: true,
        reviewClear: true,
      },
      woundCareActions: {
        tag: "textarea",
        label: "Actions",
        notes: ["Wound care as per wound care plan.", "Referral made to GP."],
        assessmentClear: true,
        reviewClear: true,
      },
    },
    classes: ["skin"],
  },
  dignityOfRisk: {
    variation: "form",
    label: "Dignity of risk",
    formFields: {
      sharedRiskActivity: {
        tag: "textarea",
        label: "Shared Risk Activities",
        default: "NA",
        notes: [
          "Clarify risk(s) consider options and mitigation strategies.",
          "What I (or client name) would like to do/not do",
        ],
        hasOwnField: true,
      },
      sharedRiskGoal: {
        tag: "textarea",
        label: "Shared risk goal",
        default: "NA",
        notes: [
          "Support individual preference and dignity of risk, maximise quality of life and care and reduce potential for harm. ",
          "Why I have chosen this and what I hope to achieve: ",
        ],
        hasOwnField: true,
      },
      sharedRiskRisks: {
        tag: "textarea",
        label: "Shared risk: Assoc risks",
        default: "NA",
        notes: [],
        hasOwnField: true,
      },
      sharedRiskStrategies: {
        tag: "textarea",
        label: "Shared risk: Strategies",
        default: "NA",
        notes: [],
        hasOwnField: true,
      },
      sharedRiskReviewDate: {
        tag: "input",
        type: "date",
        label: "Review date.",
        hasOwnField: true,
      },
    },
    classes: ["carePlan", "review"],
  },
  
};
recordsModel.advanceCarePlanning={
  advanceCarePlanningDocuments:{
    variation:"multiLikertField",
    label:'Advanced care plannning documents',
    classes:['contactsMedical'],
    propertyResponseFields:{
      epaStatus: [
        "Client has EPA?",
        ["Yes, details provided", "No, information/referral provided"],
      ],
      epgStatus: [
        "Client has EPG?",
        ["Yes, details provided", "No, information/referral provided"],
      ],
      ahdStatus: [
        "Client has AHD?",
        ["Yes, details provided", "No, information/referral provided","No, dignity of risk"],
      ]
    },
  },
  advanceCarePlanningComments:{
    tag:'textarea',
    label:'ACP comments',
    forms:['advanceCarePlanningDocuments'],
    classes:['largeText'],
    notes:["Advanced careplanning information provided re availability of EPA/EPG and AHD."]
  }
},
recordsModel.reviewData = {
  // REVIEW ______________________________________________________________
  // medicalReview: {
  //   tag: "textarea",
  //   label: "Medical",
  //   classes: ["review", "medical", "largeText"],
  //   notes: ["No changes. Support plan current and effective."],
  //   reviewClear: true,
  // },
  otherReviewNotes: {
    tag: "textarea",
    label: "Other review notes",
    classes: ["review", "largeText", "frailtyIndicators"],
    notes: [
      "PCT client.",
      "PCT client's NOK. ",
      "Client alert and orientated at time of interview.",
      "Client reports that his/her care needs and goals as per support plan are being met.",
    ],
    reviewClear: true,
    form: "frailtyIndicators",
    hasOwnField: true,
  },
  followUpsElement: {
    tag: "textarea",
    label: "Follow up notes.",
    classes: ["followUp", "review", "largeText"],
    reviewClear: true,
    reviewPrint: true,
  },
  servicePreferences: {
    tag: "textarea",
    label: "Service preferences",
    classes: ["chsp", "carePlan", "largeText"],
  },

  advancedCarePlanReview: {
    tag: "input",
    label: "ACP last reviewed",
    type: "date",
    classes: ["review"],
    reviewPrint: true,
  },
  budgetLastSigned: {
    tag: "input",
    type: "date",
    label: "Budget last signed",
    classes: ["review"],
    reviewPrint: true,
  },
  supportPlanLastSigned: {
    tag: "input",
    type: "date",
    label: "Support plan last signed",
    classes: ["review"],
    reviewPrint: true,
  },
  readyForHospitalReview: {
    tag: "input",
    type: "date",
    label: "Ready for hospital reviewed",
    classes: ["review"],
    reviewPrint: true,
  },
  emergencyPlanReviewed: {
    tag: "input",
    type: "date",
    label: "Emergency plan last reviewed",
    classes: ["review"],
    reviewPrint: true,
  },
  visualHomeSafetyReviewed: {
    tag: "input",
    type: "date",
    label: "Visual home safety last reviewed",
    classes: ["review"],
    reviewPrint: true,
  },
};
recordsModel.clinicalCarePlan = {
  clinicalSupportPlanFactors: {
    tag: "textarea",
    label: "Clinical support plan FACTORS",
    classes: [
      "carePlan",
      "clinical",
      "communicationSensory",
      "elimination",
      "environment",
      "falls",
      "medical",
      "mobility",
      "nutrition",
      "pain",
      "psychological",
      "skin",
      "largeText",
    ],
    notes: ["AHD status"],
  },
  clinicalSupportPlanGoals: {
    tag: "textarea",
    label: "Clinical support plan GOALS",
    classes: [
      "carePlan",
      "clinical",
      "communicationSensory",
      "elimination",
      "environment",
      "falls",
      "medical",
      "mobility",
      "nutrition",
      "pain",
      "psychological",
      "skin",
      "goals",
      "largeText",
    ],
    notes: [
      "Client will experience good long term foot health.  Foot complications, such as infections will be prevented or identified early and treated.",
    ],
  },
  clinicalSP_Client: {
    tag: "textarea",
    label: "Clinical support plan CLIENT",
    classes: [
      "carePlan",
      "clinical",
      "communicationSensory",
      "elimination",
      "environment",
      "falls",
      "medical",
      "mobility",
      "nutrition",
      "pain",
      "psychological",
      "skin",
      "largeText",
    ],
    notes: [""],
  },
  clinicalSupportPlanInterventions: {
    tag: "textarea",
    label: "Clinical support plan SUPPORTS",
    classes: [
      "carePlan",
      "clinical",
      "communicationSensory",
      "elimination",
      "environment",
      "falls",
      "medical",
      "mobility",
      "nutrition",
      "pain",
      "psychological",
      "skin",
      "largeText",
    ],
    notes: [
      "Southern Plus will facilitate regular 8 weekly podiatry services.",
    ],
  },
  clinicalSP_WellnessPartner: {
    tag: "textarea",
    label: "Clinical support plan WELLNESS PARTNER",
    classes: [
      "carePlan",
      "clinical",
      "communicationSensory",
      "elimination",
      "environment",
      "falls",
      "medical",
      "mobility",
      "nutrition",
      "pain",
      "psychological",
      "skin",
      "largeText",
    ],
    notes: [],
  },
  clinicalReview: {
    tag: "textarea",
    label: "Clinical",
    classes: [
      "review",
      "clinical",
      "communicationSensory",
      "elimination",
      "environment",
      "falls",
      "medical",
      "mobility",
      "nutrition",
      "pain",
      "psychological",
      "skin",
      "carePlan",
      "largeText",
    ],
    notes: ["No changes. Support plan current and effective."],
    reviewClear: true,
    reviewPrint: true,
  },
};

let clientRecordFieldSettings = {
  ...recordsModel.demographicData,
  ...recordsModel.contactsData,
  ...recordsModel.medicalData,
  ...recordsModel.scheduleData,
  ...recordsModel.personalHistoryData,
  ...recordsModel.medicationData,
  ...recordsModel.communicationData,
  ...recordsModel.psychologicalData,
  ...recordsModel.psychosocialData,
  ...recordsModel.painData,
  ...recordsModel.skinData,
  ...recordsModel.eliminationData,
  ...recordsModel.mobilityData,
  ...recordsModel.environmentPersonalSafetyData,
  ...recordsModel.carerData,
  ...recordsModel.personalCareData,
  ...recordsModel.mealsNutritionData,
  ...recordsModel.biometricsData,
  ...recordsModel.domesticAssistanceData,
  ...recordsModel.clinicalCarePlan,
  ...recordsModel.additionalAssessments,
  ...recordsModel.referralData,
  ...recordsModel.forms,
  ...recordsModel.reviewData,
  ...recordsModel.advanceCarePlanning,
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
};
