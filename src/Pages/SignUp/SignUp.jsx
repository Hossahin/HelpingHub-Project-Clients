import React, { useContext, useEffect } from "react";
import AuthContext from "./../../context/AuthContext";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const { createUser, profileUpdate, setLoading, signInWithGoogle } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "SignUp Page";
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userData = {
      displayName,
      photoURL,
      email,
    };

    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Length must be at least 6 character",
        showConfirmButton: true,
        timer: 1500,
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Must have an Uppercase letter in the password ",
        showConfirmButton: true,
        timer: 1500,
      });
      return;
    }

    if (!/[a-z]/.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Must have an Lowercase letter in the password ",
        showConfirmButton: true,
        timer: 1500,
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful!",
          text: "Registration successful. Let's get started!",
          showConfirmButton: true,
          timer: 1500,
        });

        setLoading(false);

        axios
          .post("https://server-side-taupe-mu.vercel.app/signup", userData)
          .then(() => {})
          .catch(() => {});

        profileUpdate({ displayName: displayName, photoURL: photoURL })
          .then(() => {
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch(() => {});
      })
      .catch(() => {
        Swal.fire({
          title: "Registration Failed",
          text: "Something went wrong. Please try again.",
          icon: "error",
          draggable: true,
        });
        setLoading(false);
        return;
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Registration Successful!",
          text: "Registration successful. Let's get started!",
          icon: "success",
          draggable: true,
        });
        setLoading(false);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        Swal.fire({
          title: "Sign in with Google failed",
          icon: "error",
          draggable: true,
        });
      });
  };

  return (
    <>
      <div className="mt-7 w-full max-w-[500px] mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-gray-900 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <Link
                to={"/login"}
                className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <button
              onClick={handleGoogleSignUp}
              type="button"
              className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign up with Google
            </button>

            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
              Or
            </div>

            <form onSubmit={handleRegister}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    for="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Your name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 border dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    for="photo"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Your Photo URL
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="photo"
                      name="photo"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 border dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      placeholder="Enter your phot URL"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 border dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      placeholder="Enter your Email"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 border dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      required
                      placeholder="Enter your password"
                    />
                    <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
