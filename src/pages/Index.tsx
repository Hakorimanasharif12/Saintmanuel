import { HeroBanner } from "@/components/HeroBanner";
import { QuickNav } from "@/components/QuickNav";
import { WelcomeSection } from "@/components/WelcomeSection";
import { NewsEventsSection } from "@/components/NewsEventsSection";
import { FeaturedPrograms } from "@/components/FeaturedPrograms";
import { TeachersCarousel } from "@/components/TeachersCarousel";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroBanner />
      <QuickNav />
      <WelcomeSection />
      <FeaturedPrograms />
      <TeachersCarousel />
      <NewsEventsSection />
      <Footer />
    </div>
  );
};

export default Index;