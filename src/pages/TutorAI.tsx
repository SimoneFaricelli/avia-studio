import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TutorAISection from "@/components/TutorAISection";

const TutorAI = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <TutorAISection />
      </main>
      <Footer />
    </div>
  );
};

export default TutorAI;
