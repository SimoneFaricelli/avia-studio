import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: subtitleRef, isVisible: subtitleVisible } = useScrollAnimation();
  const { ref: emailRef, isVisible: emailVisible } = useScrollAnimation<HTMLAnchorElement>();
  const { ref: locationRef, isVisible: locationVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold text-foreground text-center mb-6 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get in Touch
        </h2>
        <p
          ref={subtitleRef}
          className={`text-muted-foreground text-center max-w-xl mx-auto mb-16 transition-all duration-700 delay-150 ${
            subtitleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Have an idea for an app? Want to collaborate? We'd love to hear from
          you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            ref={emailRef}
            href="mailto:contact@aviastudio.com"
            className={`group p-8 bg-secondary/50 rounded-xl border border-border hover:bg-secondary transition-all hover:scale-105 duration-700 delay-300 ${
              emailVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <Mail className="h-6 w-6 text-foreground" />
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm">
              contact@aviastudio.com
            </p>
          </a>

          <div
            ref={locationRef}
            className={`p-8 bg-secondary/50 rounded-xl border border-border hover:scale-105 transition-all duration-700 delay-500 ${
              locationVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <MapPin className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">
              Italian Roots, USA Focus
            </p>
            <p className="text-muted-foreground text-sm">Remote-First Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
