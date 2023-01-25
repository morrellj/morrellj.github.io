let pwa = {};
(function (app) {
  const butInstall = document.getElementById("appInstallButton");

  //   butInstall.setAttribute('disabled', true);
  /**
   * Track successful app installs
   */
  // window.addEventListener('appinstalled', (e) => {
  //   gaEvent('Install', 'installed');
  // });

  /**
   * Listen for 'beforeinstallprompt' event, and update the UI to indicate
   * text-editor can be installed.
   */
  window.addEventListener("beforeinstallprompt", (e) => {
    // Don't show the mini-info bar
    e.preventDefault();

    // Log that install is available.
    console.log("app install available");

    // Save the deferred prompt
    app.installPrompt = e;

    // Show the install button
    butInstall.removeAttribute("disabled");
    butInstall.classList.remove("hidden");
  });

  // Handle the install button click
  butInstall.addEventListener("click", () => {
    butInstall.setAttribute("disabled", true);
    app.installPrompt.prompt(); //***********************************************
    // gaEvent('Install', 'clicked');
  });

  // myMenus.addKeyboardShortcut(butInstall);
})(pwa);
//   Footer
//   © 2023 GitHub, Inc.
//   Footer navigation
//   Terms
//   Privacy
