import { Card } from "@/components/ui/card";
import { GraduationCap, Building, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const FeaturedPrograms = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Comprehensive curriculum from nursery through secondary education.",
      link: "#academics"
    },
    {
      icon: Building,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms, labs, and sports facilities.",
      link: "#facilities"
    },
    {
      icon: Mail,
      title: "Admissions Open",
      description: "Join our vibrant community for the upcoming academic year.",
      link: "#admissions"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="font-serif text-3xl font-bold mb-8 text-center text-primary">
          Featured Programs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <program.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-serif font-bold text-xl mb-2">{program.title}</h3>
              <p className="text-gray-700 mb-4">{program.description}</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};