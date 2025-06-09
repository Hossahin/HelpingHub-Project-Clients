import React, { useContext, useEffect, useState } from "react";
import LoadingSpinners from "./LoadingSpinners";
import { Link } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";

const MyVolunteerRequestPost = () => {
  const { loginUser } = useContext(AuthContext);
  const [myVolunteerRequestPosts, setMyVolunteerRequestPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/VolunteerDetails/${loginUser?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyVolunteerRequestPosts(data);
        setLoading(false);
      });
  }, [setMyVolunteerRequestPosts, setLoading, loginUser]);

  if (loading) {
    return <LoadingSpinners />;
  }

  const handleDeleteMyVolunteerRequestPost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/VolunteerDetails/${id}`)
          .then((data) => {
            if (data.data.deletedCount) {
              const remainingData = myVolunteerRequestPosts.filter(
                (requestPosts) => requestPosts._id !== id
              );
              setMyVolunteerRequestPosts(remainingData);
            }
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Cancel My Volunteer Request",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {});
      }
    });
  };

  return (
    <>
      <div className="text-center font-bold text-5xl my-10">
        <h2>My Volunteer Request Post</h2>
      </div>

      <div className="overflow-x-auto mt-10 lg:px-4">
        <div className="w-full inline-block shadow-lg rounded-xl overflow-hidden">
          <table className="w-full bg-white text-sm text-gray-700 text-center">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white uppercase tracking-wider">
              <tr className="">
                <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                  Image
                </th>
                <th className="font-semibold px-1 py-3 lg:px-6 lg:py-4">
                  Organizername
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
              {myVolunteerRequestPosts?.map((MyVolunteer) => (
                <tr
                  key={MyVolunteer._id}
                  className="bg-white dark:bg-gray-900 dark:border-0 hover:dark:bg-gray-800 hover:bg-gray-50 hover:scale-104 transition-all duration-800"
                >
                  <td className="flex justify-center px-1 py-3 lg:px-6 lg:py-4">
                    <div className="w-14 h-14">
                      <img
                        src={MyVolunteer.thumbnail}
                        className="w-full h-full object-cover rounded-md border border-gray-300"
                      />
                    </div>
                  </td>
                  <td className="font-medium text-gray-900 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4">
                    {MyVolunteer.organizername}
                  </td>
                  <td className="font-medium text-gray-900 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4">
                    {MyVolunteer.startDate}
                  </td>
                  <td className=" text-gray-700 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4">
                    {MyVolunteer.volunteercategory}
                  </td>
                  <td className="px-1 py-3 lg:px-6 lg:py-4">
                    <div className="flex justify-center gap-1 lg:gap-3">
                      <button
                        onClick={() =>
                          handleDeleteMyVolunteerRequestPost(MyVolunteer._id)
                        }
                        className="cursor-pointer flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 text-sm font-medium text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-200"
                      >
                        <FaTrashAlt className="text-white text-base" />
                        <span>Cancel Request</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {myVolunteerRequestPosts.length === 0 && (
                <tr>
                  <td
                    colSpan="4"
                    className="w-full mx-auto bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4"
                  >
                    No My Volunteer Request Post
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyVolunteerRequestPost;
