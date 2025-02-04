import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"; // Updated to relative path
import { Card, CardContent } from "./ui/card"; // Updated to relative path
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"; // Updated to relative path

const teachers = [
  {
    name: "Mr. John Doe",
    subject: "Mathematics",
    image: "public/Screenshot 2025-02-04 075635.png",
  },
  {
    name: "Ms. Jane Smith",
    subject: "Physics",
    image: "public/Screenshot 2025-02-04 075635.png",
  },
  {
    name: "Mr. Robert Johnson",
    subject: "Chemistry",
    image: "public/Screenshot 2025-02-04 075635.png",
  },
  // Add more teachers as needed
];

export const TeachersCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Our Dedicated Teachers
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {teachers.map((teacher, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="p-4">
                  <CardContent className="flex flex-col items-center space-y-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={teacher.image} alt={teacher.name} />
                      <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg">{teacher.name}</h3>
                      <p className="text-gray-600">{teacher.subject}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
