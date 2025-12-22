const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          About Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              AVIA STUDIO was born from a bold vision: to make AI accessible to
              everyone. Founded by a 16-year-old entrepreneur with Italian
              heritage, we're building the next generation of consumer apps
              powered by artificial intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We create apps that simplify everyday life through smart
              technology. No complexity, no jargon—just intuitive tools that
              work for you.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  CEO
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Founder & CEO
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Visionary Leader
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                At just 16, our CEO brings fresh perspectives and fearless
                innovation to the tech industry. Italian by origin, global by
                ambition.
              </p>
            </div>

            <div className="p-6 bg-background rounded-xl border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  COO
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    COO & Lead Developer
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Technical Excellence
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Our COO combines operational expertise with hands-on development
                skills, ensuring every project is delivered with precision and
                quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
