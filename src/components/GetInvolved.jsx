import React from "react";

const GetInvolved = () => {
  return (
    <section className="py-16 px-6  mx-auto bg-indigo-50 dark:bg-gray-900 rounded-lg shadow-md text-center">
      <h2 className="text-3xl font-semibold mb-6 text-indigo-700 dark:text-indigo-300">
        Get Involved
      </h2>
      <p className="mb-10 text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
        Whether you want to volunteer, donate, or help spread the word, your
        support makes a huge difference. Join HelpingHub today and be part of a
        compassionate community.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
        <a
          href="/signup"
          className="px-8 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Volunteer Now
        </a>
        <a
          className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-md font-semibold hover:bg-indigo-600 hover:text-white transition"
        >
          Donate Now
        </a>
        <a
          className="px-8 py-3 bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-200 rounded-md font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default GetInvolved;
