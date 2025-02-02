import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Users, 
  Activity, 
  Church, 
  Building, 
  GraduationCap, 
  Mail 
} from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: Users, text: "About Us", path: "/about" },
  { icon: BookOpen, text: "Academics", path: "/academics" },
  { icon: Activity, text: "Sports & Clubs", path: "/sports" },
  { icon: Church, text: "Spiritual Life", path: "/spiritual" },
  { icon: Building, text: "Facilities", path: "/facilities" },
  { icon: GraduationCap, text: "Admissions", path: "/admissions" },
  { icon: Mail, text: "Contact", path: "/contact" },
];

export const QuickNav = () => {
  return (
    <nav className="bg-white py-6 shadow-md">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex items-center gap-2"
              asChild
            >
              <Link to={item.path}>
                <item.icon className="h-4 w-4" />
                {item.text}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};