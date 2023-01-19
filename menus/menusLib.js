"use strict";

const menusLib = {};

/**
 * Initializes a drop down menu.
 *
 * @param {Element} container Container element with the drop down menu.
 */
menusLib.setup = (container) => {
  const toggleButton = container.querySelector("button.topMenuButton");
  toggleButton.addEventListener("click", () => {
    menusLib._toggle(toggleButton);
  });
  container.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      menusLib.hideAll();
      return;
    }
    if (e.keyCode === 40) {
      const next = e.target.nextElementSibling;
      if (next) {
        next.focus();
      }
      return;
    }
    if (e.keyCode === 38) {
      const prev = e.target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  });
};

/**
 * Initializes a drop down menu.
 *
 * @param {Element} button Toggle button to show/hide menu.
 */

/**
 * Hides all visible menus.
 */
menusLib.hideAll = () => {
  const elems = document.querySelectorAll(".menuContainer");
  elems.forEach((elem) => {
    menusLib.hide(elem);
  });
};

/**
 * Hides a menu dropdown.
 *
 * @param {Element} menuContainer Container element with the drop down menu.
 */
menusLib.hide = (menuContainer) => {
  const button = menuContainer.querySelector(".topMenuButton");
  button.setAttribute("aria-expanded", false);
  const panel = menuContainer.querySelector(".menuItemContainer");
  if (panel) {
    panel.classList.toggle("hidden", true);
  }
};

/**
 * Shows a menu dropdown.
 *
 * @param {Element} menuContainer Container element with the drop down menu.
 */
menusLib.show = (menuContainer) => {
  menusLib.hideAll();
  const button = menuContainer.querySelector(".topMenuButton");
  button.setAttribute("aria-expanded", true);
  const panel = menuContainer.querySelector(".menuItemContainer");
  panel.classList.toggle("hidden", false);
  const firstButton = panel.querySelector("button");
  if (!firstButton) {
    menusLib.hideAll();
    return;
  }
  firstButton.focus();
};

/**
 * Creates a new menu item button.
 *
 * @param {string} label Label for button
 * @return {Button} Returns an HTML button.
 */
menusLib.createButton = (label) => {
  const butt = document.createElement("button");
  butt.innerText = label;
  butt.setAttribute("type", "button");
  butt.setAttribute("role", "menuitem");
  return butt;
};

/**
 * Adds an element to the menu.
 *
 * @param {Element} menuContainer Container element with the drop down menu.
 * @param {Element} elem Element to add to the menu container.
 */
menusLib.addElement = (menuContainer, elem) => {
  const container = menuContainer.querySelector(".menuItemContainer");
  container.appendChild(elem);
};

/**
 * Removes all items from the menu.
 *
 * @param {Element} menuContainer Container element with the drop down menu.
 */
menusLib.clearMenu = (menuContainer) => {
  const container = menuContainer.querySelector(".menuItemContainer");
  container.innerHTML = "";
};

/**
 * Toggles a menu open or closed.
 *
 * @private
 * @param {Element} button Toggle button to show/hide menu.
 */
menusLib._toggle = (button) => {
  const parent = button.parentElement;
  const expanded = button.getAttribute("aria-expanded");
  if (expanded === "true") {
    menusLib.hide(parent);
  } else {
    menusLib.show(parent);
  }
};
