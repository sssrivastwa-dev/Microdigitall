import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

// Add base URL for backend
const API_BASE_URL = 'http://localhost:5000';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  // Form state 
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Contact information
  const contactInfo = {
    address: "123 Tech Avenue, Silicon Valley, CA 94025",
    phone: "+1 (555) 123-4567",
    email: "contact@microdigitall.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM"
  };

  // Service images for slider
  const images = [
    "https://i.pinimg.com/originals/61/44/2f/61442f2241fc5abce9a83f053b0b904a.gif", // Replace with actual image paths
    "https://cdn.dribbble.com/userupload/24390689/file/original-3f13cebc70b575018ccbb750588394bc.gif",
    "https://i.pinimg.com/originals/c7/c6/f7/c7c6f7e8b3506ea46261ab7b55fc9faf.gif",
    "https://images.fonearena.com/blog/wp-content/uploads/2023/09/Meta-AI-Generative-Features.gif",
    "https://ndmeaa.com/image/Web-development.gif"
  ];

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, formData);
      console.log('Form submitted successfully:', response.data);
      setFormSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error: any) {
      console.error('Error submitting form:', error);
      const errorMessage = error.response?.data?.error || 'Failed to send message. Please try again later.';
      alert(errorMessage);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-64 w-full overflow-hidden bg-blue-900"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Contact <span className="text-blue-400">MicroDigitall</span>
          </motion.h1>
        </div>
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "url('/api/placeholder/1200/600')", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }} 
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg border border-blue-900"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
            
            <div className="mb-8">
              <p className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {contactInfo.address}
              </p>
              <p className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                {contactInfo.phone}
              </p>
              <p className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                {contactInfo.email}
              </p>
              <p className="flex items-center">
                <svg className="w-6 h-6 text-blue-400 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {contactInfo.hours}
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg border border-blue-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.4700268270813!2d77.30962587549907!3d28.585672975690418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM1JzA4LjQiTiA3N8KwMTgnNDMuOSJF!5e0!3m2!1sen!2sin!4v1748414882148!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="MicroDigitall Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg border border-blue-900"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Send us a Message</h2>
            
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-900 text-white p-6 rounded-lg text-center"
              >
                <svg className="w-16 h-16 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for contacting MicroDigitall. We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                      placeholder="Web Development"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Services Slider Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Our IT Services</h2>
          
          <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl border border-blue-900 bg-gray-900">
            {/* Image Slider */}
            <div className="relative h-full w-full">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <img 
                    src={img} 
                    alt={`Service ${index + 1}`}
                    className="h-full w-full object-cover"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    onError={(e) => {
                      console.log(`Failed to load image: ${img}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {index === 0 && "Marketing Solution"}
                      {index === 1 && "Cloud Solution"}
                      {index === 2 && "AI Solution"}
                      {index === 3 && "Meta Solution"}
                      {index === 4 && "Website & App Development"}
                    </h3>
                    <p className="text-gray-200 mb-4 drop-shadow-md">
                      {index === 0 && "Turn clicks into customers with data-driven marketing strategies that deliver real results."}
                      {index === 1 && "Empower your business with scalable, secure, and seamless cloud infrastructure."}
                      {index === 2 && "Automate smarter, not harder—AI that accelerates growth and decision-making."}
                      {index === 3 && "Step into the future with immersive Meta experiences that redefine digital presence."}
                      {index === 4 && "Build stunning, user-first websites and apps that perform as great as they look."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Slider Controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-400 w-6' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center py-12 bg-blue-900 bg-opacity-30 rounded-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to transform your business with technology?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            Our expert team is ready to help you navigate the digital landscape and implement solutions that drive growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default ContactPage;