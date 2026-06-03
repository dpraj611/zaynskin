import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import { MessageCircle, Check, ChevronDown, ChevronUp, CheckCircle, Sparkles, Shield } from 'lucide-react';

const HIFU: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['HIFU']);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/hifu';
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
    { id: 'HIFU', name: 'HIFU', description: 'Non-surgical skin tightening' },
    { id: 'EMSculpt', name: 'EMSculpt', description: 'Body contouring & muscle building' },
    { id: 'Emsella', name: 'Emsella', description: 'Pelvic floor strengthening' },
    { id: 'IV Therapy', name: 'IV Therapy', description: 'Nutrient infusion therapy' },
    { id: 'Infrared Sauna', name: 'Infrared Sauna', description: 'Detoxification & relaxation' },
    { id: 'HydraFacial', name: 'HydraFacial', description: 'Skin rejuvenation treatment' }
  ];

  const relatedPrograms = [
    {
      title: 'Sculpt & Lift',
      description: 'Combine HIFU with EMSculpt for comprehensive body contouring and skin tightening.',
      services: ['HIFU', 'EMSculpt'],
      sessions: '2 HIFU + 8 EMSculpt sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Sculpt & Lift program with HIFU and EMSculpt. Can you provide more details?'
    },
    {
      title: 'Ultimate Transformation',
      description: 'Our most comprehensive wellness program including HIFU for complete body transformation.',
      services: ['HIFU', 'EMSculpt', 'Emsella', 'Infrared Sauna'],
      sessions: '2 HIFU + 8 EMSculpt + 6 Emsella + 16 Infrared sessions',
      discount: '35% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Ultimate Transformation program that includes HIFU. Can you provide more details?'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'HIFU') return; // Can't deselect the main service
    
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
      
      {/* What is HIFU Section */}
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
                What is HIFU?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-6"
              >
                Lift without a scalpel. Glow without a filter.
HIFU (High-Intensity Focused Ultrasound) is the gold standard in non-surgical face lifting, now elevated with our Diablo Gold HIFU technology.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                It targets deep skin layers to lift, sculpt, and firm—erasing fine lines, melting double chins, and reviving your glow. No needles. No downtime. Just a face that looks younger, sharper, and more radiant with every session.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/hifu1.jpeg"
                alt="HIFU Treatment"
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
                src="/images/hifu2.jpg"
                alt="HIFU Benefits"
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
                  <span>Sculpted jawline & V-shaped face</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reduction in double chin & sagging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Wrinkle reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Enhanced skin tightness & texture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Long-lasting results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>No downtime required</span>
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
                  <h3 className="text-xl font-cormorant mb-2">1. Consultation</h3>
                  <p className="text-gray-600">Our specialists assess your skin and customize the treatment plan.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">2. Treatment</h3>
                  <p className="text-gray-600">Ultrasound energy is delivered to precise depths of your skin.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">3. Stimulation</h3>
                  <p className="text-gray-600">The energy triggers natural collagen production and tissue regeneration.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">4. Results</h3>
                  <p className="text-gray-600">Noticeable lift after 1 session; full results peak 8–12 weeks post-treatment.</p>
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
                src="/images/hifu3.jpg"
                alt="HIFU Process"
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
                Combine HIFU with other treatments for enhanced results and exclusive savings.
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
                        disabled={service.id === 'HIFU'}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedServices.includes(service.id)
                            ? 'border-lounge-accent bg-lounge-accent/10 shadow-md'
                            : 'border-gray-200 hover:border-lounge-accent/50 hover:bg-gray-50'
                        } ${service.id === 'HIFU' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
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

      {/* Article Content Section with Read More / Read Less */}
      <section className="py-20 bg-lounge-secondary bg-opacity-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-8">
                HIFU Skin Treatment in Pune for Non-Surgical Face Lifting & Tightening
              </h2>

              {/* Always visible intro */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent">
                  Advanced Aesthetic Solutions at Zayn Skin Clinic
                </h3>
                <p>
                  The process of getting old is natural; however, today, one can keep a young, firm, and glowing skin without surgery thanks to modern technology. Considering the fact that you may need a non-invasive procedure that will help you to lift/tighten your skin, HIFU skin treatment Pune can be one of the best solutions currently.
                </p>
                <p>
                  We provide advanced services at Zayn Skin Clinic, which are aimed at revitalizing your skin and providing it with its elasticity. Our procedures, which are led by experts, are safe, comfortable, and visible, hence making us a reliable place to be in case a person wants to be provided with advanced aesthetic care.
                </p>

                <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                    What is HIFU Treatment?
                  </h3>
                  <p className="mb-4">
                    HIFU (High-Intensity Focused Ultrasound) is a non-surgical treatment that is revolutionary and employs ultrasound energy to treat the deeper layers of skin. This energy makes the skin produce collagen, hence making the skin tighter and firmer, and lifted in the long run.
                  </p>
                  <p>
                    HIFU facial Pune treatments are not invasive, have no downtime, and no cuts are required, unlike invasive procedures, and the results are natural-looking. It is a perfect option for those people who desire to enhance their looks without having surgery.
                  </p>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[15000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                  {/* How HIFU Works */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      How HIFU Works
                    </h3>
                    <p className="mb-4">
                      The HIFU technology concentrates the ultrasound energy into specific depths below the skin. This produces regulated heat energy, which activates the natural healing process of the body and stimulates the production of collagen.
                    </p>
                    <p>
                      The higher the collagen concentration, the more of a pull the skin is getting. This explains why HIFU skin tightening Pune is commonly prescribed for people who are suffering the effects of sagging skin and fine lines.
                    </p>
                  </div>

                  {/* Major Advantages */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      The Major Advantages of HIFU Skin Treatment
                    </h3>
                    <p className="mb-6">There are a variety of advantages of HIFU skin treatment Pune, both among men and women:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Non-Surgical Face Lift', desc: 'HIFU skin treatment Pune has one of the greatest benefits in the fact that it provides a non-surgical lifting effect.' },
                        { title: 'Skin Tightening & Firming', desc: 'The procedure activates collagen, making HIFU skin tightening Pune very effective in enhancing skin elasticity.' },
                        { title: 'Natural Results', desc: 'The outcome comes in bits, giving a natural and rejuvenated appearance.' },
                        { title: 'No Downtime', desc: 'HIFU facial Pune can be done without stopping you from your daily activities.' },
                        { title: 'Long-Lasting Effects', desc: 'The collagen-building process lasts months following the treatment.' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-soft">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-lounge-accent mb-1">{item.title}</h4>
                            <span className="text-sm">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Facial HIFU Skin Rejuvenation */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Facial HIFU Skin Rejuvenation
                    </h3>
                    <p className="mb-6">HIFU facial Pune is made to target the following areas:</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {['Face', 'Neck', 'Jawline', 'Forehead', 'Under-eye area'].map((area, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-4">
                          <Sparkles className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="font-medium text-lounge-accent">{area}</span>
                        </div>
                      ))}
                    </div>
                    <p>
                      This treatment is used to disarm wrinkles, to lift sinking skin, and to enhance skin texture. HIFU facial Pune is a non-invasive method of facial lift; many clients love using this as it offers them an option to a traditional facelift.
                    </p>
                  </div>

                  {/* Why Choose Zayn */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Why Choose Zayn Skin Clinic?
                    </h3>
                    <p className="mb-6">One should find the most suitable HIFU clinic Pune, where a clinic should not only adopt the latest technology but also expertise. We offer the following at Zayn Skin Clinic:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Experienced Professionals', desc: 'The staff is trained on safe and effective practices.' },
                        { title: 'Advanced Technology', desc: 'Modern equipment is used to give accurate and consistent results.' },
                        { title: 'Personalized Treatments', desc: 'Each session is tailored according to your skin and issues.' },
                        { title: 'Hygiene & Safety', desc: 'We observe high levels of hygiene with all treatments.' },
                        { title: 'Proven Results', desc: 'Clients refer to us as a top HIFU clinic Pune because of providing apparent change.' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3 bg-white rounded-xl p-4 shadow-soft">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-lounge-accent mb-1">{item.title}</h4>
                            <span className="text-sm">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Session Expectations */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      The Expectations of Your HIFU Session
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: 'Consultation', desc: 'Our specialists examine your skin condition and objectives.' },
                        { step: 'Preparation', desc: 'The treatment area is washed, and a gel is applied.' },
                        { step: 'Treatment', desc: 'The ultrasound energy is provided to specific regions.' },
                        { step: 'Completion', desc: 'The duration of the session is 30–60 minutes.' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-5">
                          <div className="w-10 h-10 bg-lounge-accent text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-cormorant shadow-luxury">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="text-xl font-cormorant font-medium text-lounge-accent mb-1">{item.step}</h4>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">Each and every HIFU session at Zayn Skin Clinic is aimed at ensuring maximum comfort and effectiveness.</p>
                  </div>

                  {/* Ideal Candidate */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Who is the Ideal Candidate?
                    </h3>
                    <p className="mb-4">HIFU skin treatment Pune is appropriate for:</p>
                    <ul className="space-y-3">
                      {[
                        'Patients who have mild to moderate skin laxity.',
                        'Individuals seeking a non-surgical lift.',
                        'People with saggy skin and wrinkles.',
                        'People with the desire to get preventive anti-aging treatment.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">Our clinic is a HIFU clinic Pune preferred by clients of various age groups.</p>
                  </div>

                  {/* Infrared Sauna Cross-promotion */}
                  <div className="bg-gradient-to-r from-gold/10 to-yellow-50 rounded-3xl p-8 border border-gold/20">
                    <p className="text-lounge-accent italic">
                      Enhance your results from HIFU skin treatment Pune by combining it with Infrared Sauna Treatment, which helps detoxify the body, improve circulation, and support overall skin health from within.
                    </p>
                  </div>

                  {/* Areas Treated */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Areas Treated with HIFU
                    </h3>
                    <p className="mb-6">HIFU may be applied to several regions, which include:</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {['Face', 'Neck', 'Jawline', 'Cheeks', 'Brow area'].map((area, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-4">
                          <Sparkles className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="font-medium text-lounge-accent">{area}</span>
                        </div>
                      ))}
                    </div>
                    <p>HIFU skin tightening Pune is especially suitable for the lifting and shaping of these parts.</p>
                  </div>

                  {/* How Many Sessions */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      How Many Sessions Are Needed?
                    </h3>
                    <p className="mb-4">
                      The majority of clients are able to notice results after the first session. Nonetheless, other sessions can be prescribed with regard to your skin condition.
                    </p>
                    <p>
                      In Zayn Skin Clinic, we not only offer fixed packages when it comes to HIFU skin treatment Pune but also tailor them to achieve the best outcomes.
                    </p>
                  </div>

                  {/* HIFU vs Surgical Facelift */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      HIFU vs Surgical Facelift
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-soft overflow-hidden">
                        <thead>
                          <tr className="bg-lounge-accent text-white">
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Feature</th>
                            <th className="px-6 py-4 text-left font-cormorant text-lg">HIFU</th>
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Surgical Facelift</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { feature: 'Invasiveness', hifu: 'Non-invasive', surgical: 'Surgical' },
                            { feature: 'Downtime', hifu: 'None', surgical: 'Weeks' },
                            { feature: 'Results', hifu: 'Gradual', surgical: 'Immediate' },
                            { feature: 'Safety', hifu: 'High', surgical: 'Moderate' }
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-lounge-bg/50' : 'bg-white'}>
                              <td className="px-6 py-3 font-medium text-lounge-accent">{row.feature}</td>
                              <td className="px-6 py-3 text-gold font-medium">{row.hifu}</td>
                              <td className="px-6 py-3 text-gray-600">{row.surgical}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-6">This is the reason why HIFU facial Pune is a much safer and more convenient option for many people.</p>
                  </div>

                  {/* Preparation & Post-Treatment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                      <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                        Preparation Tips
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'Stay hydrated.',
                          'Heavy skincare products should be avoided.',
                          'Follow expert advice.',
                          'Relax and stay calm.'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                      <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                        Post-Treatment Care
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'Avoid direct sun exposure.',
                          'Use sunscreen regularly.',
                          'Adhere to skincare directions.',
                          'Stay hydrated.'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Safety */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Safety & Precautions
                    </h3>
                    <p className="mb-4">Although HIFU skin treatment Pune is not harmful, it is necessary to:</p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Select a reliable HIFU clinic Pune.',
                        'Follow professional guidance.',
                        'Report on medical history.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-medium text-lounge-accent">At Zayn Skin Clinic, we follow the best safety standards at any given procedure.</p>
                  </div>

                  {/* Long-Term Benefits */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Long-Term Benefits of HIFU
                    </h3>
                    <p className="mb-4">The care that can be experienced with proper attention is:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {['Firmer skin', 'Reduced wrinkles', 'Improved facial contours', 'Youthful appearance'].map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-4">
                          <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm font-medium text-lounge-accent">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p>A major proportion of clients keep revisiting our HIFU clinic Pune to have long-term anti-aging benefits.</p>
                  </div>

                  {/* Why HIFU is the Future */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Why HIFU is the Future of Skincare
                    </h3>
                    <p className="mb-4">
                      The contemporary aesthetic procedures are getting turned to non-surgical ones. HIFU skin treatment Pune is one of the most developed products of skin tightening and lifting.
                    </p>
                    <p>
                      It offers good results without surgery hence it is the preferred option among those who would like to rejuvenate naturally.
                    </p>
                  </div>

                  {/* FAQs */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      FAQs
                    </h3>
                    <div className="space-y-4">
                      {[
                        { q: 'Is HIFU safe?', a: 'Yes, it is a non-invasive and non-dangerous treatment.' },
                        { q: 'How long does a session take?', a: 'Typically 30–60 minutes.' },
                        { q: 'Is there downtime?', a: 'No, you may start normal duties at once.' },
                        { q: 'When will I see results?', a: 'The outcome begins to increase with time (weeks).' },
                        { q: 'Does it hurt?', a: 'Mild discomfort may be experienced.' },
                        { q: 'How long do results last?', a: 'Up to 6–12 months.' },
                        { q: 'Is it applicable to every type of skin?', a: 'Yes, the majority of skin types can be helped.' },
                        { q: 'Can it replace surgery?', a: 'It is a non-surgical alternative.' },
                        { q: 'How many sessions are needed?', a: 'Typically one, including maintenance.' },
                        { q: 'Is it worth it?', a: 'Yes, for those seeking non-invasive skin tightening.' }
                      ].map((faq, i) => (
                        <div key={i} className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-4">
                          <h4 className="font-semibold text-lounge-accent mb-1">{faq.q}</h4>
                          <p className="text-sm text-gray-600">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Start Your Skin Transformation
                    </h3>
                    <p className="mb-4">
                      HIFU skin treatment Pune is the ideal choice in case you want to use a safe, effective, and non-surgical method of achieving youthful skin.
                    </p>
                    <p className="mb-4">
                      We believe in making you look and feel good at Zayn Skin Clinic, which has advanced treatments and professionals working to ensure that you look and feel the best.
                    </p>
                    <p className="font-semibold text-lounge-accent text-xl font-cormorant">
                      Make your booking now at a reputable HIFU clinic Pune and reap the rewards of a professional HIFU facial Pune that will help you to look and feel good in your natural beauty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Read More / Read Less Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-lounge-accent to-lounge-secondary text-white px-8 py-3 rounded-full hover:shadow-luxury transition-all duration-300 text-lg font-semibold group"
                >
                  {isExpanded ? (
                    <>
                      Read Less
                      <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </>
                  ) : (
                    <>
                      Read More
                      <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer variant="lounge" />
    </div>
  );
};

export default HIFU;