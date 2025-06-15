import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for hero section
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Image slider for Our Story section
  const storyImages = [
    "/src/assets/1.N.png",
    "/src/assets/2.N.png", 
    "/src/assets/3.N.png",
    "/src/assets/4.N.png",
    "/src/assets/5.N.png"
  ];

  // Auto-slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === storyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [storyImages.length]);

  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  // Company milestones data
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Micro Digital was established with a vision to transform digital landscapes."
    },
    {
      year: "2019", 
      title: "Cloud Division Launch",
      description: "Expanded our services to include comprehensive cloud solutions."
    },
    {
      year: "2020",
      title: "AI Innovation Center", 
      description: "Launched our AI research and development center."
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Extended our services to international markets."
    },
    {
      year: "2022",
      title: "Meta Solutions",
      description: "Pioneered innovative metaverse solutions for enterprises."
    }
  ];

 // Team members data   
const teamMembers = [
  {
    name: "Ambrish Nath Tiwari",
    position: "CEO & Founder",
    image: "/api/placeholder/400/400"
  },
  {
    name: "Lisa Chen", 
    position: "CTO",
    image: "/api/placeholder/400/400"
  },
  {
    name: "David Smith",
    position: "Head of Innovation", 
    image: "/api/placeholder/400/400"
  }
];


  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      
      {/* Enhanced Hero Section with Particle Effects */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
          
          {/* Dynamic gradient orbs */}
          <motion.div 
            className="absolute w-96 h-96 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #3B82F6, transparent)',
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          
          <motion.div 
            className="absolute w-64 h-64 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, #06B6D4, transparent)',
              right: `${100 - mousePosition.x}%`,
              bottom: `${100 - mousePosition.y}%`,
              transform: 'translate(50%, 50%)',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1 
              className="text-2xl md:text-6xl font-bold mb-6 leading-tight"
              variants={fadeInUp}
            >
              <span className="text-white">About</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Micro Digital
              </span>
            </motion.h1>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of digital transformation with cutting-edge solutions 
              that empower businesses to thrive in the digital age
            </p>
            
            {/* <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {["Innovation", "Excellence", "Global Reach"].map((tag, index) => (
                <motion.span
                  key={index}
                  variants={scaleUp}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 
                           border border-blue-400/30 rounded-full text-blue-300 
                           backdrop-blur-sm hover:bg-blue-600/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
              <motion.div
                className="w-2 h-2 bg-blue-400 rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Our Story Section */ }
      <motion.section 
        className="px-8 py-24 bg-gradient-to-b from-gray-900 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            <span className="text-white">Our</span>{" "}
            <span className="text-blue-400">Story</span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            {/* Enhanced Image Slider */}
            <motion.div 
              variants={scaleUp}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3 relative group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                
                {/* Main sliding images */}
                <div className="relative w-full h-full">
                  {storyImages.map((image, index) => (
                    <motion.img
                      key={index}
                      src={image}
                      alt={`Micro Digital Story ${index + 1}`}
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ 
                        opacity: index === currentImageIndex ? 1 : 0,
                        scale: index === currentImageIndex ? 1 : 1.1
                      }}
                      transition={{ 
                        duration: 1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Enhanced indicators */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
                  {storyImages.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-700 cursor-pointer ${
                        index === currentImageIndex 
                          ? 'bg-blue-400 w-12 shadow-lg shadow-blue-400/50' 
                          : 'bg-white/40 w-6 hover:bg-white/60'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              </div>
            </motion.div>

            {/* Enhanced Text Content */}
            <motion.div 
              variants={slideIn}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  variants={fadeInUp}
                >
                  At Micro Digital, we believe in the transformative power of technology. 
                  Founded in 2018, our journey began with a simple yet ambitious mission: 
                  to democratize cutting-edge digital solutions for businesses worldwide.
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  From a passionate team of innovators, we've evolved into a global 
                  technology powerhouse, specializing in cloud computing, artificial 
                  intelligence, and next-generation metaverse technologies.
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed"
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  Our unwavering commitment to excellence has enabled us to forge 
                  strategic partnerships with industry leaders, solving complex 
                  technological challenges across diverse sectors.
                </motion.p>
              </div>
              
              {/* Enhanced stats section */}
              <motion.div 
                className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-700"
                variants={staggerContainer}
              >
                {[
                  { number: "6+", label: "Years Excellence" },
                  { number: "500+", label: "Global Clients" },
                  { number: "50+", label: "Countries" },
                  { number: "200+", label: "Team Members" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={scaleUp}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Journey Timeline */}
      <motion.section 
        className="px-8 py-24 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            <span className="text-white">Our</span>{" "}
            <span className="text-blue-400">Journey</span>
          </motion.h2>
          
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute h-full w-1 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-600 left-1/2 transform -translate-x-1/2 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`mb-16 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
              >
                {/* Enhanced timeline dot */}
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50 z-10"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                {/* Enhanced content box */}
                <motion.div 
                  className={`w-5/12 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                  }}
                  variants={index % 2 === 0 ? slideIn : { ...slideIn, hidden: { x: 100, opacity: 0 } }}
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{milestone.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Core Values */}
      <motion.section 
        className="px-8 py-24 bg-gradient-to-b from-gray-900 to-black"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            <span className="text-white">Core</span>{" "}
            <span className="text-blue-400">Values</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {[
              { value: "Innovation", icon: "💡" },
              { value: "Excellence", icon: "⭐" },
              { value: "Integrity", icon: "🛡️" },
              { value: "Collaboration", icon: "🤝" },
              { value: "Customer-Focus", icon: "🎯" },
              { value: "Growth Mindset", icon: "📈" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="group bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
                variants={scaleUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    {item.value}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    We believe in the transformative power of {item.value.toLowerCase()} to drive meaningful change and create lasting impact in the digital landscape.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

     {/* Enhanced Our Team Section - Single Box */}
<motion.section 
  className="px-8 py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={staggerContainer}
>
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <motion.div 
      className="text-center mb-16"
      variants={fadeInUp}
    >
      <motion.h2 
        className="text-5xl md:text-6xl font-bold mb-6"
        variants={fadeInUp}
      >
        <span className="text-white">Our</span>{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Team
        </span>
      </motion.h2>
      
      <motion.div 
        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"
        variants={scaleUp}
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      
      <motion.p 
        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
        variants={fadeInUp}
      >
        At <span className="text-blue-400 font-semibold">Microdigitall</span>, our strength lies in our diverse team of passionate professionals. 
        We are digital pioneers, creative innovators, and problem solvers who transform ideas into extraordinary digital experiences. 
        Together, we're not just building technology – we're crafting the future of digital excellence, one breakthrough at a time.
      </motion.p>
    </motion.div>

    {/* Single Big Team Box */}
    <motion.div 
      className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 overflow-hidden group"
      variants={scaleUp}
      whileHover={{ 
        boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)",
        scale: 1.02
      }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-8 right-8 w-3 h-3 bg-blue-400 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-8 left-8 w-2 h-2 bg-purple-400 rounded-full"
        animate={{ 
          scale: [1, 1.8, 1],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10">
        {/* Team Images Slider */}
        <motion.div 
          className="flex justify-center items-center mb-12 relative h-96"
          variants={staggerContainer}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${index * 150 + 50}px`,
                zIndex: teamMembers.length - index
              }}
              variants={fadeInUp}
              transition={{ delay: index * 0.3 }}
              whileHover={{ 
                x: -20,
                y: -20,
                scale: 1.1,
                zIndex: 10,
                rotate: index % 2 === 0 ? 2 : -2
              }}
            >
              {/* Image Container */}
              <motion.div 
                className="relative w-64 h-80 rounded-2xl overflow-hidden border-4 border-gray-600 group-hover:border-blue-400 transition-all duration-500 shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              >
                <motion.img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.1) contrast(1.1)"
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Sliding Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Member Info Overlay */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                  initial={{ y: "100%", opacity: 0 }}
                  whileHover={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-300 font-medium">{member.position}</p>
                </motion.div>
                
                {/* Animated Border */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400/0"
                  whileHover={{ borderColor: "rgba(59, 130, 246, 0.6)" }}
                  animate={{ 
                    borderColor: [
                      "rgba(59, 130, 246, 0)", 
                      "rgba(59, 130, 246, 0.3)", 
                      "rgba(59, 130, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.8
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Description */}
        <motion.div 
          className="text-center"
          variants={fadeInUp}
          transition={{ delay: 1 }}
        >
          <motion.h3 
            className="text-3xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Meet Our Digital Innovators
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-8"
            variants={fadeInUp}
          >
            Our leadership team combines decades of experience in technology, design, and innovation. 
            Each member brings unique expertise that drives our mission to deliver cutting-edge digital solutions 
            and exceptional client experiences.
          </motion.p>
          
          <motion.button              
  className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"             
  whileHover={{                
    scale: 1.05,               
    boxShadow: "0 15px 35px rgba(59, 130, 246, 0.3)"             
  }}             
  whileTap={{ scale: 0.95 }}             
  variants={scaleUp}
  onClick={() => window.location.href = '/contact'}           
>             
  Work With Our Team           
</motion.button>
        
        </motion.div>
      </div>
    </motion.div>
  </div>
</motion.section>
      {/* Enhanced Achievements */}
      <motion.section 
        className="px-8 py-24 bg-gradient-to-b from-gray-900 to-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            <span className="text-white">Our</span>{" "}
            <span className="text-blue-400">Achievements</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            variants={staggerContainer}
          >
            {[
              { number: "500+", label: "Clients Worldwide", icon: "🌐" },
              { number: "200+", label: "Team Members", icon: "👥" },
              { number: "50+", label: "Countries Served", icon: "🌍" },
              { number: "15+", label: "Industry Awards", icon: "🏆" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="p-8 bg-gradient-to-br from-black to-gray-900 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 group"
                variants={scaleUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 + index * 0.1 }}
                >
                  <span className="text-5xl font-bold text-blue-400 block mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.number}
                  </span>
                  <span className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Testimonials */}
      <motion.section 
        className="px-8 py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            <span className="text-white">Client</span>{" "}
            <span className="text-blue-400">Testimonials</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {[
              {
                quote: "Working with Micro Digital transformed our business operations and significantly improved our digital capabilities. Their innovative approach exceeded all expectations.",
                author: "Sarah Johnson",
                company: "Tech Innovations Inc.",
                rating: 5
              },
              {
                quote: "The team at Micro Digital delivered beyond our expectations. Their AI solutions have revolutionized how we approach customer service and operational efficiency.",
                author: "Michael Chen", 
                company: "Global Retail Solutions",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 group"
                variants={fadeInUp}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="text-blue-400 text-6xl absolute -top-2 left-0 opacity-20 font-serif">"</div>
                  
                  {/* Star rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-white text-lg group-hover:text-blue-300 transition-colors duration-300">
                        {testimonial.author}
                      </p>
                      <p className="text-blue-400 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}