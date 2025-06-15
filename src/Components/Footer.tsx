import React, { FC, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import logo1 from '../assets/logo1.png';

const Footer: FC = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function to scroll to top when link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use 'auto' for instant scroll, 'smooth' for animated scroll
    });
  };

  const servicesItems = [
    { name: "Digital Marketing Solution", path: "/digitalmarketing" },
    { name: "AI & Machine Learning", path: "/AIsolutions" },
    { name: "Web & App Development", path: "/webdevelopment" },
    { name: "Custom Software Development", path: "/CustomService" },
    { name: "Cloud Infrastructure Solution", path: "/Cloud" },
    { name: "IT Consulting & Strategy", path: "/ITS" },
  ];

  return (
    <div className="w-full bg-[#080133]">
      <footer
        className="relative bg-[#080133] text-white py-12 px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(217, 215, 234, 0.2) 0%, transparent 45%), radial-gradient(circle at 75% 75%, rgba(59, 50, 146, 0.2) 0%, transparent 45%)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img
                src={logo1}
                alt="Company Logo"
                className="h-20 w-30"
              />
            </div>
            <p className="text-gray-300 text-sm max-w-xs">
              Crafting Innovative Solutions for a Digital Tomorrow
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-[#4ade80] transition-colors"
                >
                  About
                </Link>
              </li>
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() =>
                    setIsServicesDropdownOpen(!isServicesDropdownOpen)
                  }
                  className="flex items-center text-gray-300 hover:text-[#4ade80] transition-colors focus:outline-none"
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`ml-1 transition-transform duration-200 ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                {isServicesDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#121045] border border-gray-700 rounded-lg shadow-lg z-10">
                    <ul className="py-2">
                      {servicesItems.map((service, index) => (
                        <li key={index}>
                          <Link
                            to={service.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-[#4ade80] hover:bg-[#1a1660] transition-colors"
                            onClick={() => {
                              setIsServicesDropdownOpen(false);
                              scrollToTop();
                            }}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-[#4ade80] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-[#4ade80] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="text-[#4ade80] mr-3" />
                <a
                  href="mailto:contact@microdigitall.com"
                  className="text-gray-300 hover:text-[#4ade80] transition-colors"
                >
                  info@microdigitall.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="text-[#4ade80] mr-3" />
                <span className="text-gray-300">+91 8318891438</span>
              </li>
              <li className="flex items-center">
                <MapPin size={30} className="text-[#4ade80] mr-3" />
                <span className="text-gray-300">T-02, A-44 VDS Tower Sec-02 Near Sector-15 Metro Station</span>
               
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/microdigitall/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121045] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/shweta-srivastava-96b342253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOhzpKsMhRPO0a2%2FwQNPxwQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121045] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin size={16} className="text-white" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121045] p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Facebook size={16} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} MicroDigitall. Crafted with code,
          creativity, and care by the MicroDigitall team.
        </div>
      </footer>
    </div>
  );
};

export default Footer;