import React from "react";
import image1 from "../assets/vector-style/Clean and Recycle.svg";
import image2 from "../assets/vector-style/Voluntary Support.svg";
import image3 from "../assets/vector-style/Senior Services.svg";
import image4 from "../assets/vector-style/Save Earth.svg";
import { easeIn, easeInOut, motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";

const VolunteersWorking = () => {
  return (
    <>
      <div className="my-10">
        <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 hover:scale-110 transition-all duration-800">
          Our Impact Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" data-aos="fade-up" data-aos-duration="3000">
          <motion.div
            className="card bg-base-100 dark:bg-gray-900 shadow-sm"
            style={{
              border: "2px solid",
              borderColor: "#6366f1",
              borderRadius: "12px",
              padding: "20px 40px",
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 3, 0, -3, 0],
              borderColor: ["#6366f1", "#3b82f6", "#10b981", "#6366f1"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
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
          </motion.div>
          <motion.div
            style={{
              border: "2px solid",
              borderColor: "#3b82f6",
              borderRadius: "12px",
              padding: "20px 40px",
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -3, 0, 3, 0],
              borderColor: ["#3b82f6", "#10b981", "#6366f1", "#6366f1"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="card bg-base-100 dark:bg-gray-900 shadow-sm"
          >
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
          </motion.div>
          <motion.div
            style={{
              border: "2px solid",
              borderColor: "#10b981",
              borderRadius: "12px",
              padding: "20px 40px",
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 3, 0, -3, 0],
              borderColor: ["#3b82f6", "#10b981", "#6366f1", "#6366f1"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="card bg-base-100 dark:bg-gray-900 shadow-sm"
          >
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
          </motion.div>
          <motion.div
            style={{
              border: "2px solid",
              borderColor: "#6366f1",
              borderRadius: "12px",
              padding: "20px 40px",
            }}
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -3, 0, 3, 0],
              borderColor: ["#3b82f6", "#6366f1", "#10b981", "#6366f1"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="card bg-base-100 dark:bg-gray-900 shadow-sm"
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VolunteersWorking;
