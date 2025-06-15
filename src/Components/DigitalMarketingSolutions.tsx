import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom Card component to replace shadcn/ui
const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

export default function DigitalMarketingSolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const marketingServices = [
    {
      id: 1,
      title: 'Instagram Management',
      icon: '📸',
      category: 'social',
      description: 'Complete Instagram account management with content creation, story management, and engagement strategies.',
      features: ['Content Creation', 'Story Management', 'Hashtag Strategy', 'Influencer Outreach', 'Analytics & Reports'],
      price: 'Starting $800/month',
      gradient: 'from-pink-500 to-rose-500',
      platforms: ['📱 Instagram', '📊 Analytics']
    },
    {
      id: 2,
      title: 'Facebook Marketing',
      icon: '👥',
      category: 'social',
      description: 'Strategic Facebook marketing including page management, community building, and targeted advertising.',
      features: ['Page Management', 'Community Building', 'Facebook Ads', 'Event Promotion', 'Lead Generation'],
      price: 'Starting $700/month',
      gradient: 'from-blue-500 to-indigo-500',
      platforms: ['📘 Facebook', '💬 Messenger']
    },
    {
      id: 3,
      title: 'Google Ads Management',
      icon: '🎯',
      category: 'advertising',
      description: 'Professional Google Ads campaigns with keyword research, ad creation, and conversion optimization.',
      features: ['Keyword Research', 'Ad Creation', 'Bid Management', 'Landing Page Optimization', 'ROI Tracking'],
      price: 'Starting $1000/month',
      gradient: 'from-green-500 to-emerald-500',
      platforms: ['🔍 Google Ads', '📈 Search Console']
    },
    {
      id: 4,
      title: 'Social Media Advertising',
      icon: '📢',
      category: 'advertising',
      description: 'Multi-platform social media advertising campaigns with precise targeting and budget optimization.',
      features: ['Campaign Strategy', 'Audience Targeting', 'Creative Design', 'A/B Testing', 'Performance Analysis'],
      price: 'Starting $900/month',
      gradient: 'from-purple-500 to-violet-500',
      platforms: ['📱 Instagram Ads', '📘 Facebook Ads', '🐦 Twitter Ads']
    },
    {
      id: 5,
      title: 'Lead Generation',
      icon: '🧲',
      category: 'leads',
      description: 'Comprehensive lead generation strategies to convert prospects into qualified customers.',
      features: ['Lead Magnets', 'Landing Pages', 'Email Campaigns', 'CRM Integration', 'Lead Scoring'],
      price: 'Starting $600/month',
      gradient: 'from-orange-500 to-red-500',
      platforms: ['📧 Email Marketing', '🎯 Lead Forms']
    },
    {
      id: 6,
      title: 'Content Marketing',
      icon: '✍️',
      category: 'content',
      description: 'Strategic content creation and marketing to engage your audience and drive conversions.',
      features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Calendar', 'SEO Optimization'],
      price: 'Starting $500/month',
      gradient: 'from-teal-500 to-cyan-500',
      platforms: ['📝 Blog', '🎥 Video', '📊 Infographics']
    },
    {
      id: 7,
      title: 'LinkedIn Marketing',
      icon: '💼',
      category: 'social',
      description: 'Professional LinkedIn marketing for B2B lead generation and corporate brand building.',
      features: ['Profile Optimization', 'Content Strategy', 'Connection Building', 'LinkedIn Ads', 'Lead Nurturing'],
      price: 'Starting $750/month',
      gradient: 'from-blue-600 to-sky-500',
      platforms: ['💼 LinkedIn', '📊 Sales Navigator']
    },
    {
      id: 8,
      title: 'YouTube Marketing',
      icon: '🎬',
      category: 'content',
      description: 'Complete YouTube channel management with video SEO, content planning, and subscriber growth.',
      features: ['Channel Optimization', 'Video SEO', 'Thumbnail Design', 'Content Planning', 'Analytics'],
      price: 'Starting $650/month',
      gradient: 'from-red-500 to-pink-500',
      platforms: ['🎬 YouTube', '📊 YouTube Analytics']
    },
    {
      id: 9,
      title: 'Email Marketing',
      icon: '📧',
      category: 'leads',
      description: 'Automated email marketing campaigns with personalization and advanced segmentation.',
      features: ['Email Automation', 'List Segmentation', 'A/B Testing', 'Personalization', 'Drip Campaigns'],
      price: 'Starting $400/month',
      gradient: 'from-indigo-500 to-purple-500',
      platforms: ['📧 Mailchimp', '📊 Analytics']
    }
  ];

  const marketingStats = [
    { number: '500+', label: 'Campaigns Launched', icon: '🚀' },
    { number: '150%', label: 'Average ROI Increase', icon: '📈' },
    { number: '50K+', label: 'Leads Generated', icon: '🎯' },
    { number: '200+', label: 'Happy Clients', icon: '😊' }
  ];

  const platforms = [
    { name: 'Instagram', icon: '📸', color: 'from-pink-400 to-rose-400', users: '2B+' },
    { name: 'Facebook', icon: '👥', color: 'from-blue-400 to-indigo-400', users: '2.9B+' },
    { name: 'Google Ads', icon: '🔍', color: 'from-green-400 to-emerald-400', users: '8.5B+' },
    { name: 'LinkedIn', icon: '💼', color: 'from-blue-500 to-sky-400', users: '900M+' },
    { name: 'YouTube', icon: '🎬', color: 'from-red-400 to-pink-400', users: '2.7B+' },
    { name: 'TikTok', icon: '🎵', color: 'from-purple-400 to-violet-400', users: '1B+' }
  ];

  const filteredServices = activeTab === 'all' 
    ? marketingServices 
    : marketingServices.filter(service => service.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      
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
            DIGITAL
            <br />
            <span className="text-5xl md:text-7xl">MARKETING</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            Complete digital marketing solutions including social media management, advertising, lead generation, and content marketing
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-3xl animate-slideUp" style={{ animationDelay: '0.8s' }}>
            <span className="animate-bounce" style={{ animationDelay: '0s' }}>📸</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>👥</span>
            <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🎯</span>
            <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>📧</span>
            <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>🎬</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 animate-slideUp" style={{ animationDelay: '1s' }}>
            <Link to="/Contact">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">Get Marketing Audit</span>
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
            {marketingStats.map((stat, index) => (
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

      {/* Platforms Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Platforms We Master
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`group relative p-6 bg-gradient-to-br ${platform.color} rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1">{platform.name}</h3>
                  <p className="text-sm text-white/80">{platform.users} users</p>
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
              { key: 'social', label: 'Social Media', icon: '📱' },
              { key: 'advertising', label: 'Advertising', icon: '📢' },
              { key: 'content', label: 'Content', icon: '✍️' },
              { key: 'leads', label: 'Lead Generation', icon: '🧲' }
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
              Our Marketing Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete digital marketing solutions to grow your business online
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
                <Card className={`h-full bg-gradient-to-br ${service.gradient} p-1 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20`}>
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

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Marketing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Strategy & Analysis', desc: 'We analyze your business and create a custom marketing strategy', icon: '🎯' },
              { step: '02', title: 'Campaign Setup', desc: 'Set up campaigns across multiple platforms with optimized targeting', icon: '⚙️' },
              { step: '03', title: 'Content Creation', desc: 'Create engaging content that resonates with your target audience', icon: '✨' },
              { step: '04', title: 'Monitor & Optimize', desc: 'Continuously monitor and optimize campaigns for maximum ROI', icon: '📊' }
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Dominate Digital?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's create a digital marketing strategy that drives real results and grows your business exponentially.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/Contact">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1">
              <span className="relative z-10">Start Your Campaign</span>
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