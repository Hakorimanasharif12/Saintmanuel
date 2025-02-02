import React from 'react';
import { Header } from '../components/Header'; // Adjust the import path as necessary
import { Footer } from '../components/Footer'; // Adjust the import path as necessary

const Sports = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Sports & Clubs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Sports Activities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Athletics</li>
              <li>Table Tennis</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Academic Clubs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Science Club</li>
              <li>Debate Club</li>
              <li>Mathematics Club</li>
              <li>Reading Club</li>
              <li>Environmental Club</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Cultural Activities</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Traditional Dance</li>
              <li>Music Club</li>
              <li>Drama Club</li>
              <li>Art Club</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default Sports;
