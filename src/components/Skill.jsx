import SkillCard from "./SkillCard";

const skillItems = [
  { imgSrc: "/images/html.png", label: "HTML", desc: "Structure" },
  { imgSrc: "/images/css3.svg", label: "CSS", desc: "Styling" },
  { imgSrc: "/images/javascript.svg", label: "JavaScript", desc: "Interactivity" },
  { imgSrc: "/images/react.svg", label: "React", desc: "Framework" },
  { imgSrc: "/images/nodejs.svg", label: "Node.js", desc: "Backend" },
  { imgSrc: "/images/mongodb.svg", label: "MongoDB", desc: "Database" },
  { imgSrc: "/images/tailwindcss.svg", label: "Tailwind CSS", desc: "Styling" },
  { imgSrc: "/images/typescript.svg", label: "TypeScript", desc: "Typed JS" },
  { imgSrc: "/images/kotlin.svg", label: "Kotlin", desc: "Mobile" },
  { imgSrc: "/images/figma.svg", label: "Figma", desc: "Design" },
];

const Skill = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 mb-6 reveal-up">My Tech Stack</h2>
        <p className="text-zinc-400 mb-8 max-w-[50ch] reveal-up">
          A collection of tools and technologies I use to build robust, user-friendly
          applications.
        </p>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;