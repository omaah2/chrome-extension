/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import edit from "../assets/edit.svg";
import copy from "../assets/copy.svg";
import facebook from "../assets/facebook.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import Modal from "../components/modal";
import plane from "../assets/sent.svg";
import close from "../assets/close.svg";
import Button from "../Btns/Btn2";

const VideoReady = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-[#141414] lg:pr-8 lg:border-r flex flex-col gap-y-10 flex-1">
      <h3 className="text-5xl font-bold">Your video is ready!</h3>
      <>
        <div>
          <label htmlFor="name">Name</label>
          <span className="flex gap-x-6 items-center">
            <p className="text-2xl text-[#413C6D] font-semibold">
              Untitled_Video_20232509{" "}
            </p>
            <img src={edit} alt="" />
          </span>
        </div>
        <div className="flex py-3 px-3 items-center bg-gray-300 rounded-lg">
          <input
            type="email"
            className="border-none w-full outline-none bg-transparent"
            name="email"
            placeholder="enter email of receiver"
          />
          <button
            onClick={() => {
              setShow(true);
            }}
            className="rounded-lg bg-[#605C84] text-white text-base font-medium py-2.5 px-4"
          >
            Send
          </button>
        </div>
        <Modal isOpen={show}>
          <div className="mx-auto flex flex-col gap-y-6 p-4 w-56 relative">
            <div className="flex flex-col text-center items-center">
              <span className="space-y-4">
                <img
                  onClick={() => {
                    setShow(false);
                  }}
                  className="absolute w-[20px] right-3 cursor-pointer"
                  src={close}
                  alt=""
                />
                <img className="w-[7em] -mt-8" src={plane} alt="" />
              </span>

              <p className="text-xs font-semibold">
                Your video link has been sent to johnmark@gmail.com
              </p>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-y-6 flex-col items-center">
                <p className="text-center text-xs">
                  Would you need to view this video later? Save to your account
                  now!
                </p>
                <Button className="px-4 text-base py-2 bg-blue-950 rounded-md">
                  Save Video
                </Button>
              </div>

              <div>
                <p className="text-[#7E7E7E] text-center mt-4 text-[10px] flex">
                  Don’t have an account?{" "}
                  <span className="text-[#120B48] font-semibold cursor-pointer">
                    Create account
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-screen"></div>
        </Modal>
        <section className="flex flex-col gap-y-4">
          <p className="text-2xl font-semibold">Video Url</p>
          <div className="flex rounded-2xl border-[0.5px] border-[#929292] bg-[#FAFAFA] py-3 px-3 items-center">
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
        <section>
          <p>Share your video</p>

          <div className="flex gap-x-4 items-center">
            <button className="flex items-center justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={facebook} alt="" /> Facebook
            </button>
            <button className="flex items-center justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={whatsapp} alt="" /> Whatsapp
            </button>
            <button className="flex items-center justify-center gap-x-2 text-base font-medium text-[#08051E] rounded-md border border-[#0A0628] py-3 px-4">
              <img src={telegram} alt="" /> Telegram
            </button>
          </div>
        </section>
      </>
    </div>
  );
};

export default VideoReady;

