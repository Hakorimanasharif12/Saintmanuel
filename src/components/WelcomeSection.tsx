import { Card } from "@/components/ui/card";

export const WelcomeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <Card className="p-8 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary">
            Welcome to Saint Manuel School
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Where academic excellence meets spiritual growth and community values. We are committed to nurturing bright minds and kind hearts from nursery through secondary. Explore our dynamic programs, inspiring achievements, and the vibrant community that makes us a beacon of hope in Kigali Masaka.
          </p>
        </Card>
      </div>
    </section>
  );
};