import Marquee from "react-fast-marquee";

const sponsors = [
  "/src/assets/SupportedBy/DigitalOcean.png",
  "/src/assets/SupportedBy/GitBookLight.svg",
  "/src/assets/SupportedBy/GoogleForStartups.png",
  "/src/assets/SupportedBy/meltcd.png",
  "/src/assets/SupportedBy/MicrosoftForStartups.png",
  "/src/assets/SupportedBy/MSME.png",
  "/src/assets/SupportedBy/Notion.png",
  "/src/assets/SupportedBy/Peerlist.png",
  "/src/assets/SupportedBy/ProductHunt.png",
  "/src/assets/SupportedBy/Vercel.png",
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Supported By
      </h2>

      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0}>
        {sponsors.map((logoUrl, index) => (
          <div key={index} className="flex items-center gap-16 px-8">
            <img src={logoUrl} alt={`Sponsor ${index + 1}`} className="h-20 w-21" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
