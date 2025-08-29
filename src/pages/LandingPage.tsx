import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Award, Users, Shield, Star, MapPin, Phone, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';

// Simplified Floating Paths Component for luxury animation
function FloatingPaths() {
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${200 - i * 15} -${100 + i * 8}C-${200 - i * 15} -${100 + i * 8} -${150 - i * 15} ${120 - i * 8} ${80 - i * 15} ${200 - i * 8}C${310 - i * 15} ${280 - i * 8} ${380 - i * 15} ${450 - i * 8} ${380 - i * 15} ${450 - i * 8}`,
    opacity: 0.15 + i * 0.03,
    width: 1 + i * 0.1,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 600" fill="none" preserveAspectRatio="none">
        <title>Background Paths</title>
        {paths.map((path, index) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#d4af37"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4, // Faster animation
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

const LandingPage: React.FC = () => {
  const [hoveredSide, setHoveredSide] = useState<'clinic' | 'lounge' | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  const handleMouseEnter = (side: 'clinic' | 'lounge') => {
    if (!isMobile) {
      setHoveredSide(side);
    }
  };
  
  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredSide(null);
    }
  };
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  // Mobile version with vibrant gradients
  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-[#faf8f6] via-[#f5e9dc] to-[#e6d5c1]">
        {/* Initial Loading Animation */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute inset-0 z-50 bg-gradient-to-br from-white via-[#faf8f6] to-[#f5e9dc] flex items-center justify-center"
        >
          <motion.img
            src="/images/zayn-logo.png"
            alt="ZAYN"
            className="w-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Enhanced Floating Paths Background Animation with gradient overlay */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-clinic-bg/30 via-transparent to-lounge-secondary/30 opacity-60"></div>
          <FloatingPaths />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col min-h-screen w-full">
          {/* Split Screen Section */}
          <div className="h-screen flex flex-col relative">
            {/* Elegant ZAYN Logo with Enhanced Gradient Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                ease: "easeOut",
              }}
              className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <motion.div 
                className="relative"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Enhanced gradient background with multiple layers */}
                <div className="w-24 h-24 relative">
                  {/* Outer vibrant gradient ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold via-clinic-accent/60 to-lounge-accent/60 p-[3px] animate-pulse">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-[#faf8f6] to-[#f5e9dc]"></div>
                  </div>
                  
                  {/* Middle gradient layer */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-clinic-secondary/40 to-lounge-secondary/40 p-[2px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-[#faf8f6]"></div>
                  </div>
                  
                  {/* Inner white circle with enhanced shadow */}
                  <div className="absolute inset-2 rounded-full bg-white shadow-lg">
                    {/* Logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/zayn-logo.png"
                        alt="ZAYN"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Split Screen Sections */}
            <div className="flex-1 grid grid-cols-1 grid-rows-2 gap-8 px-4">
              {/* Dermatology Clinic Section - Top */}
              <motion.div 
                className="flex items-end justify-center pb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                onClick={() => handleNavigate('/dermatology')}
              >
                <motion.div 
                  className="text-center relative bg-gradient-to-br from-white/95 via-clinic-bg/90 to-clinic-secondary/80 backdrop-blur-md rounded-2xl p-6 shadow-luxury border border-clinic-accent/20 max-w-sm w-full overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-clinic-accent/5 via-transparent to-gold/10 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-lg font-cormorant font-light mb-2 text-clinic-accent">
                      Step into Skin Science
                    </h2>
                    <p className="text-xs mb-4 text-clinic-accent/80 leading-relaxed">
                      Science-Driven Aesthetics, Personalized for You
                    </p>
                    
                    <Button 
                      variant="clinic"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate('/dermatology');
                      }}
                      className="px-6 py-2 text-xs rounded-full border border-clinic-accent shadow-md hover:bg-gradient-to-r hover:from-clinic-accent hover:to-clinic-accent/80 hover:text-white transition-all duration-300"
                    >
                      Explore Clinic
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Wellness Lounge Section - Bottom */}
              <motion.div 
                className="flex items-start justify-center pt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.4 }}
                onClick={() => handleNavigate('/wellness')}
              >
                <motion.div 
                  className="text-center relative bg-gradient-to-br from-white/95 via-lounge-bg/90 to-lounge-secondary/80 backdrop-blur-md rounded-2xl p-6 shadow-luxury border border-lounge-accent/20 max-w-sm w-full overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lounge-accent/5 via-transparent to-gold/10 rounded-2xl"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-lg font-pinyon mb-2 text-lounge-accent">
                      Indulge in Rejuvenation
                    </h2>
                    <p className="text-xs mb-4 text-lounge-accent/80 leading-relaxed">
                      Luxury Wellness for Mind, Body & Balance
                    </p>
                    
                    <Button 
                      variant="lounge"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigate('/wellness');
                      }}
                      className="px-6 py-2 text-xs rounded-full border border-lounge-accent shadow-md hover:bg-gradient-to-r hover:from-lounge-accent hover:to-lounge-accent/80 hover:text-white transition-all duration-300"
                    >
                      Explore Lounge
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Brand Details Section - Always Visible */}
        <motion.div
          id="brand-details"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="relative z-10 bg-white/95 backdrop-blur-md mx-4 mb-8 rounded-3xl shadow-luxury border border-gold/30 overflow-hidden"
        >
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-4">
                  Welcome to ZAYN Skin Clinic
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Your Trusted Hair & Skin Clinic in Pune
                </p>
              </div>

              {/* Mission Statement */}
              <div className="mb-8 p-6 bg-gradient-to-r from-clinic-bg to-lounge-bg rounded-2xl">
                <p className="text-gray-700 leading-relaxed text-center">
                  Our mission at ZAYN Skin Clinic is to ensure that all individuals have beautiful skin, strong, healthy hair, and self-assurance that radiates. As a leading skin clinic in Pune and an advanced hair clinic in Pune, we specialize in result-driven, customized treatments designed for real transformation.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="mb-8">
                <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-6 text-center">
                  Why ZAYN Skin Clinic?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="w-5 h-5" />, text: "Certified Dermatologists & Trichologists" },
                    { icon: <Shield className="w-5 h-5" />, text: "US-FDA Approved Technology" },
                    { icon: <Award className="w-5 h-5" />, text: "Individual Treatment Plans" },
                    { icon: <Star className="w-5 h-5" />, text: "Maximum Patient Satisfaction in Pune" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-soft">
                      <div className="text-gold mr-3">{item.icon}</div>
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Overview */}
              <div className="mb-8">
                <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-6 text-center">
                  Our Signature Services
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Hair Restoration & Hair Loss Solutions",
                      services: ["PRP Hair Treatment", "Hair Transplant (FUE & FUT)", "Hair Fall Control", "Hair Regrowth Treatments"]
                    },
                    {
                      title: "Advanced Dermatology & Skin Treatments",
                      services: ["Acne & Acne Scar Treatment", "Pigmentation Treatments", "Botox & Anti-Aging", "HydraFacial"]
                    },
                    {
                      title: "Non-Invasive Body Contouring",
                      services: ["EMSculpt Treatment", "EMS Body Sculpting", "Weight Loss Programs", "Muscle Toning"]
                    },
                    {
                      title: "Wellness & Recovery",
                      services: ["Emsella Treatment", "Infrared Sauna", "IV Therapy", "Vitamin Drips"]
                    }
                  ].map((category, index) => (
                    <div key={index} className="bg-gradient-to-r from-white to-clinic-bg/30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-3">
                        {category.title}
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {category.services.map((service, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What Clients Love */}
              <div className="mb-8">
                <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-6 text-center">
                  What Clients Love About Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Best Skin Specialist in Pune – Board-certified and approachable",
                    "Top Skin Doctor in Pune - Loved by hundreds of satisfied patients",
                    "Clean Environment - High standards of hygiene and patient comfort",
                    "Patient-Centric Care - We listen, we understand, we deliver"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-soft">
                      <Star className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="text-center bg-gradient-to-r from-gold/10 to-clinic-accent/10 rounded-2xl p-8">
                <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                  Book Your Free Consultation Today!
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Whether you're looking for the best dermatologist in Pune, trusted skin treatment, or result-oriented hair transplant, we invite you to experience personalized, professional, and proven aesthetic care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-gold to-clinic-accent text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </a>
                  <a
                    href="tel:+917028007462"
                    className="inline-flex items-center bg-white text-clinic-accent border border-clinic-accent px-6 py-3 rounded-full font-medium shadow-lg hover:bg-clinic-accent hover:text-white transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Desktop version (unchanged)
  return (
    <div className="min-h-screen w-screen flex flex-col relative bg-[#faf6f2]">
      {/* Split Screen Container */}
      <div className="h-screen w-screen overflow-hidden flex flex-col md:flex-row relative">
      {/* Initial Loading Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 z-50 bg-white flex items-center justify-center"
      >
        <motion.img
          src="/images/zayn-logo.png"
          alt="ZAYN"
          className="w-32 md:w-48"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      
      {/* Brand Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.5,
          ease: "easeOut"
        }}
        className="absolute inset-0 z-10 flex justify-center items-center md:top-10 md:inset-x-0 md:inset-y-auto md:items-start"
      >
        <img 
          src="/images/zayn-logo.png"
          alt="ZAYN"
          className="w-32 md:w-48"
        />
      </motion.div>

      {/* Center Dividing Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "60vh" }}
        transition={{ 
          duration: 1.2,
          delay: 0.3,
          ease: "easeOut"
        }}
        className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 w-[3px] bg-gradient-to-b from-transparent via-clinic-accent to-transparent origin-center opacity-40 z-20 transform -translate-x-1/2 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:via-gold after:to-transparent after:opacity-50"
      />
      
      {/* Dermatology Clinic Side */}
      <motion.div 
        className="h-1/2 md:h-full w-full md:w-1/2 relative cursor-pointer transition-all duration-700"
        onMouseEnter={() => handleMouseEnter('clinic')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNavigate('/dermatology')}
      >
        <div className="absolute inset-0 transition-all duration-700">
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br from-clinic-bg via-clinic-secondary to-clinic-accent transition-opacity duration-700 ${
              hoveredSide === 'clinic' ? 'opacity-90' : 'opacity-0'
            }`}
          />
          <motion.div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              hoveredSide === 'clinic' ? 'opacity-80' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: 'url(https://images.pexels.com/photos/3762408/pexels-photo-3762408.jpeg)',
            }}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center flex-col p-4 md:p-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="relative"
          >
            <h2 className={`text-xl md:text-4xl lg:text-6xl font-cormorant font-light mb-2 md:mb-4 transition-colors duration-700 ${
              hoveredSide === 'clinic' ? 'text-white' : 'text-clinic-accent'
            }`}>
              Step into Skin Science
            </h2>
            <p className={`text-sm md:text-base mb-6 md:mb-12 max-w-md mx-auto transition-colors duration-700 ${
              hoveredSide === 'clinic' ? 'text-white' : 'text-clinic-accent'
            }`}>
              Science-Driven Aesthetics, Personalized for You
            </p>
            <Button 
              variant={hoveredSide === 'clinic' ? 'gold' : 'clinic'}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate('/dermatology');
              }}
              className="text-base md:text-lg px-8 md:px-16 py-3 md:py-6 rounded-full border border-current"
            >
              Explore Clinic
            </Button>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Wellness Lounge Side */}
      <motion.div 
        className="h-1/2 md:h-full w-full md:w-1/2 relative cursor-pointer transition-all duration-700"
        onMouseEnter={() => handleMouseEnter('lounge')}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNavigate('/wellness')}
      >
        <div className="absolute inset-0 transition-all duration-700">
          <motion.div 
            className={`absolute inset-0 bg-gradient-to-br from-lounge-bg via-lounge-secondary to-lounge-accent transition-opacity duration-700 ${
              hoveredSide === 'lounge' ? 'opacity-90' : 'opacity-0'
            }`}
          />
          <motion.div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              hoveredSide === 'lounge' ? 'opacity-80' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: "url('/images/emshero.jpg')",
            }}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center flex-col p-4 md:p-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="relative"
          >
            <h2 className={`text-xl md:text-4xl lg:text-6xl font-pinyon mb-2 md:mb-4 transition-colors duration-700 ${
              hoveredSide === 'lounge' ? 'text-white' : 'text-lounge-accent'
            }`}>
              Indulge in Rejuvenation
            </h2>
            <p className={`text-sm md:text-base mb-6 md:mb-12 max-w-md mx-auto transition-colors duration-700 ${
              hoveredSide === 'lounge' ? 'text-white' : 'text-lounge-accent'
            }`}>
              Luxury Wellness for Mind, Body & Balance
            </p>
            <Button 
              variant={hoveredSide === 'lounge' ? 'gold' : 'lounge'}
              onClick={(e) => {
                e.stopPropagation();
                handleNavigate('/wellness');
              }}
              className="text-base md:text-lg px-8 md:px-16 py-3 md:py-6 rounded-full border border-current"
            >
              Explore Lounge
            </Button>
          </motion.div>
        </div>
      </motion.div>
      </div>

      {/* Brand Details Section - Always Visible on Desktop */}
      <motion.div
        id="brand-details"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="relative z-10 bg-white/95 backdrop-blur-md mx-8 my-8 rounded-3xl shadow-luxury border border-gold/30 overflow-hidden"
      >
        <div className="p-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-cormorant font-light text-clinic-accent mb-6">
                Welcome to Zayn Skin Clinic – Your Trusted Hair & Skin Clinic in Pune
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Re-imagining Aesthetics, One Transformation at a Time
              </p>
            </div>

            {/* Mission Statement */}
            <div className="mb-12 p-8 bg-gradient-to-r from-clinic-bg to-lounge-bg rounded-3xl">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Our mission at Zayn Skin Clinic is to ensure that all individuals have beautiful skin, strong, healthy hair, and self-assurance that radiates. As a leading skin clinic in Pune and an advanced hair clinic in Pune, we specialize in result-driven, customized treatments designed for real transformation. At Zayn Skin Clinic, we offer the most advanced skincare, hair restoration, and holistic services, regardless of whether you have hair loss issues, skin pigmentation disorders, acne, age-related problems or just want to change your body non-invasively.
              </p>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h3 className="text-3xl font-cormorant font-medium text-clinic-accent mb-8 text-center">
                Why Zayn Skin Clinic?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <Users className="w-6 h-6" />, text: "Certified Dermatologists & Trichologists" },
                  { icon: <Shield className="w-6 h-6" />, text: "Most up-to-date Technology & US-FDA Approved Machinery" },
                  { icon: <Award className="w-6 h-6" />, text: "Individual Treatment Plans" },
                  { icon: <Star className="w-6 h-6" />, text: "Non-surgical, Safe, & Clinically-Proven Procedures" }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-300">
                    <div className="text-gold mb-4 p-3 bg-gold/10 rounded-full">{item.icon}</div>
                    <span className="text-center text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Overview */}
            <div className="mb-12">
              <h3 className="text-3xl font-cormorant font-medium text-clinic-accent mb-8 text-center">
                Discover Our Classic Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Hair Restoration & Hair Loss Solutions",
                    services: ["PRP Hair Treatment in Pune", "Hair Transplant in Pune (FUE & FUT Techniques)", "Best Hair Transplant Clinic in Pune for Natural Results", "Hair Fall Regulator and Hair Regrowth Treatments"]
                  },
                  {
                    title: "Advanced Dermatology & Skin Treatments",
                    services: ["Acne & Acne Scar Treatment", "Pigmentation and Melasma Treatments", "Botox & Anti-Aging Treatments", "Deep Cleansing Facials/HydraFacial"]
                  },
                  {
                    title: "Non-Invasive & Aesthetic Body Contouring",
                    services: ["Emsculpt Treatment – Tones muscle & burns fat simultaneously", "EMS Body Sculpting for abs, arms, thighs, and butt", "EM Slim & EM Sculpting Near Me for localized inch loss", "Emsculpt for Weight Loss & Muscle Toning"]
                  },
                  {
                    title: "Strengthening the Pelvic Floor Using Emsella",
                    services: ["Emsella for Women (Post-pregnancy, incontinence)", "Emsella for Men (Prostate health, bladder control)", "Emsella Treatment Cost – Affordable Packages Available", "Non-invasive with immediate results"]
                  },
                  {
                    title: "Non-Invasive & Aesthetic Body Contouring",
                    services: ["Emsculpt Treatment – Tones muscle & burns fat simultaneously", "EMS Body Sculpting for abs, arms, thighs, and butt", "EM Slim & EM Sculpting Near Me for localized inch loss", "Emsculpt for Weight Loss & Muscle Toning"]
                  },
                  {
                    title: "Strengthening the Pelvic Floor Using Emsella",
                    services: ["Emsella for Women (Post-pregnancy, incontinence)", "Emsella for Men (Prostate health, bladder control)", "Emsella Treatment Cost – Affordable Packages Available", "Non-invasive with immediate results"]
                  },
                  {
                    title: "Detox & Wellness with Infrared Sauna",
                    services: ["Infrared Sauna for Weight Loss & Relaxation", "Infrared Therapy for Pain & Inflammation Relief", "Best Infrared Sauna Experience Near You", "Fat-burning, detoxing, and stress relief"]
                  },
                  {
                    title: "IV Therapy & Vitamin Drips",
                    services: ["Vitamin IV Drip (Vitamin C, B12, Collagen)", "Glutathione IV for Skin Brightening & Anti-aging", "Hydration Therapy & Energy Boosting Drips", "IV Therapy in Pune – Administered by Trained Medical Staff"]
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-gradient-to-r from-white to-clinic-bg/30 rounded-2xl p-8">
                    <h4 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.services.map((service, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                          {service}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What Clients Love */}
            <div className="mb-12">
              <h3 className="text-3xl font-cormorant font-medium text-clinic-accent mb-8 text-center">
                What Clients Love About Us
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Best Skin Specialist in Pune – Board-certified and approachable",
                  "Top Skin Doctor in Pune - Loved by hundreds of satisfied patients",
                  "Clean Environment - Observing high standards of hygiene, sterile and convenient to the patient",
                  "Price and Treatment Clarity",
                  "Patient-Centric Care - We listen, we understand, we deliver",
                  "Maximum Satisfied Patient Rating in Pune"
                ].map((point, index) => (
                  <div key={index} className="flex items-start p-6 bg-white rounded-2xl shadow-soft">
                    <Star className="w-6 h-6 text-gold mr-4 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-gradient-to-r from-gold/10 to-clinic-accent/10 rounded-3xl p-12">
              <h3 className="text-3xl font-cormorant font-medium text-clinic-accent mb-6">
                Book Your Free Consultation Today!
              </h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                Whether you're looking for the best dermatologist in Pune, a trusted skin treatment in Pune, or a result-oriented hair transplant in Pune, we invite you to visit Zayn Skin Clinic and experience personalized, professional, and proven aesthetic care. In a convenient location in Pune 📞 Call us or WhatsApp to schedule your appointment 📆 Walk-ins and pre-bookings are applicable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-gold to-clinic-accent text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Appointment
                </a>
                <a
                  href="tel:+917028007462"
                  className="inline-flex items-center bg-white text-clinic-accent border-2 border-clinic-accent px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-clinic-accent hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;