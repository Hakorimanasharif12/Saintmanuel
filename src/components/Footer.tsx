import { Link } from "react-router-dom";
import { Home, School, BookOpen, User, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1E40AF] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Main Menu Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Main Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
                  <Home size={16} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-2 hover:text-gray-300">
                  <School size={16} />
                  Our School
                </Link>
              </li>
              <li>
                <Link to="/academics" className="flex items-center gap-2 hover:text-gray-300">
                  <BookOpen size={16} />
                  Education
                </Link>
              </li>
              <li>
                <Link to="/student" className="flex items-center gap-2 hover:text-gray-300">
                  <User size={16} />
                  Student
                </Link>
              </li>
              <li>
                <Link to="/parent" className="flex items-center gap-2 hover:text-gray-300">
                  <User size={16} />
                  Parent
                </Link>
              </li>
              <li>
                <Link to="/teacher" className="flex items-center gap-2 hover:text-gray-300">
                  <User size={16} />
                  Teacher
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300">
                  <Phone size={16} />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Our School Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Our School</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="hover:text-gray-300">News</Link></li>
              <li><Link to="/school-life" className="hover:text-gray-300">School Life</Link></li>
              <li><Link to="/presentation" className="hover:text-gray-300">Presentation</Link></li>
              <li><Link to="/history" className="hover:text-gray-300">History</Link></li>
              <li><Link to="/administration" className="hover:text-gray-300">Administration</Link></li>
              <li><Link to="/governance" className="hover:text-gray-300">Governance</Link></li>
              <li><Link to="/jobs" className="hover:text-gray-300">Job Opportunities</Link></li>
            </ul>
          </div>

          {/* Student Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Student</h3>
            <ul className="space-y-2">
              <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
              <li><Link to="/registration" className="hover:text-gray-300">Online Registration</Link></li>
              <li><Link to="/online-class" className="hover:text-gray-300">My Online Class</Link></li>
              <li><Link to="/homework" className="hover:text-gray-300">My Homework</Link></li>
              <li><Link to="/study-material" className="hover:text-gray-300">My Study Material</Link></li>
              <li><Link to="/billboard" className="hover:text-gray-300">Billboard</Link></li>
              <li><Link to="/presence" className="hover:text-gray-300">My Presence</Link></li>
              <li><Link to="/expenses" className="hover:text-gray-300">My Expenses</Link></li>
              <li><Link to="/complaints" className="hover:text-gray-300">My Complaints</Link></li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Location</h3>
            <address className="not-italic space-y-4">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                KG 278 St., Kigali-Masaka<br />
                PO BOX 000, Rwanda.
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                +25088506669
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                info@SaintManuel.com
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-white/20 text-center">
          <p>© 2025 Saint Manuel Complex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};