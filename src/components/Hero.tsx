import banner from "@/assets/banner.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollAnimation();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: buttonRef, isVisible: buttonVisible } = useScrollAnimation();

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
        <div
          ref={bannerRef}
          className={`transition-all duration-700 ${
            bannerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <img
            src={banner}
            alt="AVIA Studio"
            className="w-full max-w-2xl mx-auto mb-12"
          />
        </div>
        <h1
          ref={titleRef}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 transition-all duration-700 delay-150 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          AI Apps for
          <span className="block mt-2">Everyone</span>
        </h1>
        <p
          ref={textRef}
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${
            textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We build smart, intuitive apps powered by artificial intelligence.
          Designed for real people, crafted with Italian creativity.
        </p>
        <div
          ref={buttonRef}
          className={`transition-all duration-700 delay-500 ${
            buttonVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
