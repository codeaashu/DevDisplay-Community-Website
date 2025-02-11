import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
// import { FaWhatsapp } from "react-icons/fa"; 
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Linkedin, TwitterIcon } from "lucide-react";
import "./JoinTheCommunity.css"; 

const JoinTheCommunity = () => {
  return (
    <section id="community" className="py-1">
      <hr />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold">
                <div className="flex justify-center">
                <img src="/assets/circle.webp" alt="Circle" className="w-20 h-20 mb-8 rotate-animation" />
                </div>
                Join the Global
                <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  {" "}Community
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join the dynamic hub for tech enthusiasts of College Name! Here, we come together to Connect, Collaborate, Code, Create & Conquer with with global tech innovators. Click to dive in!
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <Button asChild>
                <a href="https://chat.whatsapp.com/your-whatsapp-group-link" target="_blank" rel="noopener noreferrer">
                  Join WhatsApp
                </a>
              </Button>
              <div className="flex mt-2">
                <a
                  rel="noreferrer noopener"
                  href="https://instagram.com/devdisplay"
                  target="_blank"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">Instagram icon</span>
                  <InstagramLogoIcon className="w-5 h-5" />
                </a>
                <a
                  rel="noreferrer noopener"
                  href="https://www.linkedin.com/company/devdisplay/"
                  target="_blank"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">Linkedin icon</span>
                  <Linkedin size="20" />
                </a>
                <a
                  rel="noreferrer noopener"
                  href="https://twitter.com/devdisplay_"
                  target="_blank"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  <span className="sr-only">Twitter icon</span>
                  <TwitterIcon className="w-5 h-5" />
                </a>
              </div>
            </CardFooter>
          </Card>
          <div className=" p-0 rounded-lg mt-2 text-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="opacity-60 flex items-center">
                <a href="https://www.google.com/maps/search/?api=1&query=college+name" target="_blank" rel="noopener noreferrer" className="hover:underline">View College Name Campus Community On Map</a>
              </div>
              <div className="opacity-60 flex items-center">
                <a href="mailto:college.devdisplay@gmail.com" className="hover:underline">Reach out us on - college.devdisplay@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheCommunity;