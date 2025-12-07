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
    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services/hair-transplant-in-pune';
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
    { id: 'Hair Transplant', name: 'Hair Transplant', description: 'Custom FUE technique' },
    { id: 'PRP Therapy', name: 'PRP Therapy', description: 'Platelet-rich plasma for hair growth' },
    { id: 'Scalp Micropigmentation', name: 'Scalp Micropigmentation', description: 'Non-surgical hair density solution' },
    { id: 'Hair Growth Therapy', name: 'Hair Growth Therapy', description: 'Advanced hair restoration treatment' },
    { id: 'Mesotherapy', name: 'Mesotherapy', description: 'Nutrient infusion for hair follicles' }
  ];

  const features = [
    {
      icon: <Microscope className="text-clinic-accent" size={24} />,
      title: "Natural-Looking Hairline",
      description: "Expertly crafted to blend seamlessly with your face, ensuring a result that looks completely natural"
    },
    {
      icon: <Award className="text-clinic-accent" size={24} />,
      title: "Advanced Technology",
      description: "From FUE (Follicular Unit Extraction) to FUT, we apply world-class standards for optimal results"
    },
    {
      icon: <Shield className="text-clinic-accent" size={24} />,
      title: "Painless Experience",
      description: "Minimal discomfort, reduced healing time, and superior outcomes with modern techniques"
    },
    {
      icon: <Clock className="text-clinic-accent" size={24} />,
      title: "Long-Lasting Results",
      description: "Your own hair, growing naturally for life - a permanent solution to hair loss"
    }
  ];

  const procedures = [
    {
      title: "Follicular Unit Extraction (FUE)",
      description: "A minimally invasive procedure where individual hair follicles are extracted and transplanted. This ensures fast recovery and natural results."
    },
    {
      title: "Follicular Unit Transplantation (FUT)",
      description: "Also known as the strip method, FUT is ideal for individuals requiring greater coverage in a single session."
    },
    {
      title: "PRP Therapy (Platelet-Rich Plasma)",
      description: "A non-surgical treatment that stimulates hair growth and strengthens existing follicles using your body's own healing properties."
    },
    {
      title: "Non-Surgical Treatments",
      description: "For patients not ready for transplant, we offer laser therapy, mesotherapy, and advanced medications for effective hair loss treatment."
    }
  ];

  const whyChooseUs = [
    "Experienced Experts with years of natural hairline restoration expertise",
    "State-of-the-art infrastructure with modern equipment and advanced techniques",
    "Personalized attention - every scalp is unique, and we treat each case individually",
    "Transparent pricing with honest consultations and no hidden costs",
    "Extremely high success rate with countless satisfied patients achieving natural results"
  ];

  const whoCanBenefit = [
    "Men with receding hairlines looking to appear younger",
    "Women experiencing hair loss due to hormonal changes or stress",
    "Individuals with bald patches or thinning crowns caused by genetics",
    "Those who have tried other treatments without achieving desired results"
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
              to="/best-dermatologist-in-pune#services" 
              className="inline-flex items-center text-clinic-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Services
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-cormorant font-light text-clinic-accent mb-6 leading-tight">
                  Hair Transplant in Pune – Zayn Skin Clinic
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Hair on your head is more than just appearance—it's your confidence, personality, and identity. At Zayn Skin Clinic, we understand how hair loss affects your self-esteem and relationships. That's why we offer advanced hair transplant solutions in Pune that deliver natural, permanent results and restore the confidence you deserve.
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
                  alt="Hair Transplant in Pune"
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
            The Zayn Skin Clinic Promise
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

      {/* Why Hair Loss Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-8 text-center"
            >
              Understanding Hair Loss – You're Not Alone
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 leading-relaxed mb-8 text-center"
            >
              Millions of people experience hair loss due to heredity, stress, lifestyle, or medical conditions. Whether you're in your 20s or 40s, dealing with receding hairlines, bald patches, or thinning crowns—you don't have to accept it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-gray-700 leading-relaxed text-center font-medium"
            >
              The good news? You no longer need to live with hair loss. Zayn Skin Clinic provides the most effective hair loss treatment in Pune, tailored for both men and women, restoring not just your hair but your confidence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-12"
          >
            Who Can Benefit from Hair Transplant?
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {whoCanBenefit.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start bg-clinic-secondary bg-opacity-20 rounded-lg p-6"
              >
                <CheckCircle className="text-clinic-accent mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-lg text-gray-700 mt-12 max-w-3xl mx-auto"
          >
            Whether you're looking for hair loss treatment for men or hair loss treatment for women, our experts design a personalized plan that suits your unique needs.
          </motion.p>
        </div>
      </section>

      {/* Hair Transplant Procedures Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-secondary to-clinic-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-6">
                Hair Transplant Procedures
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Zayn Skin Clinic, we specialize in advanced hair treatment in Pune that combines medical excellence with aesthetic artistry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {procedures.map((procedure, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-soft"
                >
                  <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-3">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{procedure.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Zayn Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-12"
          >
            Why Choose Zayn Skin Clinic for Hair Transplant in Pune?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto"
          >
            With so many clinics around, why do patients call us the best hair transplant in Pune? Here's why:
          </motion.p>

          <div className="max-w-4xl mx-auto space-y-4">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start bg-clinic-secondary bg-opacity-30 rounded-lg p-6"
              >
                <CheckCircle className="text-clinic-accent mr-3 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-gray-700 text-lg">{reason}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-xl text-clinic-accent font-cormorant mt-12"
          >
            At Zayn Skin Clinic, it's not about treatment—it's about transformation.
          </motion.p>
        </div>
      </section>


      {/* Life After Transplant Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-12"
          >
            Life After Hair Transplant – What to Expect
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Clock size={28} />,
                title: "Minimal Downtime",
                description: "Most patients return to work within days"
              },
              {
                icon: <Microscope size={28} />,
                title: "Gradual Growth",
                description: "Hair begins to grow naturally within 3-6 months"
              },
              {
                icon: <Shield size={28} />,
                title: "Permanent Results",
                description: "Once grown, transplanted hair lasts for life"
              },
              {
                icon: <Star size={28} />,
                title: "Confidence Boost",
                description: "The transformation is not just physical, but emotional"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-soft"
              >
                <div className="w-14 h-14 bg-clinic-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-lg text-gray-700 mt-12 max-w-3xl mx-auto"
          >
            Your journey doesn't end at the procedure—it's the beginning of a confident new you.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is a hair transplant painful?",
                answer: "No. Thanks to modern anesthesia and techniques, discomfort is minimal."
              },
              {
                question: "How long does the procedure take?",
                answer: "Depending on the method, it usually takes 4–8 hours."
              },
              {
                question: "Is it safe?",
                answer: "Absolutely. At Zayn Skin Clinic, we follow strict medical protocols for safety and hygiene."
              },
              {
                question: "Will my hair look natural?",
                answer: "Yes! Our techniques ensure your hair blends seamlessly with your natural hairline."
              },
              {
                question: "Can women undergo a hair transplant?",
                answer: "Yes. We provide hair loss treatment for women and transplants tailored to female needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-clinic-secondary bg-opacity-20 rounded-lg p-6"
              >
                <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-clinic-accent to-clinic-accent/90">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-white mb-6">
              Why Now is the Right Time
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Each day you wait, more hair fades away. The sooner you act, the better the results. Choosing the best hair transplant in Pune today could mean enjoying natural, thick, and permanent hair for the rest of your life.
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-10">
              Imagine looking in the mirror six months from now and seeing a full head of hair, a confident smile, and the person you've been missing.
            </p>
            <h3 className="text-2xl font-cormorant font-light text-white mb-6">
              Book Your Consultation Today
            </h3>
            <p className="text-white/90 leading-relaxed mb-8">
              At Zayn Skin Clinic, we don't just treat hair—we restore confidence, happiness, and identity. Whether you're looking for a hair transplant in Pune, hair treatment in Pune, or the best hair loss treatment in Pune, our doors are open to you.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Hi! I'm interested in learning more about hair transplant procedures at Zayn Skin Clinic. Can you provide information about the consultation, process, and pricing?")}
              className="inline-flex items-center bg-white text-clinic-accent px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 text-lg font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Book Your Consultation</span>
            </button>
            <p className="text-white/90 text-sm mt-6">
              Stop hiding. Stop worrying. Start living with confidence again.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer variant="clinic" />
    </div>
  );
};

export default HairTransplant;