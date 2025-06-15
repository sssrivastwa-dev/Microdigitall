import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Card components to replace shadcn/ui imports
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export default function ITConsultingStrategyPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const consultingServices = [
    {
      id: 1,
      title: 'Digital Transformation Strategy',
      icon: '🚀',
      category: 'transformation',
      description: 'Comprehensive digital transformation roadmaps to modernize your business operations and technology stack.',
      features: ['Strategic Planning', 'Technology Assessment', 'Change Management', 'Implementation Roadmap', 'ROI Analysis'],
      price: 'Starting $5000/project',
      gradient: 'from-blue-500 to-indigo-500',
      platforms: ['📊 Analytics', '🔄 Process Automation', '☁️ Cloud First']
    },
    {
      id: 2,
      title: 'IT Infrastructure Assessment',
      icon: '🔍',
      category: 'assessment',
      description: 'In-depth analysis of your current IT infrastructure with recommendations for optimization and modernization.',
      features: ['Infrastructure Audit', 'Performance Analysis', 'Security Assessment', 'Cost Optimization', 'Scalability Planning'],
      price: 'Starting $3500/project',
      gradient: 'from-purple-500 to-violet-500',
      platforms: ['🏗️ Infrastructure', '📈 Performance', '🔒 Security']
    },
    {
      id: 3,
      title: 'Enterprise Architecture Design',
      icon: '🏛️',
      category: 'architecture',
      description: 'Design scalable enterprise architecture frameworks that align technology with business objectives.',
      features: ['Architecture Framework', 'System Integration', 'Technology Standards', 'Governance Models', 'Blueprint Development'],
      price: 'Starting $6000/project',
      gradient: 'from-green-500 to-teal-500',
      platforms: ['🏛️ Enterprise Architecture', '🔗 Integration', '📋 Standards']
    },
    {
      id: 4,
      title: 'IT Governance & Compliance',
      icon: '⚖️',
      category: 'governance',
      description: 'Establish robust IT governance frameworks and ensure compliance with industry standards and regulations.',
      features: ['Governance Framework', 'Compliance Management', 'Risk Assessment', 'Policy Development', 'Audit Support'],
      price: 'Starting $4500/project',
      gradient: 'from-pink-500 to-rose-500',
      platforms: ['⚖️ Governance', '📜 Compliance', '🛡️ Risk Management']
    },
    {
      id: 5,
      title: 'Technology Stack Optimization',
      icon: '⚙️',
      category: 'optimization',
      description: 'Optimize your technology stack for better performance, cost-efficiency, and maintainability.',
      features: ['Stack Analysis', 'Performance Tuning', 'Cost Reduction', 'Modernization Planning', 'Vendor Management'],
      price: 'Starting $3000/project',
      gradient: 'from-orange-500 to-red-500',
      platforms: ['⚙️ Tech Stack', '💰 Cost Optimization', '📊 Performance']
    },
    {
      id: 6,
      title: 'Cybersecurity Strategy & Planning',
      icon: '🔒',
      category: 'security',
      description: 'Develop comprehensive cybersecurity strategies to protect your organization from evolving threats.',
      features: ['Security Strategy', 'Threat Assessment', 'Security Framework', 'Incident Response', 'Training Programs'],
      price: 'Starting $4000/project',
      gradient: 'from-cyan-500 to-blue-500',
      platforms: ['🔒 Security Strategy', '🛡️ Threat Protection', '🚨 Incident Response']
    },
    {
      id: 7,
      title: 'Business Process Automation',
      icon: '🤖',
      category: 'automation',
      description: 'Identify and automate business processes to improve efficiency and reduce operational costs.',
      features: ['Process Analysis', 'Automation Strategy', 'Workflow Design', 'RPA Implementation', 'Performance Metrics'],
      price: 'Starting $3800/project',
      gradient: 'from-indigo-500 to-purple-500',
      platforms: ['🤖 RPA', '🔄 Workflow', '📊 Process Analytics']
    },
    {
      id: 8,
      title: 'Data Strategy & Analytics',
      icon: '📊',
      category: 'data',
      description: 'Transform your data into strategic assets with comprehensive data strategy and analytics solutions.',
      features: ['Data Strategy', 'Analytics Framework', 'Data Governance', 'BI Implementation', 'Data Lake Design'],
      price: 'Starting $4200/project',
      gradient: 'from-yellow-500 to-orange-500',
      platforms: ['📊 Analytics', '🗄️ Data Management', '🧠 Business Intelligence']
    },
    {
      id: 9,
      title: 'IT Project Management & PMO',
      icon: '📋',
      category: 'project',
      description: 'Professional IT project management services and Project Management Office (PMO) establishment.',
      features: ['Project Planning', 'PMO Setup', 'Resource Management', 'Risk Management', 'Quality Assurance'],
      price: 'Starting $2800/project',
      gradient: 'from-red-500 to-pink-500',
      platforms: ['📋 Project Management', '🎯 PMO', '⚖️ Resource Planning']
    },
    {
      id: 10,
      title: 'Vendor Management & Sourcing',
      icon: '🤝',
      category: 'vendor',
      description: 'Strategic vendor management and IT sourcing to optimize costs and improve service delivery.',
      features: ['Vendor Assessment', 'Contract Negotiation', 'SLA Management', 'Cost Optimization', 'Relationship Management'],
      price: 'Starting $2500/project',
      gradient: 'from-teal-500 to-green-500',
      platforms: ['🤝 Vendor Relations', '📄 Contract Management', '💰 Cost Control']
    },
    {
      id: 11,
      title: 'Change Management & Training',
      icon: '🎓',
      category: 'change',
      description: 'Manage organizational change and provide comprehensive training for technology adoption.',
      features: ['Change Strategy', 'Training Programs', 'User Adoption', 'Communication Plans', 'Performance Metrics'],
      price: 'Starting $3200/project',
      gradient: 'from-purple-500 to-indigo-500',
      platforms: ['🎓 Training', '🔄 Change Management', '👥 User Adoption']
    },
    {
      id: 12,
      title: 'IT Budget Planning & ROI Analysis',
      icon: '💼',
      category: 'budget',
      description: 'Strategic IT budget planning and ROI analysis to maximize technology investments and business value.',
      features: ['Budget Planning', 'ROI Analysis', 'Cost-Benefit Analysis', 'Investment Strategy', 'Financial Modeling'],
      price: 'Starting $2200/project',
      gradient: 'from-emerald-500 to-teal-500',
      platforms: ['💼 Budget Planning', '📈 ROI Analysis', '💰 Investment Strategy']
    }
  ];

  const consultingStats = [
    { number: '250+', label: 'Strategic Projects', icon: '🎯' },
    { number: '98%', label: 'Success Rate', icon: '⭐' },
    { number: '15+', label: 'Years Experience', icon: '🏆' },
    { number: '100+', label: 'Enterprise Clients', icon: '🏢' }
  ];

  const consultingExpertise = [
    { name: 'Strategic Planning', icon: '🎯', color: 'from-blue-400 to-cyan-400', capability: 'Strategy' },
    { name: 'Digital Transformation', icon: '🚀', color: 'from-green-400 to-emerald-400', capability: 'Innovation' },
    { name: 'Risk Management', icon: '🛡️', color: 'from-red-400 to-pink-400', capability: 'Security' },
    { name: 'Process Optimization', icon: '⚙️', color: 'from-purple-400 to-indigo-400', capability: 'Efficiency' },
    { name: 'Data Analytics', icon: '📊', color: 'from-orange-400 to-yellow-400', capability: 'Insights' },
    { name: 'Change Management', icon: '🔄', color: 'from-cyan-400 to-blue-400', capability: 'Transformation' }
  ];

  const filteredServices = activeTab === 'all' 
    ? consultingServices 
    : consultingServices.filter(service => service.category === activeTab);

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
            IT CONSULTING
            <br />
            <span className="text-5xl md:text-7xl">& STRATEGY</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Strategic IT consulting and advisory services to align technology with your business goals and drive digital transformation success
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-3xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>🎯</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💡</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>📊</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🚀</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>⚙️</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slideUp" style={{ animationDelay: '1s' }}>
            <Link to="/Contact">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Strategic Planning</span>
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
            {consultingStats.map((stat, index) => (
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

      {/* Expertise Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Consulting Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {consultingExpertise.map((expertise, index) => (
              <div
                key={expertise.name}
                className={`group relative p-6 bg-gradient-to-br ${expertise.color} rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {expertise.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1 text-sm">{expertise.name}</h3>
                  <p className="text-xs text-white/80">{expertise.capability}</p>
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
              { key: 'transformation', label: 'Digital Transformation', icon: '🚀' },
              { key: 'assessment', label: 'IT Assessment', icon: '🔍' },
              { key: 'architecture', label: 'Enterprise Architecture', icon: '🏛️' },
              { key: 'governance', label: 'Governance', icon: '⚖️' },
              { key: 'optimization', label: 'Optimization', icon: '⚙️' },
              { key: 'security', label: 'Security Strategy', icon: '🔒' },
              { key: 'automation', label: 'Process Automation', icon: '🤖' },
              { key: 'data', label: 'Data Strategy', icon: '📊' },
              { key: 'project', label: 'Project Management', icon: '📋' }
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

      {/* Consulting Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic IT consulting services to optimize your technology investments and accelerate business growth
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
                    
                   
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Strategic Consulting Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', desc: 'Understand business objectives, assess current state, and identify opportunities', icon: '🔍' },
              { step: '02', title: 'Strategy Development', desc: 'Create comprehensive IT strategy aligned with business goals and market trends', icon: '🎯' },
              { step: '03', title: 'Implementation Planning', desc: 'Develop detailed roadmap with timelines, resources, and success metrics', icon: '📋' },
              { step: '04', title: 'Execution & Support', desc: 'Guide implementation and provide ongoing support for sustained success', icon: '🚀' }
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
            Ready to Transform Your IT Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Partner with our expert consultants to align your technology investments with business objectives and accelerate your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/Contact">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
              <span className="relative z-10">Schedule Consultation</span>
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