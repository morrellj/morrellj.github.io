class PopUp extends Builder {
  constructor(props) {
    super();
    let self = this;
    self.fieldSettings = props.fieldSettings;
    self.elementsObject = props.elementsObject;
    self.dataField = props.dataField;
    self.schema = {
      $_main: {
        tag: "div",
        props: {
          id: "pop-up",
          classList: ["pop-up"],
          onclick: self.hidePopUp,
          style: "display: block;",
        },
        children: {
          $_contentDiv: {
            tag: "div",
            props: {
              id: "pop-up-content",
              classList: ["pop-up-content"],
            },
            children: {
              $_heading: {
                tag: "h3",
                props: {
                  id: "pop-up-content-header",
                  classList: ["pop-up-content-header"],
                  innerHTML: self.fieldSettings.label,
                },
                children: {
                  $_closer: {
                    tag: "span",
                    props: {
                      classList: ["close", "pop-up-closer"],
                      innerHTML: "&times",
                      onclick: self.hidePopUp,
                    },
                  },
                },
              },
              $_content: self.dataField,
            },
          },
        },
      },
    };

    // this.main.style.display = "block";
    this.manufacture(this.schema);
    // document.getElementById("body").appendChild(this.$_main);
  }
  hidePopUp = (event) => {
    if (!event) {
      this.$_main.remove();
      return;
    }
    event.stopPropagation();
    if (
      event.target.classList.contains("pop-up") ||
      event.target.classList.contains("pop-up-closer")
    ) {
      // this.resetForm();
      this.$_main.remove();
    }
  };
  activatePopUp = (element) => {
    let self = this;
    return () => {
      if (self.resetForm) {
        self.resetForm();
      }
      //checks all input field elements for a "data-xxxx" attribute to see if they belong on the form/popUp
      self.elementsObject.inputElementsArray.forEach((element) => {
        if (element?.dataset[self.fieldSettings.fieldName]) {
          self.$_contentDiv.appendChild(element);
        }
      });
      self.$_main.style.display = "block";
      element.appendChild(self.$_main);
    };
  };
}
