const app = {
  appName: "Grove Assessment Light",
  file: {
    handle: null,
    name: null,
    isModified: false,
  },
  settings: {},
  hasFSAccess:
    "chooseFileSystemEntries" in window || "showOpenFilePicker" in window,
  // isMac: navigator.userAgent.includes('Mac OS X'),
};

/**
 * Attempts to close the window
 */
app.quitApp = () => {
  if (!app.confirmDiscard()) {
    return;
  }
  window.close();
};
