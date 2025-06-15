import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WebAppDevelopmentSolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const developmentServices = [
    {
      id: 1,
      title: 'Custom Website Development',
      icon: '🌐',
      category: 'web',
      description: 'Fully custom websites built with modern technologies, responsive design, and optimized performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Custom CMS', 'SSL Security'],
      price: 'Starting $2,500',
      gradient: 'from-blue-500 to-cyan-500',
      platforms: ['💻 Web', '📱 Mobile Responsive', '⚡ PWA Ready'],
      duration: '2-4 weeks'
    },
    {
      id: 2,
      title: 'E-commerce Development',
      icon: '🛒',
      category: 'web',
      description: 'Complete e-commerce solutions with payment integration, inventory management, and admin panels.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Customer Portal', 'Analytics Dashboard'],
      price: 'Starting $3,500',
      gradient: 'from-green-500 to-emerald-500',
      platforms: ['🛍️ Shopify', '🏪 WooCommerce', '💳 Stripe Integration'],
      duration: '3-6 weeks'
    },
    {
      id: 3,
      title: 'Mobile App Development',
      icon: '📱',
      category: 'mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support', 'App Store Optimization'],
      price: 'Starting $5,000',
      gradient: 'from-purple-500 to-violet-500',
      platforms: ['🍎 iOS', '🤖 Android', '⚛️ React Native'],
      duration: '6-12 weeks'
    },
    {
      id: 4,
      title: 'WordPress Development',
      icon: '⚡',
      category: 'cms',
      description: 'Custom WordPress themes and plugins with advanced functionality and easy content management.',
      features: ['Custom Themes', 'Plugin Development', 'SEO Optimization', 'Performance Tuning', 'Security Hardening'],
      price: 'Starting $1,500',
      gradient: 'from-indigo-500 to-purple-500',
      platforms: ['🔧 WordPress', '🎨 Custom Themes', '🔌 Plugins'],
      duration: '1-3 weeks'
    },
    {
      id: 5,
      title: 'SaaS Application Development',
      icon: '☁️',
      category: 'web',
      description: 'Scalable Software-as-a-Service applications with subscription management and user dashboards.',
      features: ['User Management', 'Subscription Billing', 'API Integration', 'Multi-tenancy', 'Analytics'],
      price: 'Starting $8,000',
      gradient: 'from-cyan-500 to-blue-500',
      platforms: ['☁️ Cloud Native', '🔄 API First', '📊 Analytics'],
      duration: '8-16 weeks'
    },
    {
      id: 6,
      title: 'Progressive Web Apps (PWA)',
      icon: '⚡',
      category: 'web',
      description: 'Fast, reliable web applications that work offline and provide native app-like experience.',
      features: ['Offline Functionality', 'Push Notifications', 'App-like Experience', 'Fast Loading', 'Installable'],
      price: 'Starting $3,000',
      gradient: 'from-orange-500 to-red-500',
      platforms: ['📱 PWA', '🌐 Web', '📲 Installable'],
      duration: '3-5 weeks'
    },
    {
      id: 7,
      title: 'API Development & Integration',
      icon: '🔗',
      category: 'backend',
      description: 'RESTful APIs, GraphQL endpoints, and third-party integrations for seamless data exchange.',
      features: ['RESTful APIs', 'GraphQL', 'Third-party Integration', 'Documentation', 'Security'],
      price: 'Starting $2,000',
      gradient: 'from-teal-500 to-green-500',
      platforms: ['🔄 REST API', '📊 GraphQL', '🔗 Integrations'],
      duration: '2-4 weeks'
    },
    {
      id: 8,
      title: 'CMS Development',
      icon: '📝',
      category: 'cms',
      description: 'Custom Content Management Systems tailored to your specific content and workflow needs.',
      features: ['Custom CMS', 'User Roles', 'Content Workflow', 'Media Management', 'Multi-language'],
      price: 'Starting $4,000',
      gradient: 'from-pink-500 to-rose-500',
      platforms: ['📝 Custom CMS', '🔧 Admin Panel', '👥 Multi-user'],
      duration: '4-8 weeks'
    },
    {
      id: 9,
      title: 'Database Design & Development',
      icon: '🗄️',
      category: 'backend',
      description: 'Optimized database architecture and development for high-performance applications.',
      features: ['Database Design', 'Query Optimization', 'Data Migration', 'Backup Solutions', 'Performance Tuning'],
      price: 'Starting $1,800',
      gradient: 'from-gray-600 to-gray-500',
      platforms: ['🗄️ MySQL', '🐘 PostgreSQL', '🍃 MongoDB'],
      duration: '1-3 weeks'
    },
    {
      id: 10,
      title: 'UI/UX Design & Development',
      icon: '🎨',
      category: 'design',
      description: 'Beautiful, user-centered design and development with focus on user experience and conversion.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Responsive Design', 'Usability Testing'],
      price: 'Starting $2,200',
      gradient: 'from-violet-500 to-purple-500',
      platforms: ['🎨 Figma', '💻 Code', '📱 Responsive'],
      duration: '2-4 weeks'
    },
    {
      id: 11,
      title: 'Landing Page Development',
      icon: '🎯',
      category: 'web',
      description: 'High-converting landing pages optimized for lead generation and sales conversion.',
      features: ['Conversion Optimization', 'A/B Testing', 'Lead Forms', 'Analytics Integration', 'Fast Loading'],
      price: 'Starting $800',
      gradient: 'from-yellow-500 to-orange-500',
      platforms: ['🎯 Landing Page', '📊 Analytics', '🔄 A/B Testing'],
      duration: '1-2 weeks'
    },
    {
      id: 12,
      title: 'Web Application Maintenance',
      icon: '🔧',
      category: 'maintenance',
      description: 'Ongoing maintenance, updates, security patches, and performance optimization for your applications.',
      features: ['Security Updates', 'Performance Monitoring', 'Bug Fixes', 'Content Updates', '24/7 Support'],
      price: 'Starting $500/month',
      gradient: 'from-emerald-500 to-teal-500',
      platforms: ['🔧 Maintenance', '🛡️ Security', '📈 Monitoring'],
      duration: 'Ongoing'
    }
  ];

  const developmentStats = [
    { number: '300+', label: 'Projects Completed', icon: '🚀' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '150+', label: 'Happy Clients', icon: '😊' },
    { number: '24/7', label: 'Support Available', icon: '🛡️' }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400', category: 'Frontend' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400', category: 'Backend' },
    { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-orange-400', category: 'Backend' },
    { name: 'Flutter', icon: '💙', color: 'from-blue-500 to-indigo-400', category: 'Mobile' },
    { name: 'WordPress', icon: '📘', color: 'from-blue-600 to-purple-400', category: 'CMS' },
    { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-teal-400', category: 'Database' },
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-400', category: 'Cloud' },
    { name: 'GraphQL', icon: '💜', color: 'from-pink-400 to-violet-400', category: 'API' }
  ];

  const filteredServices = activeTab === 'all' 
    ? developmentServices 
    : developmentServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          
          .animate-slideDown {
            animation: slideDown 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }
          
          .animate-slideUp {
            animation: slideUp 0.8s ease-out forwards;
            opacity: 0;
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }
        `
      }} />
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 z-10 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slideDown">
            WEB & APP
            <br />
            <span className="text-5xl md:text-7xl">DEVELOPMENT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Complete web and mobile app development solutions from concept to deployment with cutting-edge technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-3xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌐</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>📱</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>⚛️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🛒</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>☁️</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slideUp" style={{ animationDelay: '1s' }}>
            <Link to="/Contact">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            </Link>
           
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {developmentStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies We Master
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative p-6 bg-gradient-to-br ${tech.color} rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1">{tech.name}</h3>
                  <p className="text-sm text-white/80">{tech.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Filter Tabs */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Services', icon: '🎯' },
              { key: 'web', label: 'Web Development', icon: '🌐' },
              { key: 'mobile', label: 'Mobile Apps', icon: '📱' },
              { key: 'cms', label: 'CMS Solutions', icon: '📝' },
              { key: 'backend', label: 'Backend & API', icon: '🔗' },
              { key: 'design', label: 'UI/UX Design', icon: '🎨' },
              { key: 'maintenance', label: 'Maintenance', icon: '🔧' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-105'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From concept to deployment, we build digital solutions that drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with gradient border */}
                <div className={`h-full bg-gradient-to-br ${service.gradient} p-1 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20`}>
                  <div className="h-full bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-3 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.platforms.map((platform, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-gray-300"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                      <div className="text-sm text-blue-400">
                        ⏱️ Timeline: {service.duration}
                      </div>
                    </div>
                    
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'We understand your requirements and create detailed project roadmap', icon: '🔍' },
              { step: '02', title: 'Design & Prototype', desc: 'Create wireframes, mockups, and interactive prototypes for approval', icon: '🎨' },
              { step: '03', title: 'Development & Testing', desc: 'Build your application with clean code and thorough testing', icon: '⚙️' },
              { step: '04', title: 'Launch & Support', desc: 'Deploy your application and provide ongoing maintenance support', icon: '🚀' }
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-4">{process.step}</div>
                <div className="text-3xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', desc: 'Our developers have 5+ years of experience with latest technologies', icon: '👨‍💻' },
              { title: 'Quality Assurance', desc: 'Rigorous testing ensures bug-free, high-performance applications', icon: '✅' },
              { title: 'Agile Methodology', desc: 'We follow agile development for faster delivery and flexibility', icon: '🔄' },
              { title: 'Scalable Solutions', desc: 'Build applications that grow with your business needs', icon: '📈' },
              { title: 'Modern Technologies', desc: 'We use cutting-edge tech stack for future-proof solutions', icon: '⚡' },
              { title: 'Ongoing Support', desc: '24/7 support and maintenance to keep your app running smoothly', icon: '🛡️' }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's turn your ideas into powerful digital solutions that drive growth and success for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/Contact">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            </Link>

            
           
          </div>
          
          
        </div>
      </section>

  
    </div>
  );
}