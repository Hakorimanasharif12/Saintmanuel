import React from 'react';
import { Header } from '../components/Header'; // Adjust the import path as necessary
import { Footer } from '../components/Footer'; // Adjust the import path as necessary
import { Button } from '../components/ui/button'; // Adjust the import path as necessary
import { Download } from "lucide-react";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Admissions</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Admission Requirements</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Completed application form</li>
              <li>Previous school records</li>
              <li>Birth certificate</li>
              <li>Passport-size photographs</li>
              <li>National exam results (if applicable)</li>
            </ul>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Application Form
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Day School Program</h2>
            <p className="text-gray-700 mb-4">
              Saint Manuel Complex School offers a comprehensive day school program
              for secondary education. Our school day runs from 7:30 AM to 4:30 PM,
              Monday through Friday.
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold mb-2">Key Information</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Registration open for new academic year</li>
                <li>Limited spots available</li>
                <li>Financial aid options available</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default Admissions;
