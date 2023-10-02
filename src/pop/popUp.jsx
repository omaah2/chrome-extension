// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import copy from "../assets/copy.svg";
// import close from "../assets/close.svg";
// import setting from "../assets/settings.svg";
// import logo from "../assets/logo.png";
// import monitor from "../assets/monitor.svg";
// import video from "../assets/video-camera.png";
// import audio from "../assets/microphone.png";

// const Popup = () => {
//   const [recording, setRecording] = useState(false);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [videoId, setVideoId] = useState(null);

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//       });

//       const mediaRecorderInstance = new MediaRecorder(stream);
//       setMediaRecorder(mediaRecorderInstance);

//       mediaRecorderInstance.ondataavailable = (event) => {
//         if (event.data.size > 0) {
//           setRecordedChunks([...recordedChunks, event.data]);
//         }
//       };

//       mediaRecorderInstance.onstop = () => {
//         const blob = new Blob(recordedChunks, { type: "video/webm" });
//         const url = URL.createObjectURL(blob);

//         // Send the recorded video to the server
//         sendVideoToServer(blob);
//       };

//       mediaRecorderInstance.start();
//       setRecording(true);
//     } catch (error) {
//       console.error("Error starting screen recording:", error);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorder && recording) {
//       mediaRecorder.stop();
//       setRecording(false);
//     }
//   };

//   const sendVideoToServer = async (blob) => {
//     try {
//       const formData = new FormData();
//       formData.append("blob", blob, "recorded-video.webm"); // 'recorded-video.webm' is the desired filename

//       // Make a POST request to the API endpoint for starting video recording
//       const startResponse = await axios.post(
//         "https://hng5.onrender.com/api/video/start",
//         formData
//       );

//       if (startResponse.status === 200 && startResponse.data.status === true) {
//         setVideoId(startResponse.data.videoId);

//         // Video recording started successfully
//         console.log(
//           "Video recording started. Video ID:",
//           startResponse.data.videoId
//         );
//       } else {
//         console.error(
//           "Error starting video recording:",
//           startResponse.data.msg
//         );
//       }
//     } catch (error) {
//       console.error("Error starting video recording:", error);
//     }
//   };

//   const stopVideoRecording = async () => {
//     try {
//       // Make a GET request to the API endpoint for stopping video recording
//       const endResponse = await axios.get(
//         `https://hng5.onrender.com/api/video/end/${videoId}`
//       );

//       if (endResponse.status === 200 && endResponse.data.status === true) {
//         // Video recording stopped successfully
//         console.log("Video recording stopped.");
//       } else if (endResponse.status === 404) {
//         console.error("Video not found.");
//       } else {
//         console.error("Error stopping video recording:", endResponse.data.msg);
//       }
//     } catch (error) {
//       console.error("Error stopping video recording:", error);
//     }
//   };

//   useEffect(() => {
//     // Cleanup function to stop recording if the component unmounts
//     return () => {
//       if (recording) {
//         stopRecording();
//       }
//     };
//   }, [recording]);

//   return (
//     <div>
//       <div className="container min-width-[300px] p-8 space-y-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <img src={logo} alt="Logo" />
//           </div>
//           <div className="flex space-x-2">
//             <img src={setting} alt="Settings" className="w-6 h-6" />
//             <img src={close} alt="Close" className="w-6 h-6" />
//           </div>
//         </div>
//         <div className="text-gray-700 text-base">
//           This extension helps you record and share help videos with ease.
//         </div>
//         <div className="flex space-x-16 text-gray-700 font-semibold mb-4">
//           <div className="flex items-center space-x-2">
//             <img src={monitor} alt="Monitor" className="w-6 h-6" />
//             <p>Full screen</p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <img src={copy} alt="Copy" className="w-6 h-6" />
//             <p>Current Tab</p>
//           </div>
//         </div>
//         <div className="flex flex-col space-y-4">
//           <div className="flex items-center justify-between border-2 border-primary-600 p-4 rounded-lg">
//             <span className="flex items-center space-x-2 font-semibold text-primary-600">
//               <img src={video} alt="Video" className="h-8" />
//               Camera
//             </span>
//             <input type="checkbox" name="camera" id="camera" />
//           </div>
//           <div className="flex items-center justify-between border-2 border-primary-600 p-4 rounded-lg">
//             <span className="flex items-center space-x-2 font-semibold text-primary-600">
//               <img src={audio} alt="Audio" className="h-8" />
//               Audio
//             </span>
//             <input type="checkbox" name="audio" id="audio" />
//           </div>
//         </div>
//         <section className="">
//           {recording ? (
//             <button
//               onClick={stopVideoRecording}
//               className="bg-red-500 p-[16px] text-white w-[100%] rounded-[12px]"
//             >
//               Stop Recording
//             </button>
//           ) : (
//             <button
//               onClick={startRecording}
//               className="bg-[#120B48] p-[16px] text-white w-[100%] rounded-[12px]"
//             >
//               Start Recording
//             </button>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Popup;
import React, { useState, useEffect } from "react";
import axios from "axios";
import copy from "../assets/copy.svg";
import close from "../assets/close.svg";
import setting from "../assets/settings.svg";
import logo from "../assets/logo.png";
import monitor from "../assets/monitor.svg";
import video from "../assets/video-camera.png";
import audio from "../assets/microphone.png";

const Popup = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [videoId, setVideoId] = useState(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const mediaRecorderInstance = new MediaRecorder(stream);
      setMediaRecorder(mediaRecorderInstance);

      mediaRecorderInstance.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks([...recordedChunks, event.data]);
        }
      };

      mediaRecorderInstance.onstop = () => {
        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);

        // Send the recorded video to the server
        sendVideoToServer(blob);
      };

      mediaRecorderInstance.start();
      setRecording(true);
    } catch (error) {
      console.error("Error starting screen recording:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const sendVideoToServer = async (blob) => {
    try {
      const formData = new FormData();
      formData.append("blob", blob, "recorded-video.webm"); 
      // Define the headers for the request
      const headers = {
        // Add any required headers here, e.g., Authorization headers
        // Example:
        // Authorization: `Bearer ${yourAuthToken}`,
      };

      // Make a POST request to the API endpoint for starting video recording
      const startResponse = await axios.post(
        "https://hng5.onrender.com/api/video/start",
        formData,
        {
          headers: {
            ...headers,
            // Include any additional headers here if needed
          },
        }
      );

      if (startResponse.status === 200 && startResponse.data.status === true) {
        setVideoId(startResponse.data.videoId);

        // Video recording started successfully
        console.log(
          "Video recording started. Video ID:",
          startResponse.data.videoId
        );
      } else {
        console.error(
          "Error starting video recording:",
          startResponse.data.msg
        );
      }
    } catch (error) {
      console.error("Error starting video recording:", error);
    }
  };

  const stopVideoRecording = async () => {
    try {
      // Make a GET request to the API endpoint for stopping video recording
      const endResponse = await axios.get(
        `https://hng5.onrender.com/api/video/end/${videoId}`
      );

      if (endResponse.status === 200 && endResponse.data.status === true) {
        // Video recording stopped successfully
        console.log("Video recording stopped.");
      } else if (endResponse.status === 404) {
        console.error("Video not found.");
      } else {
        console.error("Error stopping video recording:", endResponse.data.msg);
      }
    } catch (error) {
      console.error("Error stopping video recording:", error);
    }
  };

  useEffect(() => {
    // Cleanup function to stop recording if the component unmounts
    return () => {
      if (recording) {
        stopRecording();
      }
    };
  }, [recording]);

  return (
    <div>
      <div className="container min-w-[300px] p-8 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex space-x-2">
            <img src={setting} alt="Settings" className="w-6 h-6" />
            <img src={close} alt="Close" className="w-6 h-6" />
          </div>
        </div>
        <div className="text-gray-700 text-base">
          This extension helps you record and share help videos with ease.
        </div>
        <div className="flex space-x-16 text-gray-700 font-semibold mb-4">
          <div className="flex items-center space-x-2">
            <img src={monitor} alt="Monitor" className="w-6 h-6" />
            <p>Full screen</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={copy} alt="Copy" className="w-6 h-6" />
            <p>Current Tab</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between border-2 border-primary-600 p-4 rounded-lg">
            <span className="flex items-center space-x-2 font-semibold text-primary-600">
              <img src={video} alt="Video" className="h-8" />
              Camera
            </span>
            <input type="checkbox" name="camera" id="camera" />
          </div>
          <div className="flex items-center justify-between border-2 border-primary-600 p-4 rounded-lg">
            <span className="flex items-center space-x-2 font-semibold text-primary-600">
              <img src={audio} alt="Audio" className="h-8" />
              Audio
            </span>
            <input type="checkbox" name="audio" id="audio" />
          </div>
        </div>
        <section className="">
          {recording ? (
            <button
              onClick={stopVideoRecording}
              className="bg-red-500 p-[16px] text-white w-[100%] rounded-[12px]"
            >
              Stop Recording
            </button>
          ) : (
            <button
              onClick={startRecording}
              className="bg-[#120B48] p-[16px] text-white w-[100%] rounded-[12px]"
            >
              Start Recording
            </button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Popup;
