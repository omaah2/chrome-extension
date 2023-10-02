


// document.addEventListener("DOMContentLoaded", () => {
//   const startRecordingButton = document.querySelector("button#start_recording");
//   const stopRecordingButton = document.querySelector("button#stop_recording");
//   const fetchVideosButton = document.querySelector("button#fetch_videos");

//   startRecordingButton.addEventListener("click", () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         { action: "request_recording" },
//         function (response) {
//           if (!chrome.runtime.lastError) {
//             console.log(response);
//           } else {
//             console.error(chrome.runtime.lastError, "error line 14");
//           }
//         }
//       );
//     });
//   });

//   stopRecordingButton.addEventListener("click", () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         { action: "stoprecording" },
//         function (response) {
//           if (!chrome.runtime.lastError) {
//             console.log(response);
//           } else {
//             console.error(chrome.runtime.lastError, "error line 27");
//           }
//         }
//       );
//     });
//   });

//   fetchVideosButton.addEventListener("click", () => {
//     axios
//       .get("https://hng5.onrender.com/api/video/")
//       .then((response) => {
//         const videos = response.data.data;
//         console.log("Fetched videos:", videos);
//         // You can process the response and display it in the popup as needed
//       })
//       .catch((error) => {
//         console.error("Error fetching videos:", error);
//       });
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  const startRecordingButton = document.querySelector("button#start_recording");
  const stopRecordingButton = document.querySelector("button#stop_recording");
  const fetchVideosButton = document.querySelector("button#fetch_videos");

  // Initially, hide the Stop Recording and Fetch Videos buttons
  stopRecordingButton.style.display = "none";
  fetchVideosButton.style.display = "none";

  startRecordingButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);

            // Show the Stop Recording button and hide Start Recording
            startRecordingButton.style.display = "none";
            stopRecordingButton.style.display = "block";
          } else {
            console.error(chrome.runtime.lastError, "error line 14");
          }
        }
      );
    });
  });

  stopRecordingButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stoprecording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);

            // Show the Fetch Videos button and hide Stop Recording
            stopRecordingButton.style.display = "none";
            fetchVideosButton.style.display = "block";
          } else {
            console.error(chrome.runtime.lastError, "error line 27");
          }
        }
      );
    });
  });

  fetchVideosButton.addEventListener("click", () => {
    axios
      .get("https://hng5.onrender.com/api/video/")
      .then((response) => {
        const videos = response.data.data;
        console.log("Fetched videos:", videos);
        // You can process the response and display it in the popup as needed
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  });
});
