(function (app) {
  const menuFile = document.getElementById("menuFile");
  appMenus.setup(menuFile);

  document.getElementById("openFsFileButton").addEventListener("click", () => {
    appMenus.hide(menuFile);
    // app.openFile();
    csvFileToString();
  });

  document.getElementById("saveToFsFile").addEventListener("click", () => {
    appMenus.hide(menuFile);
    // app.saveFile();
    exportData();
  });
})(app);
