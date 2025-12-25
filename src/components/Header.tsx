import logoIconDark from "@/assets/logo-icon.png";
import logoIconLight from "@/assets/logo-icon-light.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
          <img src={logoIconLight} alt="AVIA Studio" className="h-8 w-8 dark:hidden" />
          <img src={logoIconDark} alt="AVIA Studio" className="h-8 w-8 hidden dark:block" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            AVIA STUDIO
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
