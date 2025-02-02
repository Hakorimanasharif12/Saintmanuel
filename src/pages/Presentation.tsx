import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Presentation = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">School Presentation</h1>
        <p className="text-lg text-gray-700">
          Learn more about Saint Manuel Complex School's vision, mission, and values.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Presentation;