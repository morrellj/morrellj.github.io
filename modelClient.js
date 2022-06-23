class Client {
  static colors = {
    carePlan: "#d2f8d2",
    important: "#f8f8d2",
    clinical: "#d2d2f8",
    review: "#f8d2f8",
    goals: "#e7ebda",
  };
  static supplementaryProperties = {
    lastDate: {
      type: "string",
      default: Client.getLastDate(),
    },
    lastModified: {
      type: "date",
      default: new Date(),
    },
    followUps: {
      type: "array",
      default: [],
    },
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
      tag: "select",
      label: "Gender",
      selectOptions: ["Male", "Female"],
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
      classes: ["medical", "largeText"],
      default: "COVID ?\nFlu ?\nShingles ?\nPneumovax ?\nTetnus ?\n",
    },
    oxygen: {
      tag: "textarea",
      label: "Oxygen",
      default: "Needs:NA\nSupplement:NA",
      classes: ["medical"],
    },
    drugsAlcohol: {
      tag: "textarea",
      label: "Drugs and alcohol",
      classes: ["medical", "falls"],
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
    },
    medicalNeedsActions: {
      tag: "textarea",
      label: "Medical actions",
      classes: ["clinical", "medical", "largeText"],
    },
    medicalSupportPlanGoals: {
      tag: "textarea",
      label: "Medical support GOALS",
      classes: ["medical", "carePlan", "goals", "largeText"],
    },
    medicalSupportPlanIntervention: {
      tag: "textarea",
      label: "Medical support INTERVENTIONS",
      classes: ["medical", "carePlan", "largeText"],
    },
    medicalReview: {
      tag: "textarea",
      label: "Medical",
      classes: ["medical", "review", "largeText"],
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
      tag: "select",
      label: "Medication support",
      classes: ["medication"],
      selectOptions: [
        "No support required",
        "Carer supports client with medication",
        "Formal support services required administration/prompt",
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
      notes: [
        "Sedatives",
        "Antidepressants",
        "Antiparkinsons",
        "Antipsychotics",
        "Diuretics",
        "Antihypertensives",
        "Hypnotics",
          "Anti cholinergic burden"
      ],
      classes: ["medication", "largeText", "falls"],
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
    medicationSupportPlanInterventions: {
      tag: "textarea",
      label: "Medication support plan INTERVENTIONS",
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
    },
    medicationNeedsActions: {
      tag: "textarea",
      label: "Medication actions",
      classes: ["clinical", "medication", "largeText"],
    },
    medicationReview: {
      tag: "textarea",
      label: "Medication",
      classes: ["review", "medication", "largeText"],
    },
    //communication and sensory
    CommunicationImpairements: {
      tag: "select",
      label: "Communication impairements",
      classes: ["communicationSensory", "falls"],
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
      classes: ["communicationSensory"],
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
      classes: ["communicationSensory", "falls"],
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
    },
    communicationSupportPlanFactors: {
      tag: "textarea",
      label: "Communication support plan FACTORS",
      classes: ["carePlan", "communicationSensory", "largeText"],
      notes: [
        "Client is aware of his/her care needs and can communicate independently.",
        "Client has a hearing impairment.",
        "Client has a vision impairement.",
        "Client has a self care deficit related to communication secondary to ",
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
    communicationSupportPlanInterventions: {
      tag: "textarea",
      label: "Communication support plan INTERVENTIONS",
      classes: ["carePlan", "communicationSensory", "largeText"],
      notes: [
        "Support workers will support client with communication by speaking clearly and not shouting, facing client when speaking, reducing the  distance between them and client, reducing background noise, rephrase the sentence as needed, checking to see that client has understood what has been communicated.",
        "Support workers will prompt client to wear their hearing aids and glasses.",
        "Suport workers will assist client to ensure that their hearing aids are working effectively.",
        "Support workers will assist client to put on his/her glasses and hearing aids.",
      ],
    },
    communicationReview: {
      tag: "textarea",
      label: "Communication",
      classes: ["review", "communicationSensory", "largeText"],
    },
    //psychological cognitive sleep
    sleep: {
      tag: "textarea",
      label: "Sleep",
      classes: ["largeText", "psychological"],
    },
    cognitionNeurological: {
      tag: "textarea",
      label: "Cognition and neurological",
      classes: ["largeText", "psychological"],
    },
    depression: {
      tag: "textarea",
      label: "Depression",
      classes: ["largeText", "psychological"],
    },
    psychologicalOther: {
      tag: "textarea",
      label: "Psychological other",
      classes: ["largeText", "psychological"],
    },
    psychologicalSupportPlanFactors: {
      tag: "textarea",
      label: "Pyschological support plan FACTORS",
      classes: ["carePlan", "psychological", "largeText"],
    },
    psychologicalSupportPlanGoals: {
      tag: "textarea",
      label: "Pyschological support plan GOALS",
      classes: ["carePlan", "psychological", "goals", "largeText"],
      notes: [
        "Clients carers and support workers will identify what frequently triggers certain behaviours, anxiety and insecurity, what interventions are effective and the outcomes.",
      ],
    },
    psychologicalSupportPlanInterventions: {
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
    },
    psychologicalActions: {
      tag: "textarea",
      label: "Psychological actions",
      classes: ["clinical", "psychological", "largeText"],
    },
    psychologicalReview: {
      tag: "textarea",
      label: "Psychological",
      classes: ["review", "psychological", "largeText"],
    },
    //Pain (falls)
    painScale: {
      tag: "select",
      label: "Pain scale",
      classes: ["pain", "falls"],
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
    },
    painOther: {
      tag: "textarea",
      label: "Pain other",
      classes: ["pain"],
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
      notes: ["Client will report that his/her pain is managed effectively."],
    },
    painSupportPlanInterventions: {
      tag: "textarea",
      label: "Pain support plan INTERVENTIONS",
      classes: ["carePlan", "pain", "largeText"],
      notes: [
        "Client receives symptom management support by the palliative care team.",
        "No further intervention required by Southern Plus at this time.",
        "Client self manages pain.",
        "Southern Plus will facility referral for physiotherapy assessment.",
        "Southern Plus will facilitate ongoing Physiotherapy for pain management.",
      ],
    },
    painNeeds: {
      tag: "textarea",
      label: "Pain needs",
      classes: ["clinical", "pain", "largeText"],
    },
    painActions: {
      tag: "textarea",
      label: "Pain actions",
      classes: ["clinical", "pain", "largeText"],
    },
    painReview: {
      tag: "textarea",
      label: "Pain",
      classes: ["review", "pain", "largeText"],
    },
    //Skin care
    woundCare: {
      tag: "select",
      label: "Wound Care",
      selectOptions: ["No wounds", "Wound assessment required"],
      classes: ["skin"],
    },
    pressureInjury: {
      tag: "select",
      multiple: true,
      selectOptions: [
        "Low risk",
        "Pressure injury risk assessment required",
        "Pressure injury risk assessment completed",
      ],
      label: "Pressure injury",
      classes: ["skin"],
    },
    skinIntegrity: {
      tag: "textarea",
      label: "Skin integrity",
      classes: ["skin", "clinical"],
    },
    skinSupportPlanFactors: {
      tag: "textarea",
      label: "Skin care support plan FACTORS",
      classes: ["carePlan", "skin", "largeText"],
      notes: [
        "Client has impaired skin integrity related to ___ secondary to ____",
        "Client is at high risk of developing pressure injuries secondary to ___",
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
    skinSupportPlanInterventions: {
      tag: "textarea",
      label: "Skin care support plan INTERVENTIONS",
      classes: ["carePlan", "skin", "largeText"],
      notes: [
        "Wound care will be provided by ____",
        "Support workers will prompt/assist client to apply moisturiser to arms and legs twice daily.",
      ],
    },
    skinActions: {
      tag: "textarea",
      label: "Skin care clinical actions",
      classes: ["skin", "clinical", "largeText"],
    },
    skinReview: {
      tag: "textarea",
      label: "Skin review",
      classes: ["review", "skin", "largeText"],
    },
    //elimination (falls)
    eliminationUrinary: {
      tag: "textarea",
      label: "Urinary",
      classes: ["elimination", "falls"],
    },
    eliminationBowel: {
      tag: "textarea",
      label: "Bowel",
      classes: ["elimination", "falls"],
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
    },
    incontinenceAids: {
      tag: "textarea",
      label: "Incontinence aids",
      classes: ["elimination"],
    },
    eliminationOther: {
      tag: "textarea",
      label: "Elimination other",
      classes: ["elimination", "falls"],
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
    eliminationSupportPlanInterventions: {
      tag: "textarea",
      label: "Elimination support plan INTERVENTIONS",
      classes: ["carePlan", "elimination", "largeText"],
      notes: [
        "Southern Plus will provide incontinence aids as needed.",
        "-",
        "Southern Plus will provide for continence assessment.",
      ],
    },
    eliminationNeeds: {
      tag: "textarea",
      label: "Elimination needs",
      classes: ["clinical", "elimination", "largeText"],
    },
    eliminationActions: {
      tag: "textarea",
      label: "Elimination actions",
      classes: ["clinical", "elimination", "largeText"],
    },
    eliminationReview: {
      tag: "textarea",
      label: "Elimination",
      classes: ["review", "elimination", "largeText"],
    },
    //transport and mobility
    transport: {
      tag: "textarea",
      label: "Transport",
      classes: ["medical", "mobility", "mealsShopping", "largeText"],
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
      classes: ["mobility", "falls"],
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
      classes: ["mobility", "falls"],
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
      classes: ["mobility", "falls"],
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
      classes: ["mobility", "environment", "falls"],
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
      classes: ["mobility", "environment", "falls"],
    },
    homeModificationsInstalled: {
      tag: "select",
      multiple: true,
      selectOptions: ["Railing toilet", "Railing bathroom", "Ramps", "Other"],
      label: "Home modifications installed",
      classes: ["mobility", "environment", "falls"],
    },
    homeModificationsRequired: {
      tag: "select",
      multiple: true,
      selectOptions: ["Railing toilet", "Railing bathroom", "Ramps", "Other"],
      label: "Home modifications required",
      classes: ["mobility", "environment", "falls"],
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
      classes: ["falls"],
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
    },
    mobilityOther: {
      tag: "textarea",
      label: "Mobility other",
      classes: ["mobility", "falls", "largeText"],
    },
    mobilitySupportPlanFactors: {
      tag: "textarea",
      label: "Mobility/transport support plan FACTORS",
      classes: ["carePlan", "mobility", "falls", "largeText"],
      notes: [
        "Client has experienced numerous falls recently.",
        "Clients mobility is impaired secondary to ___",
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
        "Client will report he/she feels safe and confident when ambulating.",
      ],
    },
    mobilitySupportPlanInterventions: {
      tag: "textarea",
      label: "Mobility/transport support plan INTERVENTIONS",
      classes: ["carePlan", "mobility", "falls", "largeText"],
      notes: [
        "Southern Plus will facilitate referral for Physiotherapy.",
        "Southern Plus will provide support to hire ___",
        "Southern Plus support workers will provide standby assists with mobility ___",
        "Southern Plus will assist client with transport needs by ___",
      ],
    },
    mobilityFallsNeeds: {
      tag: "textarea",
      label: "Mobility and falls needs",
      classes: ["clinical", "falls", "mobility", "largeText"],
    },
    mobilityFallsActions: {
      tag: "textarea",
      label: "Mobility and falls actions",
      classes: ["clinical", "falls", "mobility", "largeText"],
    },
    mobilityReview: {
      tag: "textarea",
      label: "Mobility",
      classes: ["review", "mobility", "largeText"],
    },
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
      classes: ["mobility", "environment", "falls", "largText"],
    },
    environmentCleaning: {
      tag: "textarea",
      label: "Cleaning assessment",
      default: "",
      classes: ["environment", "largText"],
      
    },
    environmentReview: {
      tag: "textarea",
      label: "Environment",
      classes: ["review", "environment", "largeText"],
    },

    //social and family
    carer: {
      tag: "textarea",
      label: "Carer factors/carer strain",
      classes: ["social"],
    },
    socialOther: {
      tag: "textarea",
      label: "Social other",
      classes: ["social"],
    },
    socialSupportPlanFactors: {
      tag: "textarea",
      label: "Social support plan FACTORS",
      classes: ["carePlan", "social", "largeText"],
      notes: [
        "Client is at risk of social isolation secondary to ____",
        "Client is well supported and engages with family and friends independently.",
      ],
    },
    socialSupportPlanGoals: {
      tag: "textarea",
      label: "Social support plan GOALS",
      classes: ["carePlan", "social", "goals", "largeText"],
      notes: [
        "Client will report that he/she is satisfied with the amount of social interaction that he/she receives.",
        "Client will report that frequently engage in activities and have opportunity to build and maintain the relationships that are important to them.",
      ],
    },
    socialSupportPlanInterventions: {
      tag: "textarea",
      label: "Social support plan INTERVENTIONS",
      classes: ["carePlan", "social", "largeText"],
      notes: [
        "Southern Plus support workers will provide extra companionship/social interaction during support services.",
        "Client will maintain social connections and access the community with the support of family/independently.",
      ],
    },
    socialReview: {
      tag: "textarea",
      label: "Social",
      classes: ["review", "social", "largeText"],
    },
    //personal care
    PersonalCare: {
      tag: "textarea",
      label: "Personal care assessment",
      notes: [
        "Client is independent with washing/drying",
        "Client is independent with dressing",
        "Client is independent with grooming",
        "Client requires standby assistance with washing/drying",
        "Client requires standby assistance with dressing",
        "Client requires standby assistance with grooming",
        "Client requires hands on assistance x 1 with washing/drying",
        "Client requires hands on assistance x 1 with dressing",
        "Client requires hands on assistance x 1 grooming",
        "Client requires hands on assistance x 2 with washing/drying",
        "Client requires hands on assistance x 2 with dressing",
        "Client requires hands on assistance x 2 with grooming",
      ],
      classes: ["personalCare", "largeText"],
    },
    PersonalCareOther: {
      tag: "textarea",
      label: "Personal care other",
      classes: ["personalCare", "largeText"],
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
    personalCareSupportPlanInterventions: {
      tag: "textarea",
      label: "Personal care support plan INTERVENTIONS",
      classes: ["carePlan", "personalCare", "largeText"],
      notes: [
        "Southern Plus support workers will assist client with personal care x days per week.",
      ],
    },
    personalCareReview: {
      tag: "textarea",
      label: "Personal care",
      classes: ["review", "personalCare", "largeText"],
    },
    //meals and shopping
    financesOther: {
      tag: "textarea",
      label: "Finances other",
      classes: ["mealsShopping", "function", "largeText"],
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
        "Client has a self care deficit related to meal preperation secondary to ___",
      ],
    },
    mealsAndShoppingSupportPlanGoals: {
      tag: "textarea",
      label: "Meals/shopping support plan GOALS",
      classes: ["carePlan", "mealsShopping", "goals", "largeText"],
      notes: ["Client will be adequately nourished and hydrated."],
    },
    mealsAndShoppingSupportPlanInterventions: {
      tag: "textarea",
      label: "Meals/shopping support plan INTERVENTIONS",
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
      classes: ["review", "mealsShopping", "largeText"],
    },
    //nutrition
    nutritionalIntake: {
      tag: "textarea",
      label: "Nutritional intake",
      default:
        "Percentage of meals eaten:\nDinner:\nLunch:\nBreakfast:\nSnacks:\nFeeding:",
      classes: ["nutrition", "falls", "largeText"],
    },
    weightLossGain: {
      tag: "select",
      multiple: true,
      selectOptions: [
        "Weight Stable",
        "Unintentional weight loss",
        "Unintentional weight gain",
        "High BMI",
        "Low BMI",
        "Further nutritional assessment required",
        "Nutritional assessment completed",
        "Client has had dietician review",
        "Dietician referral required",
      ],
      label: "Weight",
      classes: ["nutrition"],
    },
    oral: {
      tag: "textarea",
      label: "Oral",
      classes: ["nutrition"],
    },
    swallow: {
      tag: "textarea",
      label: "Swallow",
      classes: ["nutrition"],
    },
    nutritionNeeds: {
      tag: "textarea",
      label: "Nutrition needs",
      classes: ["clinical", "nutrition", "largeText"],
    },
    nutritionNeedsActions: {
      tag: "textarea",
      label: "Nutrition actions",
      classes: ["clinical", "nutrition", "largeText"],
    },
    //Biometrics
    weight: {
      tag: "input",
      label: "Weight",
      type: "text",
      classes: ["biometrics"],
    },
    pulse: {
      tag: "input",
      label: "Pulse",
      type: "text",
      classes: ["biometrics"],
    },
    temperature: {
      tag: "input",
      label: "Temperature",
      type: "text",
      classes: ["biometrics"],
    },
    respiratoryRate: {
      tag: "input",
      label: "Respiratory rate",
      type: "text",
      classes: ["biometrics"],
    },
    bloodPressure: {
      tag: "input",
      label: "Blood pressure",
      type: "text",
      classes: ["biometrics"],
    },
    bloodGlucose: {
      tag: "input",
      label: "Blood glucose",
      type: "text",
      classes: ["biometrics"],
    },
    oxygenSaturation: {
      tag: "input",
      label: "Oxygen saturation",
      type: "text",
      classes: ["biometrics"],
    },
    headToToe: {
      tag: "textarea",
      label: "Head to toe",
      default: "Considerations:",
      classes: [
        "biometrics",
        "skin",
        "falls",
        "communicationSensory",
        "largeText",
      ],
    },
    //cleaning
    cleaningSupportPlanFactors: {
      tag: "textarea",
      label: "Cleaning support plan FACTORS",
      classes: ["carePlan", "environment", "largeText"],
      notes: [
        "Self care deficit related to household cleaning seconday to ___",
      ],
    },
    cleaningSupportPlanGoals: {
      tag: "textarea",
      label: "Cleaning support plan GOALS",
      classes: ["carePlan", "environment", "goals", "largeText"],
      notes: [
        "Clients home environment will be maintained in a clean and tidy state.",
      ],
    },
    cleaningSupportPlanInterventions: {
      tag: "textarea",
      label: "Cleaning support plan INTERVENTIONS",
      classes: ["carePlan", "environment", "largeText"],
      notes: [
        "Southern Plus support workers will provide assistance with cleaning weekly/fortnightly for __ hours.",
        "Cleaning tasks will include\n\nSupport workers will assist with other household tasks as as requested by client as time permits and utilise any spare time to identify other jobs that need doing (empty/put out bins, tidy clean the fridge/microwave/dusting surfaces/skirting/window sills etc.)",
      ],
    },
    //HGM
    HGMSupportPlanFactors: {
      tag: "textarea",
      label: "Home and garden plan FACTORS",
      classes: ["carePlan", "environment", "largeText"],
      notes: [
        "Self care deficit related to maintenance of safe, accessable outdoor areas and access to the home secondary to ___.",
      ],
    },
    HGMSupportPlanGoals: {
      tag: "textarea",
      label: "Home and garden plan GOALS",
      classes: ["carePlan", "environment", "goals", "largeText"],
      notes: ["Clients home will be accessable and safe"],
    },
    HGMSupportPlanInterventions: {
      tag: "textarea",
      label: "Home and garden support plan INTERVENTIONS",
      classes: ["carePlan", "environment", "largeText"],
      notes: ["Southern plus will facilitate monthly gardening services."],
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

  constructor(key, data) {
    if (arguments.length != 2) {
      throw new Error("Wrong number of arguments.");
    }
    if (typeof arguments[0] != "string") {
      throw new Error("Key needs to be a string.");
    }
    (this.key = key),
      // this.data = {};
      (this.save = function (current) {
        if (!localStorage.getItem(this.key) || current) {
          let thisData = {};
          for (const [thisKey, value] of Object.entries(Client.schema)) {
            thisData[thisKey] = this[thisKey];
          }
          thisData.key = this.key;
          thisData.lastModified = new Date();
          thisData.lastDate = Client.getLastDate();
          thisData.followUps = this.followUps ? this.followUps : null;
          localStorage.setItem(this.key, JSON.stringify(thisData));
        } else {
          alert("Client already named in local storage.");
        }
      });
    this.replace = function () {
      this.save(true);
    };

    for (const [thisKey, value] of Object.entries(Client.schema)) {
      this[thisKey] = data[thisKey]
        ? data[thisKey]
        : value.default
        ? value.default
        : null;
    }
    for (const [thisKey, value] of Object.entries(
      Client.supplementaryProperties
    )) {
      this[thisKey] = data[thisKey]
        ? data[thisKey]
        : value.default
        ? value.default
        : null;
    }
  }
  static forEachClientInLocal(callback) {
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key) {
          let client = JSON.parse(localStorage.getItem(key));
          callback(client);
        }
      }
    }
  }
  static getAllClients(callback) {
    let clients = {};
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        if (key) {
          let client = JSON.parse(localStorage.getItem(key));
          clients[client.key] = client;
        }
      }
    }
    callback(clients);
  }
  static getLastDate() {
    let thisDate = new Date();
    let day = thisDate.getDate();
    let month = thisDate.getMonth() + 1;
    let year = thisDate.getFullYear();
    return day + "/" + month + "/" + year;
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
      data.lastModified = new Date();
      data.lastDate = Client.getLastDate();
      // data.followUps = newValues.followUps ? newValues.followUps : null;
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
