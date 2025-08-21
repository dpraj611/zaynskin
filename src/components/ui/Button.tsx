import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'clinic' | 'lounge' | 'gold';
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'gold',
  className = '',
  to,
  onClick,
  type = 'button',
  disabled = false,
  href,
}) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;