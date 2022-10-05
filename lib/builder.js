class Builder {
  constructor(props) {
    if (props) {
      if (props.schema) {
        this.schema = props.schema;
        this.elements = this.manufacture(this.schema, this.element);
      }
    }
    if (props.state) {
      state.events.subscribe("stateChange", this.refresh);
    }
  }
  manufacture(thisSchema, root) {
    if (typeof thisSchema == "function") {
      this.manufacture(thisSchema(), root);
    } else if (thisSchema instanceof Builder) {
      thisSchema.appendNaked(root);
    } else {
      let elements = Object.keys(thisSchema).map((element) => {
        this[element] = document.createElement(thisSchema[element].tag);
        if (root) {
          root.appendChild(this[element]);
        }
        for (let [attribute, value] of Object.entries(
          thisSchema[element].props
        )) {
          if (attribute == "classList") {
            value.forEach((classWord) => {
              this[element].classList.add(classWord);
            });
          } else {
            this[element][attribute] = value;
          }
        }
        if (thisSchema[element].children) {
          this.manufacture(thisSchema[element].children, this[element]);
        }
        return this[element];
      });
      this.element = elements[0];
      return elements;
    }
  }
  append(parent) {
    parent.appendChild(this.element);
    return this;
  }
  appendNaked(parent) {
    this.element.childNodes.forEach((elem) => {
      parent.appendChild(elem);
    });
    return this;
  }
  remove() {
    this.element.remove();
    return this;
  }
  purge() {
    while (this.element.childNodes.length > 0) {
      this.element.childNodes[0].remove();
    }
  }
  refresh = () => {
    this.purge();
    this.manufacture(this.schema, this.element);
    return this;
  };
}
