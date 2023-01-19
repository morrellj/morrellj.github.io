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

if (app.hasFSAccess) {
  // provisions
} else {
  // provisions
}

app.alertUnsavedChanges = () => {
  if (!app.file.isModified) {
    return true;
  }
  const confirmMsg = "Discard changes? All current changes will be lost.";
  return confirm(confirmMsg);
};

/**
 * Opens a file for reading.
 *
 * @param {FileSystemFileHandle} fileHandle File handle to read from.
 */
app.openFile = async (fileHandle) => {
  if (!app.confirmDiscard()) {
    return;
  }

  // If the File System Access API
  if (!app.hasFSAccess) {
    //   deal with absence of FS API
    return;
  }

  // If a fileHandle is provided, verify we have permission to read/write it,
  // otherwise, show the file open prompt and allow the user to select the file.
  if (fileHandle) {
    if ((await verifyPermission(fileHandle, true)) === false) {
      console.error(`User did not grant permission to '${fileHandle.name}'`);
      return;
    }
  } else {
    try {
      fileHandle = await getFileHandle();
    } catch (ex) {
      if (ex.name === "AbortError") {
        return;
      }
      const msg = "An error occured trying to open the file.";
      console.error(msg, ex);
      alert(msg);
    }
  }

  if (!fileHandle) {
    return;
  }
  const file = await fileHandle.getFile();
  app.readFile(file, fileHandle);
};

/**
 * Read the file from disk.
 *
 *  @param {File} file File to read from.
 *  @param {FileSystemFileHandle} fileHandle File handle to read from.
 */
app.readFile = async (file, fileHandle) => {
  try {
    // do something with the open file
  } catch (ex) {
    const msg = `An error occured reading ${app.fileName}`;
    console.error(msg, ex);
    alert(msg);
  }
};

/**
 * Saves a file to disk.
 */
app.saveFile = async () => {
  try {
    if (!app.file.handle) {
      return await app.saveFileAs();
    }
    gaEvent("FileAction", "Save");
    await writeFile(app.file.handle, app.getText());
    app.setModified(false);
  } catch (ex) {
    gaEvent("Error", "FileSave", ex.name);
    const msg = "Unable to save file";
    console.error(msg, ex);
    alert(msg);
  }
};

/**
 * Saves a new file to disk.
 */
app.saveFileAs = async () => {
  if (!app.hasFSAccess) {
    // deal with abscence of FS API
    return;
  }
  let fileHandle;
  try {
    fileHandle = await getNewFileHandle();
  } catch (ex) {
    if (ex.name === "AbortError") {
      return;
    }
    const msg = "An error occured trying to open the file.";
    console.error(msg, ex);
    alert(msg);
    return;
  }
  try {
    await writeFile(fileHandle, TEXTTOWRITE);
    app.setFile(fileHandle);
    app.setModified(false);
  } catch (ex) {
    const msg = "Unable to save file.";
    console.error(msg, ex);
    alert(msg);
    return;
  }
};

/**
 * Updates the UI with the current file name.
 * @param {FileHandle|string} fileHandle Filename to display in header.
 */
app.setFile = (fileHandle) => {
  if (fileHandle && fileHandle.name) {
    app.file.handle = fileHandle;
    app.file.name = fileHandle.name;
    //save file handle name to local storage?
  } else {
    app.file.handle = null;
    app.file.name = fileHandle;
  }
};

/**
 * Updates the UI if the file has been modified.
 * @param {boolean} val True if the file has been modified.
 */
app.setModified = (val) => {
  if (!app.hasFSAccess) {
    return;
  }
  app.file.isModified = val;
};

/**
 * Confirms user does not want to save before closing the current doc.
 * @return {boolean} True if it's OK to discard.
 */
app.confirmDiscard = () => {
  if (!app.file.isModified) {
    return true;
  }
  const confirmMsg = "Discard changes? All changes will be lost.";
  return confirm(confirmMsg);
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
