
// chrome.runtime.onInstalled.addListener( () =>
// {
//   chrome.runtime.onConnect.addListener((port) => {
//     port.postMessage({ action: "popup-connected" });

//     port.onMessage.addListener((msg) => {
//       if (msg.action === "request-permissions") {
//         chrome.permissions.request(
//           {
//             permissions: ["activeTab", "videoCapture"],
//           },
//           (granted) => {
//             port.postMessage({ permissionsGranted: granted });
//           }
//         );
//       } else if (msg.action === "start-recording") {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//           chrome.tabs.sendMessage(tabs[0].id, { action: "start-recording" });
//         });
//       } else if (msg.action === "stop-recording") {
//         chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//           chrome.tabs.sendMessage(
//             tabs[0].id,
//             { action: "stop-recording" },
//             (response) => {
//               port.postMessage({ url: response.url });
//             }
//           );
//         });
//       }
//     });
//   });
// });
// Background.jsx

// Define the cache name for your extension
const cacheName = 'my-extension-cache';

// List of assets to cache
const assetsToCache = [
  '/',
  '/index.html',
  '/css/index.css',
  '/js/main.js',
  'icon.png',
];

// Event listener for the 'install' event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Event listener for the 'fetch' event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
