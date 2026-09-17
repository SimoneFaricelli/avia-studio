import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: ceoRef, isVisible: ceoVisible } = useScrollAnimation();
  const { ref: cooRef, isVisible: cooVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div
            ref={storyRef}
            className={`space-y-6 transition-all duration-700 delay-150 ${
              storyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-xl font-semibold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              AVIA Studio is a technology company focused on building AI-powered software for businesses.
              We design products that help organizations improve productivity, streamline processes and integrate artificial intelligence into everyday work.
              Our approach combines AI, product development and practical business needs to build software designed for real-world use.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine artificial intelligence, product thinking and
              technical excellence to create tools that improve productivity,
              automate processes and help teams achieve measurable results.
            </p>
          </div>

          <div className="space-y-8">
            <div
              ref={ceoRef}
              className={`p-6 bg-background rounded-xl border border-border hover:scale-105 transition-all duration-700 delay-300 ${
                ceoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  CEO
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Founder & CEO
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Strategy & Product
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Leads AVIA Studio’s strategy, product direction and business development,
                with a focus on building AI products that solve practical business problems.
              </p>
            </div>

            <div
              ref={cooRef}
              className={`p-6 bg-background rounded-xl border border-border hover:scale-105 transition-all duration-700 delay-500 ${
                cooVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  COO
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    COO & Lead Developer
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Operations & Engineering
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
               Leads operations and software development at AVIA Studio,
               overseeing the technical execution and delivery of our products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
