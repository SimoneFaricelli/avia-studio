import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSystemTheme } from "@/hooks/useSystemTheme";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TutorAI from "./pages/TutorAI";
import IntroOverlay from "@/components/IntroOverlay";

const queryClient = new QueryClient();

const App = () => {
  useSystemTheme();

  const [entered, setEntered] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* 🔥 INTRO */}
        {!entered && (
          <IntroOverlay onEnter={() => setEntered(true)} />
        )}

        {/* 🔥 APP */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/tutor-ai" element={<TutorAI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
