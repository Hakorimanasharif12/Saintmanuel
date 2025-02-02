import React from 'react';
import { Header } from '../components/Header'; // Adjust the import path as necessary
import { Footer } from '../components/Footer'; // Adjust the import path as necessary
import { Cross, Heart, Users } from "lucide-react";

const Spiritual = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Spiritual Life</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Cross className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-serif font-bold mb-4">Daily Prayer</h2>
            <p className="text-gray-700">
              We begin and end each day with prayer, fostering spiritual growth and reflection.
            </p>
          </div>
          
          <div className="text-center p-6">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-serif font-bold mb-4">Christian Values</h2>
            <p className="text-gray-700">
              Our curriculum integrates Christian values and ethics into daily learning.
            </p>
          </div>
          
          <div className="text-center p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-serif font-bold mb-4">Community Service</h2>
            <p className="text-gray-700">
              Students participate in regular community service activities.
            </p>
          </div>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default Spiritual;
