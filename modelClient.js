class Client {
  static schema = {
    firstName: {
      tag: "input",
      type: "text",
      label: "First name",
      tags: ["Demographic"],
      classes: ["Demographic", "Preamble"],
    },
    middleName: {
      tag: "input",
      label: "Middle Name",
      type: "text",
      tags: ["Demographic"],
      classes: ["Demographic"],
    },
    surname: {
      tag: "input",
      label: "Surname",
      type: "text",
      tags: ["Demographic"],
      classes: ["Demographic"],
    },
    aboutMe: {
      tag: "textarea",
      label: "About me.",
      tags: ["Preamble"],
      classes: ["largeText", "Preamble"],
    },
    atsiStatusSelect: {
      tag: "select",
      label: "ATSI status",
      tags: ["Demographic"],
      classes: ["Demographic"],
      selectOptions: ["Aboriginal", "Torres Straight Islander", "Neither ATSI"],
    },
    carerStatus: {
      tag: "select",
      label: "Carer Status",
      tags: ["Demographic"],
      classes: ["Demographic"],
      selectOptions: ["No Carer", "Non co resident carer", "Co resident carer"],
      multiple: true,
    },
    dateOfBirth: {
      tag: "input",
      label: "Date of Birth",
      tags: ["Demographic"],
      classes: ["Demographic"],
      type: "date",
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
