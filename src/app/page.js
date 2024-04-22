"use client";
// import { Hero } from "@/components/Hero.client.js";
import React, { useState, useEffect } from "react";

const Button = ({ text }) => {
  return (
    <>
      <button className="w-fit px-3 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary-300 bg-primary-200 text-white transition-colors duration-300">
        {text}
        <span className="inline-block animate-bounce-left-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
      </button>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="bg-primary-100 sticky px-3 sm:px-0 top-0 py-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-primary-900">
              <h1 className="text-2xl text-primary-300 font-bold">Forex EA</h1>
            </div>
            <ul className="hidden md:flex text-lg font-semibold  gap-5 text-primary-300 ">
              <li className="cursor-pointer hover:underline">Home</li>
              <li className="cursor-pointer hover:underline">About</li>
              <li className="cursor-pointer hover:underline">Pricing</li>
              <li className="cursor-pointer hover:underline">FAQ</li>
              <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
            <div>
              <Button text="Get Started" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Hero = () => {
  // State to manage the current image source
  const [currentImage, setCurrentImage] = useState("/images/fx-bot.jpg");

  useEffect(() => {
    // Change the image every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage) =>
        currentImage === "/images/fx-bot.jpg"
          ? "/images/forex-robot.jpg"
          : "/images/fx-bot.jpg"
      );
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white pt-5 h-[90vh] flex justify-center items-center sm:h-fit ">
      <div className="container flex justify-center items-center flex-col  sm:grid grid-cols-2  mx-auto">
        <div className=" justify-center text-center sm:text-left flex flex-col  ">
          <h1 className="text-[40px] md:text-[48px] lg:text-[64px] font-semibold">
            Forex Intelligent <br />
            <span className="font-bold text-primary-200">Trading robot</span>
          </h1>
          <p className="px-3 sm:px-0">
            Be aware - using a use client directive will make all child
            components client components and will be rendered on user side,
            affecting some performance, so it is advised to keep your client
            components at the leaves of your tree.
          </p>
          <p className="bg-black-200 mx-auto sm:mx-0 mt-5 text-white p-2 text-sm rounded-full w-fit">
            <span className="p-1 bg-white text-black-200 font-semibold rounded-full mr-2">
              10% off{" "}
            </span>{" "}
            for this weekend
          </p>
          <div className="my-5  mx-auto sm:mx-0">
            <Button text="Get started" />
          </div>
        </div>
        <div className="hidden sm:flex items-center  ">
          <img
            src={currentImage}
            alt="forex-robot"
            className="object-cover animate-fadeIn" // Assuming you have an fadeIn animation defined in tailwind.config.js
          />
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default HomePage;
