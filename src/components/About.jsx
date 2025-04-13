

const aboutItems = [
    {
      label: 'Project done',
      number: 6
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];
const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                I am a second year undergraduate student at SLIIT University, Sri Lanka, pursuing a degree in Information Technology. I have a strong passion for software development, especially mobile and web application development. Over the past year, I have worked on various academic projects, including Development of a MERN stack-based food ordering system and a mobile financial management application using Kotlin.

                These projects have helped me strengthen my programming, teamwork, and problem-solving skills. I am also passionate about learning new technologies, and I have recently been exploring statement libraries such as TypeScript and C#

                In addition to academics, I am actively seeking opportunities such as this internship to gain real-world experience, contribute to innovative projects, and further develop my technical and professional skills.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-bold md:text-4xl">
                                        {number}
                                        <span className="text-sky-400 font-semibold md:text-3xl">
                                            +
                                        </span>
                                    </span>
                                </div>

                                <p className="text-sm text-zinc-400">
                                    {label}
                                </p>
                            </div>
                        ))
                    }

                    <img src="/images/logo.svg" alt="Logo" width={30} height={30} 
                    className="ml-auto md:w-[40px] md:h-[40]" />

                </div>
            </div>
        </div>
    </section>
  )
}

export default About