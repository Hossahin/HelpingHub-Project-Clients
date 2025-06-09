import React, { useContext, useEffect, useState } from "react";
import LoadingSpinners from "../../components/LoadingSpinners";
import AllVolunteerNeedPostsCard from "../../components/AllVolunteerNeedPostsCard";
import SearchBar from "../../components/SearchBar";
import AllVolunteerNeedPostsTable from "../../components/AllVolunteerNeedPostsTable";
import AuthContext from "../../context/AuthContext";

const AllVolunteerNeedposts = () => {
  const { layout } = useContext(AuthContext);

  useEffect(() => {
    document.title = "All Volunteer Need Post";
  }, []);

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
      <SearchBar></SearchBar>

      {layout === "columns" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AllVolunteerNeedPost.map((AllVolunteer) => (
            <AllVolunteerNeedPostsCard
              key={AllVolunteer._id}
              AllVolunteer={AllVolunteer}
            ></AllVolunteerNeedPostsCard>
          ))}
        </div>
      )}

      {layout === "table" && (
        <div className="overflow-x-auto mt-10 lg:px-4">
          <div className="w-full inline-block shadow-lg rounded-xl overflow-hidden">
            <table className="w-full bg-white text-sm text-gray-700 text-center">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
                <tr className="">
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Image
                  </th>
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    StartDate
                  </th>
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Category
                  </th>
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {AllVolunteerNeedPost?.map((AllVolunteer) => (
                  <AllVolunteerNeedPostsTable
                    AllVolunteer={AllVolunteer}
                    key={AllVolunteer._id}
                  ></AllVolunteerNeedPostsTable>
                ))}
                {AllVolunteerNeedPost.length === 0 && (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center text-gray-500 px-1 py-3 lg:px-6 lg:py-4"
                    >
                      No Volunteer need post found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVolunteerNeedposts;
