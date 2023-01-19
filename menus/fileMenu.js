(function (app) {
  const menuFile = document.getElementById("menuFile");
  menusLib.setup(menuFile);

  document.getElementById("openFsFileButton").addEventListener("click", () => {
    menusLib.hide(menuFile);
    app.openFile();
  });

  document.getElementById("saveToFsFile").addEventListener("click", () => {
    menusLib.hide(menuFile);
    app.saveFile();
  });
})(app);
