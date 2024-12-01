import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Full stack Food Ordering System',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://github.com/sithumbuddhika2002/Online-Food-Ordering_System.git'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Financial App',
      tags: ['API', 'FIREBASE'],
      projectLink: 'https://github.com/sithumbuddhika2002/Finance-App.git'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Vaccination Portal',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/sithumbuddhika2002/IWT-project.git'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Medi Mingle App',
      tags: ['Android', 'Shared Preferences'],
      projectLink: 'https://github.com/sithumbuddhika2002/Medi-Mingle-App.git'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Travel App',
      tags: ['Figma', 'Development'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'Property Management',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/sithumbuddhika2002/Online-property-management.git'
    },
  ];
const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">My Portfolio highlights</h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                
                {works.map(({ imgSrc, title, tags, projectLink}, key) => (
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
  )
}

export default Work
