import React, { useEffect, useState } from "react";
import LoadingSpinners from "../../components/LoadingSpinners";
import AllVolunteerNeedPostsCard from "../../components/AllVolunteerNeedPostsCard";

const AllVolunteerNeedposts = () => {
  const [AllVolunteerNeedPost, setAllVolunteerNeedPost] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/AllVolunteerNeedposts")
      .then((res) => res.json())
      .then((data) => {
        setAllVolunteerNeedPost(data);
        setLoading(false);
      });
  }, [setAllVolunteerNeedPost]);

  if (loading) {
    return <LoadingSpinners />;
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {AllVolunteerNeedPost.map((AllVolunteer) => (
          <AllVolunteerNeedPostsCard
            key={AllVolunteer._id}
            AllVolunteer={AllVolunteer}
          ></AllVolunteerNeedPostsCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerNeedposts;
