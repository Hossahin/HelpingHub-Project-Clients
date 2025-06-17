import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import LoadingSpinners from "./LoadingSpinners";
import AuthContext from "../context/AuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AOS from "aos";
import "aos/dist/aos.css";

const MyVolunteerNeedPost = () => {
  const { loginUser } = useContext(AuthContext);
  const [MyVolunteerNeedPost, setMyVolunteerNeedPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const axiosSecure = useAxiosSecure();

  AOS.init({
    offset: 120,
    duration: 2000,
    easeIn: "easeInOut",
    delay: 100,
    once: false,
    mirror: false,
  });

  useEffect(() => {
    setLoading(true);
    axiosSecure(`ManageMyPosts/${loginUser?.email}`).then((data) => {
      setMyVolunteerNeedPost(data.data);
      setLoading(false);
    });
  }, [setMyVolunteerNeedPost, setLoading, loginUser, axiosSecure]);

  if (loading) {
    return <LoadingSpinners />;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this post?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`Myvolunteerneedpost/${id}`).then(() => {
          const remainingData = MyVolunteerNeedPost.filter(
            (post) => post._id !== id
          );
          setMyVolunteerNeedPost(remainingData);

          Swal.fire({
            position: "center",
            icon: "success",
            title: "My Volunteer post deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    });
  };
  return (
    <>
      <div data-aos="fade-right">
        <div className="">
          <h2 className="text-indigo-700 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-6 hover:scale-110 transition-all duration-800">
            My volunteer need post
          </h2>
          <div className="overflow-x-auto mt-10 lg:px-4">
            <div className="w-full inline-block shadow-lg rounded-xl overflow-hidden">
              <table className="w-full bg-white text-[12px] md:text-[14px] text-gray-700 text-center">
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
                  {MyVolunteerNeedPost?.map((MyVolunteer) => (
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
                        {MyVolunteer.startDate}
                      </td>
                      <td className=" text-gray-700 dark:text-gray-300 px-1 py-3 lg:px-6 lg:py-4">
                        {MyVolunteer.volunteercategory}
                      </td>
                      <td className="px-1 py-3 lg:px-6 lg:py-4">
                        <div className="flex justify-center gap-1 lg:gap-3">
                          <Link
                            to={`/Myvolunteerneedpost/update/${MyVolunteer._id}`}
                          >
                            <button className="cursor-pointer flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-200">
                              <FaEdit className="text-white text-base" />
                              <span className="hidden sm:inline sm:text-[12px] md:text-[14px]">
                                Update
                              </span>
                            </button>
                          </Link>

                          <button
                            onClick={() => handleDelete(MyVolunteer._id)}
                            className="cursor-pointer flex items-center gap-2 px-2 py-2 lg:px-4 lg:py-2 text-sm font-medium text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-200"
                          >
                            <FaTrashAlt className="text-white text-base" />
                            <span className="hidden sm:inline sm:text-[12px] md:text-[14px]">
                              Delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {MyVolunteerNeedPost.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-gray-500 px-1 py-3 lg:px-6 lg:py-4"
                      >
                        No My Volunteer Need Post found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyVolunteerNeedPost;
