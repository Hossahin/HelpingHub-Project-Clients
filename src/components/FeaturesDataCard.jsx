import React from "react";

const FeaturesDataCard = ({ post }) => {
  const { posttitle, startDate, thumbnail, volunteercategory } = post;
  return (
    <>
     <div className="p-4">
  <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
    <img
      src={thumbnail}
      alt="Thumbnail"
      className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
    />

    <div className="p-5">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        Start Date: <span className="text-gray-800 dark:text-white font-medium">{startDate}</span>
      </p>

      <p className="text-[12px] text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-[6px] rounded-full w-fit mb-3 shadow-sm">
        {volunteercategory}
      </p>

      <h2 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug">
        {posttitle}
      </h2>
    </div>
  </div>
</div>


    </>
  );
};

export default FeaturesDataCard;
