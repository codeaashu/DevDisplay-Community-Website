export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-xl flex items-center"
            >
              <img src="/src/assets/DevDisplayLOGO/ICON.png" alt="Logo" className="h-10 w-10 mr-2" />
              DevDisplay
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/devdisplay"
              className="opacity-60 hover:opacity-100"
            >
              Github
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://instagram.com/devdisplay"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/devdisplay/"
              className="opacity-60 hover:opacity-100"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/devdisplay_"
              className="opacity-60 hover:opacity-100"
            >
              Twitter X
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>

          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100"
            >
              About
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100"
            >
              What We Do
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#team"
              className="opacity-60 hover:opacity-100"
            >
              Meet The Team
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://youtube.com/@devdisplay"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://discord.gg/chyt2UgTv5"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://chat.whatsapp.com/Dcl21sgGDIpHURESSuH0p4"
              className="opacity-60 hover:opacity-100"
            >
              Whatsapp
            </a>
          </div>

        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 DevDisplay, Global Tech Hub
        </h3>
      </section>
    </footer>
  );
};
