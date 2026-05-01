import { useEffect, useRef, useState } from "react";

interface IntroOverlayProps {
  onEnter: () => void;
}

const IntroOverlay = ({ onEnter }: IntroOverlayProps) => {
  const [entering, setEntering] = useState(false);
  const [faded, setFaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const clickedRef = useRef(false);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 90; i++) {
      const p = document.createElement("div");
      p.className = "intro-particle";
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      p.style.animationDelay = Math.random() * 5 + "s";
      p.style.opacity = String(Math.random());
      container.appendChild(p);
    }
  }, []);

  const handleEnter = () => {
    if (clickedRef.current) return;
    clickedRef.current = true;
    setEntering(true);
    setTimeout(() => setFaded(true), 650);
    setTimeout(() => {
      setHidden(true);
      onEnter();
    }, 1350);
  };

  if (hidden) return null;

  return (
    <div
      className="intro-root"
      onClick={handleEnter}
      onTouchStart={handleEnter}
      role="button"
      tabIndex={0}
      aria-label="Enter site"
    >
      <div className={`intro-scene${entering ? " entering" : ""}`} id="scene">
        <div className="intro-grid" />
        <div className="intro-particles" ref={particlesRef} />

        <div className="intro-logo-wrap">
          <div className="intro-logo-depth" />
          <div className="intro-logo-main" />
          <div className="intro-inner-triangle" />
        </div>

        <div className="intro-brand">AVIA STUDIO</div>
        <div className="intro-enter">CLICK ANYWHERE TO ENTER</div>
      </div>

      <div className={`intro-fade${faded ? " show" : ""}`} />

      <style>{`
        .intro-root{
          position:fixed;
          inset:0;
          z-index:9999;
          background:#000;
          color:#fff;
          font-family:-apple-system,BlinkMacSystemFont,"Inter",sans-serif;
          cursor:pointer;
          overflow:hidden;
        }
        .intro-scene{
          position:fixed;
          inset:0;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          perspective:1200px;
          background:
            radial-gradient(circle at center, rgba(255,255,255,.12), transparent 28%),
            radial-gradient(circle at bottom, rgba(255,255,255,.08), transparent 38%),
            #000;
        }
        .intro-grid{
          position:absolute;
          inset:-35%;
          background:
            linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);
          background-size:60px 60px;
          transform:rotateX(65deg) translateY(190px);
          opacity:.28;
          animation:introGridMove 10s linear infinite;
        }
        @keyframes introGridMove{
          from{background-position:0 0;}
          to{background-position:0 120px;}
        }
        .intro-particle{
          position:absolute;
          width:2px;
          height:2px;
          background:#fff;
          border-radius:50%;
          opacity:.6;
          animation:introFloat 6s infinite ease-in-out;
        }
        @keyframes introFloat{
          0%,100%{transform:translateY(0);opacity:.25;}
          50%{transform:translateY(-25px);opacity:1;}
        }
        .intro-logo-wrap{
          position:relative;
          width:330px;
          height:240px;
          transform-style:preserve-3d;
          animation:introSpin3d 5s ease-in-out infinite;
          filter:
            drop-shadow(0 0 22px rgba(255,255,255,.7))
            drop-shadow(0 0 60px rgba(255,255,255,.25));
          z-index:3;
        }
        @keyframes introSpin3d{
          0%{transform:rotateY(-35deg) rotateX(10deg) translateY(0);}
          50%{transform:rotateY(35deg) rotateX(-8deg) translateY(-12px);}
          100%{transform:rotateY(-35deg) rotateX(10deg) translateY(0);}
        }
        .intro-logo-depth{
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#4b4b4b,#111,#9a9a9a);
          clip-path:polygon(50% 0%,100% 82%,82% 82%,50% 35%,18% 82%,0% 82%);
          transform:translateZ(-35px) translateY(18px);
          opacity:.85;
        }
        .intro-logo-main{
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#ffffff 0%,#bdbdbd 42%,#ffffff 100%);
          clip-path:polygon(50% 0%,100% 82%,82% 82%,50% 35%,18% 82%,0% 82%);
          transform:translateZ(45px);
        }
        .intro-logo-main::after{
          content:"";
          position:absolute;
          inset:15px;
          background:#000;
          clip-path:polygon(50% 18%,84% 82%,67% 82%,50% 55%,33% 82%,16% 82%);
        }
        .intro-inner-triangle{
          position:absolute;
          left:50%;
          bottom:30px;
          width:112px;
          height:78px;
          transform:translateX(-50%) translateZ(70px);
          background:linear-gradient(135deg,#fff,#aaa,#fff);
          clip-path:polygon(50% 0%,100% 100%,0% 100%);
          filter:drop-shadow(0 0 22px rgba(255,255,255,.7));
        }
        .intro-brand{
          margin-top:34px;
          font-size:38px;
          font-weight:900;
          letter-spacing:14px;
          text-shadow:0 0 26px rgba(255,255,255,.55);
          z-index:3;
        }
        .intro-enter{
          position:absolute;
          bottom:8%;
          font-size:12px;
          letter-spacing:6px;
          color:rgba(255,255,255,.72);
          z-index:3;
          animation:introPulse 2s infinite;
        }
        @keyframes introPulse{
          0%,100%{opacity:.35;}
          50%{opacity:1;}
        }
        .intro-scene.entering .intro-logo-wrap,
        .intro-scene.entering .intro-brand{
          animation:introPortal 1.2s ease forwards;
        }
        @keyframes introPortal{
          0%{transform:scale(1) rotateZ(0deg);filter:blur(0);opacity:1;}
          55%{transform:scale(5) rotateZ(12deg);filter:blur(3px);opacity:1;}
          100%{transform:scale(24) rotateZ(28deg);filter:blur(24px);opacity:0;}
        }
        .intro-fade{
          position:fixed;
          inset:0;
          background:#000;
          opacity:0;
          pointer-events:none;
          z-index:20;
          transition:opacity .8s ease;
        }
        .intro-fade.show{opacity:1;}
        @media(max-width:600px){
          .intro-logo-wrap{width:235px;height:175px;}
          .intro-brand{font-size:26px;letter-spacing:8px;}
          .intro-enter{font-size:10px;letter-spacing:4px;}
        }
      `}</style>
    </div>
  );
};

export default IntroOverlay;