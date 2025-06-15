import React, { useEffect, useState } from "react";
import LoadingSpinners from "./LoadingSpinners";
import FeaturesDataCard from "./FeaturesDataCard";
import { Link } from "react-router";

const FeaturesDataVolunteerNeedPost = () => {
  const [volunteerNeedPost, setVolunteerNeedPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://server-side-taupe-mu.vercel.app/AddVolunteerNeedPost/featuresdete"
    )
      .then((res) => res.json())
      .then((data) => {
        setVolunteerNeedPost(data);
        setLoading(false);
      });
  }, [setVolunteerNeedPost]);

  if (loading) {
    return <LoadingSpinners />;
  }

  console.log(volunteerNeedPost);

  return (
    <div className="">
      <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 hover:scale-110 transition-all duration-800">
        Ongoing Volunteer Openings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteerNeedPost.map((post) => (
          <FeaturesDataCard key={post._id} post={post}></FeaturesDataCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/AllVolunteerNeedposts"}>
          <button className="btn my-5 btn-soft btn-primary dark:bg-indigo-800 border-0 px-12 dark:text-white">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesDataVolunteerNeedPost;
