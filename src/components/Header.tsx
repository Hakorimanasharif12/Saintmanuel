import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full">
      {/* Top Section - Social Media & Connections */}
      <div className="bg-[#F1F0FB] py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-700"
            >
              <Youtube size={20} />
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="/parent-portal" className="hover:text-blue-600">
              Connect with Parent
            </a>
            <a href="/student-portal" className="hover:text-blue-600">
              Connect with Student
            </a>
            <a href="/staff-portal" className="hover:text-blue-600">
              Connect with Staff
            </a>
          </div>
        </div>
      </div>

      {/* Middle Section - Logo & Contact */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src="public/images/og-image-removebg-preview.png"
              alt="Saint Manuel Complex School"
              className="h-16 w-auto"
            />
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-serif font-bold text-primary">
                Saint Manuel Complex School
              </h1>
              <p className="text-sm text-gray-600">Excellence in Secondary Education</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+250 788 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Kigali Masaka, Rwanda</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Navigation Links */}
      <nav className="bg-primary text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="hover:text-secondary-foreground transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-secondary-foreground transition-colors">
              About Us
            </Link>
            <Link to="/academics" className="hover:text-secondary-foreground transition-colors">
              Academics
            </Link>
            <Link to="/sports" className="hover:text-secondary-foreground transition-colors">
              Sports & Clubs
            </Link>
            <Link to="/spiritual" className="hover:text-secondary-foreground transition-colors">
              Spiritual Life
            </Link>
            <Link to="/facilities" className="hover:text-secondary-foreground transition-colors">
              Facilities
            </Link>
            <Link to="/admissions" className="hover:text-secondary-foreground transition-colors">
              Admissions
            </Link>
            <Link to="/contact" className="hover:text-secondary-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};