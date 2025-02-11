interface ContributorProps {
  name: string;
  imageUrl: string;
  linkedinUrl: string;
}

const contributors: ContributorProps[] = [
  {
    name: "John Doe",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  {
    name: "Jane Smith",
    imageUrl: "/assets/team/SampleMan.jpg",
    linkedinUrl: "#",
  },
  // Add more contributors here
];

const Contributors = () => {
  return (
    <section id="contributors" className="container pt-12 sm:py-32">
      <h2 className="text-center text-3xl md:text-4xl font-bold">
         Campus{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Contributors
          </span>
        </h2>
        <p className="text-center md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
         A huge shoutout to the incredible contributors from campuses College Name!
        </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-3">
        {contributors.map((contributor, index) => (
          <div key={index} className="relative group">
            <img
              src={contributor.imageUrl}
              alt={contributor.name}
              className="h-24 w-24 rounded-full object-cover mx-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
              <a
                href={contributor.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg font-bold"
              >
                {contributor.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contributors;