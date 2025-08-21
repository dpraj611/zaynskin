import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, Shield, Star, Microscope, Users, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const HairTransplant: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState(['Hair Transplant']);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const availableServices = [
    { id: 'Hair Transplant', name: 'Hair Transplant', description: 'Custom FUE technique' },
    { id: 'PRP Therapy', name: 'PRP Therapy', description: 'Platelet-rich plasma for hair growth' },
    { id: 'Scalp Micropigmentation', name: 'Scalp Micropigmentation', description: 'Non-surgical hair density solution' },
    { id: 'Hair Growth Therapy', name: 'Hair Growth Therapy', description: 'Advanced hair restoration treatment' },
    { id: 'Mesotherapy', name: 'Mesotherapy', description: 'Nutrient infusion for hair follicles' }
  ];

  const features = [
    {
      icon: <Microscope className="text-clinic-accent" size={24} />,
      title: "Custom FUE Technique",
      description: "Personalized Follicular Unit Extraction tailored to your unique hair pattern and facial structure"
    },
    {
      icon: <Award className="text-clinic-accent" size={24} />,
      title: "International Grade Instruments",
      description: "State-of-the-art equipment sourced from Barcelona, USA, and other leading medical centers worldwide"
    },
    {
      icon: <Shield className="text-clinic-accent" size={24} />,
      title: "Growth Solution Storage",
      description: "Grafts preserved in fortified growth solution to maximize survival and ensure optimal results"
    },
    {
      icon: <Users className="text-clinic-accent" size={24} />,
      title: "Dr. Sajid's Exclusive Design",
      description: "Hairlines exclusively designed by Dr. Sajid, customized to complement your facial features"
    }
  ];

  const advantages = [
    "Future-proof design that looks natural after 10-15 years",
    "Laser-assisted hairline design for precision",
    "Each case individually crafted for natural appearance",
    "Sits beautifully with your facial structure",
    "International standard protocols",
    "Advanced graft preservation techniques"
  ];

  const toggleService = (serviceId: string) => {
    if (serviceId === 'Hair Transplant') return; // Can't deselect the main service
    
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
    const message = `Hi! I'm interested in creating a custom hair restoration package with the following services: ${services}. Can you provide more information about pricing and availability?`;
    handleWhatsAppClick(message);
  };

  return (
    <div className="bg-[#faf6f2] min-h-screen">
      <Navigation variant="clinic" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Link 
              to="/dermatology#services" 
              className="inline-flex items-center text-clinic-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-cormorant font-light text-clinic-accent mb-6 leading-tight">
                  Signature FUE Hair Transplant
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Experience the pinnacle of hair restoration with our custom FUE technique, featuring international-grade instruments and Dr. Sajid's exclusive hairline design philosophy.
                </p>
                <button
                  onClick={() => handleWhatsAppClick("Hi! I'm interested in learning more about the Custom FUE Hair Transplant procedure. Can you provide more information about the process, pricing, and availability?")}
                  className="inline-flex items-center bg-clinic-accent text-white px-6 py-3 rounded-lg hover:bg-clinic-accent/90 transition-all duration-300 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/images/ht.jpg"
                  alt="Custom FUE Hair Transplant"
                  className="rounded-2xl shadow-luxury w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-16"
          >
            Why Choose Our Signature FUE Technique
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-clinic-secondary bg-opacity-30 rounded-2xl p-8 hover:shadow-luxury transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="mr-4 p-3 bg-white rounded-full shadow-soft">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Sajid's Approach Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-8"
            >
              Dr. Sajid's Exclusive Design Philosophy
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed mb-12"
            >
              Every hairline is a work of art, exclusively designed by Dr. Sajid to complement your unique facial features. 
              Our approach ensures that your hair transplant not only looks natural today but will continue to appear 
              authentic and age-appropriate for decades to come.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-clinic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope size={24} />
                </div>
                <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">
                  Laser-Assisted Design
                </h3>
                <p className="text-sm text-gray-600">
                  Precision hairline mapping using advanced laser technology
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-clinic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">
                  Future-Proof Results
                </h3>
                <p className="text-sm text-gray-600">
                  Designed to look natural and age gracefully over 10-15 years
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-clinic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">
                  Facial Harmony
                </h3>
                <p className="text-sm text-gray-600">
                  Each design exclusively tailored to your facial structure
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* International Standards Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-6">
                International Grade Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We utilize cutting-edge hair transplant instruments sourced from the world's leading medical centers 
                in Barcelona, USA, and other international hubs of medical innovation.
              </p>
              
              <div className="bg-clinic-secondary bg-opacity-30 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                  Advanced Graft Preservation
                </h3>
                <p className="text-gray-700 mb-4">
                  Our grafts are stored in a specially fortified growth solution that maximizes follicle survival 
                  and ensures optimal transplant success rates.
                </p>
                <div className="flex items-center text-sm text-clinic-accent">
                  <Shield size={16} className="mr-2" />
                  <span>99%+ graft survival rate with our preservation method</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-6">
                Our Advantages
              </h3>
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="text-gold mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">{advantage}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-secondary to-clinic-bg">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-16"
          >
            Our Custom FUE Process
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation & Design",
                description: "Comprehensive assessment and custom hairline design by Dr. Sajid"
              },
              {
                step: "02",
                title: "Laser Mapping",
                description: "Precision hairline mapping using advanced laser-assisted technology"
              },
              {
                step: "03",
                title: "Custom Extraction",
                description: "Individual follicle extraction using international-grade instruments"
              },
              {
                step: "04",
                title: "Growth Solution Storage",
                description: "Grafts preserved in fortified solution for maximum viability"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-clinic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-cormorant">
                  {process.step}
                </div>
                <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-3">
                  {process.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-6">
              Ready for Your Hair Transformation?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Experience the difference of Dr. Sajid's custom FUE technique with international-grade instruments 
              and future-proof design. Contact us today to learn more.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Hi! I'm interested in the Custom FUE Hair Transplant procedure. Can you provide more information about the process, pricing, and availability?")}
              className="inline-flex items-center bg-gradient-to-r from-clinic-accent to-clinic-accent/80 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Contact Us via WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </section>

      <Footer variant="clinic" />
    </div>
  );
};

export default HairTransplant;