import logoIconDark from "@/assets/logo-icon.png";
import logoIconLight from "@/assets/logo-icon-light.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={footerRef}
          className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${
            footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 hover:scale-105 transition-transform">
            <img src={logoIconLight} alt="AVIA Studio" className="h-8 w-8 dark:hidden" />
            <img src={logoIconDark} alt="AVIA Studio" className="h-8 w-8 hidden dark:block" />
            <span className="text-sm font-medium text-foreground">
              AVIA STUDIO
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AVIA STUDIO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
