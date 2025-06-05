import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import AuthContext from "../context/AuthContext";
import LoadingSpinners from "./LoadingSpinners";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  const { loginUser, signOutUser, loading } = useContext(AuthContext);
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
      <li>
        <Link>
          <ModeToggle></ModeToggle>
        </Link>
      </li>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "✅ Logout Successful",
          text: "You have been successfully logged out.",
          icon: "success",
          draggable: true,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "❌ Logout Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <div className="navbar p-0 mt-2 bg-white dark:bg-gray-900 rounded-xl lg:px-10 py-3 dark:text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl p-0">
          <h1 className="text-3xl">Hello</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center gap-5 border border-gray-200 rounded-full px-20 shadow-sm">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end md:gap-1 lg:gap-3">
        <div className="flex items-center">
          {loginUser && (
            <>
              <button
                className="my-anchor-element"
                data-tooltip-id="my-tooltip"
              >
                <div className="avatar">
                  <div className="ring-primary cursor-pointer ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
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
          {loginUser ? (
            <NavLink
              onClick={handleLogout}
              className={"btn hover:bg-indigo-700 hover:text-white"}
              to={"login"}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              className={"btn hover:bg-indigo-700 hover:text-white"}
              to={"login"}
            >
              Login
            </NavLink>
          )}
        </div>

        <div className="">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              MyProfile
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 gap-2 shadow-sm"
            >
              <li>
                <NavLink
                  to={"AddVolunteerNeedPost"}
                  className={"btn hover:bg-indigo-700 hover:text-white"}
                >
                  Add Volunteer need Post
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"ManageMyPosts"}
                  className={"btn hover:bg-indigo-700 hover:text-white"}
                >
                  Manage My Posts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
