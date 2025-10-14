import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

type FooterProps = {
  variant: 'clinic' | 'lounge';
};

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const accentColor = 'text-gold-gradient';
  const bgColor = variant === 'clinic' ? 'bg-gray-50' : 'bg-lounge-secondary bg-opacity-30';
  
  return (
    <footer className={`${bgColor} pt-16 pb-8`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/images/zayn-logo.png"
                alt="ZAYN"
                className="h-8 md:h-10"
              />
            </Link>
            <p className="text-sm mb-6 opacity-70">
              Redefining beauty with science and luxury, providing exceptional treatments for transformative results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dr.sajidmughal" target="_blank" rel="noopener noreferrer" className={`${accentColor} hover:opacity-70 transition-opacity`}>
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="animated-underline">
                  Home
                </Link>
              </li>
              <li>
                <a href={`/${variant === 'clinic' ? 'dermatology' : 'wellness'}#services`} className="animated-underline">
                  Services
                </a>
              </li>
              <li>
                <a href={`/${variant === 'clinic' ? 'dermatology' : 'wellness'}#${variant === 'clinic' ? 'doctors' : 'packages'}`} className="animated-underline">
                  {variant === 'clinic' ? 'Doctors' : 'Packages'}
                </a>
              </li>
              <li>
                <a href={`/${variant === 'clinic' ? 'dermatology' : 'wellness'}#testimonials`} className="animated-underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-underline"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>28, 7, Prithvi Garden, near, Bhagwan Tatyasaheb Kawade Rd, Uday Baug, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>070280 07462</span>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h4 className="text-lg font-light mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-between">
                <span>Monday - Saturday</span>
                <span>10:00AM - 8:00PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} ZAYN Skin and Hair Clinic. All rights reserved.</p>
          <p className="italic pr-1">
            Developed by{' '}
            <a
              href="https://cyberdhruv.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent hover:from-yellow-400 hover:to-gold transition-all duration-300 underline decoration-gold decoration-2 underline-offset-2 not-italic inline-block"
            >
              Dhruv Prajapati
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;