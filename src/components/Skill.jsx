import SkillCard from "./SkillCard"

const skillItem = [
  {
    imgSrc: '/images/html.png',
    label: 'HTML',
    desc: 'User Interface'
  },

    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },

    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },

    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },

    {
      imgSrc: '/images/typescript.svg',
      label: 'Typescript',
      desc: 'User Interface'
    },

    {
        imgSrc: '/images/photshop.png',
      label: 'Photoshop',
      desc: 'Design tool'
    },

    {
      imgSrc: '/images/ai.svg',
      label: 'Illustrator ',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/java.png',
      label: 'Java ',
      desc: 'Language'
    },

    {
      imgSrc: '/images/linux.svg',
      label: 'Linux ',
      desc: 'platform '
    },

    {
      imgSrc: '/images/kotlin.svg',
      label: 'Kotlin ',
      desc: 'Language '
    },

    {
      imgSrc: '/images/sql.svg',
      label: 'MySQL ',
      desc: 'Database'
    },

    {
      imgSrc: '/images/csharp.png',
      label: 'C# ',
      desc: 'Language'
    },

    {
      imgSrc: '/images/cplus.png',
      label: 'C++ ',
      desc: 'Language'
    },

    {
      imgSrc: '/images/php.svg',
      label: 'Php',
      desc: 'Language'
    },

    {
      imgSrc: '/images/apache.svg',
      label: 'Apache',
      desc: 'Web Server'
    },

    {
      imgSrc: '/images/python.svg',
      label: 'Python',
      desc: 'Language'
    },




  ];
const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
            Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                            key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"
                            />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill