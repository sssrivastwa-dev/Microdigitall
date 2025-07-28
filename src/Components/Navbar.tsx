import { useState, useEffect, useRef } from 'react';
import { LayoutGrid, Cloud, Brain, Glasses, Monitor, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/micrologo2.png';

// Menu Item Component
const MenuItem = ({ label, icon, href, onClose, delay, hasDropdown, onClick }) => {
  if (hasDropdown) {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-between px-6 py-4 text-lg text-white bg-blue-900/20 hover:bg-blue-600/40 transition-all duration-300 rounded-md shadow-md border border-blue-500/20 hover:border-blue-400/40 hover:translate-y-[-2px] w-full"
      >
        <div className="flex items-center">
          {icon && <span className="mr-4">{icon}</span>}
          <span>{label}</span>
        </div>
        <ChevronDown size={20} className="ml-2 transition-transform duration-300" />
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={() => onClose && onClose()}
      className="flex items-center px-6 py-4 text-lg text-white bg-blue-900/20 hover:bg-blue-600/40 transition-all duration-300 rounded-md shadow-md border border-blue-500/20 hover:border-blue-400/40 hover:translate-y-[-2px]"
    >
      {icon && <span className="mr-4">{icon}</span>}
      <span>{label}</span>
    </a>
  );
};

// Service Button Component
const ServiceButton = ({ name, icon, href, onClose }) => {
  const handleClick = () => {
    if (onClose) onClose();
    // Navigate to the specified path
    window.location.href = href;
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center w-full px-6 py-3 text-white/90 bg-blue-800/20 hover:bg-blue-700/40 transition-all duration-300 rounded-md my-2 border border-blue-500/20 hover:border-blue-400/30 hover:translate-x-1 hover:scale-105"
    >
      <span className="mr-4">{icon}</span>
      <span>{name}</span>
    </button>
  );
};

// Dropdown Service Item Component
const DropdownServiceItem = ({ name, icon, href, onClose }) => {
  const handleClick = () => {
    if (onClose) onClose();
    window.location.href = href;
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center w-full px-4 py-3 text-white/90 bg-blue-800/10 hover:bg-blue-700/30 transition-all duration-300 rounded-md my-1 border border-blue-500/10 hover:border-blue-400/20 hover:translate-x-2"
    >
      <span className="mr-3 text-blue-400">{icon}</span>
      <span className="text-left">{name}</span>
    </button>
  );
};

// Services Dropdown Component
const ServicesDropdown = ({ isOpen, services, onClose }) => {
  return (
    <div 
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(-10px)'
              }}
            >
              <DropdownServiceItem 
                name={service.name} 
                icon={service.icon} 
                href={service.href} 
                onClose={onClose} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Background Animation for Menu
const MenuBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-blue-900/80"></div>
      <div 
        className="absolute bg-moving-pattern"
        style={{
          // Replace with your own background image URL
          backgroundImage: "url('https://i.gifer.com/origin/5a/5ab98406cc6c8fbba9ddb014c2bcdb80_w200.gif')",
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
          opacity: 1
        }}
      />
    </div>
  );
};

// Menu Overlay Component
const MenuOverlay = ({ isOpen, onClose, services }) => {
  const [servicesVisible, setServicesVisible] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  
  // Show services with a slight delay for better animation
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setServicesVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setServicesVisible(false);
      setServicesDropdownOpen(false);
    }
  }, [isOpen]);

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };
  
  return (
    <div 
      className={`fixed inset-0 z-50 overflow-auto flex flex-col transform transition-transform duration-500 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <MenuBackground />
      </div>
      
      {/* Header with logo and close button */}
      <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-black/70 backdrop-blur-sm">
        <a href="/Home" onClick={onClose} className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </a>
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-blue-600/30 hover:bg-blue-600/50 transition-colors"
          aria-label="Close menu"
        >
          <X size={24} className="text-white" />
        </button>
      </div>
      
      {/* Menu content */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-8">
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
          {/* Desktop layout */}
          <div className="hidden md:flex flex-col items-center justify-center space-y-8">
            {/* Main Menu Items with Our Services button in the same row */}
            <div className="flex flex-row items-center justify-center space-x-4 mb-8">
              <div className="transform transition-all duration-500 delay-100" style={{ opacity: isOpen ? 1 : 0 }}>
                <MenuItem label="Home" href="/Home" onClose={onClose} />
              </div>
              
              <div className="transform transition-all duration-500 delay-200" style={{ opacity: isOpen ? 1 : 0 }}>
                <MenuItem label="About" href="/about" onClose={onClose} />
              </div>
              
              <div className="transform transition-all duration-500 delay-400" style={{ opacity: isOpen ? 1 : 0 }}>
                <MenuItem label="Contact" href="/contact" onClose={onClose} />
              </div>

              <div className="transform transition-all duration-500 delay-300" style={{ opacity: isOpen ? 1 : 0 }}>
                <MenuItem 
                  label="Our Services" 
                  hasDropdown={true}
                  onClick={toggleServicesDropdown}
                />
              </div>
            </div>

            {/* Services Dropdown positioned below the buttons */}
            <div className="w-full max-w-4xl">
              <ServicesDropdown 
                isOpen={servicesDropdownOpen} 
                services={services} 
                onClose={onClose} 
              />
            </div>
          </div>
          
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col items-center justify-center space-y-4 w-full">
            <div className="w-full transform transition-all duration-500 delay-100" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}>
              <MenuItem label="Home" href="/Home" onClose={onClose} />
            </div>
            
            <div className="w-full transform transition-all duration-500 delay-200" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}>
              <MenuItem label="About" href="/About" onClose={onClose} />
            </div>
            
            <div className="w-full transform transition-all duration-500 delay-400" 
              style={{ 
                opacity: isOpen ? 1 : 0, 
                transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
              }}>
              <MenuItem label="Contact" href="/contact" onClose={onClose} />
            </div>

            {/* Our Services Button with Dropdown for Mobile */}
            <div className="w-full mt-4">
              <div className="transform transition-all duration-500 delay-300" 
                style={{ 
                  opacity: isOpen ? 1 : 0, 
                  transform: isOpen ? 'translateX(0)' : 'translateX(100px)' 
                }}>
                <MenuItem 
                  label="Our Services" 
                  hasDropdown={true}
                  onClick={toggleServicesDropdown}
                />
                <ServicesDropdown 
                  isOpen={servicesDropdownOpen} 
                  services={services} 
                  onClose={onClose} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Navbar Component
export default function ProfessionalNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);
  
  // Services data
  const services = [
    { name: "Digital Marketing Solutions", icon: <LayoutGrid size={20} />, href: "/digitalmarketing" },
    { name: "AI & Machine Learning", icon: <Brain size={20} />, href: "/AIsolutions" },
    { name: "Web & App Development", icon: <Monitor size={20} />, href: "/webdevelopment" },
    { name: "Custom Software Development", icon: <Glasses size={20} />, href: "/CustomService" },
    { name: "Cloud Infrastructure Solutions", icon: <Cloud size={20} />, href: "/Cloud" },
    { name: "IT Consulting & Strategy", icon: <LayoutGrid size={20} />, href: "/ITS" }
  ];

  useEffect(() => {
    // Preload audio for button click to ensure it plays on first click
    audioRef.current = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-light-button-click-1113.mp3");
    audioRef.current.load(); // Preload the audio
    
    // Scroll handler for navbar styling
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Lock body scroll when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
    };
  }, [scrolled, menuOpen]);

  // Handle menu button click with guaranteed sound
  const handleMenuClick = () => {
    // Play click sound with better error handling
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      
      // Play with better error handling and user interaction awareness
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Sound played successfully
            setMenuOpen(true);
          })
          .catch(error => {
            // Auto-play was prevented, likely due to browser policy
            console.log("Audio playback failed:", error);
            // Open menu anyway
            setMenuOpen(true);
          });
      } else {
        // Older browsers might not return a promise
        setMenuOpen(true);
      }
    } else {
      // Fallback if audio ref isn't ready
      setMenuOpen(true);
    }
  };

  return (
    <>
      {/* Only show the navbar strip initially */}
      <nav 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 border-b border-blue-600/30 shadow-lg shadow-blue-600/20 py-2' 
            : 'bg-black/50 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Center Logo - Visible on all screen sizes */}
            <div className="mx-auto">
              <a href="/Home" className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-auto" />
              </a>
            </div>
            
            {/* Menu button with enhanced click effect */}
            <button
              onClick={handleMenuClick}
              className="absolute right-4 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none transition-colors duration-300 hover:bg-blue-900/30 active:bg-blue-900/50"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Full-page Menu Overlay */}
      <MenuOverlay 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)}
        services={services}
      />
      
      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes menuBgFloat {
          0% { transform: scale(1.05) translate(0, 0); }
          25% { transform: scale(1.08) translate(-1%, -1%); }
          50% { transform: scale(1.1) translate(-2%, -2%); }
          75% { transform: scale(1.08) translate(-1%, -1%); }
          100% { transform: scale(1.05) translate(0, 0); }
        }
        
        .bg-moving-pattern {
          animation: menuBgFloat 30s ease-in-out infinite;
        }
        
        /* Mobile menu item slide-in animation */
        @keyframes slideInFromRight {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        /* Enhanced hover effects */
        .menu-item:hover {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </>
  );
}