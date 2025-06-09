import React, { useEffect } from "react";
import MyVolunteerNeedPost from "../../components/MyVolunteerNeedPost";
import MyVolunteerRequestPost from "../../components/MyVolunteerRequestPost";

const ManageMyPosts = () => {
  useEffect(() => {
    document.title = "Manage My Post";
  }, []);
  return (
    <div>
      <MyVolunteerNeedPost></MyVolunteerNeedPost>
      <MyVolunteerRequestPost></MyVolunteerRequestPost>
    </div>
  );
};

export default ManageMyPosts;
