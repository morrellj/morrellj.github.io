"use strict";
const staticLightAss = "ass-light-v3";

const assets = [
  "./assessment.css",
  "./pwaScripts/appInstall.js",
  "./papaparse.min.js",
  "./lib/builder.js",
  "./components/popUp.js",
  "./components/inputFieldDiv.js",
  "./components/dataField.js",
  "./components/likertResponseGrid.js",
  "./components/singleLikertField.js",
  "./components/BaseInputField.js",
  "./components/dataFieldVariations.js",
  "./components/inputFieldVariations.js",
  "./components/inputLabel.js",
  "./components/selectFieldOptions.js",
  "./components/followUpCheckBox.js",
  "./components/loneLinksField.js",
  "./components/link.js",
  "./components/groupLinksField.js",
  "./lib/pubsub.js",
  "./lib/fileReader.js",
  "./lib/fileWriter.js",
  "./lib/fsHelpers.js",
  "./appMain.js",
  "./appRecords.js",
  "./appFile.js",
  "./appPage.js",
  "./appMenus.js",
  "./menus/fileMenu.js",
  "./menus/pageMenu.js",
  "./menus/recordsMenu.js",
  "./elements.js",
  "./clientRecordFieldSettings.js",
  "./lib/storeModifyer.js",
  "./store/actions.js",
  "./store/mutations.js",
  "./store/state.js",
  "./assessment.js",
];

self.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(staticLightAss).then((cache) => {
      cache.addAll(assets);
    })
  );
  // self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
  return self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
