// import React from "react";
// import edit from "../assets/edit.svg";
// import video from "../assets/webcard.svg";
// import copy from "../assets/copy.svg";
// import facebook from "../assets/facebook.svg";
// import telegram from "../assets/telegram.svg";
// import whatsapp from "../assets/whatsapp.svg";

// const Detail = () => {
//   return (
//     <div className="flex flex-col gap-y-16">
//       <div className="flex flex-col gap-y-10">
//         <span className="flex items-center gap-x-6">
//           <h5 className="text-2xl font-semibold">
//             How To Create A Facebook Ad Listing{" "}
//           </h5>
//           <img src={edit} alt="" />
//         </span>

//         <div className="video-card p-4 bg-white-100 border-2 rounded-md">
//           <img src={video} alt="" />
//         </div>

//         <div className="flex flex-col sm:flex-row gap-y-4 gap-x-20">
//           <div
//             id="receiver"
//             className="flex flex-1 py-3 px-3 items-center bg-gray-200 rounded-md"
//           >
//             <input
//               type="email"
//               className="border-none w-full outline-none bg-transparent"
//               name="email"
//               placeholder="enter email of receiver"
//               id="work"
//             />
//             <button className="rounded-lg bg-[#605C84] text-white text-base font-medium py-2.5 px-4">
//               Send
//             </button>
//           </div>

//           <section className="flex flex-1 flex-col gap-y-4">
//             <div className="flex rounded-2xl border-[0.5px] w-full border-[#929292] bg-[#FAFAFA] py-3 px-3 items-center">
//               <input
//                 type="email"
//                 className="border-none flex-1 w-full text-[#4B4B4B] placeholder:text-[#4B4B4B] outline-none bg-transparent"
//                 name="email"
//                 placeholder="https://www.helpmeout/Untitled_Video_20232509"
//                 id="work"
//               />
//               <button className="flex px-2.5 items-center justify-center gap-x-2 rounded-lg border-[#141414] border text-sm font-medium py-2.5">
//                 <img className="w-[20px]" src={copy} alt="" />
//                 Copy
//               </button>
//             </div>
//           </section>
//         </div>

//         <section className="flex flex-col gap-y-4">
//           <p>Share your video </p>

//           <div className="flex flex-wrap gap-4 items-center">
//             <button className="flex items-center w-full sm:w-fit justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
//               <img src={facebook} alt="" /> Facebook
//             </button>
//             <button className="flex items-center w-full sm:w-fit justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
//               <img src={whatsapp} alt="" /> Whatsapp
//             </button>
//             <button className="flex items-center w-full sm:w-fit justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
//               <img src={telegram} alt="" /> Telegram
//             </button>
//           </div>
//         </section>
//       </div>

//       <div className="flex flex-col gap-y-10">
//         <div className="flex flex-col gap-y-4 ">
//           <p className="text-2xl font-semibold">Transcript</p>
//           <select
//             className="rounded w-fit text-base text-[#9D9D9D] p-2 border-2"
//             name="lang"
//             id="lang"
//           >
//             <option value="English">English</option>
//           </select>
//         </div>

//         <div className="flex flex-col gap-y-10">
//           <span className="flex gap-x-6">
//             <p>0.01</p>
//             <p>
//               First step. Open Facebook on your desktop or mobile device and
//               locate 'Marketplace' in the left-hand menu or at the top of the{" "}
//             </p>
//           </span>

//           <span className="flex gap-x-6">
//             <p>0.01</p>
//             <p>
//               First step. Open Facebook on your desktop or mobile device and
//               locate 'Marketplace' in the left-hand menu or at the top of the{" "}
//             </p>
//           </span>

//           <span className="flex gap-x-6">
//             <p>0.01</p>
//             <p>
//               First step. Open Facebook on your desktop or mobile device and
//               locate 'Marketplace' in the left-hand menu or at the top of the{" "}
//             </p>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Detail;
import React, { useState, useEffect } from "react";
import edit from "../assets/edit.svg";
import video from "../assets/webcard.svg";
import copy from "../assets/copy.svg";
import facebook from "../assets/facebook.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import axios from "axios";

const Detail = () => {
  const [videoId, setVideoId] = useState(""); // State to store videoId if needed

  // Function to fetch video data
  const fetchVideoData = async () => {
    try {
      const response = await axios.get(
        "https://hng5.onrender.com/api/video/unique_video_id",
        {
          headers: {
            // Add any necessary headers here
          },
        }
      );
      if (response.status === 200) {
        // Handle the video data (response.data) here
        console.log("Video Data:", response.data);
      } else {
        console.error("Error fetching video data.");
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  // Function to fetch video stream
  const fetchVideoStream = async () => {
    try {
      const formData = new FormData();
      formData.append("videoId", "unique_video_id"); // Replace with the actual video ID

      const response = await axios.post(
        "https://hng5.onrender.com/api/video/start",
        formData,
        {
          headers: {
            // Add any necessary headers here
          },
        }
      );

      if (response.status === 200 && response.data.status === true) {
        setVideoId(response.data.videoId);

        // Video recording started successfully
        console.log(
          "Video recording started. Video ID:",
          response.data.videoId
        );
      } else {
        console.error("Error starting video recording:", response.data.msg);
      }
    } catch (error) {
      console.error("Error starting video recording:", error);
    }
  };

  useEffect(() => {
    // Fetch video data when the component mounts
    fetchVideoData();
    fetchVideoStream();
  }, []);

  return (
    <div className="flex flex-col gap-y-16">
      <div className="flex flex-col gap-y-10">
        <span className="flex items-center gap-x-6">
          <h5 className="text-2xl font-semibold">
            How To Create A Facebook Ad Listing{" "}
          </h5>
          <img src={edit} alt="" />
        </span>

        <div className="video-card p-4 bg-white-100 border-2 rounded-md">
          <img src={video} alt="" />
        </div>

        <div className="flex flex-col sm:flex-row gap-y-4 gap-x-20">
          <div
            id="receiver"
            className="flex flex-1 py-3 px-3 items-center bg-gray-200 rounded-md"
          >
            <input
              type="email"
              className="border-none w-full outline-none bg-transparent"
              name="email"
              placeholder="enter email of receiver"
              id="work"
            />
            <button className="rounded-lg bg-[#605C84] text-white text-base font-medium py-2.5 px-4">
              Send
            </button>
          </div>

          <section className="flex flex-1 flex-col gap-y-4">
            <div className="flex rounded-2xl border-[0.5px] w-full border-[#929292] bg-[#FAFAFA] py-3 px-3 items-center">
              <input
                type="email"
                className="border-none flex-1 w-full text-[#4B4B4B] placeholder:text-[#4B4B4B] outline-none bg-transparent"
                name="email"
                placeholder="https://www.helpmeout/Untitled_Video_20232509"
                id="work"
              />
              <button className="flex px-2.5 items-center justify-center gap-x-2 rounded-lg border-[#141414] border text-sm font-medium py-2.5">
                <img className="w-[20px]" src={copy} alt="" />
                Copy
              </button>
            </div>
          </section>
        </div>

        <section className="flex flex-col gap-y-4">
          <p>Share your video </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button className="flex items-center w-full sm:w-fit justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={facebook} alt="" /> Facebook
            </button>
            <button className="flex items-center w-full sm:w-fit justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={whatsapp} alt="" /> Whatsapp
            </button>
            <button className="flex items-center w-full sm:w-fit justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={telegram} alt="" /> Telegram
            </button>
          </div>
        </section>
      </div>

      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4 ">
          <p className="text-2xl font-semibold">Transcript</p>
          <select
            className="rounded w-fit text-base text-[#9D9D9D] p-2 border-2"
            name="lang"
            id="lang"
          >
            <option value="English">English</option>
          </select>
        </div>

        <div className="flex flex-col gap-y-10">
          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate 'Marketplace' in the left-hand menu or at the top of the{" "}
            </p>
          </span>

          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate 'Marketplace' in the left-hand menu or at the top of the{" "}
            </p>
          </span>

          <span className="flex gap-x-6">
            <p>0.01</p>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate 'Marketplace' in the left-hand menu or at the top of the{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
