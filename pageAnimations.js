const buttonNav = document.getElementById("buttonNav");
const buttonNavToggle = document.getElementById("buttonNavToggle");
const menuAttach = document.getElementById("menuAttach");
const menuDetach = document.getElementById("menuDetach");

buttonNavToggle.addEventListener("click", function () {
  menuAttach.appendChild(buttonNav);
  menuDetach.dataset.loaded = false;
  buttonNavToggle.innerHTML = "";
});

function detachButtonNav() {
  menuDetach.appendChild(buttonNav);
  menuDetach.dataset.loaded = true;
}

document.addEventListener("scroll", displayShowButtonNavMessage);

function displayShowButtonNavMessage() {
  window.removeEventListener("scroll", displayShowButtonNavMessage);
  if (menuDetach.dataset.loaded == "false") {
    menuDetach.appendChild(buttonNav);
  }
  if (window.scrollY < 370 && buttonNavToggle.innerHTML == "Show menu") {
    buttonNavToggle.innerHTML = "";
  }
  if (window.scrollY > 370 && buttonNavToggle.innerHTML == "") {
    buttonNavToggle.innerHTML = "Show menu";
  }
  window.addEventListener("scroll", displayShowButtonNavMessage);
}
