import React from "react";
import { useLoaderData } from "react-router";

const VolunteerNeedPostDetailsPage = () => {
  const DetailsData = useLoaderData();
  const {
    Location,
    Noofvolunteersneeded,
    description,
    organizeremail,
    organizername,
    posttitle,
    startDate,
    thumbnail,
    volunteercategory,
  } = DetailsData;
  console.log(DetailsData);

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden transition-colors duration-500 border border-gray-200 dark:border-gray-700">
        <img
          src={thumbnail}
          alt="Event Thumbnail"
          className="w-full h-64 object-cover rounded-t-3xl"
        />

        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
              {posttitle}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Start Date: <span className="font-medium">{startDate}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gradient-to-r from-blue-200 to-blue-500 text-blue-900 dark:from-blue-700 dark:to-blue-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {Location}
            </span>
            <span className="bg-gradient-to-r from-green-200 to-green-500 text-green-900 dark:from-green-700 dark:to-green-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {volunteercategory}
            </span>
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-yellow-900 dark:from-yellow-700 dark:to-yellow-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {Noofvolunteersneeded} Volunteers Needed
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {description}
          </p>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Organizer:{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                {organizername}
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="text-blue-600 dark:text-blue-300">
                {organizeremail}
              </span>
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button className="cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600">
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedPostDetailsPage;
