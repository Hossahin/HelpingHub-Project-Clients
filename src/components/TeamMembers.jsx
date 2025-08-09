import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const teamMembers = [
  {
    id: 1,
    name: "Md Hossahin",
    role: "Founder & Developer",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocIOyIy_OSKd41Vxa287tXZtcSd3h047vrREXdrry7sdpb3GFmIe=s96-c",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Community Manager",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "David Lee",
    role: "Volunteer Coordinator",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const TeamMembers = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // animation only once
    });
  }, []);

  return (
    <div className="py-16 px-6 mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10  mx-auto">
        {teamMembers.map(({ id, name, role, photo }) => (
          <div
            key={id}
            data-aos="fade-up"
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
          >
            <img
              src={photo}
              alt={name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{name}</h3>
            <p className="text-indigo-600 dark:text-indigo-400">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
