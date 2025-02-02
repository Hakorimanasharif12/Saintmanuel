import { Button } from "./ui/button";
import { BookOpen, Users, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "./ui/carousel";

const slides = [
  {
    image: "public/images/download (1).jpeg",
    title: "Our Campus",
    description: "Modern facilities for quality education"
  },
  {
    image: "public/images/download (9).jpeg",
    title: "Computer Labs",
    description: "State-of-the-art technology for digital learning"
  },
  {
    image: "public/images/download (1).jpeg",
    title: "Student Activities",
    description: "Engaging in traditional dance and cultural events"
  },
  {
    image: "public/images/download (2).jpeg",
    title: "Library",
    description: "Extensive collection of educational resources"
  },
  {
    image: "/graduation.jpg",
    title: "Graduation Day",
    description: "Celebrating academic excellence"
  }
];

export const HeroBanner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const autoPlay = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(autoPlay);
      api.off("select", () => {});
    };
  }, [api]);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url('${slides[current].image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center z-10">
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Saint Manuel Complex School
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl animate-fade-in px-4">
          Excellence in Secondary Education - Day School Program
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white animate-fade-in"
          onClick={() => window.location.href = 'PdfPaper.tsx'}
        >
          Get Babyeyi
        </Button>

        <div className="flex flex-wrap justify-center gap-8 mt-12 px-4">
          {[
            { icon: BookOpen, text: "Academic Excellence" },
            { icon: Users, text: "Vibrant Community" },
            { icon: Heart, text: "Christian Values" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <item.icon className="h-8 w-8 mb-2" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
