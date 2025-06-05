import React from "react";
import { Link } from "react-router";

const AllVolunteerNeedPostsCard = ({ AllVolunteer }) => {
  const { _id, thumbnail, posttitle, description, Location } = AllVolunteer;
  return (
    <>
      <div className="rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 transition-colors duration-300 text-center p-6">
        <img
          className="w-32 h-32 object-cover rounded-full mx-auto shadow-md"
          src={thumbnail}
        />
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            {posttitle}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-3">{description}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
            {Location}
          </p>
          <Link
            to={`/AllVolunteerNeedposts/volunteerneedpostdetailspage/${_id}`}
          >
            <button className="cursor-pointer px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 active:scale-95 transition-all duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllVolunteerNeedPostsCard;
