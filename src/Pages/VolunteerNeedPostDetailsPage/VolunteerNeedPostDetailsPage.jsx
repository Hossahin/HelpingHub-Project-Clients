import React, { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const VolunteerNeedPostDetailsPage = () => {
  const { loginUser } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Volunteer Details";
  }, []);

  const DetailsData = useLoaderData();
  const {
    _id,
    Location,
    Noofvolunteersneeded,
    description,
    organizeremail,
    organizername,
    posttitle,
    startDate,
    thumbnail,
    volunteercategory,
  } = DetailsData;
  console.log(DetailsData);

  const navigate = useNavigate();

  const handleAddVolunteer = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const volunteerDetail = Object.fromEntries(formData.entries());

    const volunteerDetailData = {
      ...volunteerDetail,
      status: "requested",
    };

    axios
      .post("http://localhost:3000/VolunteerDetails", volunteerDetailData)
      .then((res) => {
        if (res?.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully as a Join Volunteer",
            text: "Your Data successfully Save DB",
            showConfirmButton: true,
            timer: 2500,
          });

          // start
          const updateVolunteerAmount = {
            Noofvolunteersneeded: -1,
          };

          axios
            .patch(
              `http://localhost:3000/AllVolunteerNeedposts/${_id}`,
              updateVolunteerAmount
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
          // end

          navigate("/ManageMyPosts");
        }
      })
      .catch(() => {});
  };

  return (
    <div className="max-w-4xl mx-auto md:p-6 mt-10">
      <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden transition-colors duration-500 border border-gray-200 dark:border-gray-700">
        <img
          src={thumbnail}
          alt="Event Thumbnail"
          className="w-full h-64 object-cover rounded-t-3xl"
        />

        <div className="p-2 md:p-6 space-y-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
              {posttitle}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Start Date: <span className="font-medium">{startDate}</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gradient-to-r from-blue-200 to-blue-500 text-blue-900 dark:from-blue-700 dark:to-blue-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {Location}
            </span>
            <span className="bg-gradient-to-r from-green-200 to-green-500 text-green-900 dark:from-green-700 dark:to-green-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {volunteercategory}
            </span>
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-500 text-yellow-900 dark:from-yellow-700 dark:to-yellow-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
              {Noofvolunteersneeded} Volunteers Needed
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            {description}
          </p>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>
              Organizer:{" "}
              <span className="font-semibold text-gray-800 dark:text-white">
                {organizername}
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="text-blue-600 dark:text-blue-300">
                {organizeremail}
              </span>
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button
              className="btn cursor-pointer px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-600"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Be a Volunteer
            </button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl bg-white dark:bg-gray-900">
                {/* modal start */}
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full shadow-xl rounded-lg p-3 bg-white dark:bg-gray-900">
                    <div className="text-center mb-8">
                      <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 hover:scale-110 transition-all duration-800">
                        Update volunteer need Post
                      </h1>

                      <p className="mt-2 text-sm text-gray-600"></p>
                    </div>

                    <form onSubmit={handleAddVolunteer} className="space-y-6">
                      <div>
                        <label
                          htmlFor="Thumbnail"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Thumbnail
                        </label>
                        <input
                          id="thumbnail"
                          type="url"
                          name="thumbnail"
                          defaultValue={thumbnail}
                          readOnly
                          required
                          placeholder="Enter Thumbnail URL"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="posttitle"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Post Title
                        </label>
                        <input
                          id="posttitle"
                          type="text"
                          name="posttitle"
                          defaultValue={posttitle}
                          readOnly
                          required
                          placeholder="Enter Post Title"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="description"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          rows="4"
                          defaultValue={description}
                          readOnly
                          required
                          placeholder="What's your volunteer about?"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        ></textarea>
                      </div>

                      <div>
                        <label
                          htmlFor="hobbyCategory"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Volunteer Category
                        </label>
                        <select
                          id="volunteercategory"
                          name="volunteercategory"
                          value={volunteercategory}
                          readOnly
                          required
                          className="mt-1 w-full px-4 py-3 border border-gray-300 bg-white dark:bg-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        >
                          <option value={""} disabled selected>
                            Select a category
                          </option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Education">Education</option>
                          <option value="Social Service">Social Service</option>
                          <option value="Animal Welfare">Animal Welfare</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="Location"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Location
                        </label>
                        <input
                          id="Location"
                          name="Location"
                          type="text"
                          defaultValue={Location}
                          readOnly
                          required
                          placeholder="Add a location"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="No. of volunteers needed"
                            className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                          >
                            No. of volunteers needed
                          </label>
                          <input
                            id="Noofvolunteersneeded "
                            type="number"
                            name="Noofvolunteersneeded"
                            defaultValue={Noofvolunteersneeded}
                            readOnly
                            required
                            min="2"
                            placeholder="e.g., 25"
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="startDate"
                            className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                          >
                            Estimated Start Date
                          </label>
                          <input
                            id="startDate"
                            type="date"
                            defaultValue={startDate}
                            readOnly
                            name="startDate"
                            required
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                          />
                        </div>
                      </div>

                      <hr className="my-8 border-gray-300" />

                      <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold text-indigo-700">
                          Organizer Details
                        </h2>
                      </div>

                      <div>
                        <label
                          htmlFor="organizername"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Organizer name
                        </label>
                        <input
                          id="organizername"
                          type="text"
                          value={`${loginUser?.displayName}`}
                          readOnly
                          name="organizername"
                          required
                          placeholder="Organizer name"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="organizeremail"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Organizer email
                        </label>
                        <input
                          id="organizeremail"
                          type="email"
                          value={`${loginUser?.email}`}
                          readOnly
                          name="organizeremail"
                          required
                          placeholder="you@example.com"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>

                      <hr className="my-8 border-gray-300" />

                      <div className="text-center mb-6">
                        <h2 className="text-xl font-semibold text-indigo-700">
                          Volunteer Details
                        </h2>
                      </div>

                      <div>
                        <label
                          htmlFor="volunteername"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Volunteer name
                        </label>
                        <input
                          id="volunteername"
                          type="text"
                          value={`${loginUser?.displayName}`}
                          readOnly
                          name="volunteername"
                          required
                          placeholder="volunteer name"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="volunteeremail"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Volunteer email
                        </label>
                        <input
                          id="volunteeremail"
                          type="email"
                          value={`${loginUser?.email}`}
                          readOnly
                          name="volunteeremail"
                          required
                          placeholder="you@example.com"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="suggestion"
                          className="block text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
                        >
                          Suggestion
                        </label>
                        <textarea
                          id="suggestion"
                          name="suggestion"
                          rows="2"
                          required
                          placeholder="What's your suggestion?"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          className="cursor-pointer w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-500 ease-in-out transform hover:scale-105"
                        >
                          Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* modal End */}

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerNeedPostDetailsPage;
