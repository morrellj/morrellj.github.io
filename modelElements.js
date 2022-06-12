class Elements {
  constructor(schema) {
    this.inputElementsArray = [];

    for (const [dataField, value] of Object.entries(schema)) {
      //create tag
      this[dataField] = document.createElement(value.tag);
      //create div and label
      let inputDiv = document.createElement("div");
      inputDiv.id = dataField;
      inputDiv.classList.add("flex-item");
      let inputLabel = document.createElement("p");
      inputLabel.innerHTML = value.label;
      //create follow up check box
      let followUpCheckbox = document.createElement("input");
      followUpCheckbox.type = "checkbox";
      followUpCheckbox.oninput = function () {
        let clientKey = this.name;
        Client.getClient(clientKey, (client) => {
          if (this.checked == true) {
            // update a property in the record that is an array
            let arr = [];
            if (client.followUps) {
              client.followUps.push(this.parentNode.id);
            } else {
              arr.push(this.parentNode.id);
              client.followUps = arr;
            }
          } else if (this.checked == false) {
            let arr = client.followUps.filter((e) => e !== this.parentNode.id);
            client.followUps = arr;
          }
          client.replace();
        });
      };
      //append element and label to div
      inputDiv.appendChild(inputLabel);
      inputDiv.appendChild(this[dataField]);
      inputDiv.appendChild(followUpCheckbox);
      //add name
      // this[dataField].name = dataField;
      //add class list
      value.classes.forEach((ele) => {
        this[dataField].classList.add(ele);
      });

      //add on input funtion to update client record as user types
      this[dataField].oninput = function () {
        let changeObject = {};
        if (this.name) {
          changeObject[this.parentNode.id] =
            this.tagName == "SELECT"
              ? elements.getMultiSelectValues(this)
              : this.value;
          Client.updateClient(this.name, changeObject);
        } else {
          alert("Select a client");
        }
      };
      //add type if relevant
      if (value.type) {
        this[dataField].type = value.type;
      }
      // add color
      value.classes.forEach((element) => {
        if (Client.colors[element]) {
          this[dataField].style.backgroundColor = Client.colors[element];
        }
      });
      //add default
      if (value.default) {
        this[dataField].value = value.default;
      }
      //unique actions for specific tag types
      switch (value.tag) {
        case "select":
          if (!value.multiple) {
            let blankOption = document.createElement("option");
            blankOption.value = "";
            blankOption.innerHTML = "";
            blankOption.hidden = true;
            blankOption.selected = "";
            this[dataField].appendChild(blankOption);
          }
          value.selectOptions.forEach((option) => {
            let selectOption = document.createElement("option");
            selectOption.value = option;
            selectOption.innerHTML = option;
            this[dataField].appendChild(selectOption);
          });
          this[dataField].multiple = value.multiple;
          break;
        case "input":
          if ((value.type = "date")) {
            console.log("date type");
          }
          break;
        default:
      }

      //push div to array
      this.inputElementsArray.push(inputDiv);
    }
    //class functions
    this.addSpecifiedElementsToTargetDiv = function (category, targetDiv) {
      let count = 0;
      let nextDiv;
      function subRootOneDiv() {
        let tempDiv = document.createElement("div");
        tempDiv.id = "subroot-" + count / 3;
        tempDiv.classList.add("flex-item");
        tempDiv.classList.add("sub-root-1");
        return tempDiv;
      }
      nextDiv = subRootOneDiv();
      targetDiv.appendChild(nextDiv);
      this.inputElementsArray.forEach(function (element) {
        // if (element.lastChild.classList.contains("carePlan")) {
        //   if (count % 3 == 2) {
        //     let newBlankDiv = blankDiv();
        //     nextDiv.appendChild(newBlankDiv);
        //     nextDiv = subRootOneDiv();
        //     targetDiv.appendChild(nextDiv);
        //   }
        //   addNextElement(category, element, nextDiv);
        //   count += 1;
        //   if (count % 3 == 0 && count > 0) {
        //     nextDiv = subRootOneDiv();
        //     targetDiv.appendChild(nextDiv);
        //   }
        // } else {
        addNextElement(category, element, nextDiv);
        // }
      });
      while (count % 3 != 0) {
        let newBlank = blankDiv();
        targetDiv.lastChild.appendChild(newBlank);
        count += 1;
      }
      function blankDiv() {
        let thisBlank = document.createElement("div");
        thisBlank.classList.add("flex-item");
        thisBlank.classList.add("blank-fill");
        return thisBlank;
      }
      function addNextElement(category, element, elementDiv) {
        if (category == "All") {
          elementDiv.appendChild(element);
          count += 1;
        } else if (category == "followUp") {
          if (
            element.childNodes[2].checked == true ||
            element.childNodes[1].classList.contains(category)
          ) {
            elementDiv.appendChild(element);
            count += 1;
          }
        } else if (element.childNodes[1].classList.contains(category)) {
          elementDiv.appendChild(element);
          count += 1;
        }
        if (count % 3 == 0 && count > 0) {
          nextDiv = subRootOneDiv();
          targetDiv.appendChild(nextDiv);
        }
      }
    };
    this.updateElements = function (data) {
      this.inputElementsArray.forEach((ele) => {
        let dataField = ele.childNodes[1];
        if (data[ele.id]) {
          if (dataField.tagName == "SELECT" && dataField.multiple == true) {
            setMultiSelectValues(dataField, data);
          } else {
            dataField.value = data[ele.id];
          }
        } else {
          dataField.value = "";
        }
        dataField.name = data.key;
        let thisFollowUpsCheckbox = ele.childNodes[2];
        thisFollowUpsCheckbox.name = data.key;
        if (data.followUps) {
          thisFollowUpsCheckbox.checked = data.followUps.includes(ele.id)
            ? true
            : false;
        }
      });
    };
    this.getMultiSelectValues = function (select) {
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
    function setMultiSelectValues(element, clientData) {
      var options = element.options;
      var opt;
      for (var i = 0, iLen = options.length; i < iLen; i++) {
        options[i].selected = false;
      }
      if (clientData[element.id]) {
        if (Array.isArray(clientData[element.id])) {
          clientData[element.id].map((value) => {
            for (var i = 0, iLen = options.length; i < iLen; i++) {
              opt = options[i];
              if (opt.value == value) {
                opt.selected = true;
              }
            }
          });
        } else if (typeof clientData[element.id] === "string") {
          for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];
            if (opt.value == clientData[element.id]) {
              opt.selected = true;
            }
          }
        }
      }
    }
  }
}
