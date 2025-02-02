import { Header } from "@/components/Header";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-primary mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p>+250 788 123 456</p>
                  <p>+250 788 789 012</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold">Email</p>
                  <p>info@saintmanuel.edu.rw</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold">Location</p>
                  <p>Kigali Masaka, Rwanda</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-bold">Office Hours</p>
                  <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-serif font-bold mb-6">Staff Contacts</h2>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold">Academic Affairs</p>
                <p>+250 788 234 567</p>
              </div>
              
              <div>
                <p className="font-bold">Administrative Office</p>
                <p>+250 788 345 678</p>
              </div>
              
              <div>
                <p className="font-bold">Student Affairs</p>
                <p>+250 788 456 789</p>
              </div>
              
              <div>
                <p className="font-bold">Emergency Contact</p>
                <p>+250 788 567 890</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;