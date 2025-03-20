import { useState, useEffect } from "react";
import Image from "next/image";
import image from "../../assets/logo.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="w-full overflow-hidden h-max py-32 md:py-40 lg:h-[97vh] bg-[#E5E5E5]">
      <div className="flex items-center justify-center h-full">
        <div className="h-full w-full flex items-center flex-col justify-center relative z-10 fade-in-down">
          <h1 className="text-[1.5rem] lg:text-[3.5rem] xl:text-[5.5rem] leading-tight lg:leading-[4.5rem] xl:leading-[6rem] poppins-regular text-center w-11/12 lg:w-3/4 text-black relative">
            We craft{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 bg-blue-600/20 rounded-md -z-10"
                initial={{ width: 0 }}
                animate={{
                  width: ["0%", "100%", "100%", "0%"],
                }}
                transition={{
                  duration: 2.5,
                  delay: 0.8,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 6.5,
                }}
              />
              digital experiences
            </span>{" "}
            that{" "}
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 bg-blue-600/20 rounded-md -z-10"
                initial={{ width: 0 }}
                animate={{
                  width: ["0%", "100%", "100%", "0%"],
                }}
                transition={{
                  duration: 2.5,
                  delay: 3,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 6.5,
                }}
              />
              drive engagement
            </span>{" "}
            and
            <span className="relative inline-block">
              <motion.span
                className="absolute inset-0 bg-blue-600/20 rounded-md -z-10"
                initial={{ width: 0 }}
                animate={{
                  width: ["0%", "100%", "100%", "0%"],
                }}
                transition={{
                  duration: 2.5,
                  delay: 5,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 6.5,
                }}
              />
              maximize conversions
            </span>
            .
          </h1>
          <p className="text-black poppins-light text-sm lg:text-base mt-6 text-center w-10/12">
            With a user-first approach. We build websites and software that
            focus on user experience and engagement.
          </p>
          <button className="bg-blue-600 text-white px-4 lg:px-5 poppins-regular text-xs lg:text-sm py-2 lg:py-3 rounded-full mt-6  hover:text-blue-600 transition-all duration-500 hover:bg-blue-600/10">
            Get in touch
          </button>

          <motion.div
            className="absolute -bottom-32 hidden lg:flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p className="text-black/50 text-sm poppins-light text-center">
              scroll down
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="rgba(0,0,0,0.5)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
