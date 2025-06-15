import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Custom Card component to replace shadcn/ui dependency
const Card = ({ children, className = "" }) => (
  <div className={`rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export default function CustomSoftwarePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const softwareServices = [
    {
      id: 1,
      title: 'Custom Web Applications',
      icon: '🌐',
      category: 'web',
      description: 'Scalable and responsive web applications built with modern frameworks and cutting-edge technologies.',
      features: ['Responsive Design', 'Progressive Web Apps', 'API Integration', 'Cloud Deployment', 'Performance Optimization'],
      price: 'Starting $2500/project',
      gradient: 'from-blue-500 to-indigo-500',
      platforms: ['💻 Desktop', '📱 Mobile', '🌐 Web']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: '📱',
      category: 'mobile',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'Native Performance', 'App Store Optimization', 'Push Notifications'],
      price: 'Starting $3000/project',
      gradient: 'from-purple-500 to-violet-500',
      platforms: ['🍎 iOS', '🤖 Android', '🔄 Cross-Platform']
    },
    {
      id: 3,
      title: 'Enterprise Software Solutions',
      icon: '🏢',
      category: 'enterprise',
      description: 'Comprehensive enterprise software systems including ERP, CRM, and custom business management solutions.',
      features: ['ERP Systems', 'CRM Solutions', 'Workflow Management', 'Data Analytics', 'System Integration'],
      price: 'Starting $5000/project',
      gradient: 'from-green-500 to-teal-500',
      platforms: ['🏢 Enterprise', '☁️ Cloud', '🔗 Integration']
    },
    {
      id: 4,
      title: 'E-commerce Development',
      icon: '🛒',
      category: 'ecommerce',
      description: 'Complete e-commerce solutions with payment gateways, inventory management, and customer analytics.',
      features: ['Payment Integration', 'Inventory Management', 'Customer Analytics', 'Multi-vendor Support', 'Mobile Commerce'],
      price: 'Starting $2000/project',
      gradient: 'from-pink-500 to-rose-500',
      platforms: ['🛒 Shopping', '💳 Payments', '📊 Analytics']
    },
    {
      id: 5,
      title: 'API Development & Integration',
      icon: '🔗',
      category: 'api',
      description: 'RESTful APIs, GraphQL endpoints, and third-party integrations for seamless data exchange.',
      features: ['RESTful APIs', 'GraphQL', 'Third-party Integration', 'API Documentation', 'Security Implementation'],
      price: 'Starting $1500/project',
      gradient: 'from-orange-500 to-red-500',
      platforms: ['🔗 REST', '📊 GraphQL', '🔒 Secure']
    },
    {
      id: 6,
      title: 'Database Design & Management',
      icon: '🗄️',
      category: 'database',
      description: 'Robust database architecture, optimization, and management solutions for high-performance applications.',
      features: ['Database Design', 'Performance Optimization', 'Data Migration', 'Backup Solutions', 'Cloud Databases'],
      price: 'Starting $1200/project',
      gradient: 'from-cyan-500 to-blue-500',
      platforms: ['🗄️ SQL', '📊 NoSQL', '☁️ Cloud DB']
    },
    {
      id: 7,
      title: 'DevOps & Cloud Solutions',
      icon: '☁️',
      category: 'devops',
      description: 'Complete DevOps implementation including CI/CD pipelines, cloud deployment, and infrastructure management.',
      features: ['CI/CD Pipelines', 'Cloud Deployment', 'Container Management', 'Monitoring & Logging', 'Infrastructure as Code'],
      price: 'Starting $1800/project',
      gradient: 'from-indigo-500 to-purple-500',
      platforms: ['☁️ AWS', '🔵 Azure', '🟡 GCP']
    },
    {
      id: 8,
      title: 'Desktop Applications',
      icon: '💻',
      category: 'desktop',
      description: 'Cross-platform desktop applications with rich user interfaces and powerful functionality.',
      features: ['Cross-Platform', 'Rich UI/UX', 'File Management', 'System Integration', 'Auto-Updates'],
      price: 'Starting $2200/project',
      gradient: 'from-yellow-500 to-orange-500',
      platforms: ['🪟 Windows', '🍎 macOS', '🐧 Linux']
    },
    {
      id: 9,
      title: 'Microservices Architecture',
      icon: '🔧',
      category: 'architecture',
      description: 'Scalable microservices architecture for enterprise-grade applications with high availability.',
      features: ['Service Architecture', 'Load Balancing', 'Service Discovery', 'API Gateway', 'Fault Tolerance'],
      price: 'Starting $4000/project',
      gradient: 'from-red-500 to-pink-500',
      platforms: ['🔧 Services', '⚖️ Load Balancer', '🛡️ Gateway']
    },
    {
      id: 10,
      title: 'Software Maintenance & Support',
      icon: '🛠️',
      category: 'maintenance',
      description: 'Ongoing software maintenance, bug fixes, updates, and technical support for existing applications.',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', '24/7 Support', 'Feature Enhancements'],
      price: 'Starting $800/month',
      gradient: 'from-teal-500 to-green-500',
      platforms: ['🛠️ Maintenance', '📞 Support', '🔒 Security']
    },
    {
      id: 11,
      title: 'Software Testing & QA',
      icon: '🧪',
      category: 'testing',
      description: 'Comprehensive software testing including automated testing, performance testing, and quality assurance.',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'Manual QA', 'Test Documentation'],
      price: 'Starting $1000/project',
      gradient: 'from-purple-500 to-indigo-500',
      platforms: ['🧪 Testing', '⚡ Performance', '🔒 Security']
    },
    {
      id: 12,
      title: 'Legacy System Modernization',
      icon: '🔄',
      category: 'modernization',
      description: 'Modernize legacy systems with new technologies while preserving critical business functionality.',
      features: ['System Migration', 'Code Refactoring', 'Technology Upgrade', 'Data Migration', 'Training & Support'],
      price: 'Starting $3500/project',
      gradient: 'from-emerald-500 to-teal-500',
      platforms: ['🔄 Migration', '⬆️ Upgrade', '📊 Data Transfer']
    }
  ];

  const softwareStats = [
    { number: '500+', label: 'Projects Delivered', icon: '🚀' },
    { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '50+', label: 'Technologies Mastered', icon: '💻' },
    { number: '200+', label: 'Happy Clients', icon: '🎉' }
  ];

  const softwareTechnologies = [
    { name: 'React/Next.js', icon: '⚛️', color: 'from-blue-400 to-cyan-400', capability: 'Frontend' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-emerald-400', capability: 'Backend' },
    { name: 'Python/Django', icon: '🐍', color: 'from-blue-500 to-green-400', capability: 'Full Stack' },
    { name: 'React Native', icon: '📱', color: 'from-purple-400 to-pink-400', capability: 'Mobile' },
    { name: 'AWS Cloud', icon: '☁️', color: 'from-orange-400 to-yellow-400', capability: 'Cloud' },
    { name: 'Docker/K8s', icon: '🐳', color: 'from-blue-400 to-indigo-400', capability: 'DevOps' }
  ];

  const filteredServices = activeTab === 'all' 
    ? softwareServices 
    : softwareServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 z-10 animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-slideDown">
            CUSTOM SOFTWARE
            <br />
            <span className="text-5xl md:text-7xl">DEVELOPMENT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Build powerful, scalable, and innovative software solutions tailored to your business needs with cutting-edge technologies
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-3xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>💻</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>📱</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🌐</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>⚙️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🚀</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slideUp" style={{ animationDelay: '1s' }}>
            <Link to="/Contact">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
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
            {softwareStats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technologies We Excel In
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softwareTechnologies.map((tech, index) => (
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
                  <h3 className="font-bold text-white mb-1 text-sm">{tech.name}</h3>
                  <p className="text-xs text-white/80">{tech.capability}</p>
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
              { key: 'web', label: 'Web Apps', icon: '🌐' },
              { key: 'mobile', label: 'Mobile Apps', icon: '📱' },
              { key: 'enterprise', label: 'Enterprise', icon: '🏢' },
              { key: 'ecommerce', label: 'E-commerce', icon: '🛒' },
              { key: 'api', label: 'API Development', icon: '🔗' },
              { key: 'database', label: 'Database', icon: '🗄️' },
              { key: 'devops', label: 'DevOps', icon: '☁️' },
              { key: 'desktop', label: 'Desktop', icon: '💻' },
              { key: 'testing', label: 'Testing & QA', icon: '🧪' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105'
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

      {/* Software Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Software Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive software development services to transform your ideas into powerful digital solutions
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
                <Card className={`h-full bg-gradient-to-br ${service.gradient} p-1 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20`}>
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
                          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {service.platforms.map((platform, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-gray-700/50 px-2 py-1 rounded-full text-gray-300"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                      {/* <span className="text-lg font-semibold text-green-400">
                        {service.price}
                      </span>
                      <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-200">
                        Get Quote
                      </button> */}
                    </div>
                  </div>
                </Card>
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Understand requirements, analyze needs, and create detailed project roadmap', icon: '🔍' },
              { step: '02', title: 'Design & Architecture', desc: 'Create system architecture, UI/UX designs, and technical specifications', icon: '🎨' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing and quality assurance', icon: '⚡' },
              { step: '04', title: 'Deploy & Support', desc: 'Production deployment with ongoing maintenance and support', icon: '🚀' }
            ].map((process, index) => (
              <div
                key={process.step}
                className="text-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-cyan-400 mb-4">{process.step}</div>
                <div className="text-3xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{process.title}</h3>
                <p className="text-gray-300 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transform your vision into reality with our expert software development team. From concept to deployment, we deliver exceptional results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/Contact">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            </Link>
           
          </div>
        </div>
      </section>

     

      {/* Custom Styles */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
}