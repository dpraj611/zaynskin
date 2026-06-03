import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import { MessageCircle, Check, ChevronDown, ChevronUp, CheckCircle, Sparkles, Droplets, Sun, Heart, Shield } from 'lucide-react';

const InfraredSauna: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['Infrared Sauna']);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/infrared-sauna';
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
    { id: 'Infrared Sauna', name: 'Infrared Sauna', description: 'Detoxification & relaxation' },
    { id: 'EMSculpt', name: 'EMSculpt', description: 'Body contouring & muscle building' },
    { id: 'Emsella', name: 'Emsella', description: 'Pelvic floor strengthening' },
    { id: 'HIFU', name: 'HIFU', description: 'Non-surgical skin tightening' },
    { id: 'IV Therapy', name: 'IV Therapy', description: 'Nutrient infusion therapy' },
    { id: 'HydraFacial', name: 'HydraFacial', description: 'Skin rejuvenation treatment' }
  ];

  const relatedPrograms = [
    {
      title: 'Lean & Clean',
      description: 'Combine Infrared Sauna with EMSculpt for enhanced body transformation and detoxification.',
      services: ['Infrared Sauna', 'EMSculpt'],
      sessions: '12 Infrared + 8 EMSculpt sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Lean & Clean program with Infrared Sauna and EMSculpt. Can you provide more details?'
    },
    {
      title: 'Wellness & Recovery',
      description: 'Combine Infrared Sauna with IV Therapy for optimal wellness and recovery.',
      services: ['Infrared Sauna', 'IV Therapy'],
      sessions: '12 Infrared Sauna + 8 IV sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hello! I\'d like to learn more about the Wellness & Recovery program with Infrared Sauna and IV Therapy.'
    },
    {
      title: 'Ultimate Transformation',
      description: 'Our most comprehensive wellness program including Infrared Sauna for complete body transformation.',
      services: ['Infrared Sauna', 'EMSculpt', 'Emsella', 'HIFU'],
      sessions: '16 Infrared + 8 EMSculpt + 6 Emsella + 2 HIFU sessions',
      discount: '35% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Ultimate Transformation program that includes Infrared Sauna. Can you provide more details?'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'Infrared Sauna') return; // Can't deselect the main service
    
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
      
      {/* What is Infrared Sauna Section */}
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
                What is Infrared Sauna?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-6"
              >
                Healing heat, elevated.
Our advanced Infrared Sauna isn't just a session—it's an experience of deep cellular revival. Unlike traditional saunas, infrared rays heat your body directly, stimulating intense detox, improving skin, circulation, and even your mood—all while you lounge in comfort.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                Enjoy the experience solo, with a friend, or as a couple—hydration, gowns, towels, and personal entertainment included. Pure bliss, inside and out.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/ir2.jpeg"
                alt="Infrared Sauna"
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
                src="/images/ir1.jpg"
                alt="Infrared Sauna Benefits"
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
                  <span>Powerful detox at the cellular level</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Improved blood circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Weight loss and calorie burning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Boosted collagen & skin glow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reduced stress, anxiety, and fatigue</span>
                </li>
                 <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Better sleep & mental clarity</span>
                </li>
                  <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Better sleep & mental clarity</span>
                </li>
                  <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Enhances mood through endorphin release</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Relief from joint & muscle pain</span>
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
                  <h3 className="text-xl font-cormorant mb-2">1. Preparation</h3>
                  <p className="text-gray-600">We provide hydration, towels, and gowns—just arrive, hydrate and be ready to unwind.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">2. The Session</h3>
                  <p className="text-gray-600">Enter your private infrared cabin, settle in, and choose your show or music.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">3. Deep Heating</h3>
                  <p className="text-gray-600">Far-infrared waves warm your core and promote natural detox and healing.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">4. Post-Session Care</h3>
                  <p className="text-gray-600">Cool down, sip on infused water, and feel lighter, clearer, and radiant.</p>
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
                src="/images/ir3.jpg"
                alt="Infrared Sauna Process"
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
                Combine Infrared Sauna with other treatments for enhanced results and exclusive savings.
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
                        disabled={service.id === 'Infrared Sauna'}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedServices.includes(service.id)
                            ? 'border-lounge-accent bg-lounge-accent/10 shadow-md'
                            : 'border-gray-200 hover:border-lounge-accent/50 hover:bg-gray-50'
                        } ${service.id === 'Infrared Sauna' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
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
                Infrared Sauna Treatment in Pune for Total Wellness & Skin Rejuvenation
              </h2>

              {/* Always visible intro */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent">
                  Advanced Care at Zayn Skin Clinic
                </h3>
                <p>
                  In the present time and era of modern life, pollution, stress, and unhealthy habits may affect not only the physical health but also the quality of the skin. The majority of people have resorted to the use of natural and non-invasive treatments in order to promote balance, detoxification of the body, and skin health. Infrared Sauna is one such very successful and rapidly growing solution.
                </p>
                <p>
                  We offer the best wellness solutions, i.e., well-crafted sessions that unite relaxation and apparent signs of health in Zayn Skin Clinic. Our professionalism model will guarantee that each client will receive safe, effective, and outcome-driven care that meets their needs.
                </p>

                <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                    What is an Infrared Sauna?
                  </h3>
                  <p className="mb-4">
                    An infrared sauna is a new wellness technology that involves the use of infrared light rays to heat the body without heating the air around it directly. This is because it can penetrate more deeply into the skin and tissues, and it is therefore more effective than conventional saunas.
                  </p>
                  <p>
                    Contrary to traditional methods of heat treatment, an infrared sauna is operated at a comfortable temperature, even though it provides the same strong detox effects and rejuvenation. This allows it to be applicable to a larger group of people since some might find the typical saunas too radical.
                  </p>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[15000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                  {/* Understanding Infrared Sauna Treatment */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Understanding Infrared Sauna Treatment
                    </h3>
                    <p className="mb-4">
                      Infrared sauna therapy is a form of treatment that can be used to promote the natural healing process in the body. It promotes sweating as one of the most natural methods of getting rid of toxins in the body by raising core body temperature.
                    </p>
                    <p>
                      The infrared sauna treatment in Zayn Skin Clinic is aimed at improving the well-being of the internal and external skin. This twin advantage makes it one of the favorite options among those who would like to have an in-depth treatment of self-care procedures.
                    </p>
                  </div>

                  {/* How Infrared Sauna Works */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      How Infrared Sauna Works
                    </h3>
                    <p className="mb-6">
                      The infrared sauna technology has the use of infrared rays, which are emitted and reach deep into the skin layers. These rays turn into heat energy in the body, and they cause several positive physiological reactions, including:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: <Heart className="w-5 h-5" />, text: 'Improved blood circulation' },
                        { icon: <Sun className="w-5 h-5" />, text: 'Increased oxygen supply to tissues' },
                        { icon: <Sparkles className="w-5 h-5" />, text: 'Enhanced cellular repair' },
                        { icon: <Droplets className="w-5 h-5" />, text: 'Release of toxins through sweat' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-soft">
                          <span className="text-gold">{item.icon}</span>
                          <span className="font-medium text-lounge-accent">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      This is the reason the use of Infrared sauna therapy Pune is highly prescribed as a way of relaxation and also as a therapeutic method.
                    </p>
                  </div>

                  {/* Major Advantages */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      The Major Advantages of Infrared Sauna Therapy
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Full Body Detoxification', desc: 'Among the leading benefits, it facilitates a profound level of detoxification. Sweating eliminates toxins, heavy metals, and impurities deposited in the body over time.' },
                        { title: 'Enhanced Skin Health', desc: 'Frequent sessions allow enhancing skin quality, acne reduction, and natural glow. It acts by dilating pores and raising blood flow to the skin.' },
                        { title: 'De-Stressing & Relaxation', desc: 'The infrared sauna works on the nervous system, promoting relaxation, decreasing anxiety, and leading to mental calm.' },
                        { title: 'Improved Circulation', desc: 'Increased circulation means efficient delivery of nutrients and oxygen in the body to maintain health.' },
                        { title: 'Muscle Pain Relief & Recovery', desc: 'Very beneficial to athletes and fitness enthusiasts because it helps alleviate muscle pain and stiffness in the joints.' },
                        { title: 'Supports Weight Management', desc: 'Frequent use aids in calorie burning and getting metabolic rate up, constituting a good addition to a weight loss program.' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-5">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-semibold text-lounge-accent mb-1">{item.title}</h4>
                            <span className="text-sm">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skin Treatment */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Infrared Sauna Skin Treatment for Radiant Skin
                    </h3>
                    <p className="mb-6">
                      Good skin needs good care, hydration, and detoxification. The Infrared sauna skin treatment Pune is uniquely created to heal the usual skin issues, which include:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {['Acne & breakouts', 'Dull skin tone', 'Fine lines & wrinkles', 'Uneven texture', 'Enlarged pores'].map((issue, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-white rounded-xl p-3 shadow-soft">
                          <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm font-medium text-lounge-accent">{issue}</span>
                        </div>
                      ))}
                    </div>
                    <p>
                      This therapy enhances the manufacture of collagen and blood circulation, thereby restoring your skin to its natural radiance. Many clients observe tangible benefits within a few sessions of Infrared sauna skin treatment Pune.
                    </p>
                  </div>

                  {/* Why Choose Zayn */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Why Choose Zayn Skin Clinic?
                    </h3>
                    <p className="mb-6">
                      The identification of the appropriate clinic is important in obtaining the optimal outcome. In Zayn Skin Clinic, we are aiming to offer quality care accompanied by advanced technology.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Expert Supervision', desc: 'We have all sessions under trained professionals who know your needs.' },
                        { title: 'Advanced Equipment', desc: 'Modern systems are employed to make infrared sauna treatment Pune effective and safe.' },
                        { title: 'Hygiene & Safety', desc: 'Our highest priority is to maintain high standards of hygiene.' },
                        { title: 'Personalized Approach', desc: 'Each customer is provided with a unique plan, whether for detox, relaxation, or skin improvement.' }
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

                  {/* What to Know During Session */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      What to Know During Your Session
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: 'Consultation', desc: 'Your health and skin issues are examined by our professionals.' },
                        { step: 'Preparation', desc: 'You will be advised on fluid intake and time taken.' },
                        { step: 'Sauna Experience', desc: 'You can sit back in the infrared sauna as your body begins to warm.' },
                        { step: 'Detox Phase', desc: 'The body will start sweating and will expel toxins and impurities.' },
                        { step: 'Cool Down', desc: 'At the end of the session, you rejuvenate and take a drink of water.' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-4 bg-white rounded-xl p-5 shadow-soft">
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
                  </div>

                  {/* Who Can Benefit */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Who Can Benefit from Infrared Sauna?
                    </h3>
                    <p className="mb-4">The therapy applies to a large group of people, such as:</p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Individuals who are stressed or tired.',
                        'Patients with skin issues.',
                        'Fitness enthusiasts.',
                        'Individuals who want to be detoxified.',
                        'Persons experiencing muscle or joint pain.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Infrared sauna Pune, in particular, is effective, especially for people interested in improving their skin health in a natural way.
                    </p>
                  </div>

                  {/* IV Therapy Cross-promotion */}
                  <div className="bg-gradient-to-r from-gold/10 to-yellow-50 rounded-3xl p-8 border border-gold/20">
                    <p className="text-lounge-accent italic">
                      Enhance your wellness journey by combining infrared sauna sessions with IV therapy, which helps deliver essential vitamins and hydration directly into your bloodstream for faster recovery and improved energy levels.
                    </p>
                  </div>

                  {/* Frequency of Sessions */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Frequency of Sessions
                    </h3>
                    <p className="mb-6">Depending on your objectives, the sessions necessary are:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { goal: 'For Detox', freq: '2–3 times a week' },
                        { goal: 'To Improve Skin', freq: '1–2 times each week' },
                        { goal: 'For Relaxation', freq: 'Once a week' }
                      ].map((item, i) => (
                        <div key={i} className="bg-white rounded-xl p-5 shadow-soft text-center">
                          <h4 className="font-semibold text-lounge-accent mb-2">{item.goal}</h4>
                          <span className="text-gold font-medium">{item.freq}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      Depending on your requirements, our experts will suggest the most appropriate schedule of your infrared sauna treatment Pune.
                    </p>
                  </div>

                  {/* Infrared vs Traditional Sauna */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Infrared Sauna vs Traditional Sauna
                    </h3>
                    <p className="mb-6">Although both alternatives are advantageous, an infrared sauna is better and more comfortable.</p>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-soft overflow-hidden">
                        <thead>
                          <tr className="bg-lounge-accent text-white">
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Feature</th>
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Infrared Sauna</th>
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Traditional Sauna</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { feature: 'Heat Type', infrared: 'Direct body heating', traditional: 'Air heating' },
                            { feature: 'Temperature', infrared: 'Moderate', traditional: 'High' },
                            { feature: 'Comfort Level', infrared: 'High', traditional: 'Moderate' },
                            { feature: 'Detox Depth', infrared: 'Deeper', traditional: 'Surface' }
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-lounge-bg/50' : 'bg-white'}>
                              <td className="px-6 py-3 font-medium text-lounge-accent">{row.feature}</td>
                              <td className="px-6 py-3 text-gold font-medium">{row.infrared}</td>
                              <td className="px-6 py-3 text-gray-600">{row.traditional}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-6">
                      This is the reason why most people will choose the Infrared sauna treatment Pune compared to the traditional treatment.
                    </p>
                  </div>

                  {/* Preparation & Post-Treatment Tips */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                      <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                        Preparation Tips
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'Stay hydrated',
                          'Do not have heavy meals before the session.',
                          'Wear comfortable clothing.',
                          'Remove makeup before the session.',
                          'Relax and enjoy the process.'
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
                          'Drink plenty of water.',
                          'Take a cool shower.',
                          'Moisturize your skin.',
                          'Avoid caffeine immediately after.',
                          'Take a break and let your body rest.'
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
                    <p className="mb-4">Though the use of an infrared sauna is safe, some precautions need to be taken:</p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Do not have sessions when dehydrated.',
                        'Get medical advice in case you have medical conditions.',
                        'Follow expert instructions.',
                        'Exceeding session time recommendations should be avoided.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-medium text-lounge-accent">At Zayn Skin Clinic, your health is a priority.</p>
                  </div>

                  {/* Long-Term Benefits */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Long-Term Benefits
                    </h3>
                    <p className="mb-4">By attending regular sessions, you will be able to enjoy:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Clearer & healthier skin', 'Reduced stress levels', 'Improved circulation', 'Better sleep quality', 'Enhanced overall wellness'].map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-4">
                          <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm font-medium text-lounge-accent">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      Repeated Infrared sauna skin treatment Pune sessions would help a great deal to enhance not only your physical health but your looks too.
                    </p>
                  </div>

                  {/* FAQs */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      FAQs
                    </h3>
                    <div className="space-y-4">
                      {[
                        { q: 'Is it safe for everyone?', a: 'Yes, but individuals with medical conditions are supposed to see a doctor.' },
                        { q: 'How long is one session?', a: 'Typically 20–45 minutes.' },
                        { q: 'Can it improve skin?', a: 'Indeed, Infrared sauna skin treatment Pune is beneficial in promoting skin clarity.' },
                        { q: 'How often should I go?', a: 'It depends on your objectives and the advice of experts.' },
                        { q: 'Does it help in detox?', a: 'Yes, perspiration is a remover of toxins.' },
                        { q: 'Is it good for stress?', a: 'Yes, it promotes relaxation.' },
                        { q: 'Can I lose weight?', a: 'It supports calorie burning.' },
                        { q: 'Is it comfortable?', a: 'Yes, more comfortable than the classical saunas.' },
                        { q: 'What should I wear?', a: 'Light and airy clothing.' },
                        { q: 'Are the results immediate?', a: 'Some benefits are immediate, while others improve over time.' }
                      ].map((faq, i) => (
                        <div key={i} className="bg-white rounded-xl p-4 shadow-soft">
                          <h4 className="font-semibold text-lounge-accent mb-1">{faq.q}</h4>
                          <p className="text-sm text-gray-600">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Final CTA */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Start Your Wellness Journey Today
                    </h3>
                    <p className="mb-4">
                      Should you be willing to enjoy the fruits of high-level wellness treatment, it is high time you start. We believe in ensuring that you attain your health and skincare objectives by providing professional care and creative treatments at Zayn Skin Clinic.
                    </p>
                    <p className="font-semibold text-lounge-accent text-xl font-cormorant">
                      Make your reservation now and find out how your body, mind, and skin can change with Infrared sauna therapy Pune.
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

export default InfraredSauna;