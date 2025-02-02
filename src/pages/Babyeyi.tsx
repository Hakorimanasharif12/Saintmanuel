import React from 'react';
import { Footer } from '../components/Footer'; // Adjust the import path as necessary

const Babyeyi = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Download Babyeyi PDF</h1>
      <a 
        href="/path/to/your/file.pdf" 
        className="bg-primary text-white px-4 py-2 rounded"
        download
      >
        Download PDF
      </a>
      <Footer />
    </div>
  );
};

export default Babyeyi;
