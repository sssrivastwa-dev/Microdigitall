import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Server, Globe, Code, Smartphone, Cpu, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import image1 from '../assets/1.N.png';
import image2 from '../assets/2.N.png';
import image3 from '../assets/3.N.png';
import image4 from '../assets/4.N.png';
import image5 from '../assets/5.N.png';

export default function HomePage() {
  // State for intro animation
  const [showIntro, setShowIntro] = useState(true);
  const [currentBgImageIndex, setCurrentBgImageIndex] = useState(0);
  const [currentHeroBgIndex, setCurrentHeroBgIndex] = useState(0);
  
  // IT related background images for intro
  const bgImages = [
    { src: "https://media.tenor.com/GY6aecqTh4IAAAAM/moving-formation.gif", alt: "Digital Transformation" },
    { src: "https://cdn.pixabay.com/animation/2023/01/19/17/23/17-23-21-162_512.gif", alt: "Network Infrastructure" },
    { src: "https://mir-s3-cdn-cf.behance.net/project_modules/source/2fffb715890201.562bc3b25571d.gif", alt: "Cyber Security" },
    { src: "https://media.tenor.com/K_2KCrzfErcAAAAM/pattern-moving.gif", alt: "Cloud Computing" },
    { src: "https://cdn.mos.cms.futurecdn.net/DSYK668ZhytjZ9kbkp5D6j.gif", alt: "Software Development" }
  ];

  // Background images for main hero section
  const heroBgImages = [
    { src: "https://i.pinimg.com/originals/ae/d1/1d/aed11d6975231b91c8e992c02b8376da.gif", alt: "Technology Waves" },
    { src: "https://cdn.dribbble.com/userupload/23731317/file/original-5eb2f9967073700b38a31280cc2c32e0.gif", alt: "Digital Network" },
    { src: "https://saamarketing.co.uk/wp-content/uploads/2022/08/The-Different-Types-of-Technology-GIF.gif", alt: "Tech Grid" },
    { src: "https://i.redd.it/a-collection-some-of-my-ai-images-that-i-have-animated-as-v0-b810o8l9fb4b1.gif?width=512&auto=webp&s=ad39f4955cac29a01eefd277c36c6d75c5d80ffb", alt: "Digital Particles" },
    { src: "https://cdn.dribbble.com/userupload/23714478/file/original-245a8f90b4b789450b27be0876dea4d8.gif", alt: "Digital Circuit" }
  ];
  
  // States for main page animations
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    about: false,
    stats: false,
    testimonials: false,
  });

  // Refs for main page sections
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  useEffect(() => {
    // Background image rotation for intro
    const bgInterval = setInterval(() => {
      setCurrentBgImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 1000); // Change image every 1 second
    
    // Timer to switch from intro to main page after 2 seconds
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); 
    
    return () => {
      clearInterval(bgInterval);
      clearTimeout(introTimer);
    };
  }, [bgImages.length]);

  useEffect(() => {
    // Background image rotation for hero section (only when intro is done)
    if (showIntro) return;

    const heroBgInterval = setInterval(() => {
      setCurrentHeroBgIndex((prevIndex) => (prevIndex + 1) % heroBgImages.length);
    }, 3000); // Change hero background image every 3 seconds
    
    return () => {
      clearInterval(heroBgInterval);
    };
  }, [showIntro, heroBgImages.length]);
  
  useEffect(() => {
    // Only set up observers for main page when intro is done
    if (showIntro) return;
    
    const observers = {};
    
    const setupObserver = (ref, key) => {
      if (ref.current) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { 
            threshold: key === 'services' ? 0.1 : 0.2, // Lower threshold for services section on mobile
            rootMargin: key === 'services' ? '50px 0px' : '0px'  // Add margin for services section
          }
        );
        
        observers[key].observe(ref.current);
      }
    };
    
    setupObserver(heroRef, 'hero');
    setupObserver(servicesRef, 'services');
    setupObserver(aboutRef, 'about');
    setupObserver(statsRef, 'stats');
    setupObserver(testimonialsRef, 'testimonials');
    
    // Trigger first section animation immediately when main page appears
    setIsVisible(prev => ({ ...prev, hero: true }));
    
    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, [showIntro]);
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation classes
  const fadeIn = "transition-opacity duration-1000 ease-in";
  const slideUp = "transition-transform duration-1000 ease-out";
  const slideInLeft = "transition-transform duration-1000 ease-out";
  const slideInRight = "transition-transform duration-1000 ease-out";
  const scaleIn = "transition-transform duration-700 ease-out";
  
  // Enhanced Service data with larger cards and professional content
 // Services Array with Paths
const services = [
  {
    icon: <Cpu className="h-12 w-12 mb-6 text-indigo-400" />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions leveraging artificial intelligence, machine learning, and data analytics. We implement predictive models, automation systems, and AI-powered features to drive business innovation and efficiency.",
    features: ["Predictive analytics", "Process automation", "Natural language processing", "Computer vision"],
    gradient: "from-indigo-600/20 to-purple-600/20",
    path: "/AIsolutions"
  },
  {
    icon: <MessageSquare className="h-12 w-12 mb-6 text-orange-400" />,
    title: "Digital Marketing Solutions",
    description: "Complete digital marketing strategies to boost your online presence and drive business growth. From SEO and social media management to PPC campaigns and content marketing, we help you reach your target audience effectively.",
    features: ["SEO & SEM optimization", "Social media marketing", "Content strategy", "PPC campaigns", "Analytics & reporting", "Brand development"],
    gradient: "from-orange-600/20 to-red-600/20",
    path: "/digitalmarketing"
  },
  {
    icon: <Globe className="h-12 w-12 mb-6 text-green-400" />,
    title: "Web & App Development",
    description: "Comprehensive digital solutions including responsive websites, progressive web apps, and native mobile applications for iOS and Android. We create seamless user experiences across all platforms using modern frameworks like React, Flutter, and React Native.",
    features: ["Responsive web design", "Mobile app development", "Cross-platform solutions", "UI/UX optimization", "App Store deployment", "PWA development"],
    gradient: "from-green-600/20 to-emerald-600/20",
    path: "/webdevelopment"
  },
  {
    icon: <Code className="h-12 w-12 mb-6 text-purple-400" />,
    title: "Custom Software Development",
    description: "Full-stack development using modern technologies like React, Node.js, Python, and .NET. We build scalable applications with clean architecture, comprehensive testing, and maintainable code that grows with your business.",
    features: ["Full-stack development", "Agile methodology", "Code optimization", "Performance testing"],
    gradient: "from-purple-600/20 to-pink-600/20",
    path: "/CustomService"
  },
  {
    icon: <Server className="h-12 w-12 mb-6 text-blue-400" />,
    title: "Cloud Infrastructure Solutions",
    description: "Enterprise-grade cloud architecture with AWS, Azure, and Google Cloud. We provide scalable, secure, and cost-effective infrastructure solutions with 99.9% uptime guarantee, automated scaling, and comprehensive monitoring.",
    features: ["Multi-cloud deployment", "Auto-scaling", "24/7 monitoring", "Disaster recovery"],
    gradient: "from-blue-600/20 to-cyan-600/20",
    path: "/Cloud"
  },
  {
    icon: <Users className="h-12 w-12 mb-6 text-teal-400" />,
    title: "IT Consulting & Strategy",
    description: "Strategic technology consulting to align IT infrastructure with business objectives. We provide comprehensive assessments, digital transformation roadmaps, and ongoing support to optimize your technology investments.",
    features: ["Technology assessment", "Digital transformation", "Cost optimization", "Strategic planning"],
    gradient: "from-teal-600/20 to-cyan-600/20",
    path: "/ITS"
  }
];
  
  // Testimonial data
  const testimonials = [
    {
      quote: "MicroDigitall transformed our digital infrastructure completely. Their team's expertise saved us countless hours and resources.",
      author: "Sarah Johnson",
      position: "CTO, GrowthTech Inc."
    },
    {
      quote: "The custom software solution provided by MicroDigitall increased our operational efficiency by 40%. Extremely satisfied!",
      author: "Michael Chen",
      position: "Operations Director, NexGen Systems"
    },
    {
      quote: "Their mobile app development services exceeded our expectations. The app is intuitive, fast, and our users love it!",
      author: "Alex Rodriguez",
      position: "Product Manager, InnovateTech"
    }
  ];

  // Stats data
  const stats = [
    { value: "200+", label: "Clients Worldwide" },
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "99%", label: "Client Satisfaction" }
  ];

  // Render intro component
  if (showIntro) {
    return (
      <div className="min-h-screen flex flex-col bg-black relative">
        {/* Background Image Carousel for intro */}
        <div className="fixed inset-0 z-0">
          {bgImages.map((image, index) => (
            <div 
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000"
              style={{
                opacity: currentBgImageIndex === index ? 0.5 : 0
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover bg-moving-pattern"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-blue-900/50"></div>
        </div>
        
        {/* Intro content */}
        <div className="min-h-screen relative z-10 flex items-center justify-center">
          <div className="text-center animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slideUp">
              Next-Gen <span className="text-blue-500">IT Solutions</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto animate-slideUp" style={{ animationDelay: "300ms" }}>
              Empowering businesses with cutting-edge technology and innovative solutions
            </p>
          </div>
        </div>
        
        {/* Intro-specific styles */}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          
          @keyframes floatBg {
            0% { transform: scale(1.1) translate(0, 0); }
            25% { transform: scale(1.2) translate(-5%, -5%); }
            50% { transform: scale(1.1) translate(-10%, 5%); }
            75% { transform: scale(1.2) translate(-5%, 10%); }
            100% { transform: scale(1.1) translate(0, 0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease forwards;
          }
          
          .animate-slideUp {
            animation: slideUp 1s ease forwards;
          }
          
          /* Moving background pattern animation */
          .bg-moving-pattern {
            background-size: cover;
            animation: floatBg 30s linear infinite;
            opacity: 0.6;
          }
        `}</style>
      </div>
    );
  }

  // Main page component
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section with Moving Background */}
      <section 
        ref={heroRef}
        className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden"
      >
        {/* Moving Background for Hero Section */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {heroBgImages.map((image, index) => (
            <div 
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-1500"
              style={{
                opacity: currentHeroBgIndex === index ? 1 : 0,
                zIndex: 0
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hero-bg-animation"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-blue-900/20 z-1"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute w-full h-full z-1">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-700 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center z-10 max-w-4xl relative">
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-6 ${fadeIn} ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className="text-blue-400">Micro</span>Digitall
          </h1>
          <h2 
            className={`text-xl md:text-2xl text-gray-300 mb-8 ${fadeIn} ${slideUp} ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Transforming Businesses Through Innovative Technology Solutions
          </h2>
          <p 
            className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto ${fadeIn} ${slideUp} ${isVisible.hero ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Delivering cutting-edge IT services and digital transformation strategies to help your business thrive in the modern digital landscape.
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center ${fadeIn} ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '600ms' }}
          >
           <Link to="/contact">
  <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 relative z-10">
    Get Started
  </button>
</Link>
            {/* <button className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-900/20 font-medium rounded-lg transition duration-300 relative z-10">
              Learn More
            </button> */}
          </div>
        </div>
        
        <div 
          className={`absolute bottom-10 animate-bounce cursor-pointer ${fadeIn} ${isVisible.hero ? 'opacity-100' : 'opacity-0'} z-10`}
          style={{ transitionDelay: '800ms' }}
          onClick={scrollToServices}
        >
          <ChevronDown size={32} className="text-blue-400" />
        </div>

        {/* Hero-specific styles */}
        <style jsx global>{`
          @keyframes heroFloat {
            0% { transform: scale(1.05) translate(0, 0); }
            33% { transform: scale(1.1) translate(-1%, -1%); }
            66% { transform: scale(1.05) translate(1%, 1%); }
            100% { transform: scale(1.05) translate(0, 0); }
          }
          
          .hero-bg-animation {
            animation: heroFloat 20s ease infinite;
            opacity: 0.8;
          }
        `}</style>
      </section>

      {/* Enhanced Professional Services Section */}
      <section 
  ref={servicesRef}
  className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden min-h-screen"
  style={{
    background: "linear-gradient(180deg, #0a1a3f 0%, #0d1323 50%, #000000 100%)"
  }}
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="container mx-auto relative z-10">
    <div className="text-center mb-12 sm:mb-16 md:mb-20">
      <h2 
        className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4 ${fadeIn} ${isVisible.services ? 'opacity-100' : 'opacity-0'}`}
      >
        Professional <span className="text-blue-400">IT Services</span>
      </h2>
      <p 
        className={`text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4 ${fadeIn} ${isVisible.services ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '200ms' }}
      >
        Comprehensive technology solutions designed to accelerate your digital transformation journey with industry-leading expertise and cutting-edge innovation
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {services.map((service, index) => (
        <div 
          key={index}
          className={`group relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-6 sm:p-8 pb-20 sm:pb-24 rounded-2xl border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] sm:hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/25 ${fadeIn} ${scaleIn} service-card-hover min-h-[400px] sm:min-h-[450px]`}
          style={{ 
            transitionDelay: `${300 + index * 150}ms`,
            opacity: isVisible.services ? 1 : 0,
            transform: isVisible.services ? 'scale(1)' : 'scale(0.95)'
          }}
        >
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          
          {/* Icon with animated background */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-150"></div>
            <div className="relative bg-gray-900/50 p-3 sm:p-4 rounded-xl w-fit group-hover:bg-gray-800/70 transition-colors duration-300">
              {service.icon}
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-100 transition-colors duration-300">
            {service.title}
          </h3>
          
          <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base">
            {service.description}
          </p>
          
          {/* Feature list */}
          <div className="space-y-2 mb-6 sm:mb-8">
            {service.features.map((feature, featureIndex) => (
              <div 
                key={featureIndex} 
                className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
              >
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300 flex-shrink-0"></div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Learn More Button - Always visible, positioned at bottom */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8">
            <button 
              onClick={() => {
                // Handle navigation based on service path
                if (service.path.startsWith('http')) {
                  window.open(service.path, '_blank');
                } else {
                  // For internal routing - replace with your preferred navigation method
                  // Examples:
                  // For React Router: navigate(service.path)
                  // For Next.js: router.push(service.path)
                  // For simple navigation: window.location.href = service.path
                  window.location.href = service.path;
                }
              }}
              className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center gap-2">
                Learn More
                <svg 
                  className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      ))}
    </div>

    {/* Call to action */}
    <div 
      className={`text-center mt-12 sm:mt-16 ${fadeIn}`}
      style={{ 
        transitionDelay: '1200ms',
        opacity: isVisible.services ? 1 : 0
      }}
    >
      {/* Add your CTA content here if needed */}
    </div>
  </div>

  {/* Professional service card animations */}
  <style jsx global>{`
    @keyframes serviceFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes serviceGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
      50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.2); }
    }
    
    .service-card-hover:hover {
      animation: serviceFloat 3s ease-in-out infinite, serviceGlow 2s ease-in-out infinite;
    }
    
    .service-card-hover::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 1rem;
      padding: 1px;
      background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
    
    .service-card-hover:hover::before {
      opacity: 1;
    }

    /* Mobile specific fixes */
    @media (max-width: 640px) {
      .service-card-hover {
        min-height: 350px;
      }
      
      .service-card-hover:hover {
        transform: scale(1.01);
      }
    }
  `}</style>
</section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-20 px-4 relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0d1323 0%, #000000 100%)"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-40 w-64 h-64 bg-blue-800 rounded-full opacity-5 blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-600 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div 
              className={`lg:w-1/2 ${fadeIn} ${slideInLeft} ${isVisible.about ? 'opacity-100 transform-none' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="relative">
                <div className="aspect-video bg-blue-900/20 rounded-xl overflow-hidden">
                  <img 
                    src={image1} 
                    alt="MicroDigitall Team" 
                    className="w-full h-full object-cover mix-blend-lighten opacity-80"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-xl -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-blue-400 rounded-xl -z-10"></div>
              </div>
            </div>
            
            <div 
              className={`lg:w-1/2 ${fadeIn} ${slideInRight} ${isVisible.about ? 'opacity-100 transform-none' : 'opacity-0 translate-x-10'}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-blue-400">MicroDigitall</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Founded in 2010, MicroDigitall has been at the forefront of technological innovation, helping businesses navigate the complex digital landscape with confidence and precision.
              </p>
              <p className="text-gray-400 mb-8">
                Our team of expert engineers, developers, and consultants brings decades of combined experience across various industries. We pride ourselves on delivering tailor-made solutions that address the unique challenges faced by each of our clients.
              </p>
              <div 
                className={`grid grid-cols-2 gap-4 ${fadeIn} ${isVisible.about ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Enterprise Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Continuous Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Client-Centric Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Technical Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="py-16 px-4"
        style={{
          background: "linear-gradient(90deg, #000000 0%, #0a192f 50%, #000000 100%)"
        }}
      >
        <div className="container mx-auto">
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${fadeIn} ${isVisible.stats ? 'opacity-100' : 'opacity-0'}`}
          >
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center ${scaleIn} ${isVisible.stats ? 'transform-none' : 'scale-90'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
<section
  ref={testimonialsRef}
  className="py-20 px-4 relative overflow-hidden"
  style={{
    background: "linear-gradient(180deg, #0a192f 0%, #000000 100%)"
  }}
>
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-800 rounded-full opacity-10 blur-3xl"></div>
    <div className="absolute top-20 left-20 w-64 h-64 bg-purple-800 rounded-full opacity-5 blur-2xl"></div>
  </div>
         
  <div className="container mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${fadeIn} ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}
      >
        Client <span className="text-blue-400">Testimonials</span>
      </h2>
      <p
        className={`text-gray-400 max-w-2xl mx-auto ${fadeIn} ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '200ms' }}
      >
        Don't just take our word for it - hear what our clients have to say
      </p>
    </div>

    {/* Auto-scrolling testimonials carousel */}
    <div className="relative overflow-hidden">
      <div 
        className="flex gap-6"
        style={{
          width: 'fit-content',
          animation: 'scroll 60s linear infinite'
        }}
      >
        {/* First set of testimonials */}
        {[
          {
            quote: "This team transformed our digital presence completely. Our sales increased by 300% within 6 months!",
            author: "Sarah Johnson",
            position: "CEO, TechStart Inc.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Outstanding service and incredible attention to detail. They delivered exactly what we envisioned.",
            author: "Michael Chen",
            position: "Founder, InnovateLab",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Professional, reliable, and results-driven. Best investment we've made for our business.",
            author: "Emily Rodriguez",
            position: "Marketing Director, GrowthCo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "The ROI on our project exceeded all expectations. Highly recommend their services!",
            author: "David Thompson",
            position: "CTO, DataFlow Systems",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Exceptional creativity and technical expertise. They brought our vision to life perfectly.",
            author: "Lisa Wang",
            position: "Creative Director, DesignHub",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Fast delivery, excellent communication, and outstanding results. Couldn't be happier!",
            author: "James Miller",
            position: "VP Operations, ScaleTech",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "They understood our needs perfectly and delivered beyond expectations. Amazing team!",
            author: "Sofia Andersson",
            position: "Product Manager, NextGen",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Innovative solutions and flawless execution. Our conversion rates doubled overnight!",
            author: "Robert Kim",
            position: "E-commerce Director, ShopMax",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Professional service from start to finish. They made the complex seem simple.",
            author: "Rachel Green",
            position: "Startup Founder, EcoTech",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Game-changing results! Our online presence has never looked better.",
            author: "Alex Rivera",
            position: "Brand Manager, StyleCorp",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Incredible attention to detail and user experience. Our customers love the new platform!",
            author: "Jennifer Lee",
            position: "UX Lead, UserFirst",
            image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "They delivered on time, on budget, and exceeded quality expectations. Fantastic work!",
            author: "Mark Stevens",
            position: "Project Director, BuildRight",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Strategic thinking combined with technical excellence. Perfect partnership for growth!",
            author: "Anna Kowalski",
            position: "Growth Hacker, RapidScale",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Outstanding results and exceptional service. They truly care about client success.",
            author: "Tom Wilson",
            position: "Business Owner, LocalPro",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Transformed our digital strategy completely. Revenue increased by 250% in 4 months!",
            author: "Maria Santos",
            position: "CEO, HealthTech Solutions",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Best decision we made for our business. Professional, creative, and results-oriented!",
            author: "Chris Anderson",
            position: "Founder, FutureVision",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          }
        ].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/30 mr-3"
              />
              <MessageSquare className="text-blue-400 h-6 w-6 opacity-50 ml-auto" />
            </div>
            <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="font-semibold text-white text-sm">{testimonial.author}</p>
              <p className="text-xs text-blue-400">{testimonial.position}</p>
            </div>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {[
          {
            quote: "This team transformed our digital presence completely. Our sales increased by 300% within 6 months!",
            author: "Sarah Johnson",
            position: "CEO, TechStart Inc.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Outstanding service and incredible attention to detail. They delivered exactly what we envisioned.",
            author: "Michael Chen",
            position: "Founder, InnovateLab",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Professional, reliable, and results-driven. Best investment we've made for our business.",
            author: "Emily Rodriguez",
            position: "Marketing Director, GrowthCo",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "The ROI on our project exceeded all expectations. Highly recommend their services!",
            author: "David Thompson",
            position: "CTO, DataFlow Systems",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Exceptional creativity and technical expertise. They brought our vision to life perfectly.",
            author: "Lisa Wang",
            position: "Creative Director, DesignHub",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Fast delivery, excellent communication, and outstanding results. Couldn't be happier!",
            author: "James Miller",
            position: "VP Operations, ScaleTech",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "They understood our needs perfectly and delivered beyond expectations. Amazing team!",
            author: "Sofia Andersson",
            position: "Product Manager, NextGen",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Innovative solutions and flawless execution. Our conversion rates doubled overnight!",
            author: "Robert Kim",
            position: "E-commerce Director, ShopMax",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Professional service from start to finish. They made the complex seem simple.",
            author: "Rachel Green",
            position: "Startup Founder, EcoTech",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Game-changing results! Our online presence has never looked better.",
            author: "Alex Rivera",
            position: "Brand Manager, StyleCorp",
            image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Incredible attention to detail and user experience. Our customers love the new platform!",
            author: "Jennifer Lee",
            position: "UX Lead, UserFirst",
            image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "They delivered on time, on budget, and exceeded quality expectations. Fantastic work!",
            author: "Mark Stevens",
            position: "Project Director, BuildRight",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Strategic thinking combined with technical excellence. Perfect partnership for growth!",
            author: "Anna Kowalski",
            position: "Growth Hacker, RapidScale",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Outstanding results and exceptional service. They truly care about client success.",
            author: "Tom Wilson",
            position: "Business Owner, LocalPro",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Transformed our digital strategy completely. Revenue increased by 250% in 4 months!",
            author: "Maria Santos",
            position: "CEO, HealthTech Solutions",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
          },
          {
            quote: "Best decision we made for our business. Professional, creative, and results-oriented!",
            author: "Chris Anderson",
            position: "Founder, FutureVision",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          }
        ].map((testimonial, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-blue-900/30 hover:border-blue-700/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/20"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-400/30 mr-3"
              />
              <MessageSquare className="text-blue-400 h-6 w-6 opacity-50 ml-auto" />
            </div>
            <p className="text-gray-300 italic mb-6 text-sm leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="font-semibold text-white text-sm">{testimonial.author}</p>
              <p className="text-xs text-blue-400">{testimonial.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div
      className={`mt-16 text-center ${fadeIn} ${isVisible.testimonials ? 'opacity-100' : 'opacity-0'}`}
      style={{ transitionDelay: '800ms' }}
    >
      {/* <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
        View All Success Stories
      </button> */}
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    div[style*="animation: scroll"] {
      animation: scroll 60s linear infinite;
    }
    
    div[style*="animation: scroll"]:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>

      {/* CTA Section */}
      <section 
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0a192f 0%, #000000 100%)"
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-r from-blue-900/30 to-black rounded-2xl p-10 border border-blue-900/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to <span className="text-blue-400">Transform</span> Your Business?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get in touch with our team of experts today and discover how MicroDigitall can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}