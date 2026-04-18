import { Link, useNavigate, useLocation } from "react-router-dom";
import logoIconDark from "@/assets/logo-icon.png";
import logoIconLight from "@/assets/logo-icon-light.png";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border animate-fade-in">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer">
          <img src={logoIconLight} alt="AVIA Studio" className="h-8 w-8 dark:hidden" />
          <img src={logoIconDark} alt="AVIA Studio" className="h-8 w-8 hidden dark:block" />
          <span className="text-lg font-semibold tracking-tight text-foreground">
            AVIA STUDIO
          </span>
        </Link>
        <nav className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </button>
          <Link
            to="/products/tutor-ai"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:inline text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
