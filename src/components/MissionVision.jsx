import React from "react";

const MissionVision = () => {
  return (
    <section className="py-16 px-6  mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-gray-100">
        Our Mission & Vision
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            Our Mission
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            HelpingHub exists to connect passionate volunteers with meaningful
            opportunities to support communities in need. We strive to make
            volunteering simple, accessible, and rewarding for everyone.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
            Our Vision
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We envision a world where every community is empowered through
            volunteerism, fostering compassion, collaboration, and positive
            change across society.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
