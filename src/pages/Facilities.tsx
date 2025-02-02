import React from 'react';
import { Header } from '../components/Header'; // Adjust the import path as necessary
import { Footer } from '../components/Footer'; // Adjust the import path as necessary
import { BookOpen, Monitor, Building, Utensils } from "lucide-react";

const Facilities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Our Facilities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Monitor className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-4">Computer Labs</h2>
            <p className="text-gray-700">
              Modern computer laboratories equipped with the latest technology and high-speed internet.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-4">Library</h2>
            <p className="text-gray-700">
              Extensive collection of books, journals, and digital resources for research and reading.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Utensils className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-4">Dining Hall</h2>
            <p className="text-gray-700">
              Spacious dining facility serving nutritious meals for day students.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Building className="w-8 h-8 text-primary mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-4">Classrooms</h2>
            <p className="text-gray-700">
              Well-ventilated classrooms with modern teaching aids and comfortable seating.
            </p>
          </div>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default Facilities;
