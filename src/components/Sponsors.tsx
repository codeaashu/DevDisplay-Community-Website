import Marquee from "react-fast-marquee";
import  { useTheme } from "@/components/theme-provider"

interface SponsorProps {
  lightLogoUrl: string;
  darkLogoUrl: string;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    lightLogoUrl: "./assets/SupportedBy/DigitalOcean.png",
    darkLogoUrl: "./assets/SupportedBy/DigitalOcean.png",
    name: "DigitalOcean",
  },
  {
    lightLogoUrl: "../src/assets/SupportedBy/GitBookLight.svg",
    darkLogoUrl: "../src/assets/SupportedBy/GitBookLight.svg",
    name: "GitBookLight",
  },
  {
    lightLogoUrl: "/src/assets/SupportedBy/GoogleForStartups.png",
    darkLogoUrl: "/src/assets/SupportedBy/GoogleForStartups.png",
    name: "GoogleForStartups",
  },
  {
    lightLogoUrl: "./src/assets/SupportedBy/meltcd.png",
    darkLogoUrl: "./src/assets/SupportedBy/meltcd.png",
    name: "meltcd",
  },
  {
    lightLogoUrl: "assets/SupportedBy/MicrosoftForStartups.png",
    darkLogoUrl: "assets/SupportedBy/MicrosoftForStartups.png",
    name: "MicrosoftForStartups",
  },
  {
    lightLogoUrl: "../assets/SupportedBy/MSME.png",
    darkLogoUrl: "../assets/SupportedBy/MSME.png",
    name: "MSME",
  },
  {
    lightLogoUrl: "/assets/SupportedBy/Notion.png",
    darkLogoUrl: "/assets/SupportedBy/Notion.png",
    name: "Notion",
  },
  {
    lightLogoUrl: ".../assets/SupportedBy/Peerlist.png",
    darkLogoUrl: ".../assets/SupportedBy/Peerlist.png",
    name: "Peerlist",
  },
  {
    lightLogoUrl: "../assets/SupportedBy/ProductHunt.png",
    darkLogoUrl: "../assets/SupportedBy/ProductHunt.png",
    name: "ProductHunt",
  },
  {
    lightLogoUrl: "../assets/SupportedBy/Vercel.png",
    darkLogoUrl: "../assets/SupportedBy/Vercel.png",
    name: "Vercel",
  },
];

export const Sponsors = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
      Supported By
      </h2>

      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        className="flex items-center"
        loop={0}
      >
        {sponsors.map(({ lightLogoUrl, darkLogoUrl, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-16 px-8 text-muted-foreground/60"
          >
            <img
              src={theme === "dark" ? darkLogoUrl : lightLogoUrl} // Use the appropriate logo based on theme
              alt={`${name} logo`}
              className="h-20 w-21"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};