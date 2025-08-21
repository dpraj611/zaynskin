import React from 'react';
import { motion } from 'framer-motion';

type CircleMotifProps = {
  variant?: 'clinic' | 'lounge';
  className?: string;
};

const CircleMotif: React.FC<CircleMotifProps> = ({ variant = 'clinic', className = '' }) => {
  const variantStyles = {
    clinic: 'border-clinic-accent',
    lounge: 'border-lounge-accent',
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`w-32 h-32 rounded-full border ${variantStyles[variant]} opacity-20 absolute`}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        className={`w-24 h-24 rounded-full border ${variantStyles[variant]} opacity-30 absolute top-4 left-4`}
      />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        className={`w-16 h-16 rounded-full border ${variantStyles[variant]} opacity-40 absolute top-8 left-8`}
      />
    </div>
  );
};

export default CircleMotif;