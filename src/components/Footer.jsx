import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/sithumbuddhika2002" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sithum-buddhika-764192311",
  },
  { label: "Twitter X", href: "https://x.com/sithum_buddhika" },
  { label: "Instagram", href: "https://www.instagram.com/_sithum_buddhika_" },
];

const Footer = () => {
  return (
    <footer className="section bg-zinc-900/80 backdrop-blur-md">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div className="mb-10 reveal-up">
            <h2 className="headline-2 mb-6">Ready to Start?</h2>
            <ButtonPrimary
              href="mailto:sithumpersonal2002@gmail.com"
              label="Get in Touch"
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="reveal-up">
              <p className="text-zinc-200 font-medium mb-4">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 hover:text-zinc-100 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-up">
              <p className="text-zinc-200 font-medium mb-4">Connect</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 hover:text-zinc-100 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-12 pb-8 text-sm text-zinc-400 reveal-up">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/logo.svg" width={32} height={32} alt="Logo" />
            <span>Sithum Buddhika</span>
          </a>
          <p>&copy; 2025 Sithum Buddhika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;