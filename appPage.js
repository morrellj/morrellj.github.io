(function (app) {
  app.pageActions = {};
  let searchBox = document.getElementById("searchBox");
  let clientListDiv = document.getElementById("clientListDiv");
  window.onclick = function (event) {
    if (event.target.classList.contains("pop-up")) {
      event.target.style.display = "none";
      removePopUpContent();
    }
    if (!event.target.classList.contains("topMenuButton")) {
      appMenus.hideAll();
    }
  };
  window.onkeydown = function (event) {
    if (event.altKey) {
      switch (event.code) {
        //case "ArrowLeft":
        //case "ArrowRight":
        case "Digit2":
          event.preventDefault();
          searchBox.focus();
          searchBox.value = "";
          break;
        //case "ArrowUp":
        //case "ArrowDown":
        case "Digit1":
          app.pageActions.toggleSection(clientListDiv);
          if (!clientListDiv.classList.contains("hidden")) {
            searchBox.focus();
            searchBox.value = "";
          }
          break;
        case "Digit3":
          carePlanToggle();
          break;
        case "KeyM":
          document.getElementById("buttonNavToggle").click();
      }
    }
  };
  const elems = document.querySelectorAll(".closeSectionButton");
  elems.forEach((elem) => {
    elem.addEventListener("click", () => {
      app.pageActions.hideSection(elem.parentElement);
    });
  });

  app.pageActions.hideAll = () => {
    const elems = document.querySelectorAll(".pageSection");
    elems.forEach((elem) => {
      app.pageActions.hideSection(elem);
    });
  };

  app.pageActions.hideSection = (elem) => {
    elem.classList.toggle("hidden", true);
  };

  app.pageActions.showSection = (elem) => {
    app.pageActions.hideAll();
    elem.classList.toggle("hidden", false);
  };

  app.pageActions.toggleSection = (section) => {
    let hidden = section.classList.contains("hidden");
    app.pageActions.hideAll();
    section.classList.toggle("hidden", !hidden);
  };
})(app);
