import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SchoolLife = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">School Life</h1>
        <p className="text-lg text-gray-700">
          Experience the vibrant and enriching school life at Saint Manuel Complex School.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default SchoolLife;