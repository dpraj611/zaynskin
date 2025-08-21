import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';

type ArticleCardProps = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
  variant?: 'clinic' | 'lounge';
  className?: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  image,
  date,
  readTime,
  slug,
  variant = 'clinic',
  className = '',
}) => {
  const variantStyles = {
    clinic: 'hover:border-clinic-accent',
    lounge: 'hover:border-lounge-accent',
  };
  
  return (
    <motion.div
      className={`overflow-hidden border border-transparent ${variantStyles[variant]} transition-all duration-300 rounded ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs mb-2 text-gray-500">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock size={12} className="mr-1" />
            <span>{readTime}</span>
          </div>
        </div>
        <h3 className={`text-xl mb-2 ${variant === 'clinic' ? 'font-montserrat font-light' : 'font-cormorant'}`}>
          <Link to={`/blog/${slug}`} className="animated-underline">
            {title}
          </Link>
        </h3>
        <p className="text-sm opacity-80 mb-4">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${slug}`} 
          className={`text-xs uppercase tracking-wider font-medium ${variant === 'clinic' ? 'text-clinic-accent' : 'text-lounge-accent'} animated-underline`}
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
};

export default ArticleCard;