import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-12 sm:py-16"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="/assets/DevDisplayLOGO/ICON.png"
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                DevDisplay is a global open-source tech community and organization that brings together all your tech needs in one place. Our mission is to establish DevDisplay as the Tech Enthusiast and Developer's First Platform — A space where developers and all the tech enthusiasts can connect, collaborate, code, create, and conquer in the tech ecosystem. With a focus on open-source contributions, project collaboration, networking, and skill-building, DevDisplay empowers individuals to showcase their work, find opportunities, and contribute to the global tech movement. Whether you're looking for inspiration, resources, or a space to innovate, DevDisplay is your all-in-one tech hub.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
