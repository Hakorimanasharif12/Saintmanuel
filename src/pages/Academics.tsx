import { Header } from '../components/Header'; // Adjust the import path as necessary
import { Footer } from '../components/Footer'; // Adjust the import path as necessary

const Academics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Academic Programs</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Core Subjects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Mathematics</li>
              <li>Sciences (Physics, Chemistry, Biology)</li>
              <li>Languages (English, French, Kinyarwanda)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-4">Academic Excellence</h2>
            <p className="text-gray-700 mb-4">
              Our students consistently achieve outstanding results in national examinations,
              with many proceeding to prestigious universities worldwide.
            </p>
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-bold mb-2">Recent Achievements</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>90% distinction rate in National Exams</li>
                <li>Multiple science competition winners</li>
                <li>Regional debate champions</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default Academics;
