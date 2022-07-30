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
      if (value.classes.indexOf("review") >= 0) {
        if (value.classes.length > 2) {
          inputLabel.oncontextmenu = function (event) {
            event.preventDefault();
            setPage(value.classes[1]);
          };
        }
      }
      inputLabel.onclick = popUpPop;

      inputLabel.innerHTML = value.label;
      //create follow up check box
      let followUpCheckbox = newFollowupCheckBox();

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
          this[dataField].size = "6";
          break;
        case "input":
          if ((value.type = "date")) {
          }
          break;
        default:
      }

      //push div to array
      this.inputElementsArray.push(inputDiv);
    }
    //Create links elements
    for (const [dataField, value] of Object.entries(
      Client.supplementaryProperties.links
    )) {
      //iterate lone links
      if (value.loneLinks) {
        let count = 0;
        value.loneLinks.forEach((link) => {
          let linksDiv = document.createElement("div");
          linksDiv.id = dataField + "-links-" + count;
          linksDiv.classList.add("link", "flex-item");
          let linksLabel = document.createElement("p");
          // linksLabel needed for addSpecifiedElementsToTargetDiv() to work at switch
          //default as it is node[0]
          let followUpCheckBox = newFollowupCheckBox();
          followUpCheckBox.classList.add("link-checkbox");
          let linkElement = document.createElement("a");
          linkElement.classList.add(dataField, "link-link");
          linkElement.target = "_blank";
          let linkAddy =
            link[1].indexOf("http") >= 0
              ? link[1]
              : window.location.href.slice(
                  0,
                  window.location.href.lastIndexOf("/")
                ) +
                "/documents/" +
                link[1];
          linkElement.href = linkAddy;
          linkElement.innerHTML = link[0];
          linksDiv.appendChild(linksLabel);
          linksDiv.appendChild(linkElement);
          linksDiv.appendChild(followUpCheckBox);
          this.inputElementsArray.push(linksDiv);
          count += 1;
        });
      }
      //set up group links div
      if (value.groupLinks) {
        let groupLinkDiv = document.createElement("div");
        groupLinkDiv.id = dataField + "-groupLinkDiv";
        groupLinkDiv.classList.add("link", "flex-item");
        let linksLabel = document.createElement("p");
        // linksLabel needed for addSpecifiedElementsToTargetDiv() to work at switch
        //default as it is node[0]
        let linksLink = document.createElement("a");
        linksLink.classList.add(dataField, "link-link");
        linksLink.id = `${dataField}-groupLink`;
        linksLink.onclick = linkPopUpPop;
        linksLink.innerHTML = "Click for more links...";
        linksLink.href = "#";
        groupLinkDiv.appendChild(linksLabel);
        groupLinkDiv.appendChild(linksLink);
        this.inputElementsArray.push(groupLinkDiv);
      }
    }
    function newFollowupCheckBox() {
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
      return followUpCheckbox;
    }
    //class functions
    this.addSpecifiedElementsToTargetDiv = function (category, targetDiv) {
      let count = 0;

      let assessmentRoot = subRootDiv("assessment", ["root"]);
      let carePlanRoot = subRootDiv("careplan", ["root"]);
      let clinicalRoot = subRootDiv("clinical", ["root"]);
      let carePlanDiv = subRootDiv("careplan-1", ["input-container"]);
      let clinicalDiv = subRootDiv("clinical-1", ["input-container"]);
      let assessmentDiv = subRootDiv("assessment-1", ["input-container"]);

      let subRootCollection = [assessmentRoot, carePlanRoot, clinicalRoot];
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
              element.childNodes[2].checked == true ||
              element.childNodes[1].classList.contains(category)
            ) {
              assessmentDiv.appendChild(element);
              if (divFull(assessmentDiv)) {
                assessmentDiv = getNextDiv(assessmentDiv);
              }
            }
          case "review":
            if (element.childNodes[1].classList.contains(category)) {
              assessmentDiv.appendChild(element);
              if (divFull(assessmentDiv)) {
                assessmentDiv = getNextDiv(assessmentDiv);
              }
            }
          case "carePlan":
            if (element.childNodes[1].classList.contains(category)) {
              assessmentDiv.appendChild(element);
              if (divFull(assessmentDiv)) {
                assessmentDiv = getNextDiv(assessmentDiv);
              }
            }
          default:
            let classList = element.childNodes[1].classList;
            if (classList.contains(category)) {
              if (
                classList.contains("carePlan") ||
                classList.contains("review")
              ) {
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
        let newDiv = subRootDiv(baseIdString + "-" + count, [
          "input-container",
        ]);
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
    this.updateElements = function (data) {
      this.inputElementsArray.forEach((ele) => {
        ele.childNodes[0].title = data.key;
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
      let fieldName = element.parentNode.id;
      var opt;
      for (var i = 0, iLen = options.length; i < iLen; i++) {
        options[i].selected = false;
      }
      if (clientData[fieldName]) {
        if (Array.isArray(clientData[fieldName])) {
          clientData[fieldName].map((value) => {
            for (var i = 0, iLen = options.length; i < iLen; i++) {
              opt = options[i];
              if (opt.value == value) {
                opt.selected = true;
              }
            }
          });
        } else if (typeof clientData[fieldName] === "string") {
          for (var i = 0, iLen = options.length; i < iLen; i++) {
            opt = options[i];
            if (opt.value == clientData[fieldName]) {
              opt.selected = true;
            }
          }
        }
      }
    }
  }
}
