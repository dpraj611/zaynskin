import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  rating: number;
  variant?: 'clinic' | 'lounge';
  className?: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  rating,
  variant = 'clinic',
  className = '',
}) => {
  const variantStyles = {
    clinic: 'bg-white border-clinic-secondary',
    lounge: 'bg-white border-lounge-secondary',
  };
  
  return (
    <motion.div
      className={`p-6 rounded border ${variantStyles[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-gold' : 'text-gray-300'}
            fill={i < rating ? '#d4af37' : 'none'}
          />
        ))}
      </div>
      <p className="text-base italic mb-4">{quote}</p>
      <p className={`text-sm font-medium ${variant === 'clinic' ? 'text-clinic-accent' : 'text-lounge-accent'}`}>
        {author}
      </p>
    </motion.div>
  );
};

export default TestimonialCard;