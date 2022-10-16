class FollowUpCheckBox {
  constructor(fieldSettings) {
    let self = this;
    self.fieldSettings = fieldSettings;
    self.schema = {
      tag: "input",
      props: { type: "checkbox", oninput: this.oninput },
    };
  }
  oninput = function () {
    let client = store.state[this.name];
    let arr = [];
    if (client.followUps) {
      arr = [...client.followUps];
    }
    if (this.checked == true) {
      // update a property in the record that is an array
      arr.push(this.parentNode.id);
    } else if (this.checked == false) {
      arr = arr.filter((e) => e !== this.parentNode.id);
    }
    store.dispatch("update", { id: this.name, data: { followUps: arr } });
  };
}
