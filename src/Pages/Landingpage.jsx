import React from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Features from "../components/Feature";
import Footer from "../components/Footer";
import HowItWorks from "../components/HowItWorks";

import frame1 from "../assets/Frame 1.png";
import frame2 from "../assets/Frame 2.png";
import frame3 from "../assets/Frame 3.png";
import GridTop from "../assets/gridtop.svg.svg";
import GridBottom from "../assets/gridbottom.svg.svg";

function LandingPage() {
  return (
    <div className="bg-blue-100 text-black min-h-screen">
      <Navbar />
      <section className="bg-white py-16 mt-1">
        <div className="container mx-auto flex">
          <div className="w-2/3 pr-8">
            <h2 className="text-4xl font-bold mb-4">
              Show Them <br />
              Don't Just Tell Them
            </h2>
            <p className="text-sm mb-8">
              Help your friends and loved ones by creating and sending <br />{" "}
              videos on how to get things done on a website.
            </p>
            <Link to={'/webStore'}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme="facebook"
                variant="solid"
              >
                Install HelpMeOut
              </Button>
            </Link>
          </div>
         <div className="mt-[100px] md:mt-0 ">
              <div className="grid grid-cols-2">
                <div className="pr-2">
                  <img
                    src={frame1}
                    alt=""
                    className="pb-6 pl-10 md:pl-[82px] "
                  />
                  <div className="relative">
                    <img src={GridBottom} alt="Below Dots" className="" />
                    <img
                      src={frame2}
                      alt=""
                      className="absolute inset-y-0 pl-8 md:pl-[80px] "
                    />
                  </div>
                </div>
                <div className="relative mt-[-57px]">
                  <img src={GridTop} alt="Up dots" className="" />
                  <img
                    src={frame3}
                    alt=""
                    className="absolute inset-y-0 pt-20 pr-10 md:pr-[60px] "
                  />
                </div>
            </div>
            </div>
        </div>
      </section>
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default LandingPage;
