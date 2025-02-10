import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "/assets/team/SampleMan.jpg",
    name: "Enter Your Name",
    position: "Community Leader / President",
    socialNetworks: [ 
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleWomen.jpg",
    name: "Enter Your Name",
    position: "Community Manager",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleMan.jpg",
    name: "Enter Your Name",
    position: "Logistics and Committees Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleWomen.jpg",
    name: "Enter Your Name",
    position: "Social Media Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleMan.jpg",
    name: "Enter Your Name",
    position: "Open Source Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleMan.jpg",
    name: "Enter Your Name",
    position: "Networking Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleWomen.jpg",
    name: "Enter Your Name",
    position: "Research and Innovation Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleMan.jpg",
    name: "Enter Your Name",
    position: "Tech Lead",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleWomen.jpg",
    name: "Enter Your Name",
    position: "Content Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
  {
    imageUrl: "/assets/team/SampleMan.jpg",
    name: "Enter Your Name",
    position: "Marketing & Design Head",
    socialNetworks: [
      {
        name: "Instagram",
        url: "#",
      },
      {
        name: "Linkedin",
        url: "#",
      },
      {
        name: "X",
        url: "#",
      },
      {
        name: "Github",
        url: "#",
      }
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
      
      case "Github":
        return <GitHubLogoIcon className="w-5 h-5" />;

      case "X":
        return <TwitterLogoIcon className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-center text-3xl md:text-4xl font-bold">
      Who
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        {" "}We Are{" "}
        </span>
      </h2>

      <p className="text-center mt-4 mb-10 text-xl text-muted-foreground">
        Meet the Team for 2025
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps, index) => (
            <Card
              key={name}
              className={`bg-muted/50 relative mt-8 flex flex-col justify-center items-center ${index <= teamList.length - 9 ? "lg:col-span-2" : ""}`}            
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
