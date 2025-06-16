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
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
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
          All volunteer Need posts
        </NavLink>
      </li>

      <button
        className="cursor-pointer active:text-indigo-700"
        onClick={() => setLayout("columns")}
      >
        <CgLayoutGridSmall size={40} />
      </button>

      <button
        className="cursor-pointer active:text-indigo-700"
        onClick={() => setLayout("table")}
      >
        <BiMenu className="m-1" size={30} />
      </button>

      <li>
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
          title: "✅ Logout Successful",
          text: "You have been successfully logged out.",
          showConfirmButton: true,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "❌ Logout Failed",
          text: "Something went wrong. Please try again.",
          showConfirmButton: true,
          timer: 1500,
        });
      });
  };

  return (
    <div className="navbar mt-2 bg-white dark:bg-gray-900 rounded-xl px-2 sm:px-3 lg:px-3 py-3 dark:text-white ">
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
        <div className="flex items-center">
          {loginUser && (
            <>
              <button
                className="my-anchor-element"
                data-tooltip-id="my-tooltip"
              >
                <div className="avatar">
                  <div className="ring-primary cursor-pointer ring-offset-base-100 mr-1 sm:m-1 md:m-0 w-9 md:w-10 rounded-full ring-2 ring-offset-2">
                    <img
                      src={
                        loginUser?.photoURL ||
                        "https://img.icons8.com/?size=80&id=108639&format=png"
                      }
                    />
                  </div>
                </div>
              </button>
              <Tooltip
                id="my-tooltip"
                place="top"
                anchorSelect=".my-anchor-element"
              >
                <p>{loginUser?.displayName}</p>
              </Tooltip>
            </>
          )}
        </div>

        <div className="">
          <div className="dropdown dropdown-end">
            {loginUser && (
              <>
                <div
                  tabIndex={0}
                  role="button"
                  className="hover:bg-indigo-700 flex gap-2 py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 cursor-pointer border border-gray-200 dark:border-gray-500 rounded"
                >
                  <span className="hidden sm:inline text-[16px]">
                    MyProfile
                  </span>
                  <FaUserEdit
                    className="text-black dark:text-white"
                    size={20}
                  />
                </div>
              </>
            )}

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 mt-2  lg:w-2xs p-4 gap-2 shadow-sm dark:bg-gray-900"
            >
              <li>
                <NavLink
                  to={"AddVolunteerNeedPost"}
                  className={
                    "hover:bg-indigo-700 flex gap-2 py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 cursor-pointer border border-gray-200 dark:border-gray-500 rounded"
                  }
                >
                  Add Volunteer need Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"ManageMyPosts"}
                  className={
                    "hover:bg-indigo-700 flex gap-2 py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 cursor-pointer border border-gray-200 dark:border-gray-500 rounded"
                  }
                >
                  Manage My Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          {loginUser ? (
            <NavLink
              onClick={handleLogout}
              className={
                "hover:bg-indigo-700 flex gap-2 py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 cursor-pointer border border-gray-200 dark:border-gray-500 rounded"
              }
              to={"login"}
            >
              <span className="hidden sm:inline text-[14px">Logout</span>
              <FaSignOutAlt size={20} />
            </NavLink>
          ) : (
            <NavLink
              className={
                "btn py-1 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 hover:bg-indigo-700 hover:text-white"
              }
              to={"login"}
            >
              <span className="hidden sm:inline text-[14px">Login</span>
              <TbLogin size={20} />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
