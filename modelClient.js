//wnen creating a review input textarea the first item in the class list must be "review" and
//the second item must be the relevant category or subpage which will be the parameter for
//setPage() function triggered by a label oncontextmenu event (right click).

let demographicData = {
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
let contactsData = {
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
    classes: ["contactsMedical", "largeText"],
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
};
let medicalData = {
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
    classes: ["medical", "largeText", "assessment"],
    notes: [
      "COVID vaccinations up to date",
      "COVID vaccinations pending",
      "Flu vaccinations up to date.",
      "Flu vaccinations pending.",
      "Shingles vacinations up to date.",
      "Shingles vacinations pending.",
      "Pneumovax vaccinations up to date",
      "Pneumovax vaccinations pending",
      "Tetnus vaccinations up to date.",
      "Tetnus vaccinations pending.",
    ],
  },
  oxygen: {
    tag: "textarea",
    label: "Oxygen",
    default: "Needs:NA\nSupplement:NA",
    classes: ["medical", "assessment"],
  },
  drugsAlcohol: {
    tag: "textarea",
    label: "Drugs and alcohol",
    classes: ["medical", "falls", "assessment"],
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
    classes: ["clinical", "medical", "largeText", "assessment"],
    notes: [
      "Client articulates/has a documented chronic disease management plan including access to urgent medical support",
    ],
  },
  medicalNeedsActions: {
    tag: "textarea",
    label: "Medical actions",
    classes: ["clinical", "medical", "largeText", "assessment"],
    notes: [
      "Southern Plus nurse to provide further support/education/referral to establish chronic disease management plan",
    ],
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
let scheduleData = {
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
};
let personalHistoryData = {
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
};
let medicationData = {
  // medication
  medicationSupport: {
    tag: "select",
    label: "Medication support",
    classes: ["medication", "assessment"],
    selectOptions: [
      "No support required",
      "Carer supports client with medication",
      "Formal support services required administration/prompt",
    ],
  },

  medicationList: {
    tag: "textarea",
    label: "Medication list",
    classes: ["medication", "largeText", "assessment"],
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
    classes: ["medication", "largeText", "falls", "assessment"],
  },
  hmr: {
    tag: "select",
    multiple: true,
    label: "HMR",
    classes: ["medication", "assessment"],
    selectOptions: [
      "HMR recently completed",
      "HMR discussed",
      "Client/carer to follow up HMR with GP",
    ],
  },
  medicationOther: {
    tag: "textarea",
    label: "Medication other",
    classes: ["medication", "largeText", "assessment"],
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
    classes: ["clinical", "medication", "largeText", "assessment"],
  },
  medicationNeedsActions: {
    tag: "textarea",
    label: "Medication actions",
    classes: ["clinical", "medication", "largeText", "assessment"],
  },
  medicationReview: {
    tag: "textarea",
    label: "Medication",
    classes: ["review", "medication", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
};
let communicationData = {
  //communication and sensory
  CommunicationImpairements: {
    tag: "select",
    label: "Communication impairements",
    classes: ["communicationSensory", "falls", "assessment"],
    selectOptions: [
      "Hearing impaired",
      "Vision impaired (glasses)",
      "Vision impaired (blindness)",
      "No vision impairment",
      "No hearing impairment",
    ],
    multiple: true,
  },
  CommunicationAids: {
    tag: "select",
    label: "Communication aids",
    classes: ["communicationSensory", "assessment"],
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
    classes: ["communicationSensory", "falls", "assessment"],
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
    classes: ["communicationSensory", "largeText", "assessment"],
    notes: [
      "Client passed whisper test bilaterally.",
      "Client failed whisper test Right/Left/Both ear/s.",
    ],
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
  communicationReview: {
    tag: "textarea",
    label: "Communication",
    classes: ["review", "communicationSensory", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
  communicationNeeds: {
    tag: "textarea",
    label: "Communication needs",
    classes: ["clinical", "communicationSensory", "largeText", "assessment"],
  },
  communicationActions: {
    tag: "textarea",
    label: "Communication actions",
    classes: ["clinical", "communicationSensory", "largeText", "assessment"],
  },
};
let psychologicalData = {
  //psychological cognitive sleep
  sleep: {
    tag: "textarea",
    label: "Sleep",
    classes: ["largeText", "psychological", "assessment"],
  },
  cognitionNeurological: {
    tag: "textarea",
    label: "Cognition and neurological",
    classes: ["largeText", "psychological", "assessment"],
  },
  depression: {
    tag: "textarea",
    label: "Depression",
    classes: ["largeText", "psychological", "assessment"],
    notes: [
      "Beyond Blue anxiety and depression checklist completed with client.",
    ],
  },
  psychologicalOther: {
    tag: "textarea",
    label: "Psychological other",
    classes: ["largeText", "psychological", "assessment"],
    notes: [
      "PAS scale completed.",
      "Further assessment/referral required.",
      "Assessments completed: ",
    ],
  },
  abbreviatedMentalTest: {
    tag: "textarea",
    label: "AMTS",
    classes: ["largeText", "psychological", "assessment"],
    notes: [
      "Age Correct",
      "Age Incorrect",
      "Time to the nearest hour Correct",
      "Time to the nearest hour Incorrect",
      "Address to recall – 42 West St Correct",
      "Address to recall – 42 West St Incorrect",
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
  lonlinessScale: {
    tag: "textarea",
    label: "6-Item Loneliness Scale",
    classes: ["largeText", "psychological", "assessment"],
    notes: [
      "• Level of emotional loneliness",
      "I experience a general sense of emptiness Yes/No/Somewhat",
      "There are plenty of people I can rely on when I have problems Yes/No/Somewhat",
      "There are many people I can trust completely Yes/No/Somewhat",
      "• Level of social loneliness",
      "I miss having people around me Yes/No/Somewhat",
      "There are enough people I feel close to Yes/No/Somewhat",
      "I often feel rejected Yes/No/Somewhat",
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
    ],
  },
  psychologicalSupportPlanGoals: {
    tag: "textarea",
    label: "Pyschological support plan GOALS",
    classes: ["carePlan", "psychological", "goals", "largeText"],
    notes: [
      "Client will report he/she feels safe and secure most of the time.",
      "Clients carers and support workers will identify what frequently triggers certain behaviours, anxiety and insecurity, what interventions are effective and the outcomes.",
    ],
  },
  psychologicalSP_Client: {
    tag: "textarea",
    label: "Pyschological support plan CLIENT",
    classes: ["carePlan", "psychological", "largeText"],
    notes: [
      "Clients carers and support workers will assist client to identify potential issues that are causing anxiety or agitation using the CAUSEd anacronym, take appropriate actions and report outcomes.\n\u2022 Communication issues\n\u2022 Activity (is it appropriate and available)\n\u2022 Unwell/Unmet needs\n\u2022 Story (consider what we know about client that may be a clue)\n\u2022 Environment (what environmental factors are contributing to their feelings of anxiety)\n\u2022 dementia.",
      "Support workers and carers will prompote positive self esteem",
    ],
  },
  psychologicalSupportPlanInterventions: {
    tag: "textarea",
    label: "Pyschological support plan SUPPORTS",
    classes: ["carePlan", "psychological", "largeText"],
    notes: [
      "Clients carers and support workers will assist client to identify potential issues that are causing anxiety or agitation using the CAUSEd anacronym, take appropriate actions and report outcomes.\n\u2022 Communication issues\n\u2022 Activity (is it appropriate and available)\n\u2022 Unwell/Unmet needs\n\u2022 Story (consider what we know about client that may be a clue)\n\u2022 Environment (what environmental factors are contributing to their feelings of anxiety)\n\u2022 dementia.",
      "Support workers and carers will prompote positive self esteem",
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
    classes: ["clinical", "psychological", "largeText", "assessment"],
  },
  psychologicalActions: {
    tag: "textarea",
    label: "Psychological actions",
    classes: ["clinical", "psychological", "largeText", "assessment"],
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
  },
};
let psychosocialData = {
  //social and family
  socialOther: {
    tag: "textarea",
    label: "Social other",
    classes: ["social", "assessment"],
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
      "Client will report that he/she is satisfied with the amount of social interaction that he/she receives.",
      "Client will report that frequently engage in activities and have opportunity to build and maintain the relationships that are important to him/her.",
    ],
  },
  socialSP_CLient: {
    tag: "textarea",
    label: "Psycho social support plan CLIENT",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  socialSupportPlanInterventions: {
    tag: "textarea",
    label: "Psycho social support plan SUPPORTS",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  socialSP_WellnessPartner: {
    tag: "textarea",
    label: "Psycho social support plan WELLNESS PARTNER",
    classes: ["carePlan", "psychological", "social", "largeText"],
    notes: [
      "Southern Plus support workers will provide extra companionship/social interaction during support services.",
      "Client will maintain social connections and access the community with the support of family/independently.",
    ],
  },
  socialReview: {
    tag: "textarea",
    label: "Psychosocial",
    classes: ["review", "psychological", "social", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
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
  },*/
};
let painData = {
  //Pain (falls)
  painScale: {
    tag: "select",
    label: "Pain scale",
    classes: ["pain", "falls", "assessment"],
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
    classes: ["largeText", "pain", "falls", "assessment"],
  },
  painFutherAssessment: {
    tag: "select",
    label: "Further assessment",
    selectOptions: [
      "Pain assessment completed",
      "Further pain assessment required",
      "Further pain assessment not required",
    ],
    classes: ["pain", "assessment"],
  },
  painOther: {
    tag: "textarea",
    label: "Pain other",
    classes: ["pain", "assessment"],
    notes: ["Pain scale completed."],
  },
  painSupportPlanFactors: {
    tag: "textarea",
    label: "Pain support plan FACTORS",
    classes: ["carePlan", "pain", "largeText"],
    notes: ["Client experiences chronic pain [location]"],
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
      "Client self manages pain on a day to day basis in consultation with his/her GP..",
    ],
  },
  painSupportPlanInterventions: {
    tag: "textarea",
    label: "Pain support plan SUPPORTS",
    classes: ["carePlan", "pain", "largeText"],
    notes: [
      "Client receives symptom management support by the palliative care team.",
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
    classes: ["clinical", "pain", "largeText", "assessment"],
  },
  painActions: {
    tag: "textarea",
    label: "Pain actions",
    classes: ["clinical", "pain", "largeText", "assessment"],
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
  },
};
let skinData = {
  //Skin care---------------------------------------------------------------------
  woundCare: {
    tag: "select",
    label: "Wound Care",
    selectOptions: ["No wounds", "Wound assessment required", "assessment"],
    classes: ["skin"],
  },
  pressureInjury: {
    tag: "textarea",
    notes: [
      "Pressure injury risk assessment pending",
      "Pressure injury risk assessment completed",
    ],
    label: "Pressure injury",
    classes: ["skin", "assessment"],
  },
  skinIntegrity: {
    tag: "textarea",
    label: "Skin integrity",
    classes: ["skin", "assessment"],
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
    ],
  },
  skinSP_WellnessPartner: {
    tag: "textarea",
    label: "Skin care support plan WELLNESS PARTNER",
    classes: ["carePlan", "skin", "largeText"],
    notes: [
      "Wound care will be provided by ____",
      "Support workers will prompt and remind client to keep a stock of and apply emollient moisturiser daily.",
      "Southern Plus will facilitate purchase of skin care products for the prevention of skin tears.",
    ],
  },
  skinActions: {
    tag: "textarea",
    label: "Skin care clinical actions",
    classes: ["skin", "clinical", "largeText", "assessment"],
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
  },
};
let eliminationData = {
  //elimination (falls)
  eliminationUrinary: {
    tag: "textarea",
    label: "Urinary",
    classes: ["elimination", "falls", "assessment"],
  },
  eliminationBowel: {
    tag: "textarea",
    label: "Bowel",
    classes: ["elimination", "falls", "assessment"],
  },
  Toileting: {
    tag: "select",
    multiple: true,
    selectOptions: [
      "Independent toileting",
      "Requires assistance with toileting",
    ],
    label: "Toileting",
    classes: ["elimination", "assessment"],
  },
  incontinenceAids: {
    tag: "textarea",
    label: "Incontinence aids",
    classes: ["elimination", "assessment"],
  },
  eliminationOther: {
    tag: "textarea",
    label: "Elimination other",
    classes: ["elimination", "falls", "assessment"],
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
      "Southern Plus will assist with provision of incontinence aids within the capacity of the budget.",
      "Southern Plus will provide support to access continence assessment services through - ",
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
      "Southern Plus will assist with provision of incontinence aids within the capacity of the budget.",
      "Southern Plus will provide support to access continence assessment services through - ",
    ],
  },
  eliminationNeeds: {
    tag: "textarea",
    label: "Elimination needs",
    classes: ["clinical", "elimination", "largeText", "assessment"],
  },
  eliminationActions: {
    tag: "textarea",
    label: "Elimination actions",
    classes: ["clinical", "elimination", "largeText", "assessment"],
  },
  eliminationReview: {
    tag: "textarea",
    label: "Elimination",
    classes: ["review", "elimination", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
};
let mobilityData = {
  //transport and mobility
  transport: {
    tag: "textarea",
    label: "Transport",
    classes: [
      "medical",
      "mobility",
      "mealsShopping",
      "largeText",
      "assessment",
    ],
  },
  transfers: {
    tag: "select",
    selectOptions: [
      "Independent transfers",
      "Standby assist transfers",
      "Physical assist transfers",
      "Physical assist x2 transfers",
      "Not weight bearing",
    ],
    label: "Transfers",
    classes: ["mobility", "falls", "assessment"],
  },
  ambulation: {
    tag: "select",
    selectOptions: [
      "Independent ambulation",
      "Standby assist ambulation",
      "Physical assist ambulation",
      "Physical assist xv2 ambulation",
    ],
    label: "Ambulation",
    classes: ["mobility", "falls", "assessment"],
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
    ],
    label: "Mobility aids",
    classes: ["mobility", "falls", "assessment"],
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
    classes: ["falls", "mobility", "assessment"],
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
    classes: ["mobility", "environment", "falls", "assessment"],
  },
  mobilityOther: {
    tag: "textarea",
    label: "Mobility other",
    classes: ["mobility", "falls", "largeText", "assessment"],
  },
  mobilitySupportPlanFactors: {
    tag: "textarea",
    label: "Mobility/transport support plan FACTORS",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Client has experienced numerous falls recently.",
      "Client has an icreased falls risk",
      "Client's mobility is impaired secondary to ___",
      "Client has had no falls recently.",
      "Client mobilises independently with/without mobility aids.",
    ],
  },
  mobilitySupportPlanGoals: {
    tag: "textarea",
    label: "Mobility/transport support plan GOALS",
    classes: ["carePlan", "mobility", "goals", "falls", "largeText"],
    notes: [
      "Falls will be prevented.",
      "Improvement in functional mobility and improvements in pain management.",
      "Client will report he/she feels safe and confident when ambulating.",
    ],
  },
  mobilitySP_Client: {
    tag: "textarea",
    label: "Mobility/transport support plan CLIENT",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Client will participate in his/her home exercise program as per physiotherapy plan.",
    ],
  },
  mobilitySupportPlanInterventions: {
    tag: "textarea",
    label: "Mobility/transport support plan SUPPORTS",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Southern Plus will facilitate referral for Physiotherapy.",
      "Southern Plus will provide support to hire ___",
      "Southern Plus support workers will provide standby assists with mobility ___",
      "Southern Plus will assist client with transport needs by ___",
    ],
  },
  mobilitySP_WellnessPartner: {
    tag: "textarea",
    label: "Mobility/transport support plan WELLNESS PARTNER",
    classes: ["carePlan", "mobility", "falls", "largeText"],
    notes: [
      "Southern Plus will facilitate referral for Physiotherapy.",
      "Southern Plus will provide support to hire ___",
      "Southern Plus support workers will provide standby assists with mobility ___",
      "Southern Plus will assist client with transport needs by ___",
    ],
  },
  mobilityReview: {
    tag: "textarea",
    label: "Mobility",
    classes: ["review", "mobility", "falls", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
  transportFactors: {
    tag: "textarea",
    label: "Transport FACTORS",
    classes: ["mobility", "carePlan", "largeText"],
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
    ],
  },
  transportSupportPlanFactors: {
    tag: "textarea",
    label: "Transport SUPPORTS",
    classes: ["mobility", "carePlan", "largeText"],
    notes: [
      "Southern Plus support workers will provide transport to appointments as required within capacity of HCP funding.",
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
  },
  mobilityFallsNeeds: {
    tag: "textarea",
    label: "Mobility and falls needs",
    classes: ["clinical", "falls", "mobility", "largeText", "assessment"],
  },
  mobilityFallsActions: {
    tag: "textarea",
    label: "Mobility and falls actions",
    classes: ["clinical", "falls", "mobility", "largeText", "assessment"],
  },
};
let environmentPersonalSafetyData = {
  //environement and personal safety/security
  environment: {
    tag: "textarea",
    label: "Environmental",
    notes: [
      "Client reports working smoke alarms and RCD.",
      "Walkways uncluttered and clear of tripping hazards and rooms well lit.",
      "Client reports that he/she is able to sit to stand without undue effort to and from toilet/chairs and bed.",
      "Unmitigated hazards present (identify) and discussed with client who has/has_not agreed to occupational therapy referral or rectification.",
    ],
    classes: ["mobility", "environment", "falls", "largText", "assessment"],
  },
  environmentFunctionalSafety: {
    tag: "textarea",
    label: "Environment Functional safety",
    default: "",
    classes: ["environment", "largText", "assessment"],
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
    ],
    label: "Other equipment used",
    classes: ["mobility", "environment", "falls", "assessment"],
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
    ],
    label: "Other equipment required",
    classes: ["mobility", "environment", "falls", "assessment"],
  },
  homeModificationsInstalled: {
    tag: "select",
    multiple: true,
    selectOptions: ["Railing toilet", "Railing bathroom", "Ramps", "Other"],
    label: "Home modifications installed",
    classes: ["mobility", "environment", "falls", "assessment"],
  },
  homeModificationsRequired: {
    tag: "select",
    multiple: true,
    selectOptions: ["Railing toilet", "Railing bathroom", "Ramps", "Other"],
    label: "Home modifications required",
    classes: ["mobility", "environment", "falls", "assessment"],
  },
  environmentSupportPlanFactors: {
    tag: "textarea",
    label: "Environment support plan FACTORS",
    classes: ["carePlan", "environment", "largeText"],
    notes: [
      "Client is at increased risk of falls and would benefit from review of his/her home and living spaces to assess and reduce risk factors.",
    ],
  },
  environmentSupportPlanGoals: {
    tag: "textarea",
    label: "Environment support plan GOALS",
    classes: ["carePlan", "environment", "goals", "largeText"],
    notes: ["Environmental risks will be reduced/mitigated."],
  },
  environmentSP_Client: {
    tag: "textarea",
    label: "Environment support plan CLIENT",
    classes: ["carePlan", "environment", "largeText"],
  },
  environmentSupportPlanInterventions: {
    tag: "textarea",
    label: "Environment support plan SUPPORTS",
    classes: ["carePlan", "environment", "largeText"],
  },
  environmentSP_WellnessPartner: {
    tag: "textarea",
    label: "Environment support plan WELLNESS PARTNER",
    classes: ["carePlan", "environment", "largeText"],
    notes: [
      "Wellness Partner will make a referral to ____ for Occupation Therapy home safety assessment.",
    ],
  },
  environmentReview: {
    tag: "textarea",
    label: "Environment",
    classes: ["review", "environment", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
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
    notes: [],
  },
  personalSafetySupportPlanInterventions: {
    tag: "textarea",
    label: "Personal safety support plan SUPPORTS",
    notes: [
      "Support workers will prompt client to check that he/she is wearing their PERS device, it is charged and functional",
      "Support workers will prompt client to lock his/her security door and/or windows at the end of each visit.",
      "Support workers will report any security concerns to the Wellness Partner.",
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
  },
};
let carerData = {
  //carers
  carer: {
    tag: "textarea",
    label: "Carer factors/carer strain",
    classes: ["carer", "assessment"],
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
    ],
  },
  carerSP_CLient: {
    tag: "textarea",
    label: "Carer support plan CLIENT",
    classes: ["carePlan", "carer", "largeText"],
    notes: [],
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
    notes: [],
  },
  carerReview: {
    tag: "textarea",
    label: "Carer",
    classes: ["review", "carer", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
};
let personalCareData = {
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
    classes: ["personalCare", "largeText", "assessment"],
    notes: [],
  },
  personalCareSupportPlanFactors: {
    tag: "textarea",
    label: "Personal care support plan FACTORS",
    classes: ["carePlan", "personalCare", "largeText"],
    notes: [
      "Client has difficulty completing self care tasks independently secondary to ___",
      "Client is independent with all personal care tasks.",
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
      "Southern Plus support workers will assist client with personal care x days per week.",
    ],
  },
  personalCareSupportPlanInterventions: {
    tag: "textarea",
    label: "Personal care support plan SUPPORTS",
    classes: ["carePlan", "personalCare", "largeText"],
    notes: [
      "Southern Plus support workers will assist client with personal care x days per week.",
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
  },
};
let mealsNutritionData = {
  //meals and shopping
  financesOther: {
    tag: "textarea",
    label: "Finances other",
    classes: [
      "domestic",
      "psychological",
      "mealsShopping",
      "largeText",
      "assessment",
    ],
    default: ["Person responsible for finances: Client/Spouse/EPOA"],
  },
  mealsAndShoppingOther: {
    tag: "textarea",
    label: "Meals and shopping other",
    classes: [
      "function",
      "mealsShopping",
      "nutrition",
      "mobility",
      "largeText",
      "assessment",
    ],
  },
  mealsAndShoppingSupportPlanFactors: {
    tag: "textarea",
    label: "Meals/shopping support plan FACTORS",
    classes: [
      "carePlan",
      "function",
      "mealsShopping",
      "nutrition",
      "mobility",
      "largeText",
    ],
    notes: [
      "Client is able to prepare and cook his/her own meals.",
      "Client has a self care deficit related to meal preparation secondary to ___",
    ],
  },
  mealsAndShoppingSupportPlanGoals: {
    tag: "textarea",
    label: "Meals/shopping support plan GOALS",
    classes: ["carePlan", "mealsShopping", "mobility", "goals", "largeText"],
    notes: ["Client will be adequately nourished and hydrated."],
  },
  mealsAndShoppingSP_Client: {
    tag: "textarea",
    label: "Meals/shopping support plan CLIENT",
    classes: [
      "carePlan",
      "function",
      "mealsShopping",
      "nutrition",
      "mobility",
      "largeText",
    ],
    notes: [
      "_____ complete shopping general food items and supervise Alex with her meals/nutritiional intake on a day to day basis.",
      "Client will contribute to the set up, cost of the food portion of and ongoing ordering of meals.",
      "_____ will contribute and prepare some home cooked meals to supplement home delivered meals.",
    ],
  },
  mealsAndShoppingSupportPlanInterventions: {
    tag: "textarea",
    label: "Meals/shopping support plan SUPPORTS",
    classes: [
      "carePlan",
      "function",
      "mealsShopping",
      "nutrition",
      "mobility",
      "largeText",
    ],
    notes: [
      "Southern Plus will facilitate the provision of prepared and home delivered meals through ___.",
      "Client will contribute to the set up, cost of the food portion of and ongoing ordering of meals.",
    ],
  },
  mealsAndShoppingSP_WellnessPartner: {
    tag: "textarea",
    label: "Meals/shopping support plan WELLNESS PARTNER",
    classes: [
      "carePlan",
      "function",
      "mealsShopping",
      "nutrition",
      "mobility",
      "largeText",
    ],
    notes: [
      "Southern Plus will facilitate the provision of prepared and home delivered meals through ___.",
      "Client will contribute to the set up, cost of the food portion of and ongoing ordering of meals.",
    ],
  },
  mealsAndShoppingReview: {
    tag: "textarea",
    label: "Meals and shopping",
    classes: ["review", "mealsShopping", "mobility", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
  //nutrition
  eating: {
    tag: "textarea",
    label: "Eating",
    classes: ["nutrition", "largeText", "assessment"],
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
    classes: ["nutrition", "falls", "largeText", "assessment"],
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
    classes: ["nutrition", "largeText", "assessment"],
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
    classes: ["nutrition", "assessment"],
  },
  swallow: {
    tag: "textarea",
    label: "Swallow",
    classes: ["nutrition", "assessment"],
    notes: [
      "Client reports no swallowing problem.",
      "Further assessment/swallowing screen indicated.",
      "Referral to speach pathologist indicated.",
    ],
  },
  nutritionNeeds: {
    tag: "textarea",
    label: "Nutrition needs",
    classes: ["clinical", "nutrition", "largeText", "assessment"],
  },
  nutritionNeedsActions: {
    tag: "textarea",
    label: "Nutrition actions",
    classes: ["clinical", "nutrition", "largeText", "assessment"],
  },
};
let biometricsData = {
  //Biometrics
  weight: {
    tag: "input",
    label: "Weight",
    type: "text",
    classes: ["biometrics", "nutrition", "assessment"],
  },
  pulse: {
    tag: "input",
    label: "Pulse",
    type: "text",
    classes: ["biometrics", "assessment"],
  },
  temperature: {
    tag: "input",
    label: "Temperature",
    type: "text",
    classes: ["biometrics", "assessment"],
  },
  respiratoryRate: {
    tag: "input",
    label: "Respiratory rate",
    type: "text",
    classes: ["biometrics", "assessment"],
  },
  bloodPressure: {
    tag: "input",
    label: "Blood pressure",
    type: "text",
    classes: ["biometrics", "assessment"],
  },
  bloodGlucose: {
    tag: "input",
    label: "Blood glucose",
    type: "text",
    classes: ["biometrics", "assessment"],
  },
  oxygenSaturation: {
    tag: "input",
    label: "Oxygen saturation",
    type: "text",
    classes: ["biometrics", "assessment"],
  },
  headToToe: {
    tag: "textarea",
    label: "Head to toe",
    classes: [
      "biometrics",
      "skin",
      "falls",
      "communicationSensory",
      "largeText",
      "assessment",
    ],
  },
};
let domesticAssistanceData = {
  //cleaning
  cleaningAndHGM: {
    tag: "textarea",
    label: "Cleaning and HGM",
    default: "",
    classes: ["domestic", "largText", "assessment"],
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
      "Southern Plus support workers will provide assistance with cleaning weekly/fortnightly for __ hours.",
      "Cleaning tasks will include\n\nSupport workers will assist with other household tasks as as requested by client as time permits and utilise any spare time to identify other jobs that need doing (empty/put out bins, tidy clean the fridge/microwave/dusting surfaces/skirting/window sills etc.)",
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
    notes: [
      "Southern Plus support workers will provide assistance with cleaning weekly/fortnightly for __ hours.",
      "Cleaning tasks will include\n\nSupport workers will assist with other household tasks as as requested by client as time permits and utilise any spare time to identify other jobs that need doing (empty/put out bins, tidy clean the fridge/microwave/dusting surfaces/skirting/window sills etc.)",
    ],
  },
  cleaningReview: {
    tag: "textarea",
    label: "Cleaning",
    classes: ["review", "domestic", "carePlan", "largeText"],
    notes: ["No changes. Support plan current and effective."],
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
  },
};
let referralData = {
  // Referrals------------------------------------------------------
  otReferral: {
    tag: "textarea",
    label: "OT referral",
    classes: [
      "skin",
      "environment",
      "mobility",
      "falls",
      "clinical",
      "referral",
      "pain",
      "assessment",
    ],
    notes: [
      "OT referral and follow up of recommendations for pressure injury prevention/management devices",
      "OT referral and follow up of recommendations for environmental/seating/functional home safety review",
      "OT referral and follow up of recommendations for pain management equipment",
      "OT referral completed",
      "OT assessment required",
      "OT assessment NOT required.",
    ],
  },
  ptReferral: {
    tag: "textarea",
    label: "PT referral",
    classes: [
      "mobility",
      "falls",
      "clinical",
      "referral",
      "pain",
      "assessment",
    ],
    notes: [
      "PT referral and follow up for falls prevention and mobility assessment.",
      "PT referral and follow up for mobility equipment assessment/recommendations.",
      "PT referral and follow up for pain management.",
      "PT referral completed",
      "PT assessment required",
      "PT assessment NOT required.",
    ],
  },
  gpRefferral: {
    tag: "textarea",
    label: "GP referral",
    classes: [
      "medical",
      "referral",
      "clinical",
      "falls",
      "nutrition",
      "pain",
      "psychological",
      "medication",
      "assessment",
    ],
    notes: [
      "GP referral and follow up for HMMR - information provided to client",
      "GP referral and follow up for nutritional review",
      "GP referral and follow up for review of vaccination status.",
      "GP referral and follow up for review chronic disease management plans including access to urgent medical attention",
      "GP referral completed",
      "GP assessment required",
      "GP assessment NOT required.",
    ],
  },
};
let additionalAssessmentGrid = {
  additionalAssessmentGrid: {
    variation: "multipleChoiceGrid",
    gridResponseFields: {
      additionalAssessmentsCompleted: {
        label: "Additional assessment completed",
      },
      additionalAssessmentsRequired: {
        label: "Additional assessment required",
      },
      additionalAssessmentsNotRequired: {
        label: "Additional assessment not required",
      },
    },
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
    selectOptions: [
      "Communication assessment",
      "Continence Assessment",
      "Depression screening",
      "Falls Risk for Older People - community setting",
      "Functional ADL assessment",
      "Hierarchic Dementia Scale asessment",
      "Medication self management assessment",
      "MMSE",
      "Pain assessment",
      "Pressure injury risk assessment",
      "Psychogeriatric Assessment scale",
    ],
  },
};
let reviewData = {
  // REVIEW ______________________________________________________________
  medicalReview: {
    tag: "textarea",
    label: "Medical",
    classes: ["review", "medical", "largeText"],
    notes: ["No changes. Support plan current and effective."],
  },
  otherReviewNotes: {
    tag: "textarea",
    label: "Other review notes",
    classes: ["review", "largeText"],
  },
  followUpsElement: {
    tag: "textarea",
    label: "Follow up notes.",
    classes: ["followUp", "review", "largeText"],
  },
  servicePreferences: {
    tag: "textarea",
    label: "Service preferences",
    classes: ["chsp", "carePlan", "largeText"],
  },
  budgetLastSigned: {
    tag: "input",
    type: "date",
    label: "Budget last signed",
    classes: ["review"],
  },
  supportPlanLastSigned: {
    tag: "input",
    type: "date",
    label: "Support plan last signed",
    classes: ["review"],
  },
  readyForHospitalReview: {
    tag: "input",
    type: "date",
    label: "Ready for hospital reviewed",
    classes: ["review"],
  },
  emergencyPlanReviewed: {
    tag: "input",
    type: "date",
    label: "Emergency plan last reviewed",
    classes: ["review"],
  },
  visualHomeSafetyReviewed: {
    tag: "input",
    type: "date",
    label: "Visual home safety last reviewed",
    classes: ["review"],
  },
};
let clientRecordFieldSettings = {
  ...demographicData,
  ...contactsData,
  ...medicalData,
  ...scheduleData,
  ...personalHistoryData,
  ...medicationData,
  ...communicationData,
  ...psychologicalData,
  ...psychosocialData,
  ...painData,
  ...skinData,
  ...eliminationData,
  ...mobilityData,
  ...environmentPersonalSafetyData,
  ...carerData,
  ...personalCareData,
  ...mealsNutritionData,
  ...biometricsData,
  ...domesticAssistanceData,
  ...additionalAssessmentGrid,
  ...referralData,
  ...reviewData,
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
