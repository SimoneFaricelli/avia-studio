import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="AVIA Studio" className="h-6 w-6" />
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
