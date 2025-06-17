import React, { useEffect } from "react";
import HomeSlider from "../../components/HomeSlider";
import FeaturesDataVolunteerNeedPost from "../../components/FeaturesDataVolunteerNeedPost";
import VolunteersWorking from "../../components/VolunteersWorking";
import CountUpCard from "../../components/CountUpCard";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  AOS.init({
    offset: 120,
    duration: 2000,
    easeIn: "easeInOut",
    delay: 100,
    once: false,
    mirror: false,
  });

  return (
    <div data-aos="zoom-in">
      <HomeSlider></HomeSlider>
      <FeaturesDataVolunteerNeedPost></FeaturesDataVolunteerNeedPost>
      <VolunteersWorking></VolunteersWorking>
      <CountUpCard></CountUpCard>
    </div>
  );
};

export default Home;
