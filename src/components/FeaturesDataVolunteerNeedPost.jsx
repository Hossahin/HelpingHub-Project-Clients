import React, { useEffect, useState } from "react";
import LoadingSpinners from "./LoadingSpinners";
import FeaturesDataCard from "./FeaturesDataCard";
import { Link } from "react-router";

const FeaturesDataVolunteerNeedPost = () => {
  const [volunteerNeedPost, setVolunteerNeedPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/AddVolunteerNeedPost/featuresdete")
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
      <h2 className="text-center my-10 text-4xl font-bold">FeaturesData</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {volunteerNeedPost.map((post) => (
          <FeaturesDataCard key={post._id} post={post}></FeaturesDataCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/AllVolunteerNeedposts"}>
          <button className="btn my-10">See all button</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturesDataVolunteerNeedPost;
