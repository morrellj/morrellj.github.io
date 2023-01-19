const buttonNav = document.getElementById("buttonNav");
const buttonNavToggle = document.getElementById("buttonNavToggle");
const menuAttach = document.getElementById("menuAttach");
const menuDetach = document.getElementById("menuDetach");

buttonNavToggle.addEventListener("click", buttonNavToggleOnClick);

function screenWidthNarrow() {
  return window.innerWidth < 1285 ? true : false;
}

if (screenWidthNarrow()) activateNarrowScreenAnimations();

function activateNarrowScreenAnimations() {
  window.addEventListener("scroll", displayShowButtonNavMessage);
  detachMenu();
}

function setButtonNavPositionOnSetPage() {
  if (screenWidthNarrow()) {
    activateNarrowScreenAnimations();
    if (window.innerWidth < 1300) {
      if (
        !(
          document.getElementById("body").scrollHeight - window.innerHeight <
          menuDetach.offsetHeight
        )
      ) {
        window.scroll({ top: menuDetach.offsetHeight + 5, behavior: "auto" });
      }
    }
  }
}

function displayShowButtonNavMessage() {
  window.removeEventListener("scroll", displayShowButtonNavMessage);
  if (menuDetach.dataset.loaded == "false") {
    detachMenu();
  }
  if (
    window.scrollY < menuDetach.offsetHeight &&
    !buttonNavToggle.classList.contains("hidden")
  ) {
    buttonNavToggle.classList.add("hidden");
  }
  if (
    window.scrollY > menuDetach.offsetHeight &&
    buttonNavToggle.classList.contains("hidden")
  ) {
    buttonNavToggle.classList.remove("hidden");
  }
  window.addEventListener("scroll", displayShowButtonNavMessage);
}

function buttonNavToggleOnClick() {
  window.removeEventListener("scroll", displayShowButtonNavMessage);
  attachMenu();
  clientSelectDivClose();
  setTimeout(() => {
    window.addEventListener("scroll", displayShowButtonNavMessage);
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
}
