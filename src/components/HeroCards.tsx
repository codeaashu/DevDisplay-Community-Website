import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, YoutubeIcon, TwitterIcon } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="/assets/profile.png"
            />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Ashutosh Singh</CardTitle>
            <CardDescription>Founder DevDisplay</CardDescription>
          </div>
        </CardHeader>

        <CardContent>DevDisplay is the bridge between an idea and its impact.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="/assets/DevDisplayLOGO/ICON.png"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Follow us on socials</CardTitle>

        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            We're everywhere, really! Let's connect with DevDisplay on all your favorite platforms and never miss an update!
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/chyt2UgTv5"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Discord icon</span>
              <DiscordLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://github.com/devdisplay"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
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
              href="https://youtube.com/@devdisplay"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">YouTube icon</span>
              <YoutubeIcon className="w-5 h-5" />
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

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            DevSpring Event
          </CardTitle>

          <CardDescription>
           Join the DevSpring & Be a part of 2 month Open Source Impact With DevDisplay.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a href="https://www.devdisplay.org/DevSpring" className="w-full md:w-1/3" target="_blank">
            <Button>Click here to join</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Your ideas matter.", "Your code matters.", " You matter."].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Global Vision</CardTitle>
            <CardDescription className="text-md mt-2">
            We're on a mission to unite all your tech needs under one platform.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
