(function (app) {
  const menuPage = document.getElementById("menuPage");
  appMenus.setup(menuPage);

  document.getElementById("reviewNotesButton").addEventListener("click", () => {
    appMenus.hide(menuPage);
    let client = store.state.records[store.state.activeRecord];
    let string = "";
    for (const [key, fieldModel] of Object.entries(clientRecordFieldSettings)) {//checks all fields
      if (fieldModel?.reviewPrint) {//is it flagged to be included in the review notes copy to paste function?yes:then
        if (client[key]?.constructor === Object) {//check for consolidated field and process accordingly
            let string = formatConsolidatedField(
              key,
              store.dispatch("fetchGrossData", key)
            );
            data = string;
        } else {//treat as string field
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
