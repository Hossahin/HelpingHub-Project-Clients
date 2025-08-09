import React from "react";
import image1 from "../assets/vector-style/Clean and Recycle.svg";
import image2 from "../assets/vector-style/Voluntary Support.svg";
import image3 from "../assets/vector-style/Senior Services.svg";
import image4 from "../assets/vector-style/Save Earth.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const VolunteersWorking = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 hover:scale-110 transition-all duration-800">
          Our Impact Areas
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div className="card bg-base-100 dark:bg-gray-900 border border-gray-100 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={image1} className="rounded-xl w-[400px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-gray-300">
                Clean and Recycle
              </h2>
              <p className="dark:text-gray-500">
                Join hands to keep our community clean by reducing waste and
                promoting recycling every day.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 dark:bg-gray-900 border border-gray-100 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={image2} className="rounded-xl w-[280px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-gray-300">
                Voluntary Support
              </h2>
              <p className="dark:text-gray-500">
                Offer your time and care to support those in need through
                dedicated community volunteering efforts.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 dark:bg-gray-900 border border-gray-100 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={image3} className="rounded-xl w-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-gray-300">Senior Services</h2>
              <p className="dark:text-gray-500">
                Provide companionship, care, and vital support to improve the
                lives of our senior community members.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 dark:bg-gray-900 border border-gray-100 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={image4} className="rounded-xl w-[240px]" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title dark:text-gray-300">Save Earth</h2>
              <p className="dark:text-gray-500">
                Protect our planet by promoting sustainability, planting trees,
                and raising environmental awareness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteersWorking;
