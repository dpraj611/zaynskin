import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import { MessageCircle, Check, ChevronDown, ChevronUp, CheckCircle, Sparkles, Shield, Droplets, Zap } from 'lucide-react';

const IVTherapy: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['IV Therapy']);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/iv-therapy';
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
    { id: 'IV Therapy', name: 'IV Therapy', description: 'Nutrient infusion therapy' },
    { id: 'EMSculpt', name: 'EMSculpt', description: 'Body contouring & muscle building' },
    { id: 'Emsella', name: 'Emsella', description: 'Pelvic floor strengthening' },
    { id: 'HIFU', name: 'HIFU', description: 'Non-surgical skin tightening' },
    { id: 'Infrared Sauna', name: 'Infrared Sauna', description: 'Detoxification & relaxation' },
    { id: 'HydraFacial', name: 'HydraFacial', description: 'Skin rejuvenation treatment' }
  ];

  const relatedPrograms = [
    {
      title: 'Radiant Revival',
      description: 'Combine IV Therapy with HydraFacial for complete skin rejuvenation and wellness.',
      services: ['IV Therapy', 'HydraFacial'],
      sessions: '8 IV + 6 HydraFacial sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Radiant Revival program with IV Therapy and HydraFacial. Can you provide more details?'
    },
    {
      title: 'Wellness & Recovery',
      description: 'Combine IV Therapy with Infrared Sauna for optimal wellness and recovery.',
      services: ['IV Therapy', 'Infrared Sauna'],
      sessions: '8 IV + 12 Infrared Sauna sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hello! I\'d like to learn more about the Wellness & Recovery program with IV Therapy and Infrared Sauna.'
    },
    {
      title: 'Ultimate Transformation',
      description: 'Our most comprehensive wellness program including IV Therapy for complete body transformation.',
      services: ['IV Therapy', 'EMSculpt', 'Emsella', 'HIFU', 'Infrared Sauna'],
      sessions: '8 IV + 8 EMSculpt + 6 Emsella + 2 HIFU + 16 Infrared sessions',
      discount: '35% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Ultimate Transformation program that includes IV Therapy. Can you provide more details?'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'IV Therapy') return; // Can't deselect the main service
    
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
      
      {/* What is IV Therapy Section */}
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
                What is IV Therapy?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-6"
              >
               Glow from the inside out.
IV Therapy at ZAYN Lounge is more than just hydration—it's your shortcut to radiant skin, stronger hair, and unmatched vitality. By delivering potent blends of vitamins, antioxidants, and nutrients directly into your bloodstream, it ensures 100% absorption and instant transformation.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                Whether you're prepping for a big event or hitting reset after burnout, this is the ultimate self-care flex.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/ivtherapy1.jpg"
                alt="IV Therapy"
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
                src="/images/iv2.jpg"
                alt="IV Therapy Benefits"
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
                  <span>Deep hydration and glow </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Enhanced energy levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Boosted collagen and skin clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Bridal glow & celeb-ready infusions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Stronger, shinier hair health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Detoxification support</span>
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
                  <p className="text-gray-600">Our medical team assesses your needs and recommends the ideal IV formula.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">2. Preparation</h3>
                  <p className="text-gray-600">Relax in our luxury treatment room while we prepare your custom IV drip.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">3. Administration</h3>
                  <p className="text-gray-600">The IV is administered by our skilled nurses over 30-60 minutes.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">4. Post-Treatment Glow</h3>
                  <p className="text-gray-600">Feel instantly energized—with glowing skin and nourished hair that lasts.</p>
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
                src="/images/iv3.jpg"
                alt="IV Therapy Process"
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
                Combine IV Therapy with other treatments for enhanced results and exclusive savings.
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
                        disabled={service.id === 'IV Therapy'}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedServices.includes(service.id)
                            ? 'border-lounge-accent bg-lounge-accent/10 shadow-md'
                            : 'border-gray-200 hover:border-lounge-accent/50 hover:bg-gray-50'
                        } ${service.id === 'IV Therapy' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
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
                IV Therapy in Pune for Hydration, Energy & Wellness
              </h2>

              {/* Always visible intro */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent">
                  Advanced Vitamin Infusions at Zayn Skin Clinic
                </h3>
                <p>
                  In the current busy world, it may be difficult to maintain the best health. Stress, inappropriate diet, dehydration, and pollution are all killers of your body as they make you feel tired, run low on energy, and devoid of vital nutrients. IV therapy is another widely used and proven prescription in case you are trying to find a quick and efficient way of restoring the balance and improving your health.
                </p>
                <p>
                  IV therapy treatments at Zayn Skin Clinic are considered high-tech and will provide the body with the necessary amount of nutrients that can be absorbed more quickly and with immediate effect. No matter your needs, such as staying hydrated, having immunity, or having glowing skin, our personalized solutions are designed according to your wellness objectives.
                </p>

                <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                    What is IV Therapy?
                  </h3>
                  <p className="mb-4">
                    IV therapy (intravenous therapy) is a medical wellness therapy that involves the introduction of fluids, vitamins, minerals, and antioxidants to your body as a drip into your bloodstream through an IV. It is a technique that avoids the digestive system, and thus your body is able to absorb nutrients more effectively.
                  </p>
                  <p className="mb-4">
                    Vitamin IV drip treatment is almost 100 percent effective, as opposed to oral supplements, which may lose their effectiveness during digestion. That is why they are very effective among those people who want to achieve immediate and significant outcomes.
                  </p>
                  <p>
                    At Zayn Skin Clinic, the IV therapy sessions conducted by experts are aimed at providing the highest level of effectiveness, comfort, and safety.
                  </p>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[15000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                  {/* Why Choose IV Therapy */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Why Choose IV Therapy?
                    </h3>
                    <p className="mb-6">Numerous individuals are in search of IV therapy due to the increased awareness of the benefits. Here is why this treatment is becoming more and more popular:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { icon: <Zap className="w-5 h-5" />, title: 'Faster Nutrient Absorption', desc: 'Nutrients get into the blood system and are instantly accessible by your body.' },
                        { icon: <Droplets className="w-5 h-5" />, title: 'Instant Hydration', desc: 'Vitamin IV drip assists in regaining fluid balance fast, combating fatigue and dry skin.' },
                        { icon: <Sparkles className="w-5 h-5" />, title: 'Boosts Energy Levels', desc: 'Many people opt to receive IV therapy to boost their energy and reduce tiredness.' },
                        { icon: <Shield className="w-5 h-5" />, title: 'Strengthens Immunity', desc: 'IV therapy supplies the necessary vitamins to supplement the natural defense mechanism of your body.' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-5">
                          <span className="text-gold mt-1">{item.icon}</span>
                          <div>
                            <h4 className="font-semibold text-lounge-accent mb-1">{item.title}</h4>
                            <span className="text-sm">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Types of IV Therapy */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Types of IV Therapy Treatments
                    </h3>
                    <p className="mb-6">At Zayn Skin Clinic, we provide various types of customized IV therapy to address various needs:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Hydration Therapy', desc: 'Perfect when a patient feels dehydrated and needs to restore the level of fluids and enhance well-being.' },
                        { title: 'Energy Boost IV', desc: 'Effective to enhance energy and reduce fatigue for those feeling tired and run-down.' },
                        { title: 'Skin Glow Therapy', desc: 'A vitamin IV drip designed to enhance the complexion, moisture, and general radiance of the skin.' },
                        { title: 'Immunity Boost Therapy', desc: 'Meant to boost your immunity and is therefore ideal for people seeking prevention.' },
                        { title: 'Detox IV Therapy', desc: 'Helps remove toxins and assists in liver functions for overall body cleansing.' }
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

                  {/* Benefits of Vitamin IV Drip */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Benefits of Vitamin IV Drip
                    </h3>
                    <p className="mb-6">A vitamin IV drip is associated with many health and beauty advantages:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Improved Skin Health', desc: 'Among the most prominent benefits, it has the capacity to make the skin hydrated and glamorous from the inside.' },
                        { title: 'Increased Energy', desc: 'IV therapy can be used to enhance energy and improve day-to-day functions.' },
                        { title: 'Faster Recovery', desc: 'Frequently used by sportspersons and busy workers to recover fast.' },
                        { title: 'Better Hydration', desc: 'Fluid replacement is imperative to good health, and IV therapy guarantees immediate replacement.' },
                        { title: 'Detoxification', desc: 'Helps eliminate toxins and promotes general body functioning.' }
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

                  {/* Why Choose Zayn */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Why Choose Zayn Skin Clinic?
                    </h3>
                    <p className="mb-6">When looking for the right clinic for IV therapy, it is vital to make the right choice and ensure safety and outcome. This is why Zayn Skin Clinic is unique:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Expert Supervision', desc: 'All the treatments are done by professionals.' },
                        { title: 'Customized Treatments', desc: 'Each IV therapy session is personally designed.' },
                        { title: 'High-Quality Ingredients', desc: 'All vitamin IV drips are done using high-grade vitamins and nutrients.' },
                        { title: 'Hygienic Environment', desc: 'Strict hygiene and safety measures are observed at all times.' },
                        { title: 'Comfortable Experience', desc: 'In our clinic, you will find a stress-free atmosphere for your therapy.' }
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
                      What to Expect During Your Session
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: 'Consultation', desc: 'Our professionals evaluate your health objectives and prescribe the appropriate IV treatment.' },
                        { step: 'Preparation', desc: 'You will be tutored on the process and expectations.' },
                        { step: 'IV Administration', desc: 'A small IV line is put in, and your vitamin IV drip begins.' },
                        { step: 'Relaxation', desc: 'Relax and lean back as your body absorbs the much-needed nutrients.' },
                        { step: 'Completion', desc: 'The session can take between 30 to 60 minutes.' }
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
                    <p className="mt-6">Zayn Skin Clinic will offer you a safe, comfortable, and effective IV therapy session.</p>
                  </div>

                  {/* HIFU Cross-promotion */}
                  <div className="bg-gradient-to-r from-gold/10 to-yellow-50 rounded-3xl p-8 border border-gold/20">
                    <p className="text-lounge-accent italic">
                      Enhance your overall results by combining HIFU Skin Treatment Pune with IV therapy, as it supports collagen production, improves skin elasticity, and promotes a youthful, lifted appearance.
                    </p>
                  </div>

                  {/* Who Can Benefit */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Who Can Benefit from IV Therapy?
                    </h3>
                    <p className="mb-4">IV therapy is suitable for:</p>
                    <ul className="space-y-3">
                      {[
                        'Busy professionals.',
                        'Individuals with low energy.',
                        'Individuals who become dehydrated.',
                        'Fitness enthusiasts.',
                        'Consumers who want to enjoy good skin.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">Many clients visit Zayn Skin Clinic because they need IV therapy as a part of their wellness program.</p>
                  </div>

                  {/* Frequency */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Frequency of IV Therapy
                    </h3>
                    <p className="mb-6">The frequency of IV therapy will depend on your objectives:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { goal: 'General Wellness', freq: 'Once a week' },
                        { goal: 'For Hydration', freq: 'As needed' },
                        { goal: 'To Benefit Skin', freq: 'Recommended frequency' }
                      ].map((item, i) => (
                        <div key={i} className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-5 text-center">
                          <h4 className="font-semibold text-lounge-accent mb-2">{item.goal}</h4>
                          <span className="text-gold font-medium">{item.freq}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">The specialists of Zayn Skin Clinic will advise you on the optimal schedule.</p>
                  </div>

                  {/* IV Therapy vs Oral Supplements */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      IV Therapy vs Oral Supplements
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white rounded-xl shadow-soft overflow-hidden">
                        <thead>
                          <tr className="bg-lounge-accent text-white">
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Feature</th>
                            <th className="px-6 py-4 text-left font-cormorant text-lg">IV Therapy</th>
                            <th className="px-6 py-4 text-left font-cormorant text-lg">Oral Supplements</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { feature: 'Absorption', iv: 'High', oral: 'Limited' },
                            { feature: 'Speed', iv: 'Immediate', oral: 'Slow' },
                            { feature: 'Effectiveness', iv: 'High', oral: 'Moderate' }
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-lounge-bg/50' : 'bg-white'}>
                              <td className="px-6 py-3 font-medium text-lounge-accent">{row.feature}</td>
                              <td className="px-6 py-3 text-gold font-medium">{row.iv}</td>
                              <td className="px-6 py-3 text-gray-600">{row.oral}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-6">That is why most individuals choose IV therapy compared to traditional supplements.</p>
                  </div>

                  {/* Safety & Preparation & Post-Treatment */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Safety & Precautions
                    </h3>
                    <p className="mb-4">Although IV therapy is generally safe, it should be noted that it is important to:</p>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Choose a certified clinic.',
                        'Use professional advice.',
                        'Stay hydrated.',
                        'Educate on health issues.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <Shield className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-medium text-lounge-accent">At Zayn Skin Clinic, our foremost consideration is your safety.</p>
                  </div>

                  {/* Preparation & Post-Treatment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                      <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                        Preparing for IV Therapy
                      </h3>
                      <ul className="space-y-3">
                        {[
                          'Eat a light meal.',
                          'Stay hydrated.',
                          'Wear comfortable clothing.',
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
                          'Drink plenty of water.',
                          'Avoid strenuous activities.',
                          'Rest if needed.',
                          'Follow expert advice.'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Long-Term Benefits */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Long-Term Benefits
                    </h3>
                    <p className="mb-4">IV therapy can be administered regularly and offer:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['Improved immunity', 'Better skin health', 'Increased energy levels', 'Enhanced hydration', 'Overall wellness'].map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-white rounded-xl p-4 shadow-soft">
                          <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm font-medium text-lounge-accent">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">A significant number of clients regularly visit Zayn Skin Clinic for IV therapy to sustain long-term health benefits.</p>
                  </div>

                  {/* FAQs */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      FAQs
                    </h3>
                    <div className="space-y-4">
                      {[
                        { q: 'Is IV therapy safe?', a: 'Yes, under the supervision of professionals.' },
                        { q: 'How long does it take?', a: 'Typically 30–60 minutes.' },
                        { q: 'How often should I take it?', a: 'Depends on your health goals.' },
                        { q: 'Does it help with skin?', a: 'Yes, vitamin IV drip enhances skin health.' },
                        { q: 'Can it boost energy?', a: 'Yes, it helps reduce fatigue.' },
                        { q: 'Is it painful?', a: 'Minimal discomfort when inserting the IV line.' },
                        { q: 'Who should avoid it?', a: 'Consult a doctor if you have medical conditions.' },
                        { q: 'Are results immediate?', a: 'Many people feel the benefits immediately.' },
                        { q: 'Can it help immunity?', a: 'Yes, it helps keep immunity healthy.' },
                        { q: 'Is it better than supplements?', a: 'Yes, due to higher absorption rates.' }
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
                      Start Your Wellness Journey Today
                    </h3>
                    <p className="mb-4">
                      IV therapy is the ideal choice in case you want to have a fast and efficient method of changing your health, enhancing your energy levels, and having glowing skin.
                    </p>
                    <p className="mb-4">
                      We at Zayn Skin Clinic believe in quality care by providing the best IV therapy that is customized to suit you.
                    </p>
                    <p className="font-semibold text-lounge-accent text-xl font-cormorant">
                      Make your appointment today and enjoy the advantages of professional vitamin IV drip therapy which aims at making you feel and look your best.
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

export default IVTherapy;