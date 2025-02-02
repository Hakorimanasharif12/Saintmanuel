import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Sports from "./pages/Sports";
import Spiritual from "./pages/Spiritual";
import Facilities from "./pages/Facilities";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SchoolLife from "./pages/SchoolLife";
import News from "./pages/News";
import Presentation from "./pages/Presentation";
import History from "./pages/History";
import Administration from "./pages/Administration";
import Governance from "./pages/Governance";
import Jobs from "./pages/Jobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/spiritual" element={<Spiritual />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/school-life" element={<SchoolLife />} />
          <Route path="/news" element={<News />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/history" element={<History />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;