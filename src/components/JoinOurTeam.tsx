const JoinOurTeam = () => {
    const joinOptions = [
      {
        imageUrl: "/assets/comingsoon.png",
        title: "Join in Core Team",
        link: "#",
      },
      {
        imageUrl: "/assets/comingsoon.png",
        title: "Join as a mentor",
        link: "#",
      },
      {
        imageUrl: "/assets/comingsoon.png",
        title: "Join as a Volunteer",
        link: "#",
      },
    ];
  
    return (
      <section id="join-our-team" className="container pt-16 pb-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
          Join The{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Team
          </span>
        </h2>
        <p className="text-center md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
          Be a part of a global vision!
        </p>
        <div className="flex flex-wrap justify-center gap-14">
          {joinOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 p-8 rounded-xl border border-gray-600 backdrop-blur-lg shadow-2xl transition-transform hover:scale-105 relative min-h-[350px] w-[350px] overflow-hidden"
            >
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-border-glow"></div>
  
              <img
                src={option.imageUrl}
                alt={option.title}
                className="h-56 w-56 rounded-lg border border-gray-500 shadow-xl"
              />
              <h3 className="text-2xl font-semibold text-white text-center">
                {option.title}
              </h3>
              <a
                href={option.link}
                className="px-8 py-3 bg-primary text-white font-bold rounded-lg shadow-lg hover:bg-opacity-80 transition"
              >
                JOIN US
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default JoinOurTeam;
  