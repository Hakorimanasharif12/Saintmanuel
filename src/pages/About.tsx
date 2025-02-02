import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuickNav } from "@/components/QuickNav";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const About = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      caption: "Our Modern Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      caption: "Computer Labs"
    },
    {
      url: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      caption: "Student Activities"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <QuickNav />
      
      <main className="flex-grow">
        <div className="container py-16">
          <h1 className="font-serif text-4xl font-bold text-primary mb-8">About Saint Manuel School</h1>
          
          {/* Image Slideshow */}
          <div className="mb-16">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px]">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                        <p className="text-lg font-serif">{image.caption}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">Our History & Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Saint Manuel School was founded with a vision to provide holistic education that nurtures both academic excellence and spiritual growth. Our mission is to empower students through a balanced education that prepares them to be responsible, compassionate leaders in the community.
            </p>
          </section>

          {/* School Images Grid */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-bold mb-6">School Life</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2"
                  alt="Library"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Computer Lab"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3"
                  alt="School Grounds"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;