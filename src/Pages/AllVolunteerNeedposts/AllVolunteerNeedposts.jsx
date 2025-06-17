import React, { useContext, useEffect, useState } from "react";
import LoadingSpinners from "../../components/LoadingSpinners";
import AllVolunteerNeedPostsCard from "../../components/AllVolunteerNeedPostsCard";
import SearchBar from "../../components/SearchBar";
import AllVolunteerNeedPostsTable from "../../components/AllVolunteerNeedPostsTable";
import AuthContext from "../../context/AuthContext";
import AOS from "aos";
import "aos/dist/aos.css";

const AllVolunteerNeedposts = () => {
  const { layout } = useContext(AuthContext);
  const [search, setSearch] = useState("");

  AOS.init({
    offset: 120,
    duration: 2000,
    easeIn: "easeInOut",
    delay: 100,
    once: false,
    mirror: false,
  });

  useEffect(() => {
    document.title = "All Volunteer Need Post";
  }, []);

  const [AllVolunteerNeedPost, setAllVolunteerNeedPost] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://server-side-taupe-mu.vercel.app/AllVolunteerNeedposts")
      .then((res) => res.json())
      .then((data) => {
        setAllVolunteerNeedPost(data);
        setLoading(false);
      });
  }, [setAllVolunteerNeedPost]);

  useEffect(() => {
    fetch(
      `https://server-side-taupe-mu.vercel.app/AllVolunteerNeedposts/Search?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllVolunteerNeedPost(data);
      });
  }, [search]);

  if (loading) {
    return <LoadingSpinners />;
  }
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
      <SearchBar setSearch={setSearch}></SearchBar>

      {layout === "columns" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AllVolunteerNeedPost?.map((AllVolunteer) => (
            <AllVolunteerNeedPostsCard
              key={AllVolunteer._id}
              AllVolunteer={AllVolunteer}
            ></AllVolunteerNeedPostsCard>
          ))}
          {AllVolunteerNeedPost.length === 0 && (
            <p className="text-center text-gray-500 col-end-3">
              No Volunteer need post found.
            </p>
          )}
        </div>
      )}

      {layout === "table" && (
        <div className="overflow-x-auto mt-10 lg:px-4">
          <div className="w-full inline-block shadow-lg rounded-xl overflow-hidden">
            <table className="w-full bg-white text-sm text-gray-700 text-[12px] md:text-[14px] text-center">
              <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
                <tr className="">
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Image
                  </th>
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Posttitle
                  </th>
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Category
                  </th>
                  <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:border-gray-800">
                {AllVolunteerNeedPost?.map((AllVolunteer) => (
                  <AllVolunteerNeedPostsTable
                    AllVolunteer={AllVolunteer}
                    key={AllVolunteer._id}
                  ></AllVolunteerNeedPostsTable>
                ))}
                {AllVolunteerNeedPost.length === 0 && (
                  <tr className="bg-white dark:bg-gray-800">
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
