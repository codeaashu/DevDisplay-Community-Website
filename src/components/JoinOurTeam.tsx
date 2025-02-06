import React from "react";

const JoinOurTeam = () => {
  const joinOptions = [
    {
      imageUrl: "/assets/JoinOurTeam/CoreTeam.png",
      title: "Join our Core Team",
      link: "#",
    },
    {
      imageUrl: "/assets/JoinOurTeam/MentorTeam.png",
      title: "Join Our Mentor Team",
      link: "#",
    },
    {
      imageUrl: "/assets/JoinOurTeam/VolunteerTeam.png",
      title: "Join Our Volunteer Team",
      link: "#",
    },
  ];

  return (
    <section id="join-our-team" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Join Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {joinOptions.map((option, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img src={option.imageUrl} alt={option.title} className="h-40 w-40" />
            <h3 className="text-lg font-bold">{option.title}</h3>
            <a href={option.link} className="btn btn-primary">
              JOIN US
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JoinOurTeam;