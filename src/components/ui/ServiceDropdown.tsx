import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Award, Shield, Sparkles } from 'lucide-react';

type Service = {
  name: string;
  description: string;
  brand?: string;
  howWeDoBetter: {
    title: string;
    content: string;
    highlights: string[];
  };
};

type ServiceDropdownProps = {
  service: Service;
  variant?: 'clinic' | 'lounge';
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
};

const ServiceDropdown: React.FC<ServiceDropdownProps> = ({
  service,
  variant = 'clinic',
  className = '',
  isOpen,
  onToggle,
}) => {
  const variantStyles = {
    clinic: {
      bg: 'bg-white',
      border: 'border-clinic-accent/20',
      text: 'text-clinic-accent',
      hover: 'hover:border-clinic-accent hover:bg-clinic-secondary/10 hover:shadow-luxury',
      accent: 'text-clinic-accent',
      gradient: 'from-clinic-accent/5 to-clinic-secondary/10',
    },
    lounge: {
      bg: 'bg-white',
      border: 'border-lounge-accent/20',
      text: 'text-lounge-accent',
      hover: 'hover:border-lounge-accent hover:bg-lounge-secondary/10 hover:shadow-luxury',
      accent: 'text-lounge-accent',
      gradient: 'from-lounge-accent/5 to-lounge-secondary/10',
    },
  };

  return (
    <motion.div
      className={`rounded-2xl border ${variantStyles[variant].border} overflow-hidden transition-all duration-500 ${variantStyles[variant].bg} shadow-soft hover:shadow-luxury group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -2 }}
    >
      <button
        className={`w-full p-8 flex items-center justify-between ${variantStyles[variant].hover} transition-all duration-500 text-left relative overflow-hidden`}
        onClick={onToggle}
      >
        {/* Background gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-r ${variantStyles[variant].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="flex-1 relative z-10">
          <div className="flex items-center mb-3">
            <Sparkles className={`mr-3 ${variantStyles[variant].text} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} size={20} />
            <h3 className={`text-2xl font-cormorant font-medium ${variantStyles[variant].text} group-hover:text-gold transition-colors duration-300`}>
              {service.name}
            </h3>
          </div>
          <p className="text-base text-gray-600 leading-relaxed font-light">
            {service.description}
          </p>
          {service.brand && (
            <div className="mt-3 inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-3 py-1">
              <span className="text-sm font-medium text-gold">
                {service.brand}
              </span>
            </div>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          <ChevronDown
            className={`ml-6 ${variantStyles[variant].text} group-hover:text-gold transition-colors duration-300`}
            size={24}
          />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-gray-100/50">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 mt-6">
                <div className="flex items-center mb-4">
                  <Award className={`mr-3 ${variantStyles[variant].accent}`} size={20} />
                  <h4 className={`text-xl font-cormorant font-semibold ${variantStyles[variant].accent}`}>
                    {service.howWeDoBetter.title}
                  </h4>
                </div>
                
                <p className="text-base text-gray-700 mb-6 leading-relaxed font-light">
                  {service.howWeDoBetter.content}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.howWeDoBetter.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start group/item"
                    >
                      <Star className="text-gold mr-3 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" size={16} fill="currentColor" />
                      <span className="text-sm text-gray-700 leading-relaxed font-medium">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <Shield size={16} className="mr-2" />
                    <span className="font-medium">FDA-approved technology & certified specialists</span>
                  </div>
                  <div className="text-xs text-gold font-semibold uppercase tracking-wider">
                    Premium Care
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServiceDropdown;