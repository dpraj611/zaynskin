import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  description: string;
  brand?: string;
  variant?: 'clinic' | 'lounge';
  className?: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  brand,
  variant = 'clinic',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const gradientStyles = {
    clinic: 'from-clinic-accent/20 via-clinic-accent/10 to-transparent',
    lounge: 'from-lounge-accent/20 via-lounge-accent/10 to-transparent',
  };
  
  return (
    <motion.div
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-500 group-hover:-translate-y-2">
        <div className="p-8">
          <h3 className={`text-xl mb-3 ${variant === 'clinic' ? 'font-montserrat font-light' : 'font-cormorant'}`}>
            {title}
          </h3>
          <p className="text-sm opacity-80 leading-relaxed mb-2">
            {description}
          </p>
          {brand && (
            <p className="text-xs text-gold italic">
              {brand}
            </p>
          )}
          <div 
            className={`h-0.5 w-0 ${variant === 'clinic' ? 'bg-clinic-accent' : 'bg-lounge-accent'} mt-6 transition-all duration-500`}
            style={{ width: isHovered ? '40px' : '0' }}
          />
        </div>
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradientStyles[variant]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;