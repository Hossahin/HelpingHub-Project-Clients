import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Volunteer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "HelpingHub connected me with amazing opportunities. I love how easy it is to find and join volunteer projects!",
  },
  {
    id: 2,
    name: "David Lee",
    role: "Community Organizer",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "The platform makes managing volunteer posts a breeze. Our community has really benefited!",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Volunteer",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    message:
      "I appreciate the impact tracking feature — it motivates me to keep giving back!",
  },
  {
    id: 4,
    name: "Michael Smith",
    role: "Volunteer",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    message:
      "Easy to use and very effective platform to connect with local community needs.",
  },
  {
    id: 5,
    name: "Anna Williams",
    role: "Community Organizer",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    message:
      "HelpingHub simplified volunteer coordination and helped us reach more people.",
  },
  {
    id: 6,
    name: "James Brown",
    role: "Volunteer",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    message: "I love tracking my volunteer hours and seeing the impact I make!",
  },
  {
    id: 7,
    name: "Olivia Davis",
    role: "Volunteer",
    photo: "https://randomuser.me/api/portraits/women/36.jpg",
    message:
      "Such a great community! The platform makes volunteering so accessible.",
  },
  {
    id: 8,
    name: "William Taylor",
    role: "Community Organizer",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    message:
      "Thanks to HelpingHub, our events have better participation than ever.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        What Our Volunteers Say
      </h2>

      {/* First row: 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {testimonials.slice(0, 4).map(({ id, name, role, photo, message }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={id * 100} // stagger effect
          >
            <img
              src={photo}
              alt={name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <p className="mb-4 text-gray-700 dark:text-gray-300 italic">
              "{message}"
            </p>
            <h3 className="font-semibold text-lg">{name}</h3>
            <span className="text-indigo-600 dark:text-indigo-400 text-sm">
              {role}
            </span>
          </div>
        ))}
      </div>

      {/* Second row: next 4 cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {testimonials.slice(4, 8).map(({ id, name, role, photo, message }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={id * 100} // stagger effect
          >
            <img
              src={photo}
              alt={name}
              className="w-20 h-20 rounded-full mb-4 object-cover"
              loading="lazy"
            />
            <p className="mb-4 text-gray-700 dark:text-gray-300 italic">
              "{message}"
            </p>
            <h3 className="font-semibold text-lg">{name}</h3>
            <span className="text-indigo-600 dark:text-indigo-400 text-sm">
              {role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
