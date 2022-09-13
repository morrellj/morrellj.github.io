class Builder {
  constructor(props) {
    this.element = document.createElement("div");
    if (props) {
      this.schema = props.schema;
      this.manufacture(this.schema, this.element);
    }
    state.events.subscribe("stateChange", this.refresh);
  }
  manufacture(thisSchema, root) {
    if (typeof thisSchema == "function") {
      this.manufacture(thisSchema(), root);
    } else if (thisSchema instanceof Builder) {
      thisSchema.appendNaked(root);
    } else {
      Object.keys(thisSchema).forEach((element) => {
        this[element] = document.createElement(thisSchema[element].tag);
        root.appendChild(this[element]);
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
      });
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
