import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import { MessageCircle, Check, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

const Emsella: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['Emsella']);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/emsella';
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
    { id: 'Emsella', name: 'Emsella', description: 'Pelvic floor strengthening' },
    { id: 'EMSculpt', name: 'EMSculpt', description: 'Body contouring & muscle building' },
    { id: 'HIFU', name: 'HIFU', description: 'Non-surgical skin tightening' },
    { id: 'IV Therapy', name: 'IV Therapy', description: 'Nutrient infusion therapy' },
    { id: 'Infrared Sauna', name: 'Infrared Sauna', description: 'Detoxification & relaxation' },
    { id: 'HydraFacial', name: 'HydraFacial', description: 'Skin rejuvenation treatment' }
  ];

  const relatedPrograms = [
    {
      title: 'Core to Floor',
      description: 'Combine Emsella with EMSculpt for complete core and pelvic floor transformation.',
      services: ['Emsella', 'EMSculpt'],
      sessions: '6 Emsella + 6 EMSculpt sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Core to Floor program that includes Emsella. Can you provide more details?'
    },
    {
      title: 'Ultimate Transformation',
      description: 'Our most comprehensive wellness program including Emsella for complete body transformation.',
      services: ['Emsella', 'EMSculpt', 'HIFU', 'Infrared Sauna'],
      sessions: '6 Emsella + 8 EMSculpt + 2 HIFU + 16 Infrared sessions',
      discount: '35% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Ultimate Transformation program that includes Emsella. Can you provide more details?'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'Emsella') return; // Can't deselect the main service
    
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
      
      {/* What is Emsella Section */}
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
                What is Emsella?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-6"
              >
               No more leaks. No more midnight dashes to the bathroom. Laugh freely. Live boldly.
Emsella is a groundbreaking non-invasive treatment that rebuilds pelvic floor strength, restores control, and enhances sexual wellness.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                FDA-cleared and backed by science, it uses High-Intensity Focused Electromagnetic (HIFEM) technology to deliver thousands of deep pelvic muscle contractions while you sit—fully clothed, no discomfort, no downtime.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/BTL_Emsella_PIC_Unit.jpeg"
                alt="Emsella Treatment"
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
                src="/images/2735521.jpg"
                alt="Emsella Benefits"
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
                  <span>Strengthens pelvic floor muscles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reduces urinary incontinence and leakage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Stops night-time bathroom visits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Improves intimacy, arousal, and orgasm quality</span>
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
                  <h3 className="text-xl font-cormorant mb-2">1. Initial Assessment</h3>
                  <p className="text-gray-600">Our specialists evaluate your needs and create a personalized treatment plan.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">2. Comfortable Treatment</h3>
                  <p className="text-gray-600">Sit fully clothed on the Emsella chair while it delivers electromagnetic pulses.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">3. Muscle Stimulation</h3>
                  <p className="text-gray-600">The device induces thousands of supramaximal pelvic floor muscle contractions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">4. Multiple Sessions</h3>
                  <p className="text-gray-600">Noticeable results often begin after 2–3 sessions. A full protocol of 6 sessions over 3 weeks is recommended, with continued improvement over the next 2 months.</p>
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
                src="/images/BTL_Emsella_PIC_Chair-model_1894.jpg" 
                alt="Emsella Treatment Process"
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
                Combine Emsella with other treatments for enhanced results and exclusive savings.
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
                        disabled={service.id === 'Emsella'}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedServices.includes(service.id)
                            ? 'border-lounge-accent bg-lounge-accent/10 shadow-md'
                            : 'border-gray-200 hover:border-lounge-accent/50 hover:bg-gray-50'
                        } ${service.id === 'Emsella' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
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
                Emsella Treatment in Pune for Pelvic Health – Zayn Skin Clinic
              </h2>

              {/* Always visible intro */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Zayn Skin Clinic offers sophisticated non-surgical procedures that help enhance the quality of life and the health of the pelvis. Emsella is one of the latest unique treatments in the market today, which is revolutionary and helps in tightening pelvic floor muscles as well as bladder control without the need to undergo surgery or to be put on hiatus.
                </p>
                <p>
                  Weakness of the pelvic floor may occur in men and women and result in urinary incontinence, discomfort, and lack of confidence. In modern EMSella therapy, patients are able to strengthen the muscles of the pelvis safely and effectively with the use of advanced technology.
                </p>
                <p>
                  Do you experience bladder leakage, weak pelvic muscles, or are you just seeking non-invasive pelvic health treatment? Zayn Skin Clinic is the place that provides you with professional care and sophisticated EMSella treatment that will provide you with visible results.
                </p>

                <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                    What is Emsella?
                  </h3>
                  <p className="mb-4">
                    EMSella is a non-invasive treatment done on high-intensity electromagnetic technology to activate the pelvic floor muscles. Thousands of supramaximal muscle contractions are produced during the procedure, which assists in strengthening muscles that aid in controlling the bladder.
                  </p>
                  <p className="mb-4">
                    The EMSella treatment procedure is done on a specially designed chair, which stimulates muscles in the pelvic region, and the patient is fully clothed. This renders the process easy, effortless, and appropriate to people who do not want surgical procedures.
                  </p>
                  <p className="mb-4">
                    Many patients prefer EMSella as a non-medical and surgery-free method of enhancing the well-being of the pelvis.
                  </p>
                  <p>
                    Our EMSella sessions at Zayn Skin Clinic are carried out by qualified experts who provide quality and safe individual care to all patients.
                  </p>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[10000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                  {/* How Emsella Treatment Works */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      How Emsella Treatment Works
                    </h3>
                    <p className="mb-4">
                      Emsella treatment is based on the principle of the delivery of an intensive electromagnetic energy to the deep pelvic muscles. These spasms assist in tightening the muscles that support the bladder and pelvic organs.
                    </p>
                    <p className="mb-4">
                      The EMSella device produces many thousands of muscle contractions in every session, which is comparable to thousands of pelvic floor exercises within a brief span of time.
                    </p>
                    <p className="mb-4">
                      This technology enables patients to gain better pelvic muscle strength without much work, as happens in conventional exercises. This leads to improved bladder control, improved pelvic muscle functioning, and enhanced confidence.
                    </p>
                    <p>
                      Many people prefer EMSella as it is a fast treatment, which usually lasts about 30 minutes and has no recovery period.
                    </p>
                  </div>

                  {/* Emsella for Women */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Emsella for Women – The New Way of Pelvic Health
                    </h3>
                    <p className="mb-4">
                      The issue of pelvic floor weakness seems to be a familiar issue with women, especially after pregnancy, childbirth, or hormonal fluctuations. EMSella is a safe and efficient treatment option that helps women to tighten their pelvic muscles and enhance bladder control.
                    </p>
                    <p className="mb-4">
                      In Zayn Skin Clinic, EMSella for women is the treatment of choice for those who are experiencing stress urinary incontinence, weakness in the pelvis, or pain associated with the loss of strength in pelvic muscles.
                    </p>
                    <p className="mb-4">
                      The procedure EMSella for women is a method that aids in pelvic support and the strength of the muscles without any invasive interventions. The recommended sessions improve bladder control and general pelvic health in many patients.
                    </p>
                    <p>
                      When women seek a safe and effective option in treating their issues, EMSella is the choice most of them settle on since it does not need surgery, injections, or rest.
                    </p>
                  </div>

                  {/* Emsella for Men */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Stronger Pelvic Muscles – Emsella for Men
                    </h3>
                    <p className="mb-4">
                      Women are not the only people who have problems with their pelvic floor. The pelvic muscle weakness is also common in many men, particularly those who have undergone prostate surgery, old age, or as a result of lifestyle. EMSella for men is a modern approach to strengthening the muscles as well as enhancing the control of the bladder.
                    </p>
                    <p className="mb-4">
                      EMSella is a treatment that is developed to assist in pelvic muscle performance and alleviate urinary incontinence symptoms in men at Zayn Skin Clinic.
                    </p>
                    <p className="mb-4">
                      The EMSella male procedure is effective because it causes deep pelvic muscles to contract in support of the bladder and reproductive organs. This aids in strengthening and managing muscles.
                    </p>
                    <p>
                      The reason why many patients prefer EMSella for men is due to the fact that it is an easy, painless, and efficient process that can be easily accommodated within a tight schedule.
                    </p>
                  </div>

                  {/* Advantages */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      The Advantages of Emsella Treatment
                    </h3>
                    <p className="mb-6">
                      There are several benefits associated with the selection of EMSella as a treatment option by individuals who want to enhance their pelvic health.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Non-Invasive Procedure', desc: 'The EMSella treatment is a totally non-surgical procedure that does not involve needles or medication.' },
                        { title: 'Comfortable & Convenient', desc: 'Patients are fully clothed as the EMSella device stimulates the muscles of the pelvis.' },
                        { title: 'Quick Sessions', desc: 'EMSella sessions are typically about 30 minutes, easily incorporated into a daily routine.' },
                        { title: 'Improves Bladder Control', desc: 'Regular EMSella sessions make pelvic muscles stronger and offer assistance in bladder control.' },
                        { title: 'Suitable for Men & Women', desc: 'Both EMSella for women and EMSella for men are effective in terms of pelvic health benefits.' }
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

                  {/* Emsculpt Cross-promotion */}
                  <div className="bg-gradient-to-r from-gold/10 to-yellow-50 rounded-3xl p-8 border border-gold/20">
                    <p className="text-lounge-accent italic">
                      Try our advanced EMSculpt Treatment to tone muscles and reduce stubborn fat without surgery. At Zayn Skin Clinic, this innovative body sculpting procedure helps improve muscle definition while supporting effective weight management.
                    </p>
                  </div>

                  {/* Treatment Cost */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Emsella Treatment Cost in Pune
                    </h3>
                    <p className="mb-4">
                      The EMSella treatment cost varies with various factors, including the number of sessions needed and the treatment plan advised by the specialist.
                    </p>
                    <p className="mb-4">
                      We offer individual consultations at Zayn Skin Clinic and identify the best plan of treatment and negotiate EMSella treatment price depending on the needs.
                    </p>
                    <p className="mb-4">
                      Those patients who are interested in enhancing health in the pelvic area can book an appointment to learn more about EMSella treatment cost and the number of sessions needed.
                    </p>
                    <p>
                      It is our aim that each patient should get good treatment and good guidance regarding their journey to their pelvic health.
                    </p>
                  </div>

                  {/* Ideal Candidate */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Who Should Be an Ideal Candidate for Emsella?
                    </h3>
                    <p className="mb-4">You can use EMSella in case you suffer from:</p>
                    <ul className="space-y-3">
                      {[
                        'Bladder control issues or urinary leaking.',
                        'Weak pelvic floor muscles.',
                        'Discomfort following birth or surgery of the pelvis.',
                        'Inability to perform pelvic exercises well.',
                        'A desire to have non-surgical treatment of pelvic health.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">
                      Both EMSella for women and EMSella for men can be used among adults who seek a secure and contemporary method of enhancing their pelvic muscles. Zayn Skin Clinic specialists have a thorough consultation before prescribing EMSella to achieve the most optimal outcomes.
                    </p>
                  </div>

                  {/* What to Expect */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      What to Expect During an Emsella Session
                    </h3>
                    <p className="mb-6">
                      Visiting Zayn Skin Clinic to have EMSella is quite easy and comfortable.
                    </p>
                    <div className="space-y-4">
                      {[
                        { step: 'Consultation', desc: 'Our experts assess your symptoms and decide that EMSella therapy is appropriate to your case.' },
                        { step: 'Treatment Session', desc: 'You will be comfortably seated in the specially designed EMSella chair where you will receive stimulation of pelvic muscles by electromagnetic energy.' },
                        { step: 'Duration', desc: 'The sessions last approximately half an hour.' },
                        { step: 'After the Procedure', desc: 'The treatment is non-invasive and therefore patients are allowed to resume their usual activities immediately.' }
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
                  </div>

                  {/* Why Choose Zayn */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Why Choose Zayn Skin Clinic for Emsella?
                    </h3>
                    <p className="mb-6">
                      The selection of a suitable clinic to undertake pelvic-related health treatments is critical to attaining effective and safe outcomes. Zayn Skin Clinic believes in high-tech medical technologies and individual treatment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Advanced Technology', desc: 'Modern equipment used is effective in EMSella treatment.' },
                        { title: 'Experienced Specialists', desc: 'The EMSella treatment will be conducted safely and comfortably by our trained professionals.' },
                        { title: 'Personalized Care', desc: 'Each patient is given a tailored program that is aimed at optimum outcomes.' },
                        { title: 'Comfortable Environment', desc: 'Our clinic offers a friendly and professional environment where patients feel comfortable during treatment.' }
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

                  {/* Final CTA */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Book Your Emsella Consultation Today
                    </h3>
                    <p className="mb-4">
                      Pelvic health is significant in the general wellbeing and confidence. Patients are able to use new EMSella equipment to work on their pelvic muscles and enhance their control over the bladder, without surgery.
                    </p>
                    <p className="mb-4">
                      In Zayn Skin Clinic, we will focus on EMSella therapy to enable both EMSella for women and EMSella for men to attain improved lives and high quality of health by enhancing their pelvic conditions.
                    </p>
                    <p className="font-semibold text-lounge-accent text-xl font-cormorant">
                      To find out more about the EMSella treatment cost or to book an appointment, call Zayn Skin Clinic and be ready to make the first step to have a better pelvic condition.
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

export default Emsella;