

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
I am currently a third-year BSc (Hons) in Information Technology undergraduate at SLIIT. I have 
completed a 6-month internship as a Software Engineer Intern at Foresight Engineering (Pvt) Ltd with 
hands-on experience in software development and real-world project environment. I am experienced 
full-stack developer, with extensive knowledge in object-oriented programming and mobile application 
development. I am very interested in building innovative IT solutions and love to extend my technical 
know how and knowledge
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