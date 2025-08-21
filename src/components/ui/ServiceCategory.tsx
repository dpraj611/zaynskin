import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

type Service = {
  name: string;
  description: string;
  brand?: string;
  logo?: string;
};

type ServiceCategoryProps = {
  title: string;
  icon: React.ReactNode;
  services: Service[];
  variant?: 'clinic' | 'lounge';
};

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  title,
  icon,
  services,
  variant = 'clinic',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const variantStyles = {
    clinic: {
      bg: 'bg-clinic-bg',
      border: 'border-clinic-accent',
      text: 'text-clinic-accent',
      hover: 'hover:border-clinic-accent hover:bg-clinic-secondary',
    },
    lounge: {
      bg: 'bg-lounge-bg',
      border: 'border-lounge-accent',
      text: 'text-lounge-accent',
      hover: 'hover:border-lounge-accent hover:bg-lounge-secondary',
    },
  };

  return (
    <div className={`rounded-lg border ${variantStyles[variant].border} overflow-hidden transition-all duration-300`}>
      <button
        className={`w-full p-6 flex items-center justify-between ${variantStyles[variant].bg} ${variantStyles[variant].hover} transition-all duration-300`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-4">
          <span className={`${variantStyles[variant].text}`}>{icon}</span>
          <h3 className="text-xl font-cormorant">{title}</h3>
        </div>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${variantStyles[variant].text}`}
        />
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 grid gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium mb-1 group-hover:text-gold transition-colors duration-300">
                        {service.name}
                      </h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                    {service.brand && (
                      <span className="text-xs text-gray-500 italic">
                        {service.brand}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCategory;