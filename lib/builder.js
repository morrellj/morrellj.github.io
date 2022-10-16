class Builder {
  constructor(props) {
    this.elements = [];
    if (props) {
      if (props.schema) {
        this.schema = props.schema;
        //what happens here with this.element
        this.manufacture(this.schema); //this.element);
      }
      if (props.state) {
        state.events.subscribe("stateChange", this.refresh);
      }
    }
  }
  manufacture(thisSchema, root) {
    for (let [elementName, element] of Object.entries(thisSchema)) {
      if (typeof element == "function") {
        this.manufacture(element(), root);
      } else if (element instanceof Builder) {
        element.append(root);
        this.elements = this.elements.concat(element.elements);
        this[elementName] = element.element;
        //need to subscribe to parents refresh method
      } else {
        this[elementName] = document.createElement(element.tag);
        if (root) {
          root.appendChild(this[elementName]);
        }
        for (let [attribute, value] of Object.entries(element.props)) {
          if (attribute == "classList") {
            value.forEach((classWord) => {
              this[elementName].classList.add(classWord);
            });
          } else {
            this[elementName][attribute] = value;
          }
        }
        this.elements.push(this[elementName]);
        if (element.children) {
          this.manufacture(element.children, this[elementName]);
        }
      }
    }
    this.element = this.elements[0];
  }
  append(parent) {
    parent.appendChild(this.element);
    return this;
  }
  appendSkinned(parent) {
    this.element.childNodes.forEach((elem) => {
      parent.appendChild(elem);
    });
    return this;
  }
  remove() {
    this.element.remove();
    return this;
  }
  // purge() {
  //   // if the this.element is not just a wrapper this will keep the old this.element
  //   while (this.element.childNodes.length > 0) {
  //     this.element.childNodes[0].remove();
  //   }
  // }
  refreshFieldSettings = (currentElement = this.schema) => {
    for (let [elementName, element] of Object.entries(currentElement)) {
      for (let [attribute, value] of Object.entries(element.props)) {
        if (attribute == "classList") {
          this[elementName].classList = [];
          value.forEach((classWord) => {
            this[elementName].classList.add(classWord);
          });
        } else {
          this[elementName][attribute] = value;
        }
      }
      if (element.children) {
        this.refreshFieldSettings(element.children);
      }
    }

    //this is keeping the old this element
    return this;
  };
}
