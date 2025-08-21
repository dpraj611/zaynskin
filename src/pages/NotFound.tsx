import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, MapPin, Phone } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found | ZAYN Clinic';
  }, []);

  const popularPages = [
    { name: 'Dermatology Clinic', path: '/dermatology', description: 'Advanced skin treatments and dermatology services' },
    { name: 'Wellness Lounge', path: '/wellness', description: 'Luxury wellness treatments and body contouring' },
    { name: 'Hair Transplant', path: '/services/hair-transplant', description: 'Custom FUE hair restoration techniques' },
    { name: 'EMSculpt', path: '/services/emsculpt', description: 'Revolutionary body sculpting technology' },
    { name: 'HIFU Treatment', path: '/services/hifu', description: 'Non-surgical skin tightening and lifting' },
    { name: 'IV Therapy', path: '/services/iv-therapy', description: 'Personalized nutrient infusion therapy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8f6] via-[#f5e9dc] to-[#e6d5c1] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-clinic-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-lounge-accent/10 to-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-clinic-secondary/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-lounge-secondary/15 to-transparent rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link to="/" className="inline-block">
              <img 
                src="/images/zayn-logo.png"
                alt="ZAYN"
                className="h-16 md:h-20 mx-auto"
              />
            </Link>
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-cormorant font-light text-transparent bg-gradient-to-br from-gold via-clinic-accent to-lounge-accent bg-clip-text leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-4">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off. Don't worry, even the best treatments 
              sometimes need a little redirection to find their perfect destination.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              to="/"
              variant="gold"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Button>
            <Button 
              onClick={() => window.history.back()}
              variant="clinic"
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>

          {/* Popular Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-cormorant font-light text-clinic-accent mb-8">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPages.map((page, index) => (
                <motion.div
                  key={page.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <Link
                    to={page.path}
                    className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border border-white/50 group"
                  >
                    <h4 className="text-lg font-cormorant font-medium text-clinic-accent mb-2 group-hover:text-gold transition-colors duration-300">
                      {page.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-lounge-accent group-hover:text-gold transition-colors duration-300">
                      <span>Learn More</span>
                      <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-luxury border border-white/50 max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-6">
              Need Assistance? We're Here to Help
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-gradient-to-br from-clinic-accent to-lounge-accent text-white p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Call Us</p>
                  <a href="tel:+917028007462" className="text-lg font-medium text-clinic-accent hover:text-gold transition-colors duration-300">
                    070280 07462
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <div className="bg-gradient-to-br from-clinic-accent to-lounge-accent text-white p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Visit Us</p>
                  <p className="text-lg font-medium text-clinic-accent">
                    Pune, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;