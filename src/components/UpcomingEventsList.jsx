import React, { useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const UpcomingEventsList = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const events = [
    {
      id: 1,
      title: "Community Clean-Up Drive",
      date: "August 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Central Park, Dhaka",
    },
    {
      id: 2,
      title: "Food Distribution Program",
      date: "August 25, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Mirpur Community Center",
    },
    {
      id: 3,
      title: "Blood Donation Camp",
      date: "September 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Red Cross Building, Gulshan",
    },
  ];

  return (
    <section className="py-12 mx-auto">
      <h2
        className="text-3xl font-bold text-center mb-8 dark:text-white"
        data-aos="fade-up"
      >
        Upcoming Events
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              {event.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
              <FaCalendarAlt className="text-indigo-500" /> {event.date}
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
              <FaClock className="text-indigo-500" /> {event.time}
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <FaMapMarkerAlt className="text-indigo-500" /> {event.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEventsList;

