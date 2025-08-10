import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import AuthContext from "../context/AuthContext";
import LoadingSpinners from "./LoadingSpinners";
import { ModeToggle } from "./ModeToggle";
import { CgLayoutGridSmall } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";
import { TbLogin } from "react-icons/tb";
import { FaPlus, FaListAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/HelpingHub.png";

const Navbar = () => {
  const { loginUser, signOutUser, loading, setLayout } =
    useContext(AuthContext);

  if (loading) {
    return <LoadingSpinners></LoadingSpinners>;
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"home"} className={"hover:bg-indigo-700 hover:text-white"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"AllVolunteerNeedposts"}
          className={"hover:bg-indigo-700 hover:text-white"}
        >
          {/* All volunteer Need posts */}
          All Post
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"about"}
          className={"hover:bg-indigo-700 hover:text-white"}
        >
          About
        </NavLink>
      </li>

      {loginUser && (
        <>
          <li>
            <NavLink
              to={"events"}
              className={"hover:bg-indigo-700 hover:text-white"}
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"AddVolunteerNeedPost"}
              className={"hover:bg-indigo-700 hover:text-white"}
            >
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"ManageMyPosts"}
              className={"hover:bg-indigo-700 hover:text-white"}
            >
              My Posts
            </NavLink>
          </li>
        </>
      )}

      <button
        data-tooltip-id="tooltip1"
        data-tooltip-content="Only For All Post Page"
        className="cursor-pointer active:text-indigo-700"
        onClick={() => setLayout("columns")}
      >
        <CgLayoutGridSmall size={40} />
      </button>

      <button
        data-tooltip-id="tooltip2"
        data-tooltip-content="Only For All Post Page"
        className="cursor-pointer active:text-indigo-700"
        onClick={() => setLayout("table")}
      >
        <BiMenu className="m-1" size={30} />
      </button>

      <Tooltip id="tooltip1" />
      <Tooltip id="tooltip2" />

      <li className="cursor-pointer">
        <ModeToggle></ModeToggle>
      </li>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successful",
          text: "You have been successfully logged out.",
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Logout Failed",
          text: "Something went wrong. Please try again.",
          showConfirmButton: true,
          timer: 1500,
        });
      });
  };

  return (
    <div className="navbar bg-indigo-700/5 shadow-md backdrop-blur-md fixed top-0 left-1/2 -translate-x-1/2 w-11/12 flex justify-center mx-auto items-center z-10 dark:bg-gray-800 rounded-xl px-2 sm:px-3 lg:px-3 py-3 dark:text-white">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden px-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow items-start gap-2"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl py-6 px-0 rounded-4xl">
          <img
            className="w-[160px] md:w-[200px] lg:w-[200px]"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center border gap-0.5 border-gray-200 dark:border-gray-500 rounded-full md:px-4 shadow-sm mx-2">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-1 md:gap-2 lg:gap-3">
        <div className="">
          <div className="dropdown dropdown-end">
            {loginUser && (
              <button
                className="my-anchor-element"
                data-tooltip-id="my-tooltip"
              >
                <div className="avatar">
                  <div className="w-9 md:w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100 cursor-pointer transition duration-300 hover:ring-indigo-500 hover:scale-105 mr-1 sm:m-1 md:m-0">
                    <img
                      src={
                        loginUser?.photoURL ||
                        "https://img.icons8.com/?size=80&id=108639&format=png"
                      }
                      alt="User Avatar"
                    />
                  </div>
                </div>
              </button>
            )}

            <ul
              tabIndex={0}
              className="dropdown-content menu gap-2 mt-2 w-44 rounded-xl bg-base-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg z-20 p-2"
            >
              <li>
                <NavLink
                  to="login"
                  onClick={handleLogout}
                  className="flex items-center gap-3 rounded-lg border border-indigo-700 dark:border-gray-500 bg-indigo-700/10 hover:bg-indigo-700 hover:text-white px-3 py-2 transition duration-200"
                >
                  <FaSignOutAlt size={16} />
                  <span className="text-sm">Logout</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          {!loginUser && (
            <NavLink
              to="login"
              className="flex items-center gap-3 rounded-lg border border-indigo-700 dark:border-gray-500 bg-indigo-700/10 hover:bg-indigo-700 hover:text-white px-3 py-2 transition duration-200 shadow-sm cursor-pointer"
            >
              <TbLogin size={18} />
              <span className="hidden sm:inline text-sm font-medium">
                Login
              </span>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
