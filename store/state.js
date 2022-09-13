class DataBase {
  constructor(key, schematic) {
    this.key = key;
    this.schematic = schematic;
    if (JSON.parse(localStorage.getItem(this.key))) {
      DataBase.data = JSON.parse(localStorage.getItem(this.key));
    } else {
      localStorage.setItem(this.key, JSON.stringify(schematic));
      DataBase.data = JSON.parse(localStorage.getItem(this.key));
    }
    this.events = new PubSub();
  }
  save() {
    localStorage.setItem(this.key, JSON.stringify(DataBase.data));
    Object.assign(DataBase.data, JSON.parse(localStorage.getItem(this.key)));
    this.events.publish("stateChange");
  }
  data() {
    return DataBase.data;
  }
  static data = {};
}

// let state = new DataBase("OutHouse", {
//   items: [],
// });
