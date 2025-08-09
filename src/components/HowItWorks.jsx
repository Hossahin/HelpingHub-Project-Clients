import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Find Opportunities",
      description:
        "Browse and search volunteer posts that fit your passion and location.",
    },
    {
      id: 2,
      title: "Join & Volunteer",
      description:
        "Sign up for volunteer posts and contribute your time and skills.",
    },
    {
      id: 3,
      title: "Track Your Impact",
      description:
        "Manage your posts and see the difference you make in the community.",
    },
    {
      id: 4,
      title: "Communicate & Collaborate",
      description:
        "Connect with organizers and volunteers to maximize your impact.",
    },
    {
      id: 5,
      title: "Receive Feedback",
      description:
        "Get recognition and feedback from organizations for your efforts.",
    },
    {
      id: 6,
      title: "Grow Your Network",
      description:
        "Build meaningful relationships and open new volunteering opportunities.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900  mx-auto rounded-lg text-center">
      <h2 className="text-3xl font-semibold mb-10">How It Works</h2>

      {/* First row: first 4 steps */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {steps.slice(0, 4).map(({ id, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center max-w-xs px-4 flex-1 min-w-[220px]"
          >
            <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 font-bold text-xl">
              {id}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>

      {/* Second row: last 2 steps centered */}
      <div className="flex flex-wrap justify-center gap-10">
        {steps.slice(4).map(({ id, title, description }) => (
          <div
            key={id}
            className="flex flex-col items-center max-w-xs px-4 flex-1 min-w-[220px]"
          >
            <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 font-bold text-xl">
              {id}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
