import React, { useEffect } from "react";
import HomeSlider from "../../components/HomeSlider";
import FeaturesDataVolunteerNeedPost from "../../components/FeaturesDataVolunteerNeedPost";
import VolunteersWorking from "../../components/VolunteersWorking";
import CountUpCard from "../../components/CountUpCard";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div>
      <HomeSlider></HomeSlider>
      <FeaturesDataVolunteerNeedPost></FeaturesDataVolunteerNeedPost>
      <VolunteersWorking></VolunteersWorking>
      <CountUpCard></CountUpCard>
    </div>
  );
};

export default Home;
