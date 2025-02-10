import { Card, CardHeader, CardTitle, CardFooter, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

const JoinTheCommunity = () => {
  return (
    <section id="community" className="py-12">
      <hr />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background shadow-none text-center flex flex-col items-center justify-center border-0">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold">
              <div className="flex justify-center">
                  <FaWhatsapp className="w-20 h-20 mb-8" />
                </div>
                Ready to join this
                <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  {" "}Community?
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Join our vibrant WhatsApp community! Connect, share, and grow with like-minded enthusiasts. Click to dive in! 🚀
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href="https://chat.whatsapp.com/your-whatsapp-group-link" target="_blank" rel="noopener noreferrer">
                  Join WhatsApp
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinTheCommunity;