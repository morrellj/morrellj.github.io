const buttonNav = document.getElementById("buttonNav");
const buttonNavToggle = document.getElementById("buttonNavToggle");
const menuAttach = document.getElementById("menuAttach");
const menuDetach = document.getElementById("menuDetach");

buttonNavToggle.addEventListener("click", buttonNavToggleOnClick);

function screenWidthNarrow() {
  return window.innerWidth < 1300 ? true : false;
}

if (screenWidthNarrow()) {
  activateNarrowScreenAnimations();
} else {
  attachMenu();
}

function activateNarrowScreenAnimations() {
  window.addEventListener("scroll", hideButtonNav);
  detachMenu();
}

function setButtonNavPositionOnSetPage() {
  window.removeEventListener("scroll", hideButtonNav);
  if (screenWidthNarrow()) {
    detachMenu();
    window.scroll({ top: menuDetach.offsetHeight + 5, behavior: "smooth" });
    activateNarrowScreenAnimations();
  } else {
    window.scroll({ top: 0, behavior: "smooth" });
  }
}

function hideButtonNav() {
  window.removeEventListener("scroll", hideButtonNav);
  if (menuDetach.dataset.loaded == "false") {
    detachMenu();
  }
  setButtonNavTogglePosition();
  window.addEventListener("scroll", hideButtonNav);
}

function buttonNavToggleOnClick(e) {
  e.stopPropagation();
  window.removeEventListener("scroll", hideButtonNav);
  attachMenu();
  app.pageActions.hideAll();
  setTimeout(() => {
    window.addEventListener("scroll", hideButtonNav);
  }, 1000);
}

function attachMenu() {
  buttonNavToggle.classList.add("hidden");
  menuAttach.appendChild(buttonNav);
  menuDetach.dataset.loaded = "false";
}

function detachMenu() {
  menuDetach.appendChild(buttonNav);
  menuDetach.dataset.loaded = "true";
  setButtonNavTogglePosition();
}

function setButtonNavTogglePosition() {
  if (
    window.scrollY < menuDetach.offsetHeight - 10 &&
    !buttonNavToggle.classList.contains("hidden")
  ) {
    buttonNavToggle.classList.add("hidden");
  }
  if (
    window.scrollY > menuDetach.offsetHeight - 35 &&
    buttonNavToggle.classList.contains("hidden")
  ) {
    buttonNavToggle.classList.remove("hidden");
  }
}
