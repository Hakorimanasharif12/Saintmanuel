import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const History = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Our History</h1>
        <p className="text-lg text-gray-700">
          Discover the rich history and heritage of Saint Manuel Complex School.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default History;