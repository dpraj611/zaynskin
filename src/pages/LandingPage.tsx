import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

// Simplified Floating Paths Component for luxury animation
function FloatingPaths() {
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${200 - i * 15} -${100 + i * 8}C-${200 - i * 15} -${100 + i * 8} -${150 - i * 15} ${120 - i * 8} ${80 - i * 15} ${200 - i * 8}C${310 - i * 15} ${280 - i * 8} ${380 - i * 15} ${450 - i * 8} ${380 - i * 15} ${450 - i * 8}`,
    opacity: 0.15 + i * 0.03,
    width: 1 + i * 0.1,
  }))

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
  )
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
    
    // Prevent scrolling on mobile
    if (isMobile) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      // Restore scrolling when component unmounts
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobile]);
  
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
      <div className="fixed inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#faf8f6] via-[#f5e9dc] to-[#e6d5c1]">
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-clinic-bg/30 via-transparent to-lounge-secondary/30 opacity-60"></div>
          <FloatingPaths />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full w-full">
          {/* Elegant ZAYN Logo with Enhanced Gradient Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.5,
              ease: "easeOut",
            }}
            className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center"
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
              <div className="absolute inset-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                {/* Outer vibrant gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold via-clinic-accent/60 to-lounge-accent/60 p-[3px] animate-pulse">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white via-[#faf8f6] to-[#f5e9dc]"></div>
                </div>
                
                {/* Middle gradient layer */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-clinic-secondary/40 to-lounge-secondary/40 p-[2px]">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-[#faf8f6]"></div>
                </div>
                
                {/* Inner white circle with enhanced shadow */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white via-[#faf8f6] to-white shadow-luxury backdrop-blur-sm border border-gold/30"></div>
                
                {/* Subtle inner glow with gradient */}
                <div className="absolute inset-5 rounded-full bg-gradient-to-br from-white via-clinic-bg/50 to-lounge-bg/50"></div>
              </div>
              
              {/* Logo */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <img
                  src="/images/zayn-logo.png"
                  alt="ZAYN"
                  className="max-w-full max-h-full object-contain relative z-10"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Dermatology Clinic Section - Top with enhanced gradients */}
          <motion.div 
            className="flex-1 flex items-end justify-center pb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            onClick={() => handleNavigate('/dermatology')}
          >
            <motion.div 
              className="text-center relative bg-gradient-to-br from-white/95 via-clinic-bg/90 to-clinic-secondary/80 backdrop-blur-md rounded-2xl p-6 shadow-luxury border border-clinic-accent/20 max-w-xs w-full mx-4 overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Gradient overlay for extra vibrancy */}
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
          
          {/* Wellness Lounge Section - Bottom with enhanced gradients */}
          <motion.div 
            className="flex-1 flex items-start justify-center pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            onClick={() => handleNavigate('/wellness')}
          >
            <motion.div 
              className="text-center relative bg-gradient-to-br from-white/95 via-lounge-bg/90 to-lounge-secondary/80 backdrop-blur-md rounded-2xl p-6 shadow-luxury border border-lounge-accent/20 max-w-xs w-full mx-4 overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {/* Gradient overlay for extra vibrancy */}
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
    );
  }

  // Desktop version (unchanged)
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col md:flex-row relative bg-[#faf6f2]">
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
  );
};

export default LandingPage;