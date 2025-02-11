import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon, LightBulbIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Opportunities",
    description:
      "We provide all genuine opportunities, including jobs, internships, freelancing, hackathons, tech events, certifications, skill development, and much more.",
  },
  {
    icon: <MapIcon />,
    title: "Sub-committees",
    description:
      "DevDisplay has several subcommittees, for WebDev, GameDev, AppDev, AI/ML, DSA, Designing, Hacking, Web3, IoT, DevOps, Entrepreneurship and more",
  },
  {
    icon: <PlaneIcon />,
    title: "Open Source",
    description:
      "We are organizing global open-source events or program where developers collaborate on real-world projects, solving real world problems and driving innovation worldwide.",
  },
  {
    icon: <GiftIcon />,
    title: "Prizes",
    description:
      "Win exciting rewards, including cash prizes, exclusive goodies, premium stickers, official certificates, and even surprise treats! Your skills and contributions deserve recognition.",
  },
  {
    icon: <LightBulbIcon />,
    title: "Resources",
    description:
      "We provided all types resources that really matter like courses, tutorials, Notes, AI Tools, Roadmaps, Guides, Interview Preparation, research papers, Documentation and many more.",
  },
  {
    icon: <LightBulbIcon />,
    title: "Idea Submission",
    description:
      "At DevDisplay, every user can submit their startup or project ideas. Through community voting, the most popular ideas are selected, and then the entire DevDisplay community collaborates to implement them. ",
  },
  {
    icon: <LightBulbIcon />,
    title: "Portfolio & Resume Building",
    description:
      "At DevDisplay, users can easily create no-code portfolios with live hosting and ATS-optimized resumes, along with analyzing their existing resumes for improvements.",
  },
  {
    icon: <LightBulbIcon />,
    title: "Global Networking",
    description:
      "DevDisplay offers a vibrant space for users to connect, network, and engage in meaningful discussions with like-minded people worldwide. Let's connect and grow your professional network within the global community.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container text-center py-12 sm:py-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        One Platform {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           Endless Possibilities.{" "}
          </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Whatever you need as a tech enthusiast, DevDisplay has it all without limitations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
