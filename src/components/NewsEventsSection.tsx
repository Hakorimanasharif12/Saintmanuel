import { Card } from "@/components/ui/card";
import { Calendar, Trophy, BookOpen } from "lucide-react";

export const NewsEventsSection = () => {
  const news = [
    {
      icon: Calendar,
      title: "Open House Day",
      date: "March 15, 2024",
      description: "Join us for a tour of our campus and meet our faculty."
    },
    {
      icon: Trophy,
      title: "Regional Sports Victory",
      date: "February 28, 2024",
      description: "Our football team wins the regional championship!"
    },
    {
      icon: BookOpen,
      title: "Academic Excellence Awards",
      date: "February 20, 2024",
      description: "Celebrating our top performing students of the term."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="font-serif text-3xl font-bold mb-8 text-center text-primary">
          Latest News & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <item.icon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-serif font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};