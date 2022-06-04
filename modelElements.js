class Elements {
  constructor(schema) {
    this.array = [];
    for (const [dataField, value] of Object.entries(schema)) {
      //create tag
      this[dataField] = document.createElement(value.tag);
      //add ID
      this[dataField].id = dataField;
      //add class list
      value.classes.forEach((ele) => {
        this[dataField].classList.add(ele);
      });
      //add on input funtion to update client record as user types
      this[dataField].oninput = function () {
        let changeObject = {};
        if (this.name) {
          changeObject[this.id] =
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
      //unique actions for specific tag types
      switch (value.tag) {
        case "select":
          let blankOption = document.createElement("option");
          blankOption.value = "";
          blankOption.innerHTML = "";
          blankOption.hidden = true;
          blankOption.selected = "";
          this[dataField].appendChild(blankOption);
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
        //   case "medText":
        //     this[dataField] = function (value) {};
        //     break;
        //   case "multiSelect":
        //     this[dataField] = function (value) {};
        //     break;
        //   case "singleSelect":
        //     this[dataField] = function (value) {};
        //     break;
        default:
      }
      //create div and label
      let inputDiv = document.createElement("div");
      inputDiv.id = dataField + "Div";
      let inputLabel = document.createElement("p");
      inputLabel.innerHTML = value.label;
      //append element and label to div
      inputDiv.appendChild(inputLabel);
      inputDiv.appendChild(this[dataField]);
      //push div to array
      this.array.push(inputDiv);
    }
    //class functions
    this.addSpecifiedElementsToTargetDiv = function (tag, targetDiv) {
      this.array.forEach(function (element) {
        if (tag == "All") {
          targetDiv.appendChild(element);
        } else if (element.lastChild.classList.contains(tag)) {
          targetDiv.appendChild(element);
        }
      });
    };
    this.updateElements = function (data) {
      this.array.forEach((ele) => {
        let dataField = ele.lastChild;
        if (data[dataField.id]) {
          dataField.value = data[dataField.id];
        } else {
          // if (dataField.tagName == "SELECT") {
          //   dataField.value = Client.schema[dataField.id].selected;
          // } else {
          dataField.value = "";
          // }
        }
        dataField.name = data.key;
      });
    };
    this.getMultiSelectValues = function (select) {
      var result = [];
      var options = select && select.options;
      var opt;

      for (var i = 0, iLen = options.length; i < iLen; i++) {
        opt = options[i];

        if (opt.selected) {
          result.push(opt.value || opt.text);
        }
      }
      return result;
    };
    function setMultiSelectValues() {}
  }
}
