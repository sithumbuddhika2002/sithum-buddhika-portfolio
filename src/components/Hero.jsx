import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        <div className="reveal-up">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/images/avatar-1.jpg"
              width={48}
              height={48}
              alt="Sithum Buddhika"
              className="rounded-full border-2 border-sky-400"
            />
            <div className="flex items-center gap-2 text-zinc-300 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for work
            </div>
          </div>
          <h1 className="headline-1 max-w-[15ch] mb-6">
            Crafting Modern, Scalable Web Solutions
          </h1>
          <p className="text-zinc-400 mb-8 max-w-[40ch]">
            Passionate about building intuitive and high-performance applications
            for the future.
          </p>
          <div className="flex items-center gap-4">
            <ButtonPrimary
              label="Download CV"
              href="/sithum-buddhika.pdf"
              icon="download"
            />
            <ButtonOutline label="Learn More" href="#about" icon="arrow_downward" />
          </div>
        </div>
        <div className="hidden lg:block reveal-up">
          <figure className="relative w-full max-w-[500px] ml-auto">
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Sithum Buddhika"
              className="relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sky-400/30 to-transparent rounded-2xl transform -rotate-6 scale-105"></div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;