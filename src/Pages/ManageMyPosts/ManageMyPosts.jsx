import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyVolunteerNeedPost from "../../components/MyVolunteerNeedPost";
import MyVolunteerRequestPost from "../../components/MyVolunteerRequestPost";

const ManageMyPosts = () => {
  useEffect(() => {
    document.title = "Manage My Post";
  }, []);
  return (
    <div className="mx-auto md:p-4">
      <Tabs>
        <TabList className="flex flex-col sm:flex-row gap-2 border-b-2 border-gray-200 dark:border-gray-700">
          <Tab
            className="cursor-pointer px-4 py-2 font-medium text-gray-600 rounded-t sm:rounded-t-none sm:rounded-l hover:bg-indigo-700 hover:text-white transition"
            selectedClassName="bg-indigo-700 text-white"
          >
            My Volunteer Need Post
          </Tab>
          <Tab
            className="cursor-pointer px-4 py-2 font-medium text-gray-600 rounded-t sm:rounded-t-none sm:rounded-l hover:bg-indigo-700 hover:text-white transition"
            selectedClassName="bg-indigo-700 text-white"
          >
            My Volunteer Request Post
          </Tab>
        </TabList>

        <TabPanel className="mt-4">
          <MyVolunteerNeedPost />
        </TabPanel>
        <TabPanel className="mt-4">
          <MyVolunteerRequestPost />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ManageMyPosts;
