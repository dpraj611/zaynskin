import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, Stethoscope, Sparkles, FileText, Menu, X } from 'lucide-react';
import { TubelightNavBar } from '../ui/tubelight-navbar';
import Button from '../ui/Button';

type NavigationProps = {
  variant: 'clinic' | 'lounge';
};

const Navigation: React.FC<NavigationProps> = ({ variant }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = variant === 'clinic' 
    ? [
        { 
          name: 'Services', 
          url: '/services', 
          icon: Stethoscope,
          action: location.pathname === '/dermatology' ? () => scrollToSection('services') : undefined
        },
        { 
          name: 'Doctors', 
          url: '/dermatology#doctors', 
          icon: Home,
          action: location.pathname === '/dermatology' ? () => scrollToSection('doctors') : undefined
        },
        { 
          name: 'Gallery', 
          url: '/dermatology#gallery', 
          icon: Sparkles,
          action: location.pathname === '/dermatology' ? () => scrollToSection('gallery') : undefined
        },
        { 
          name: 'Blog', 
          url: '/dermatology#blog', 
          icon: FileText,
          action: location.pathname === '/dermatology' ? () => scrollToSection('blog') : undefined
        },
      ]
    : [
        { 
          name: 'Services', 
          url: '/wellness#services', 
          icon: Sparkles,
          action: location.pathname === '/wellness' ? () => scrollToSection('services') : undefined
        },
        { 
          name: 'Packages', 
          url: '/wellness#packages', 
          icon: Home,
          action: location.pathname === '/wellness' ? () => scrollToSection('packages') : undefined
        },
        { 
          name: 'Testimonials', 
          url: '/wellness#testimonials', 
          icon: Stethoscope,
          action: location.pathname === '/wellness' ? () => scrollToSection('testimonials') : undefined
        },
        { 
          name: 'Blog', 
          url: '/wellness#blog', 
          icon: FileText,
          action: location.pathname === '/wellness' ? () => scrollToSection('blog') : undefined
        },
      ];

  // Always use the tubelight navbar now - it's fully responsive
  return <TubelightNavBar items={navItems} variant={variant} />;
};

export default Navigation;