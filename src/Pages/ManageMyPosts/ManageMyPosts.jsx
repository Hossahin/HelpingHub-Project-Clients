import React from "react";
import MyVolunteerNeedPost from "../../components/MyVolunteerNeedPost";
import MyVolunteerRequestPost from "../../components/MyVolunteerRequestPost";

const ManageMyPosts = () => {
  return (
    <div>
      <MyVolunteerNeedPost></MyVolunteerNeedPost>
      <MyVolunteerRequestPost></MyVolunteerRequestPost>
    </div>
  );
};

export default ManageMyPosts;
