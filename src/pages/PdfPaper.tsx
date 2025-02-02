import React from 'react';
import { Footer } from '../components/Footer'; // Added import for Footer

const PdfPaper = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">PDF Paper</h1>
      <iframe
        src="/L4 Software Development Chronogramxlsx.pdf" // Updated path to the actual PDF file name
        width="100%"
        height="600px"
        className="border-2 border-gray-300"
        title="PDF Paper"
      />
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default PdfPaper;
