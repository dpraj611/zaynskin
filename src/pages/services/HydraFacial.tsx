import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import { MessageCircle, Check } from 'lucide-react';

const HydraFacial: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['HydraFacial']);

  useEffect(() => {
    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/hydrafacial';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    window.scrollTo(0, 0);
  }, []);

  const availableServices = [
    { id: 'HydraFacial', name: 'HydraFacial', description: 'Skin rejuvenation treatment' },
    { id: 'EMSculpt', name: 'EMSculpt', description: 'Body contouring & muscle building' },
    { id: 'Emsella', name: 'Emsella', description: 'Pelvic floor strengthening' },
    { id: 'HIFU', name: 'HIFU', description: 'Non-surgical skin tightening' },
    { id: 'IV Therapy', name: 'IV Therapy', description: 'Nutrient infusion therapy' },
    { id: 'Infrared Sauna', name: 'Infrared Sauna', description: 'Detoxification & relaxation' }
  ];

  const relatedPrograms = [
    {
      title: 'Radiant Revival',
      description: 'Combine HydraFacial with IV Therapy for complete skin rejuvenation and wellness.',
      services: ['HydraFacial', 'IV Therapy'],
      sessions: '6 HydraFacial + 8 IV sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Radiant Revival program with HydraFacial and IV Therapy. Can you provide more details?'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'HydraFacial') return; // Can't deselect the main service
    
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "917028007462";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomPackageInquiry = () => {
    const services = selectedServices.join(', ');
    const message = `Hi! I'm interested in creating a custom package with the following services: ${services}. Can you provide more information about pricing and availability?`;
    handleWhatsAppClick(message);
  };

  return (
    <div className="bg-lounge-bg">
      <Navigation variant="lounge" />
      
      {/* What is HydraFacial Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-pinyon text-lounge-accent mb-6"
              >
                What is HydraFacial?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-6"
              >
                The facial that every bride, celebrity, and skincare expert swears by.
HydraFacial is not just a facial—it's a glow ritual. This multi-step experience delivers instant radiance and deep skin transformation in just 30 minutes. No redness. No downtime. Just glassy, flawless, red-carpet-ready skin.
Perfect before events, photoshoots, or anytime your skin deserves to be at its absolute best.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
               Powered by HydraFacial MD®, our treatment deeply detoxes and rejuvenates using medical-grade serums tailored to your skin goals. Ideal for acne-prone, dull, dry, or aging skin types.


              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/hf2.jpg"
                alt="HydraFacial Treatment"
                className="rounded-2xl shadow-luxury"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <img
                src="/images/hf3.jpg"
                alt="HydraFacial Benefits"
                className="rounded-2xl shadow-luxury"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-pinyon text-lounge-accent mb-8"
              >
                Key Benefits
              </motion.h2>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Instant glass skin glow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Unclogs pores & removes blackheads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reduced fine lines and wrinkles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Enhanced skin texture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reduces acne, pigmentation & dullness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Zero downtime, event-ready results</span>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-lounge-secondary bg-opacity-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-pinyon text-lounge-accent mb-8"
              >
                How Does It Work?
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-cormorant mb-2">1. Cleanse & Peel</h3>
                  <p className="text-gray-600">Gentle exfoliation and relaxing resurfacing.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">2. Extract & Hydrate</h3>
                  <p className="text-gray-600">Removes debris from pores with painless suction while nourishing with intense moisturizers.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">3. Fuse & Protect</h3>
                  <p className="text-gray-600">Antioxidants and peptides saturate the skin's surface to maximize glow.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">4. Maintain & Protect</h3>
                  <p className="text-gray-600">Extend the glow with a personalized post-facial routine curated by our skin experts.</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/hfhdiw.png"
                alt="HydraFacial Process"
                className="rounded-2xl shadow-luxury"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Builder Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-pinyon text-lounge-accent text-center mb-12"
          >
            Create Your Package
          </motion.h2>
          <div className="max-w-6xl mx-auto">
            <div className="bg-lounge-bg rounded-2xl p-8 shadow-luxury">
              <p className="text-center mb-8">
                Combine HydraFacial with other treatments for enhanced results and exclusive savings.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Service Selection */}
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <h3 className="text-xl font-cormorant mb-6 text-lounge-accent">Select Services</h3>
                  
                  <div className="space-y-3 mb-6">
                    {availableServices.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        disabled={service.id === 'HydraFacial'}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedServices.includes(service.id)
                            ? 'border-lounge-accent bg-lounge-accent/10 shadow-md'
                            : 'border-gray-200 hover:border-lounge-accent/50 hover:bg-gray-50'
                        } ${service.id === 'HydraFacial' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-lounge-accent">{service.name}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedServices.includes(service.id)
                              ? 'border-lounge-accent bg-lounge-accent'
                              : 'border-gray-300'
                          }`}>
                            {selectedServices.includes(service.id) && (
                              <Check size={14} className="text-white" />
                            )}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="bg-lounge-secondary/20 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-lounge-accent mb-2">Selected Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedServices.map((serviceId) => (
                        <span key={serviceId} className="bg-lounge-accent text-white px-3 py-1 rounded-full text-sm">
                          {serviceId}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCustomPackageInquiry}
                    className="w-full bg-lounge-accent text-white font-medium py-3 px-4 rounded-lg hover:bg-lounge-accent/90 transition-all duration-300 flex items-center justify-center"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Inquire About Custom Package</span>
                  </button>
                </div>
                
                {/* Right Side - Signature Programs */}
                <div>
                  <h3 className="text-xl font-cormorant mb-6 text-lounge-accent">Recommended Signature Programs</h3>
                  <div className="space-y-4">
                    {relatedPrograms.map((program, index) => (
                      <div key={index} className="bg-white rounded-xl p-6 shadow-soft hover:shadow-luxury transition-all duration-300">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-cormorant text-lg font-medium text-lounge-accent">{program.title}</h4>
                          <span className="bg-gold/90 text-white text-xs font-bold px-2 py-1 rounded-full">{program.discount}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{program.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {program.services.map((service, idx) => (
                            <span key={idx} className="bg-lounge-secondary/30 text-lounge-accent px-2 py-1 rounded-full text-xs">
                              {service}
                            </span>
                          ))}
                        </div>
                        <div className="text-xs text-gray-500 mb-4">{program.sessions}</div>
                        <button
                          onClick={() => handleWhatsAppClick(program.whatsappMessage)}
                          className="w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          <span>Book Program via WhatsApp</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="lounge" />
    </div>
  );
};

export default HydraFacial;