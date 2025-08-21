import React from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'clinic' | 'lounge';
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  variant = 'clinic',
  className = '',
}) => {
  const textAlign = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  const variantStyles = {
    clinic: 'font-montserrat',
    lounge: 'font-cormorant',
  };
  
  return (
    <div className={`mb-12 ${textAlign[align]} ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl mb-4 ${variantStyles[variant]}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto opacity-80">
          {subtitle}
        </p>
      )}
      <div className={`h-0.5 w-16 mt-6 ${variant === 'clinic' ? 'bg-clinic-accent' : 'bg-lounge-accent'} ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;