import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

export const About = () => {
  return (
    <section id="about" className="pt-23 pb-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8 lg:px-10">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-md font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-12 mb-6">
                I Build modern web applications
                <span className="font-serif italic font-normal text-primary">
                  {" "}with creativity.
                </span>
              </h3>

              <p>
                I am an Information Technology student at MBIT, CVM University
                with a strong interest in developing modern and user-friendly
                web applications.
              </p>

              <p>
                I work with technologies like React, Node.js, Express.js, and
                MongoDB to build responsive and efficient digital solutions
                that provide a smooth user experience.
              </p>

              <p>
                I enjoy working on both frontend and backend development,
                creating responsive user interfaces and building secure,
                scalable web applications.
              </p>

              <p>
                I am passionate about continuous learning, exploring modern
                technologies, and improving my skills through hands-on
                projects and real-world development experience.
              </p>
            </div>

            {/* Quote Box */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to create digital experiences that are modern,
                scalable, and impactful."
              </p>
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          {/* Right Column - Tech Stack */}
<div className="glass rounded-3xl p-8 animate-fade-in">
  <h3 className="text-2xl font-bold mb-8 text-white">
    Tech Stack
  </h3>

  <div className="flex flex-wrap gap-4">
    {[
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "MySQL",
      "Git",
      "GitHub",
      "Vercel",
    ].map((tech, idx) => (
      <button
        key={idx}
        className="group relative px-6 py-3 rounded-full 
        bg-gradient-to-r from-primary/80 to-cyan-500/80
        text-white font-medium overflow-hidden
        transition-all duration-500 hover:scale-105 
        hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
      >
        {/* Animated Shine */}
        <span
          className="absolute inset-0 translate-x-[-120%] 
          group-hover:translate-x-[120%] transition-transform 
          duration-1000 bg-gradient-to-r 
          from-transparent via-white/30 to-transparent"
        />

        {/* Text */}
        <span className="relative z-10">
          {tech}
        </span>
      </button>
    ))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
};