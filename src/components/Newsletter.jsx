import React from "react";
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
  return (
    <section
      className="w-full py-16 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-10 flex flex-col items-center text-center">
        <div className="mb-6 text-indigo-600 dark:text-indigo-400">
          <AiOutlineMail size={48} />
        </div>

        <h2 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Stay Updated with HelpingHub
        </h2>

        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-xl">
          Subscribe to our newsletter and never miss new volunteer opportunities and updates.
        </p>

        <form
          className="w-full flex flex-col sm:flex-row gap-4 max-w-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-grow px-5 py-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500
                      dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:focus:ring-indigo-400 text-gray-900"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
