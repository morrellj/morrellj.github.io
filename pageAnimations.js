const buttonNav = document.getElementById("buttonNav");
const buttonNavToggle = document.getElementById("buttonNavToggle");
const menuAttach = document.getElementById("menuAttach");
const menuDetach = document.getElementById("menuDetach");
function checkScreenWidth() {
  if (window.innerWidth < 1300) {
    window.addEventListener("scroll", displayShowButtonNavMessage);
    detachMenu();
  } else {
    attachMenu();
  }
}
buttonNavToggle.addEventListener("click", buttonNavToggleOnClick);

function displayShowButtonNavMessage() {
  window.removeEventListener("scroll", displayShowButtonNavMessage);
  if (menuDetach.dataset.loaded == "false") {
    detachMenu();
  }
  if (window.scrollY < 370 && !buttonNavToggle.classList.contains("hidden")) {
    buttonNavToggle.classList.add("hidden");
  }
  if (window.scrollY > 370 && buttonNavToggle.classList.contains("hidden")) {
    buttonNavToggle.classList.remove("hidden");
  }
  window.addEventListener("scroll", displayShowButtonNavMessage);
}

function buttonNavToggleOnClick() {
  window.removeEventListener("scroll", displayShowButtonNavMessage);
  attachMenu();
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
