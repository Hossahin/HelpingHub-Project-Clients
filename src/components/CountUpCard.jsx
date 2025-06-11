import React from "react";
import CountUp from "react-countup";
import { BiUserCircle } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { TbWorldUpload } from "react-icons/tb";

const CountUpCard = () => {
  return (
    <>
      <div className="w-full lg:w-11/12 mx-auto my-12">
        <h1 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl hover:scale-110 transition-all duration-800">
          The Power of Your Support
        </h1>
        <p className="text-center my-5 lg:w-2/5 mx-auto text-gray-400">
          Measuring the powerful results of our shared commitment to making a
          difference.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 w-11/12 md:w-full lg:w-full mx-auto">
          <CountUp
            start={0}
            end={950}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div
                className="bg-gradient-to-br from-white/80 to-indigo-50 
              dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900
              backdrop-blur-md  border border-gray-100 dark:border-gray-300 dark:border-dashed shadow-md hover:shadow-xl
             px-6 py-8 md:px-8 md:py-10 text-center sm:text-left rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer"
              >
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium mt-3">
                  <div className="mb-6 mt-6 w-16 h-16 mx-auto sm:mx-0 rounded-full bg-indigo-100 dark:bg-gray-900 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <BiUserCircle
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <div className="text-gray-700 dark:text-gray-200 text-[15px] md:text-[20px] font-semibold leading-snug">
                    DONATIONS MADE
                  </div>
                </div>
              </div>
            )}
          </CountUp>

          <CountUp
            start={1}
            end={2000}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div
                className="bg-gradient-to-br from-white/80 to-indigo-50
               dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900
              backdrop-blur-md border border-gray-100 dark:border-gray-300 dark:border-dashed shadow-md hover:shadow-xl
             px-6 py-8 md:px-8 md:py-10 text-center sm:text-left rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer"
              >
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium">
                  <div className="mb-6 mt-6 w-16 h-16 mx-auto sm:mx-0 rounded-full bg-indigo-100 dark:bg-gray-900 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <IoMdAddCircleOutline
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <div className="text-gray-700 dark:text-gray-200 text-[15px] md:text-[20px] font-semibold leading-snug">
                    HAPPY CHILDREN
                  </div>
                </div>
              </div>
            )}
          </CountUp>

          <CountUp
            start={0}
            end={720}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div
                className="bg-gradient-to-br from-white/80 to-indigo-50
               dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900
              backdrop-blur-md border border-gray-100 dark:border-gray-300 dark:border-dashed shadow-md hover:shadow-xl
             px-6 py-8 md:px-8 md:py-10 text-center sm:text-left rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer"
              >
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium mt-3">
                  <div className="mb-6 mt-6 w-16 h-16 mx-auto sm:mx-0 rounded-full bg-indigo-100 dark:bg-gray-900 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <FaUserFriends
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <div className="text-gray-700 dark:text-gray-200 text-[15px] md:text-[20px] font-semibold leading-snug">
                    VOLUNTEERING HELPERS
                  </div>
                </div>
              </div>
            )}
          </CountUp>

          <CountUp
            start={0}
            end={890}
            delay={1}
            duration={10}
            scrollSpyDelay={100}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div
                className="bg-gradient-to-br from-white/80 to-indigo-50
               dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900
              backdrop-blur-md border border-gray-100 dark:border-gray-300 dark:border-dashed shadow-md hover:shadow-xl
             px-6 py-8 md:px-8 md:py-10 text-center sm:text-left rounded-3xl hover:scale-105 hover:border-indigo-500 transition-all duration-700 cursor-pointer"
              >
                <img className="mb-3" />
                <span
                  ref={countUpRef}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700"
                ></span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-700">
                  +
                </span>
                <div className="text-[#0F0F0F] opacity-60 lg:text-xl font-medium mt-3">
                  <div className="mb-6 mt-6 w-16 h-16 mx-auto sm:mx-0 rounded-full bg-indigo-100 dark:bg-gray-900 flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-500">
                    <TbWorldUpload
                      className="text-indigo-600 group-hover:text-indigo-700"
                      size={32}
                    />
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-[15px] md:text-[20px] font-semibold leading-snug">
                    EDUCATED CHILDREN
                  </p>
                </div>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </>
  );
};

export default CountUpCard;
