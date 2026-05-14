import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "AgroConnect – Product Management Platform",
    description:
      "Developed a full-stack web application enabling farmers to register and manage agricultural products with secure authentication, CRUD operations, and product search functionality.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    link: "#",
  },
  {
    title: "HireHub – Job Portal Platform",
    description:
      "Built a full-stack job portal allowing users to register, login, explore job listings, and apply for jobs through a responsive and user-friendly interface.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    link: "#",
  },
  {
    title: "Hawk-Eye Ball Tracking System",
    description:
      "Developed a cricket ball tracking and detection system using computer vision techniques to analyze ball movement and improve tracking accuracy in sports analytics.",
    tags: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "NumPy",
      "Machine Learning",
    ],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="pt-23 pb-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of projects focused on solving real-world problems
            through modern web technologies and development practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-3xl p-8 animate-fade-in hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Content */}
              <div className="space-y-5">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground 
                    group-hover:text-primary
                    group-hover:translate-x-1 
                    group-hover:-translate-y-1 transition-all"
                  />
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIdx) => (
                    <AnimatedBorderButton key={tagIdx}>
                      {tag}
                    </AnimatedBorderButton>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};