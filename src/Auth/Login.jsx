import React from "react";

import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import Authbtns from "../Btns/Btn1";
import Button from "../Btns/Btn2";

const Login = () => {
  return (
    <div className="flex flex-col gap-y-8 p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="flex flex-col gap-y-6">
        <Authbtns className="gap-x-4">
          <img src={google} alt="" /> Continue with Google
        </Authbtns>
        <Authbtns className="gap-x-4">
          <img src={facebook} alt="" /> Continue with Facebook
        </Authbtns>
      </div>

      <div className="flex justify-center gap-x-3 text-[#B9C2C8] items-center">
        <hr className="w-2/4 sm:w-1/4 h-[1px] bg-[#B9C2C8]" />
        <p className="text-sm font-medium">or</p>
        <hr className="w-2/4 sm:w-1/4 h-[1px] bg-[#B9C2C8]" />
      </div>

      <form action="sign-in" className="flex flex-col gap-y-4">
        <span className="flex gap-y-3 flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="p-4 outline-none border rounded-xl  border-[#B6B3C6]"
            id="email"
            placeholder="Enter your email address"
          />
        </span>

        <span className="flex gap-y-3 flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="p-4 outline-none border rounded-xl  border-[#B6B3C6]"
            id="password"
            placeholder="Enter your password"
          />
        </span>

        <Button className="py-4">Sign Up</Button>
      </form>
    </div>
  );
};

export default Login;
