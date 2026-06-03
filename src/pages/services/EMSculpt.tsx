import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import { MessageCircle, Check, ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

const EMSculpt: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['EMSculpt']);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Fat Burning & Muscle Toning | Zayn Skin Clinic Pune';

    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/emsculpt';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Looking for non-surgical fat loss or muscle toning? Try body contouring at Zayn Skin Clinic, Pune. Safe, effective, and no downtime—book now!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Looking for non-surgical fat loss or muscle toning? Try body contouring at Zayn Skin Clinic, Pune. Safe, effective, and no downtime—book now!';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
  }, []);

  const availableServices = [
    { id: 'EMSculpt', name: 'EMSculpt', description: 'Body contouring & muscle building' },
    { id: 'Emsella', name: 'Emsella', description: 'Pelvic floor strengthening' },
    { id: 'HIFU', name: 'HIFU', description: 'Non-surgical skin tightening' },
    { id: 'IV Therapy', name: 'IV Therapy', description: 'Nutrient infusion therapy' },
    { id: 'Infrared Sauna', name: 'Infrared Sauna', description: 'Detoxification & relaxation' },
    { id: 'HydraFacial', name: 'HydraFacial', description: 'Skin rejuvenation treatment' }
  ];

  const relatedPrograms = [
    {
      title: 'Core to Floor',
      description: 'Combine EMSculpt with Emsella for complete core and pelvic floor transformation.',
      services: ['EMSculpt', 'Emsella'],
      sessions: '6 EMSculpt + 6 Emsella sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Core to Floor program that includes EMSculpt. Can you provide more details?'
    },
    {
      title: 'Lean & Clean',
      description: 'Enhance your EMSculpt results with detoxifying Infrared Sauna sessions.',
      services: ['EMSculpt', 'Infrared Sauna'],
      sessions: '8 EMSculpt + 12 Infrared sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hello! I\'d like to learn more about the Lean & Clean program with EMSculpt and Infrared Sauna.'
    },
    {
      title: 'Sculpt & Lift',
      description: 'Combine EMSculpt with HIFU for comprehensive body contouring and skin tightening.',
      services: ['EMSculpt', 'HIFU'],
      sessions: '8 EMSculpt + 2 HIFU sessions',
      discount: '25% OFF',
      whatsappMessage: 'Hi! I\'m interested in the Sculpt & Lift program with EMSculpt and HIFU. Can you provide more details?'
    }
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'EMSculpt') return; // Can't deselect the main service
    
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
      
      {/* What is EMSculpt Section */}
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
                What is EMSculpt?
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg leading-relaxed mb-6"
              >
                EMSculpt is not just fat reduction — SCULPTED ABS WITHOUT SWEAT!
Using breakthrough High-Intensity Focused Electromagnetic (HIFEM) technology, EMSculpt stimulates deep muscle contractions that your body can't do on its own — reprogramming your core from within.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg leading-relaxed"
              >
                At ZAYN Wellness Lounge, we use the latest BTL EMSculpt NEO to sculpt and strengthen your muscles while simultaneously reducing fat. It's the ultimate biohack for anyone seeking visible results without downtime.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/images/Emsculpt_Neo_PIC_Device_4660_EN100.jpg"
                alt="EMSculpt Treatment"
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
                src="/images/emsculptkb.jpg"
                alt="EMSculpt Benefits"
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
                  <span>Builds lean muscle mass</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Reduces stubborn fat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Sculpts visible abs and defined curves</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>No downtime, no recovery — just results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>FDA-cleared & globally trusted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Long-lasting transformation after just 6 sessions</span>
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
                  <p className="text-gray-600">Our wellness experts understand your body goals and tailor a sculpting plan that targets your core, glutes, or arms.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">2. Treatment</h3>
                  <p className="text-gray-600">HIFEM technology induces powerful muscle contractions while you relax.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">3. Muscle Response</h3>
                  <p className="text-gray-600">Your body undergoes 20,000+ contractions—equivalent to the world's toughest ab workout.</p>
                </div>
                <div>
                  <h3 className="text-xl font-cormorant mb-2">4. Results</h3>
                  <p className="text-gray-600">Visible changes typically begin after 4–6 sessions, with the most noticeable results appearing around 2 months after your final session. As your muscles adapt and fat metabolizes, you'll experience enhanced core strength, toned definition, and a more sculpted, confident silhouette over time.</p>
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
                src="/images/Emsculpt_PIC_Male-Female-model_unit-chair_ENUS100.jpeg"
                alt="EMSculpt Process"
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
                Combine EMSculpt with other treatments for enhanced results and exclusive savings.
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
                        disabled={service.id === 'EMSculpt'}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                          selectedServices.includes(service.id)
                            ? 'border-lounge-accent bg-lounge-accent/10 shadow-md'
                            : 'border-gray-200 hover:border-lounge-accent/50 hover:bg-gray-50'
                        } ${service.id === 'EMSculpt' ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
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
                Emsculpt Treatment in Pune – Advanced Body Sculpting at Zayn Skin Clinic
              </h2>

              {/* Always visible intro */}
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  Zayn Skin Clinic offers progressive aesthetic procedures that can enable you to have a shredded, modeled, and uninhibited physique. We have innovative EMSculpt treatment in our clinic, which is a modern non-surgical treatment that is used to reduce fat with a simultaneous increase in muscle growth.
                </p>
                <p>
                  In case you are having trouble with stubborn fat or no muscle tone despite the physical exercises, em body sculpting can be the best option. Our experts in Zayn Skin Clinic can make you have visible body contours with safety and effectiveness using modern technology and a personalized approach towards treatments.
                </p>
                <p>
                  You may be doing an em sculpting near me search or may be seeking a good clinic that can be relied on to get body contouring done, but you want an advanced form of treatment that will give you visible results in a short period of time.
                </p>

                <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                    What is EMSCULPT Treatment?
                  </h3>
                  <p className="mb-4">
                    EMSculpt is a new non-invasive body contouring device, which is based on high-intensity focused electromagnetic energy that triggers the strong contractions of the muscles. These contractions are much more severe than possible in the course of regular exercises, which will assist in building the muscle and burning fat at the same time.
                  </p>
                  <p className="mb-4">
                    In the process, the machine generates thousands of muscular contractions on the target area, which enables muscles to be strengthened and define the body better.
                  </p>
                  <p className="mb-4">
                    Our EMSculpt treatment plans at Zayn Skin Clinic will assist the patients to attain better body tone and acquire better muscle definition without undergoing surgery or experiencing downtime.
                  </p>
                  <p>
                    This new form of technology renders EMSculpt weight loss solutions achievable, whereby fat reduction and muscle firming are achieved during the same treatment.
                  </p>
                </div>
              </div>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[10000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                  {/* What is EM Body Sculpting */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      What is EM Body Sculpting?
                    </h3>
                    <p className="mb-4">
                      Em body sculpting is a new body contouring methodology that aims at tightening the muscles and decreasing stubborn fat deposits that are stubborn. The effect of the treatment is achieved by stimulating the deep muscle tissues, leading to repeated contractions of the muscles that reshape and tighten the body.
                    </p>
                    <p className="mb-4">
                      There are numerous people who decide to undergo body sculpting in cases when regular exercise and dieting are not sufficient to focus on particular parts of the body, like the abdomen, thighs, or buttocks.
                    </p>
                    <p className="mb-4">
                      In Zayn Skin Clinic, Em body sculpting will be used to enhance body shapes and muscle tone, as well as assisting in EMSculpt weight loss. The technology assists in building the outline as it makes the muscles stronger and less fat at the same time, producing an outlined body.
                    </p>
                    <p>
                      To those who are in need of em sculpting in my area, our clinic provides safe and state-of-the-art methods to be done by qualified people.
                    </p>
                  </div>

                  {/* EMSlim Treatment */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      EMSlim Treatment – An Innovative Body Beauty Solution
                    </h3>
                    <p className="mb-4">
                      Among the modern technologies provided at Zayn Skin Clinic is Emslim treatment, which is a non-invasive body sculptor that aims at tightening muscles and aiding in the loss of fat.
                    </p>
                    <p className="mb-4">
                      The Emslim treatment is based on the effect of applying intense contractions to the muscles by means of the delivery of electromagnetic energy. These contractions also aid in the tightening of muscle fibers and achieving better definition of muscles.
                    </p>
                    <p className="mb-4">
                      Our Emslim treatment is painless and fast, and usually takes about 30 minutes basing on the part of the body being treated. The reason behind most people choosing Emslim treatment is that it does not necessitate any surgery, injection, or time off.
                    </p>
                    <p className="mb-4">
                      The results of the EMSLIM treatment can include improved muscle tone, better body shape, and recognizable body contouring in patients after repeated EMSLIM treatment.
                    </p>
                    <p>
                      In Zayn Skin Clinic, an Emslim treatment program will be tailored according to your body objectives and regions of interest.
                    </p>
                  </div>

                  {/* How EMSculpt Weight Loss Works */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      How EMSculpt Weight Loss Works
                    </h3>
                    <p className="mb-4">
                      EMSculpt weight loss procedures are aimed at weight loss and building up the muscles. This is a high-tech technology that builds muscles and not just fat, unlike the traditional forms of losing weight that solely do that.
                    </p>
                    <p className="mb-4">
                      Supermaximal contractions of the muscles occur as a result of the stimulation of electromagnetic energy during EMSculpt weight loss sessions, enhancing muscle density and strength.
                    </p>
                    <p className="mb-4">
                      These non-stop contractions cause muscle remodelling and assist in the fat destruction of specific areas.
                    </p>
                    <p className="mb-4">
                      The EMSculpt weight loss treatments at Zayn Skin Clinic are designed to assist patients in having a slimmer and more toned body, besides enhancing muscle definition.
                    </p>
                    <p>
                      EMSculpt weight loss is often used in combination with lifestyle change interventions like balanced nutrition and exercise in order to achieve maximum outcomes.
                    </p>
                  </div>

                  {/* Advantages */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-6">
                      Advantages of EM Body Sculpting
                    </h3>
                    <p className="mb-6">
                      Em body sculpting has a number of benefits to individuals who need to enhance their body shape and build muscles.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Non-Surgical Procedure', desc: 'The main advantage of em body sculpting is that it is entirely non-invasive and does not demand surgery or injections.' },
                        { title: 'Grows Muscle & Reduces Fat', desc: 'EMSculpt treatment technology contributes to increasing muscle, and at the same time reduces areas of fat.' },
                        { title: 'No Downtime', desc: 'EMSculpt treatment does not require any downtime and patients are able to resume their normal daily activities.' },
                        { title: 'Targeted Body Contouring', desc: 'Areas that can be targeted include the abdomen, thighs, buttock and arms to make them look more sculpted.' },
                        { title: 'Supports Weight Loss Goals', desc: 'EMSculpt weight loss treatments assist in supporting the overall fitness and body contouring.' }
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

                  {/* Areas Treated */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Areas Treated with EM Body Sculpting
                    </h3>
                    <p className="mb-6">
                      Em body sculpting treatment at Zayn Skin Clinic can be applied to enhance body tone and shape in various parts of the body. Some of the common areas of treatment include:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {['Abdomen', 'Buttocks', 'Thighs', 'Arms', 'Calves'].map((area, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl p-4">
                          <Sparkles className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="font-medium text-lounge-accent">{area}</span>
                        </div>
                      ))}
                    </div>
                    <p>
                      The treatments are used to make patients have a sculpted and toned body without the use of any invasive procedure.
                    </p>
                    <p className="mt-4 italic text-lounge-accent">
                      Try Emsella Treatment at Zayn Skin Clinic to strengthen pelvic muscles and improve bladder control. This simple, non-surgical treatment works for both men and women.
                    </p>
                  </div>

                  {/* Ideal Candidate */}
                  <div className="bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-3xl p-8">
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      Who is an Ideal Candidate for EMSlim Treatment?
                    </h3>
                    <p className="mb-4">You can be an excellent EMSlim candidate when you:</p>
                    <ul className="space-y-3">
                      {[
                        'Desire to enhance the tonality of muscles and body shape.',
                        'Have unresponsive fat that is not exercise-responsive.',
                        'Are of good weight but wish for better body shaping.',
                        'Favor non-operative cosmetic surgery.',
                        'Desire a fast and painless operation.'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">
                      In Zayn Skin Clinic, our professionals consider every patient separately and advise on the use of EMSLIM treatment or EMSculpt treatment to achieve the most favorable outcomes.
                    </p>
                  </div>

                  {/* What to Expect */}
                  <div>
                    <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4">
                      What to Expect During the Treatment
                    </h3>
                    <p className="mb-6">
                      The process of EMSculpt is usually straightforward if you visit Zayn Skin Clinic.
                    </p>
                    <div className="space-y-4">
                      {[
                        { step: 'Consultation', desc: 'Our experts will assess your body objectives and find out which one will be better in your case — em body sculpting or Emslim treatment.' },
                        { step: 'Treatment Session', desc: 'The device applicator is applied on the targeted area during the session. The machine produces electromagnetic energy that produces intense muscle contractions.' },
                        { step: 'Duration', desc: 'The average time required during each EMSculpt treatment is about 30 minutes based on the area of treatment.' },
                        { step: 'After the Treatment', desc: 'Em body sculpting does not involve any form of invasiveness and, therefore, patients are able to resume normal functions once the procedure is completed.' }
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
                      Why Choose Zayn Skin Clinic for EM Sculpting Near Me?
                    </h3>
                    <p className="mb-6">
                      In case you are looking at Em sculpting close to me, it is important to make a good choice of a clinic to have safe and efficient results. We offer the use of high quality technology and professional services in offering aesthetic treatments at Zayn Skin Clinic.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Experienced Specialists', desc: 'Our practitioners have worked on the procedures of advanced body contouring such as EMSculpt treatment and Emslim treatment.' },
                        { title: 'Advanced Technology', desc: 'Our equipment is contemporary and is considered safe and effective in the process of sculpting the em body.' },
                        { title: 'Individualized Care Plans', desc: 'Each client is given an individual plan to obtain the optimal outcomes in EMSculpt weight loss and body sculpting.' },
                        { title: 'Comfortable Environment', desc: 'Our clinic is well-equipped to ensure that the patients are in a hygienic environment where they can relax during treatment.' }
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
                      Get the Body You Desire with EMSculpt
                    </h3>
                    <p className="mb-4">
                      The technology of body contouring has heavily developed, and now it is easy to get a lean body without undergoing operations. Through the EMSculpt treatment, the patients will have the ability to build muscles and reduce fat at the same time to have a more sculpted body.
                    </p>
                    <p className="mb-4">
                      In Zayn Skin Clinic, em body sculpting and Emslim treatment will enable you to attain a significant and safe result.
                    </p>
                    <p className="mb-4">
                      In case you want to get em sculpting in my area, we have a clinic with professional treatments that will help you achieve your objective of EMSculpt weight loss and body shaping.
                    </p>
                    <p className="font-semibold text-lounge-accent text-xl font-cormorant">
                      Book your consultation at Zayn Skin Clinic and start with a better, slimmer, and more confident you.
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

export default EMSculpt;