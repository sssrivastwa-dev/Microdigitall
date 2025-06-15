import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AISolutionsPage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const aiServices = [
    {
      id: 1,
      title: 'AI Chatbots & Virtual Assistants',
      icon: '🤖',
      category: 'automation',
      description: 'Intelligent chatbots and virtual assistants that provide 24/7 customer support and automate interactions.',
      features: ['Natural Language Processing', '24/7 Customer Support', 'Multi-language Support', 'CRM Integration', 'Learning & Adaptation'],
      gradient: 'from-blue-500 to-indigo-500',
      glowColor: 'blue-500',
      platforms: ['💬 WhatsApp', '🌐 Website', '📱 Mobile App']
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      icon: '🧠',
      category: 'analytics',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent automation.',
      features: ['Predictive Analytics', 'Data Pattern Recognition', 'Custom ML Models', 'Real-time Processing', 'API Integration'],
      gradient: 'from-purple-500 to-violet-500',
      glowColor: 'purple-500',
      platforms: ['📊 Analytics', '🔗 API', '☁️ Cloud']
    },
    {
      id: 3,
      title: 'Computer Vision & OCR',
      icon: '👁️',
      category: 'vision',
      description: 'Advanced computer vision solutions for image recognition, document processing, and visual analysis.',
      features: ['Image Recognition', 'Document OCR', 'Quality Control', 'Facial Recognition', 'Object Detection'],
      gradient: 'from-green-500 to-teal-500',
      glowColor: 'green-500',
      platforms: ['📷 Camera', '📄 Documents', '🏭 Manufacturing']
    },
    {
      id: 4,
      title: 'AI Content Generation',
      icon: '✍️',
      category: 'content',
      description: 'AI-powered content creation including copywriting, image generation, and multimedia content.',
      features: ['AI Copywriting', 'Image Generation', 'Video Creation', 'Content Optimization', 'Brand Voice Training'],
      gradient: 'from-pink-500 to-rose-500',
      glowColor: 'pink-500',
      platforms: ['📝 Writing', '🎨 Images', '🎬 Video']
    },
    {
      id: 5,
      title: 'Process Automation',
      icon: '⚙️',
      category: 'automation',
      description: 'Intelligent process automation to streamline workflows and eliminate repetitive tasks.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling', 'Error Handling', 'Performance Monitoring'],
      gradient: 'from-orange-500 to-red-500',
      glowColor: 'orange-500',
      platforms: ['🔄 Workflows', '📊 Data', '⏰ Scheduling']
    },
    {
      id: 6,
      title: 'AI-Powered Analytics',
      icon: '📊',
      category: 'analytics',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence and machine learning.',
      features: ['Predictive Insights', 'Real-time Dashboards', 'Anomaly Detection', 'Trend Analysis', 'Custom Reports'],
      gradient: 'from-cyan-500 to-blue-500',
      glowColor: 'cyan-500',
      platforms: ['📈 Analytics', '📊 Dashboards', '📋 Reports']
    },
    {
      id: 7,
      title: 'Voice AI & Speech Recognition',
      icon: '🎙️',
      category: 'voice',
      description: 'Voice-enabled AI solutions including speech recognition, voice commands, and audio processing.',
      features: ['Speech-to-Text', 'Voice Commands', 'Audio Analysis', 'Multi-language Support', 'Real-time Processing'],
      gradient: 'from-indigo-500 to-purple-500',
      glowColor: 'indigo-500',
      platforms: ['🎙️ Voice', '📱 Mobile', '🏠 Smart Devices']
    },
    {
      id: 8,
      title: 'AI Recommendation Systems',
      icon: '🎯',
      category: 'personalization',
      description: 'Intelligent recommendation engines for personalized user experiences and increased engagement.',
      features: ['Personalized Recommendations', 'User Behavior Analysis', 'Content Filtering', 'A/B Testing', 'Performance Optimization'],
      gradient: 'from-yellow-500 to-orange-500',
      glowColor: 'yellow-500',
      platforms: ['🛒 E-commerce', '📺 Streaming', '📰 Content']
    },
    {
      id: 9,
      title: 'AI Security Solutions',
      icon: '🛡️',
      category: 'security',
      description: 'AI-powered cybersecurity solutions for threat detection, fraud prevention, and security monitoring.',
      features: ['Threat Detection', 'Fraud Prevention', 'Behavioral Analysis', 'Real-time Monitoring', 'Incident Response'],
      gradient: 'from-red-500 to-pink-500',
      glowColor: 'red-500',
      platforms: ['🔒 Security', '🖥️ Network', '📱 Mobile']
    }
  ];

  const aiStats = [
    { number: '300+', label: 'AI Models Deployed', icon: '🚀' },
    { number: '85%', label: 'Efficiency Improvement', icon: '⚡' },
    { number: '1M+', label: 'Data Points Processed', icon: '📊' },
    { number: '150+', label: 'Satisfied Clients', icon: '🎉' }
  ];

  const aiTechnologies = [
    { name: 'TensorFlow', icon: '🔬', color: 'from-orange-400 to-red-400', capability: 'Deep Learning' },
    { name: 'OpenAI GPT', icon: '🧠', color: 'from-green-400 to-emerald-400', capability: 'Language AI' },
    { name: 'Computer Vision', icon: '👁️', color: 'from-blue-400 to-indigo-400', capability: 'Image AI' },
    { name: 'AWS AI', icon: '☁️', color: 'from-yellow-400 to-orange-400', capability: 'Cloud AI' },
    { name: 'Python AI', icon: '🐍', color: 'from-blue-500 to-green-400', capability: 'ML Development' },
    { name: 'Neural Networks', icon: '🕸️', color: 'from-purple-400 to-pink-400', capability: 'Deep AI' }
  ];

  const filteredServices = activeTab === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  // Robot Clone Component
  const RobotClone = ({ delay = 0, direction = 1 }) => (
    <div 
      className="absolute opacity-5 pointer-events-none animate-float-robot"
      style={{ 
        animationDelay: `${delay}s`,
        transform: `scaleX(${direction})`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    >
      <div className="text-8xl filter blur-sm">🤖</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      
      {/* Advanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-grid-move"></div>
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#0099ff" />
            </linearGradient>
          </defs>
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float-particle opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Robot Clones Background */}
        {Array.from({ length: 15 }).map((_, i) => (
          <RobotClone key={i} delay={i * 0.5} direction={Math.random() > 0.5 ? 1 : -1} />
        ))}
        
        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Mouse Follower */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full filter blur-3xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 z-10 max-w-6xl mx-auto">
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-glow-text">
              ARTIFICIAL
              <br />
              <span className="text-6xl md:text-8xl bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                INTELLIGENCE
              </span>
            </h1>
            
            {/* Floating Tech Icons */}
            <div className="absolute -top-10 -left-10 text-4xl animate-float-slow opacity-70">🧠</div>
            <div className="absolute -top-5 -right-10 text-3xl animate-float-slow opacity-70" style={{ animationDelay: '1s' }}>⚡</div>
            <div className="absolute -bottom-5 -left-5 text-3xl animate-float-slow opacity-70" style={{ animationDelay: '2s' }}>🔬</div>
            <div className="absolute -bottom-10 -right-5 text-4xl animate-float-slow opacity-70" style={{ animationDelay: '0.5s' }}>🚀</div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
            Transform your business with cutting-edge AI solutions including machine learning, automation, computer vision, and intelligent analytics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-fade-in-up opacity-0" style={{ animationDelay: '1.2s' }}>
            <Link to="/Contact">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-1 transform-gpu">
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                Get AI Consultation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse opacity-20"></div>
            </button>
            </Link>
            
          
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm border-y border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aiStats.map((stat, index) => (
              <div
                key={stat.label}
                className="group text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-glow-text">
              AI Technologies We Master
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`group relative p-8 bg-gradient-to-br ${tech.color} rounded-3xl hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer animate-fade-in-up opacity-0 transform-gpu`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-3xl group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    {tech.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm group-hover:text-lg transition-all duration-500">{tech.name}</h3>
                  <p className="text-xs text-white/80 group-hover:text-white transition-colors duration-500">{tech.capability}</p>
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
              { key: 'all', label: 'All Solutions', icon: '🎯' },
              { key: 'automation', label: 'Automation', icon: '⚙️' },
              { key: 'analytics', label: 'Analytics', icon: '📊' },
              { key: 'vision', label: 'Computer Vision', icon: '👁️' },
              { key: 'content', label: 'Content AI', icon: '✍️' },
              { key: 'voice', label: 'Voice AI', icon: '🎙️' },
              { key: 'personalization', label: 'Personalization', icon: '🎯' },
              { key: 'security', label: 'AI Security', icon: '🛡️' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-500 flex items-center gap-3 text-sm transform hover:scale-110 ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105 shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-glow-text">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive artificial intelligence solutions to revolutionize your business operations
            </p>
            <div className="w-40 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 animate-fade-in-up opacity-0 transform-gpu"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative h-full bg-gradient-to-br ${service.gradient} p-1 rounded-3xl transition-all duration-700 hover:shadow-2xl hover:shadow-${service.glowColor}/30`}>
                  <div className="h-full bg-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-700">
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-700`}></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-8">
                        <div className="text-6xl mb-6 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div 
                            key={idx}
                            className="flex items-center space-x-3 text-sm text-gray-400 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-2"
                            style={{ transitionDelay: `${idx * 0.1}s` }}
                          >
                            <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-500`}></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-gray-700/50 px-3 py-2 rounded-full text-gray-300 group-hover:bg-gray-600/50 group-hover:text-white transition-all duration-500 transform group-hover:scale-105"
                              style={{ transitionDelay: `${idx * 0.1}s` }}
                            >
                              {platform}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-700/50 group-hover:border-cyan-500/50 transition-colors duration-500">
                      <Link to="/contact">
                        <button className={`w-full px-6 py-4 bg-gradient-to-r ${service.gradient} rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-500 transform hover:shadow-lg hover:shadow-${service.glowColor}/50`}>
                          <span className="flex items-center justify-center gap-2">
                            <span>Explore Solution</span>
                            <span className="text-lg">→</span>
                          </span>
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-black/90 to-gray-900/90 backdrop-blur-sm border-y border-cyan-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-glow-text">
              Our AI Implementation Process
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'AI Assessment & Strategy', desc: 'Analyze your business needs and develop a comprehensive AI strategy', icon: '🔍', color: 'from-cyan-500 to-blue-500' },
              { step: '02', title: 'Data Preparation', desc: 'Prepare and optimize your data for AI model training and deployment', icon: '📊', color: 'from-purple-500 to-pink-500' },
              { step: '03', title: 'AI Model Development', desc: 'Build, train, and fine-tune custom AI models for your specific requirements', icon: '⚡', color: 'from-green-500 to-teal-500' },
              { step: '04', title: 'Deploy & Monitor', desc: 'Deploy AI solutions and continuously monitor performance for optimization', icon: '🚀', color: 'from-orange-500 to-red-500' }
            ].map((process, index) => (
              <div
                key={process.step}
                className="group relative text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-700 transform hover:scale-110 hover:-translate-y-4 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-700`}></div>
                
                <div className="relative z-10">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${process.color} bg-clip-text text-transparent mb-6 group-hover:scale-125 transition-transform duration-500`}>
                    {process.step}
                  </div>
                  <div className="text-4xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">{process.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-500">{process.title}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-500">{process.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-glow-text">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl text-gray-300 mb-16 leading-relaxed max-w-3xl mx-auto">
            Transform your business with intelligent AI solutions that automate processes, enhance decision-making, and drive unprecedented growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
             <Link to="/Contact">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl font-bold text-xl overflow-hidden transition-all duration-700 hover:scale-110 hover:rotate-1 transform-gpu">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="text-2xl">🚀</span>
                Start AI Transformation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse opacity-20"></div>
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
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-robot {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow-text {
          0%, 100% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.5); }
          50% { text-shadow: 0 0 40px rgba(6, 182, 212, 0.8), 0 0 60px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes grid-move {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(20px) translateY(20px); }
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
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
        }
        
        .animate-float-robot {
          animation: float-robot 6s infinite ease-in-out;
        }
        
        .animate-float-slow {
          animation: float-slow 3s infinite ease-in-out;
        }
        
        .animate-glow-text {
          animation: glow-text 2s infinite ease-in-out;
        }
        
        .animate-grid-move {
          animation: grid-move 20s infinite linear;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
}