import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/prachi-2611",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/prachi-patel-46317a275/",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:prachiras2611@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 bg-primary/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Left - Logo */}
          <a href="#home" className="text-2xl font-bold tracking-tight">
            Prachi<span className="text-primary">.</span>
          </a>

          {/* Middle - Text */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Prachi Patel — Building modern web applications with creativity.
          </p>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-full glass text-muted-foreground 
                hover:bg-primary/10 hover:text-primary 
                transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};