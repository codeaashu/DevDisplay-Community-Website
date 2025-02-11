import Marquee from "react-fast-marquee";

const sponsors = [
  "/assets/SupportedBy/DigitalOcean.png",
  "/assets/SupportedBy/GitBook.png",
  "/assets/SupportedBy/GoogleForStartups.png",
  "/assets/SupportedBy/meltcd.png",
  "/assets/SupportedBy/MicrosoftForStartups.png",
  "/assets/SupportedBy/MSME.png",
  "/assets/SupportedBy/Notion.png",
  "/assets/SupportedBy/Peerlist.png",
  "/assets/SupportedBy/ProductHunt.png",
  "/assets/SupportedBy/Vercel.png",
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-12 sm:py-16">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Supported By
      </h2>

      {/* Right to Left Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0}>
        {sponsors.map((logoUrl, index) => (
          <div key={index} className="flex items-center gap-16 px-8">
            <img src={logoUrl} alt={`Sponsor ${index + 1}`} className="h-20 w-21" />
          </div>
        ))}
      </Marquee>

      {/* Left to Right Scrolling */}
      <Marquee gradient={false} speed={60} pauseOnHover={true} loop={0} direction="right">
        {sponsors.map((logoUrl, index) => (
          <div key={index} className="flex items-center gap-16 px-8">
            <img src={logoUrl} alt={`Sponsor ${index + 1}`} className="h-20 w-21" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};