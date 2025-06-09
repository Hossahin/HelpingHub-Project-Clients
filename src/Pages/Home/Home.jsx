import React, { useEffect } from "react";
import HomeSlider from "../../components/HomeSlider";
import FeaturesDataVolunteerNeedPost from "../../components/FeaturesDataVolunteerNeedPost";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <HomeSlider></HomeSlider>
      <FeaturesDataVolunteerNeedPost></FeaturesDataVolunteerNeedPost>
    </div>
  );
};

export default Home;
