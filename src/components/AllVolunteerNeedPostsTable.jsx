import React from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const AllVolunteerNeedPostsTable = ({ AllVolunteer }) => {
  const { _id, thumbnail, startDate, volunteercategory } = AllVolunteer;
  return (
    <>
      <tr
        key={_id}
        className="bg-white dark:bg-gray-900 dark:border-0 hover:dark:bg-gray-800 hover:bg-gray-50 hover:scale-104 transition-all duration-800"
      >
        <td className="flex justify-center px-1 py-3 lg:px-6 lg:py-4">
          <div className="w-14 h-14">
            <img
              src={thumbnail}
              className="w-full h-full object-cover rounded-md border border-gray-300"
            />
          </div>
        </td>
        <td className="font-medium text-gray-900 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4">
          {startDate}
        </td>
        <td className=" text-gray-700 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4">
          {volunteercategory}
        </td>
        <td className="px-1 py-3 lg:px-6 lg:py-4">
          <div className="flex justify-center gap-1 lg:gap-3">
            <Link
              to={`/AllVolunteerNeedposts/volunteerneedpostdetailspage/${_id}`}
            >
              <button className="cursor-pointer flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200">
                <span>View Details</span>
              </button>
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default AllVolunteerNeedPostsTable;
