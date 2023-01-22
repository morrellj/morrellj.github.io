(function (app) {
  const menuRecords = document.getElementById("menuRecords");
  appMenus.setup(menuRecords);

  document
    .getElementById("deleteRecordButton")
    .addEventListener("click", () => {
      appMenus.hide(menuRecords);
      app.recordsActions.delete();
    });

  document.getElementById("newRecordButton").addEventListener("click", () => {
    let newClientAddDiv = document.getElementById("newClientAddDiv");
    appMenus.hide(menuRecords);
    app.pageActions.toggleSection(newClientAddDiv);
  });

  document
    .getElementById("selectClientRecord")
    .addEventListener("click", () => {
      let clientListDiv = document.getElementById("clientListDiv");
      let searchBox = document.getElementById("searchBox");
      appMenus.hide(menuRecords);
      app.pageActions.toggleSection(clientListDiv);
      if (!clientListDiv.classList.contains("hidden")) {
        searchBox.focus();
        searchBox.value = "";
      }
    });
})(app);
