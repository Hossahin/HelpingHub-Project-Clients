import React from "react";

const events = [
  {
    id: 1,
    title: "Community Park Cleanup",
    date: "Aug 25, 2025",
    location: "Central City Park",
    description:
      "Join us for a day of cleaning and beautifying the local park. All supplies provided!",
  },
  {
    id: 2,
    title: "Food Drive Distribution",
    date: "Sep 5, 2025",
    location: "Downtown Shelter",
    description:
      "Help distribute food packages to families in need. Your time makes a difference.",
  },
  {
    id: 3,
    title: "Senior Center Visit",
    date: "Sep 15, 2025",
    location: "Sunshine Senior Center",
    description:
      "Spend time with seniors, share stories, and brighten their day.",
  },
  {
    id: 4,
    title: "Tree Planting Event",
    date: "Oct 2, 2025",
    location: "Greenway Forest",
    description:
      "Participate in planting trees to help our environment thrive.",
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-12 px-6  mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Upcoming Events
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(({ id, title, date, location, description }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              {date}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {location}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
