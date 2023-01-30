(function (app) {
  const menuPage = document.getElementById("menuPage");
  appMenus.setup(menuPage);

  document.getElementById("reviewNotesButton").addEventListener("click", () => {
    appMenus.hide(menuPage);
    let client = store.state.records[store.state.activeRecord];
    let string = "";
    for (const [key, value] of Object.entries(clientRecordFieldSettings)) {
      if (value.classes) {
        if (
          value.classes.includes("review") &&
          client[key] != null &&
          client[key] != ""
        ) {
          let substring = value.label;
          let data =
            client[key].current != undefined
              ? client[key].current
              : client[key];
          string = string + "\n---- " + substring + ": ----\n" + data;
        }
      }
    }
    console.log(string);
    setTimeout(
      async () => await window.navigator.clipboard.writeText(string),
      500
    );
  });
})(app);
