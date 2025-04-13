import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.jpg",
    title: "Food Ordering System",
    tags: ["MERN", "API", "Full-Stack"],
    projectLink: "https://github.com/sithumbuddhika2002/Online-Food-Ordering_System.git",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Financial App",
    tags: ["Kotlin", "Firebase"],
    projectLink: "https://github.com/sithumbuddhika2002/Finance-App.git",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Vaccination Portal",
    tags: ["Web", "API"],
    projectLink: "https://github.com/sithumbuddhika2002/IWT-project.git",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Medi Mingle App",
    tags: ["Android", "Kotlin"],
    projectLink: "https://github.com/sithumbuddhika2002/Medi-Mingle-App.git",
  },
  {
    imgSrc: "/images/project-5.jpg",
    title: "Travel App",
    tags: ["Figma", "UI/UX"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "Property Management",
    tags: ["Web", "Full-Stack"],
    projectLink: "https://github.com/sithumbuddhika2002/Online-property-management.git",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-6 reveal-up">Portfolio Highlights</h2>
        <p className="text-zinc-400 mb-8 max-w-[50ch] reveal-up">
          A showcase of my projects, blending creativity and technical expertise.
        </p>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;