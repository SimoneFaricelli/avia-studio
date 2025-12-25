import banner from "@/assets/banner.png";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
    >
      <div className="text-center max-w-4xl mx-auto">
        <img
          src={banner}
          alt="AVIA Studio"
          className="w-full max-w-2xl mx-auto mb-12 animate-fade-in"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
          AI Apps for
          <span className="block mt-2">Everyone</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in [animation-delay:400ms]">
          We build smart, intuitive apps powered by artificial intelligence.
          Designed for real people, crafted with Italian creativity.
        </p>
        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105 animate-fade-in [animation-delay:600ms]"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Hero;
