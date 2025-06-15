import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Card component to replace shadcn/ui import
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

export default function CloudInfrastructurePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const cloudServices = [
    {
      id: 1,
      title: 'Cloud Migration & Strategy',
      icon: '☁️',
      category: 'migration',
      description: 'Seamless migration of your existing infrastructure to cloud with comprehensive strategy and planning.',
      features: ['Migration Assessment', 'Cloud Strategy', 'Risk Mitigation', 'Performance Optimization', 'Cost Analysis'],
      price: 'Starting $3000/project',
      gradient: 'from-blue-500 to-indigo-500',
      platforms: ['☁️ AWS', '🔵 Azure', '🟡 Google Cloud']
    },
    {
      id: 2,
      title: 'Infrastructure as Code (IaC)',
      icon: '⚙️',
      category: 'automation',
      description: 'Automated infrastructure provisioning and management using modern IaC tools and best practices.',
      features: ['Terraform Automation', 'CloudFormation', 'ARM Templates', 'Version Control', 'Environment Management'],
      price: 'Starting $2500/project',
      gradient: 'from-purple-500 to-violet-500',
      platforms: ['🔧 Terraform', '📋 CloudFormation', '🔄 ARM']
    },
    {
      id: 3,
      title: 'Container Orchestration',
      icon: '🐳',
      category: 'containers',
      description: 'Complete containerization solutions with Kubernetes, Docker, and container management platforms.',
      features: ['Kubernetes Setup', 'Docker Containerization', 'Container Registry', 'Service Mesh', 'Auto-scaling'],
      price: 'Starting $3500/project',
      gradient: 'from-green-500 to-teal-500',
      platforms: ['🐳 Docker', '⚓ Kubernetes', '🔄 Service Mesh']
    },
    {
      id: 4,
      title: 'Multi-Cloud Architecture',
      icon: '🌐',
      category: 'multicloud',
      description: 'Design and implement multi-cloud strategies for enhanced reliability and vendor independence.',
      features: ['Multi-Cloud Design', 'Vendor Independence', 'Load Distribution', 'Disaster Recovery', 'Cost Optimization'],
      price: 'Starting $4500/project',
      gradient: 'from-pink-500 to-rose-500',
      platforms: ['☁️ AWS', '🔵 Azure', '🟡 GCP']
    },
    {
      id: 5,
      title: 'DevOps & CI/CD Pipelines',
      icon: '🚀',
      category: 'devops',
      description: 'Complete DevOps implementation with automated CI/CD pipelines and deployment strategies.',
      features: ['CI/CD Automation', 'GitOps Workflows', 'Automated Testing', 'Blue-Green Deployment', 'Rollback Strategies'],
      price: 'Starting $2800/project',
      gradient: 'from-orange-500 to-red-500',
      platforms: ['🔄 Jenkins', '🐙 GitHub Actions', '🦊 GitLab CI']
    },
    {
      id: 6,
      title: 'Cloud Security & Compliance',
      icon: '🔒',
      category: 'security',
      description: 'Comprehensive cloud security implementation with compliance management and threat protection.',
      features: ['Security Assessment', 'Compliance Management', 'Identity Management', 'Threat Detection', 'Data Encryption'],
      price: 'Starting $3200/project',
      gradient: 'from-cyan-500 to-blue-500',
      platforms: ['🔒 IAM', '🛡️ Security Groups', '🔐 Encryption']
    },
    {
      id: 7,
      title: 'Serverless Architecture',
      icon: '⚡',
      category: 'serverless',
      description: 'Build scalable serverless applications with Functions-as-a-Service and event-driven architecture.',
      features: ['Lambda Functions', 'Event-Driven Architecture', 'API Gateway', 'Serverless Databases', 'Cost Optimization'],
      price: 'Starting $2200/project',
      gradient: 'from-indigo-500 to-purple-500',
      platforms: ['⚡ AWS Lambda', '🔵 Azure Functions', '🟡 Cloud Functions']
    },
    {
      id: 8,
      title: 'Cloud Monitoring & Logging',
      icon: '📊',
      category: 'monitoring',
      description: 'Comprehensive monitoring, logging, and observability solutions for cloud infrastructure.',
      features: ['Infrastructure Monitoring', 'Application Logs', 'Performance Metrics', 'Alerting Systems', 'Custom Dashboards'],
      price: 'Starting $1800/project',
      gradient: 'from-yellow-500 to-orange-500',
      platforms: ['📊 CloudWatch', '📈 Azure Monitor', '📉 Stackdriver']
    },
    {
      id: 9,
      title: 'Disaster Recovery & Backup',
      icon: '🛡️',
      category: 'backup',
      description: 'Robust disaster recovery solutions with automated backup and business continuity planning.',
      features: ['Automated Backups', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing'],
      price: 'Starting $2700/project',
      gradient: 'from-red-500 to-pink-500',
      platforms: ['💾 Backup Services', '🔄 Replication', '🛡️ DR Solutions']
    },
    {
      id: 10,
      title: 'Cloud Cost Optimization',
      icon: '💰',
      category: 'optimization',
      description: 'Optimize cloud spending with resource right-sizing, cost monitoring, and efficiency improvements.',
      features: ['Cost Analysis', 'Resource Right-sizing', 'Reserved Instances', 'Spending Alerts', 'Usage Optimization'],
      price: 'Starting $1500/project',
      gradient: 'from-teal-500 to-green-500',
      platforms: ['💰 Cost Explorer', '📊 Billing Alerts', '⚖️ Resource Optimizer']
    },
    {
      id: 11,
      title: 'Cloud Network Architecture',
      icon: '🌐',
      category: 'networking',
      description: 'Design and implement secure, scalable cloud network architectures with optimal performance.',
      features: ['Network Design', 'VPC Configuration', 'Load Balancing', 'CDN Setup', 'Network Security'],
      price: 'Starting $2400/project',
      gradient: 'from-purple-500 to-indigo-500',
      platforms: ['🌐 VPC', '⚖️ Load Balancers', '🚀 CDN']
    },
    {
      id: 12,
      title: 'Cloud Database Management',
      icon: '🗄️',
      category: 'database',
      description: 'Managed database solutions with high availability, scaling, and performance optimization.',
      features: ['Database Migration', 'High Availability', 'Auto-scaling', 'Performance Tuning', 'Backup Management'],
      price: 'Starting $2100/project',
      gradient: 'from-emerald-500 to-teal-500',
      platforms: ['🗄️ RDS', '📊 NoSQL', '⚡ In-Memory DB']
    }
  ];

  const cloudStats = [
    { number: '300+', label: 'Cloud Deployments', icon: '☁️' },
    { number: '99.9%', label: 'Uptime Achieved', icon: '⚡' },
    { number: '40%', label: 'Cost Reduction', icon: '💰' },
    { number: '150+', label: 'Enterprise Clients', icon: '🏢' }
  ];

  const cloudTechnologies = [
    { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-400', capability: 'Cloud Platform' },
    { name: 'Microsoft Azure', icon: '🔵', color: 'from-blue-400 to-cyan-400', capability: 'Cloud Platform' },
    { name: 'Google Cloud', icon: '🟡', color: 'from-green-400 to-blue-400', capability: 'Cloud Platform' },
    { name: 'Kubernetes', icon: '⚓', color: 'from-blue-500 to-purple-400', capability: 'Orchestration' },
    { name: 'Terraform', icon: '🔧', color: 'from-purple-400 to-pink-400', capability: 'Infrastructure' },
    { name: 'Docker', icon: '🐳', color: 'from-cyan-400 to-blue-400', capability: 'Containers' }
  ];

  const filteredServices = activeTab === 'all' 
    ? cloudServices 
    : cloudServices.filter(service => service.category === activeTab);

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
            CLOUD
            <br />
            <span className="text-5xl md:text-7xl">INFRASTRUCTURE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Scale your business with enterprise-grade cloud infrastructure solutions designed for performance, security, and cost-efficiency
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-3xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>☁️</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🚀</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🔒</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>⚡</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🌐</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slideUp" style={{ animationDelay: '1s' }}>
            <Link to="/Contact">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Start Cloud Journey</span>
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
            {cloudStats.map((stat, index) => (
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
              Cloud Platforms We Master
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudTechnologies.map((tech, index) => (
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
              { key: 'migration', label: 'Migration', icon: '☁️' },
              { key: 'automation', label: 'Automation', icon: '⚙️' },
              { key: 'containers', label: 'Containers', icon: '🐳' },
              { key: 'multicloud', label: 'Multi-Cloud', icon: '🌐' },
              { key: 'devops', label: 'DevOps', icon: '🚀' },
              { key: 'security', label: 'Security', icon: '🔒' },
              { key: 'serverless', label: 'Serverless', icon: '⚡' },
              { key: 'monitoring', label: 'Monitoring', icon: '📊' },
              { key: 'optimization', label: 'Cost Optimization', icon: '💰' }
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

      {/* Cloud Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Cloud Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cloud infrastructure services to accelerate your digital transformation journey
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

      {/* Cloud Journey Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Cloud Transformation Journey
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment & Strategy', desc: 'Evaluate current infrastructure and design cloud migration roadmap', icon: '🔍' },
              { step: '02', title: 'Design & Planning', desc: 'Architect scalable cloud solutions with security and compliance', icon: '📐' },
              { step: '03', title: 'Migration & Implementation', desc: 'Execute migration with minimal downtime and comprehensive testing', icon: '🚀' },
              { step: '04', title: 'Optimize & Scale', desc: 'Continuous optimization, monitoring, and scaling as you grow', icon: '📈' }
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Accelerate your business growth with scalable, secure, and cost-effective cloud infrastructure solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1">
              <span className="relative z-10">Start Cloud Migration</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            </Link>
           
          </div>
        </div>
      </section>

      {/* Footer
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Cloud Infrastructure Solutions. Powering Your Digital Future.
          </p>
        </div>
      </footer> */}

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