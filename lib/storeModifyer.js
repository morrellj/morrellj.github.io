class storeMod {
  constructor(key) {
    this.original = JSON.parse(localStorage.getItem(key));
    this.new = this.consolidate();
  }
  save = () => {
    localStorage.setItem("assessmentLight", JSON.stringify(this.new));
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
