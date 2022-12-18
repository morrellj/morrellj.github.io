class storeMod {
  constructor(key) {
    if (JSON.parse(localStorage.getItem(key))) {
      console.log(`The ${key} data base already exists`);
      this.original = null;
      return;
    }
    this.data = this.consolidate();
  }
  save = () => {
    localStorage.setItem("assessment_light", JSON.stringify(this.data));
  };
  consolidate = () => {
    let newDB = {};
    for (var i = 0; i < localStorage.length; i++) {
      let record = JSON.parse(localStorage.getItem(localStorage.key(i)));
      newDB[record.key] = record;
    }
    return newDB;
  };
  print = () => {
    console.log(this.new);
  };
}
