import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const News = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">School News</h1>
        <p className="text-lg text-gray-700">
          Stay updated with the latest news and events from Saint Manuel Complex School.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default News;