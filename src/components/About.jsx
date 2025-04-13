const aboutItems = [
    { label: "Projects Done", number: 6 },
    { label: "Years of Experience", number: 2 },
  ];
  
  const About = () => {
    return (
      <section id="about" className="section">
        <div className="container">
          <div className="bg-zinc-800/30 p-8 rounded-3xl backdrop-blur-md border border-zinc-50/10 reveal-up">
            <h2 className="headline-2 mb-6">About Me</h2>
            <p className="text-zinc-300 mb-8 md:text-lg max-w-[60ch]">
              I'm a second-year IT undergraduate at SLIIT University, Sri Lanka, with
              a passion for software development, specializing in mobile and web
              applications. I've built projects like a MERN stack food ordering system
              and a Kotlin-based financial app, honing my skills in programming,
              teamwork, and problem-solving. Currently, I'm diving into TypeScript and
              C#, always eager to learn and take on new challenges.
            </p>
            <div className="flex flex-wrap gap-6">
              {aboutItems.map(({ label, number }, key) => (
                <div key={key} className="reveal-up">
                  <div className="flex items-center mb-2">
                    <span className="text-4xl font-bold text-zinc-100">
                      {number}
                      <span className="text-sky-400">+</span>
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;