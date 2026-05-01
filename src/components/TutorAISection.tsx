import { ArrowRight, Sparkles, ShieldCheck, Brain, BookOpen, UserCog } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import robotImg from "@/assets/tutor-ai-robot.png";

const TUTOR_AI_URL = "https://tutoraimvp.netlify.app/onboarding.html";

const ACCENT = "#00DEC8";
const BG = "#071422";
const SURFACE = "#0F2035";

const TutorAISection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLHeadingElement>();
  const { ref: descRef, isVisible: descVisible } = useScrollAnimation<HTMLParagraphElement>();
  const { ref: inputRef, isVisible: inputVisible } = useScrollAnimation<HTMLAnchorElement>();
  const { ref: robotRef, isVisible: robotVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    { icon: Brain, label: "Smart explanations" },
    { icon: ShieldCheck, label: "100% reliability" },
    { icon: BookOpen, label: "In-depth answers" },
    { icon: UserCog, label: "Personalized learning" },
  ];

  return (
    <section
      id="tutor-ai"
      className="relative min-h-screen py-24 md:py-32 px-6 overflow-hidden"
      style={{ backgroundColor: BG }}
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${ACCENT}40 0%, transparent 60%)` }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${ACCENT}30 0%, transparent 60%)` }}
      />
      <div
        className="pointer-events-none absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: `radial-gradient(circle, #1e40af80 0%, transparent 60%)` }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Floating Robot - strategically placed top-right on desktop, top-center on mobile */}
        <div
          ref={robotRef}
          className={`relative mx-auto md:absolute md:right-0 md:top-0 md:mx-0 w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 mb-8 md:mb-0 transition-all duration-1000 ${
            robotVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
          }`}
          style={{ animation: robotVisible ? "float 6s ease-in-out infinite" : undefined }}
        >
          {/* Glow behind robot */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-60"
            style={{ background: `radial-gradient(circle, ${ACCENT}60 0%, transparent 70%)` }}
          />
          {/* Light spot from above */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full blur-2xl opacity-50"
            style={{ background: `radial-gradient(circle, #ffffff80 0%, transparent 70%)` }}
          />
          <img
            src={robotImg}
            alt="Tutor AI Robot Mascot"
            className="relative w-full h-full object-contain"
            style={{
              filter: `drop-shadow(0 30px 40px rgba(0,0,0,0.7)) drop-shadow(0 0 30px ${ACCENT}50) drop-shadow(0 -8px 12px rgba(255,255,255,0.1))`,
            }}
          />
          {/* Floor shadow */}
          <div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-xl opacity-60"
            style={{ background: "rgba(0,0,0,0.8)" }}
          />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl md:pr-80 lg:pr-96 text-center md:text-left">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              backgroundColor: `${ACCENT}15`,
              border: `1px solid ${ACCENT}30`,
              boxShadow: `0 8px 24px -8px ${ACCENT}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: ACCENT }} />
            <span className="text-xs font-medium tracking-wider uppercase" style={{ color: ACCENT }}>
              AI Powered Learning
            </span>
          </div>

          <h1
            ref={titleRef}
            className={`text-6xl md:text-8xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: `linear-gradient(180deg, ${ACCENT} 0%, ${ACCENT}cc 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: `0 0 60px ${ACCENT}40`,
              filter: `drop-shadow(0 10px 30px ${ACCENT}30)`,
            }}
          >
            Tutor AI
          </h1>

          <p
            ref={descRef}
            className={`text-lg md:text-xl text-white/70 max-w-xl mx-auto md:mx-0 mb-12 leading-relaxed transition-all duration-700 delay-200 ${
              descVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Your intelligent tutor to study any subject.
            Questions, explanations and personalized reviews, in seconds.
          </p>

          {/* 3D Input Bar */}
          <a
            ref={inputRef}
            href={TUTOR_AI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-between gap-4 w-full max-w-xl mx-auto md:mx-0 px-6 py-5 md:px-7 md:py-6 rounded-2xl border transition-all duration-500 delay-300 hover:-translate-y-2 hover:scale-[1.02] ${
              inputVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              background: `linear-gradient(145deg, ${SURFACE} 0%, #0a1827 100%)`,
              borderColor: `${ACCENT}25`,
              boxShadow: `
                0 30px 60px -15px rgba(0,0,0,0.8),
                0 15px 30px -10px rgba(0,0,0,0.6),
                0 0 0 1px ${ACCENT}10,
                inset 0 1px 0 rgba(255,255,255,0.08),
                inset 0 -1px 0 rgba(0,0,0,0.5)
              `,
              animation: inputVisible ? "float 5s ease-in-out infinite" : undefined,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 50px 100px -20px rgba(0,0,0,0.9),
                0 25px 50px -15px rgba(0,0,0,0.7),
                0 0 0 1px ${ACCENT}40,
                0 0 60px ${ACCENT}30,
                inset 0 1px 0 rgba(255,255,255,0.12),
                inset 0 -1px 0 rgba(0,0,0,0.5)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 30px 60px -15px rgba(0,0,0,0.8),
                0 15px 30px -10px rgba(0,0,0,0.6),
                0 0 0 1px ${ACCENT}10,
                inset 0 1px 0 rgba(255,255,255,0.08),
                inset 0 -1px 0 rgba(0,0,0,0.5)
              `;
            }}
          >
            <span className="text-left text-white/50 text-base md:text-lg font-light truncate">
              Ask a question...
            </span>
            <span
              className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
              style={{
                background: `linear-gradient(145deg, ${ACCENT} 0%, #00b8a6 100%)`,
                boxShadow: `
                  0 10px 25px -5px ${ACCENT}80,
                  0 6px 12px -3px rgba(0,0,0,0.4),
                  inset 0 1px 0 rgba(255,255,255,0.4),
                  inset 0 -2px 0 rgba(0,0,0,0.2)
                `,
              }}
            >
              <ArrowRight className="w-5 h-5" style={{ color: BG }} strokeWidth={2.5} />
            </span>
          </a>

          {/* Feature pills */}
          <div
            ref={featuresRef}
            className={`flex flex-wrap justify-center md:justify-start gap-3 mt-10 transition-all duration-700 delay-500 ${
              featuresVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {features.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(145deg, ${SURFACE} 0%, #0a1827 100%)`,
                  border: `1px solid ${ACCENT}15`,
                  boxShadow: `
                    0 10px 25px -10px rgba(0,0,0,0.6),
                    inset 0 1px 0 rgba(255,255,255,0.05)
                  `,
                }}
              >
                <f.icon className="w-4 h-4" style={{ color: ACCENT }} />
                <span className="text-sm text-white/80">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
};

export default TutorAISection;
