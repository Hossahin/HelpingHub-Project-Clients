import React, { useContext } from "react";
import AuthContext from "./../../context/AuthContext";

const AddVolunteerNeedPost = () => {
  const { loginUser } = useContext(AuthContext);




  return (
    <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full  shadow-xl rounded-lg p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 hover:scale-110 transition-all duration-800">
            Add volunteer need Post
          </h1>

          <p className="mt-2 text-sm text-gray-600"></p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="Thumbnail"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Thumbnail
            </label>
            <input
              id="thumbnail"
              type="url"
              name="thumbnail"
              required
              placeholder="Enter Thumbnail URL"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label
              htmlFor="posttitle"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Post Title
            </label>
            <input
              id="posttitle"
              type="text"
              name="posttitle"
              required
              placeholder="Enter Post Title"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              placeholder="What's your volunteer about?"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="hobbyCategory"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Volunteer Category
            </label>
            <select
              id="volunteercategory"
              name="volunteercategory"
              required
              defaultValue=""
              className="mt-1 w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            >
              <option value="" disabled selected>
                Select a category
              </option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="Location"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Location
            </label>
            <input
              id="Location"
              name="Location"
              type="text"
              required
              placeholder="Add a location"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="No. of volunteers needed"
                className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
              >
                No. of volunteers needed
              </label>
              <input
                id="Noofvolunteersneeded "
                type="number"
                name="Noofvolunteersneeded"
                required
                min="2"
                placeholder="e.g., 25"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
              >
                Estimated Start Date
              </label>
              <input
                id="startDate"
                type="date"
                name="startDate"
                required
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
              />
            </div>
          </div>

          <hr className="my-8 border-gray-300" />

          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-indigo-700">
              Your Details
            </h2>
          </div>

          <div>
            <label
              htmlFor="Organizername"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Organizer name
            </label>
            <input
              id="organizername"
              type="text"
              defaultValue={`${loginUser?.displayName}`}
              readOnly
              name="organizername"
              required
              placeholder="Organizer name"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="organizeremail"
              className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
            >
              Organizer email
            </label>
            <input
              id="organizeremail"
              type="email"
              defaultValue={`${loginUser?.email}`}
              readOnly
              name="organizer   email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-500 ease-in-out transform hover:scale-105"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVolunteerNeedPost;
