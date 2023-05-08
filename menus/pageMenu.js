(function (app) {
  const menuPage = document.getElementById("menuPage");
  appMenus.setup(menuPage);

  document.getElementById("reviewNotesButton").addEventListener("click", () => {
    appMenus.hide(menuPage);
    let client = store.state.records[store.state.activeRecord];
    let string = "";
    for (const [key, fieldModel] of Object.entries(clientRecordFieldSettings)) {
      if (fieldModel?.reviewPrint) {
        if (client[key].constructor === Object) {
          if (client[key].hasOwnProperty("current")) {
            data = client[key].current;
          } else {
            let string = formatConsolidatedField(
              key,
              store.dispatch("fetchGrossData", key)
            );
            data = string;
          }
        } else {
          data = client[key];
        }

        let substring = fieldModel.label;
        if (data) string = string + "\n---- " + substring + ": ----\n" + data;
      }
    }
    console.log(string);
    setTimeout(
      async () => await window.navigator.clipboard.writeText(string),
      500
    );
  });
})(app);
