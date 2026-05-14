import { GraduationCap } from "lucide-react";

const education = [
  {
    period: "2023 — 2027",
    degree: "B.Tech — Information Technology",
    institute:
      "Madhuben & Bhanubhai Patel Institute of Technology (MBIT)",
    score: "CGPA: 9.40",
    current: true,
  },
  {
    period: "March 2023",
    degree: "Class XII",
    institute:
      "Saraswati Education & Medical Trust, Borsad",
    score: "Percentage: 79.84%",
    current: false,
  },
];

export const Education = () => {
  return (
    <section id="education" className="pt-23 pb-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl 
        -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
  <span
    className="text-secondary-foreground text-sm
    font-medium tracking-wider uppercase animate-fade-in"
  >
    My Education
  </span>

  <h2
    className="text-4xl md:text-5xl font-bold
    mt-4 mb-6 animate-fade-in animation-delay-100
    text-secondary-foreground"
  >
    Academic
    <span className="font-serif italic font-normal text-white">
      {" "}journey.
    </span>
  </h2>

  <p
    className="text-muted-foreground
    animate-fade-in animation-delay-200"
  >
    My educational background and academic achievements
    that shaped my technical foundation and passion for
    software development.
  </p>
</div>

{/* Education Cards */}
<div className="max-w-3xl mx-auto space-y-6">
  {education.map((edu, idx) => (
    <div
      key={idx}
      className="relative glass rounded-[24px]
      border border-primary/20
      hover:border-primary/40
      transition-all duration-500
      hover:-translate-y-1 overflow-hidden
      animate-fade-in"
      style={{ animationDelay: `${(idx + 1) * 150}ms` }}
    >
      {/* Left Glow Border */}
      <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-full" />

      <div className="flex items-center gap-5 p-6">
        
        {/* Icon Box */}
        <div
          className="w-16 h-16 rounded-2xl
          bg-primary/10 border border-primary/20
          flex items-center justify-center shrink-0"
        >
          <GraduationCap className="w-7 h-7 text-primary" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
            {edu.institute}
          </h3>

          <p className="text-primary mt-1">
            {edu.degree}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span
              className="px-3 py-1.5 rounded-lg
              bg-primary/10 border border-primary/20
              text-primary text-sm font-medium"
            >
              {edu.score}
            </span>

            <span className="text-sm text-muted-foreground">
              {edu.period}
            </span>
          </div>
        </div>
      </div>

      {/* Current Indicator */}
      {edu.current && (
        <div className="absolute top-4 right-4">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
        </div>
      )}
    </div>
  ))}
</div>
      </div>
    </section>
  );
};