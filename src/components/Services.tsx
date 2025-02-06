import { Card, CardDescription, CardTitle } from "./ui/card";
import DevPioneer from "/assets/DevBadges/DevPioneer.gif";
import DevEnhancer from "/assets/DevBadges/DevEnhancer.gif";
import DevInnovator from "/assets/DevBadges/DevInnovator.gif";

interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Dev Pioneer",
    description: "Earn this badge by adding your profile to the DevDisplay platform.",
    imageUrl: DevPioneer,
  },
  {
    title: "Dev Enhancer",
    description: "Enhance existing features by refining and improving functionalities.",
    imageUrl: DevEnhancer,
  },
  {
    title: "Dev Innovator",
    description: "Bring innovation to the forefront by adding creative and unique features.",
    imageUrl: DevInnovator,
  },
];

export const Services = () => {
  return (
    <section className="container py-18 sm:py-20">
      {/* Centered Heading */}
      <div className="flex justify-center">
        <h2 className="text-center text-3xl md:text-4xl font-bold">
        Contributor
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}Badges{" "}
          </span>
        </h2>
      </div>

      {/* Centered Subtext with More Space */}
      <div className="flex flex-col items-center mt-4 mb-6">
        <p className="text-center text-lg text-gray-400 max-w-2xl">
        These badges recognize the dedication and contributions of developers within the DevDisplay community. 
        </p>
      </div>

      {/* Cards Section with Larger GIFs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {serviceList.map(({ imageUrl, title, description }: ServiceProps) => (
          <Card key={title} className="flex justify-between items-center p-6 bg-[#0D1B2A] rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <CardTitle className="text-lg text-blue-400">{title}</CardTitle>
              <CardDescription className="text-sm text-gray-300">{description}</CardDescription>
            </div>
            {/* Increased GIF Size */}
            <img src={imageUrl} alt={title} className="h-36 w-36 object-contain ml-4" />
          </Card>
        ))}
      </div>
    </section>
  );
};

