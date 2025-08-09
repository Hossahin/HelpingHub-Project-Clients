import React from "react";
import { FaHandsHelping, FaLeaf, FaUsers, FaBook } from "react-icons/fa";

const roles = [
  {
    id: 1,
    icon: (
      <FaHandsHelping className="text-indigo-600 dark:text-indigo-400 w-10 h-10" />
    ),
    title: "Community Support",
    description:
      "Assist local communities through various support and outreach programs.",
  },
  {
    id: 2,
    icon: <FaLeaf className="text-indigo-600 dark:text-indigo-400 w-10 h-10" />,
    title: "Environmental Care",
    description:
      "Participate in activities like tree planting, cleanups, and sustainability projects.",
  },
  {
    id: 3,
    icon: (
      <FaUsers className="text-indigo-600 dark:text-indigo-400 w-10 h-10" />
    ),
    title: "Event Coordination",
    description:
      "Help organize and manage volunteer events and community gatherings.",
  },
  {
    id: 4,
    icon: <FaBook className="text-indigo-600 dark:text-indigo-400 w-10 h-10" />,
    title: "Education & Mentoring",
    description:
      "Support educational programs by mentoring, tutoring, and coaching youth.",
  },
];

const VolunteerRoles = () => {
  return (
    <section className="py-12 px-6 mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-10">Volunteer Roles</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {roles.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VolunteerRoles;
