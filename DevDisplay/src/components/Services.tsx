import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Enigma's open source contributions and community presence is unparalleled, with 20+ projects completed and 1K+ PRs merged on GitHub.",
    icon: <ChartIcon />,
  },
  {
    title: "Machines and Services",
    description:
      "Our members take care of a lot of critical university infrastructure like enterprise servers and parallel-computing clusters.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Placement Advice and Connections",
    description:
      "Along with our alumni, we provide opportunities to connect with people all over the world, and exchange valuable experiences.",
    icon: <WalletIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            What 
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}We Give{" "}
            </span>
            Back
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Here's what we provide as services to the tech and casual community
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
