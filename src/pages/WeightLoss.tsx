import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Target, 
  Heart, 
  Zap, 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  MessageCircle,
  Phone,
  Calendar,
  MapPin,
  Clock,
  Star,
  TrendingDown,
  Activity,
  Brain,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';

const WeightLoss: React.FC = () => {
  useEffect(() => {
    document.title = 'Best Weight Loss Clinic in Pune | ZAYN Skin Clinic';

    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/weight-loss-clinic-in-pune';
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
      metaDescription.setAttribute('content', 'Transform your body at the best weight loss clinic in Pune. ZAYN offers medically-supervised programs, non-surgical fat loss, and personalized care for lasting results.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Transform your body at the best weight loss clinic in Pune. ZAYN offers medically-supervised programs, non-surgical fat loss, and personalized care for lasting results.';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "917028007462";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const uniqueFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Doctor-led Care",
      description: "Evidence-based approaches supervised by medical professionals for safe, effective results."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customized Programs",
      description: "Personalized treatment plans tailored to your unique body composition and goals."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-Surgical Solutions",
      description: "Advanced fat loss procedures without surgery, minimal downtime, maximum results."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Holistic Wellness",
      description: "Complete health approach including nutrition guidance and lifestyle coaching."
    }
  ];

  const services = [
    {
      title: "Non-Surgical Body Sculpting",
      description: "Advanced fat reduction and body contouring without surgery",
      features: ["EMSculpt NEO technology", "Fat burning + muscle building", "No downtime required", "Visible results in weeks"],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Medical Weight Management",
      description: "Personalized nutrition and lifestyle programs",
      features: ["Scientific approach", "Custom meal plans", "Hormone optimization", "Long-term sustainability"],
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Metabolism Boosting Therapies",
      description: "Treatments to enhance energy and reduce cravings",
      features: ["IV nutrient therapy", "Metabolic enhancement", "Energy optimization", "Appetite control"],
      icon: <TrendingDown className="w-6 h-6" />
    },
    {
      title: "Body Contouring & Toning",
      description: "Shape and define your body with advanced technology",
      features: ["HIFU skin tightening", "Muscle toning", "Cellulite reduction", "Skin firming"],
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  const benefits = [
    "Reduced risk of lifestyle diseases (diabetes, hypertension, heart disease)",
    "Better self-esteem and confidence",
    "More energy for daily activities",
    "Scientifically-guided weight reduction programs",
    "Enhanced physical appearance and body posture",
    "Improved overall health and wellness"
  ];

  const approach = [
    {
      step: "01",
      title: "Consultation",
      description: "Detailed health and lifestyle analysis to understand your unique needs and goals"
    },
    {
      step: "02", 
      title: "Customized Plan",
      description: "Tailored program combining treatments, nutrition, and lifestyle modifications"
    },
    {
      step: "03",
      title: "Treatment & Support",
      description: "Non-invasive fat reduction treatments with ongoing nutritional support"
    },
    {
      step: "04",
      title: "Sustainable Results",
      description: "Post-care guidance and lifestyle coaching for long-term success"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Results vary by individual, but most patients notice visible changes within 2-4 weeks of starting their program."
    },
    {
      question: "Is weight loss at ZAYN safe?",
      answer: "Yes, all our procedures are medically supervised by qualified professionals using FDA-approved technologies."
    },
    {
      question: "Do you offer non-surgical options?",
      answer: "Absolutely. Our weight loss clinic in Pune specializes in advanced non-invasive treatments with no downtime."
    },
    {
      question: "Can I maintain my results?",
      answer: "Yes, with proper guidance and healthy lifestyle changes, results are long-lasting and sustainable."
    }
  ];

  return (
    <div className="bg-[#f9f5f1] min-h-screen">
      <Navigation variant="lounge" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-lounge-bg via-lounge-secondary/30 to-lounge-accent/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Link 
              to="/wellness" 
              className="inline-flex items-center text-lounge-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Wellness Lounge
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-6"
                >
                  <img 
                    src="/images/zayn-logo.png"
                    alt="ZAYN"
                    className="h-16 mb-6"
                  />
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                  Best Weight Loss Clinic in Pune
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Management of weight is not a matter of dieting or exercise, but it involves maintaining a healthy balance between body, mind, and lifestyle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleWhatsAppClick("Hi! I'm interested in your weight loss programs. Can you provide more information about the treatments and pricing?")}
                    className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </button>
                  <a
                    href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-white text-lounge-accent border-2 border-lounge-accent px-8 py-4 rounded-lg hover:bg-lounge-accent hover:text-white transition-all duration-300 text-lg font-semibold"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Appointment
                  </a>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg"
                  alt="Weight Loss Transformation"
                  className="rounded-3xl shadow-luxury w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Unique Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-16"
          >
            What Makes ZAYN Skin Clinic Unique?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-lounge-accent to-lounge-secondary rounded-full flex items-center justify-center text-white shadow-luxury group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-lounge-bg to-lounge-secondary">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-16"
          >
            Services at ZAYN Skin Clinic - Your Fat Loss Partner
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-lounge-accent to-lounge-secondary rounded-full flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-cormorant font-medium text-lounge-accent group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fat Loss vs Weight Loss Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-12"
            >
              Fat Loss vs. Weight Loss: What is the Difference?
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-lounge-bg to-lounge-secondary rounded-3xl p-8 mb-8"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
                Most clinics merely aim to get numbers down on the scale, but we stress fat loss, since the objective 
                of losing fat is never to lose healthy muscle mass. This is the reason why most individuals seeking 
                a fat loss clinic near me end up getting ZAYN Clinic as the solution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingDown size={24} />
                  </div>
                  <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                    Loss of Fatty Deposits
                  </h4>
                  <p className="text-sm text-gray-600">
                    Target stubborn fat areas specifically
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity size={24} />
                  </div>
                  <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                    Preserving Lean Muscle
                  </h4>
                  <p className="text-sm text-gray-600">
                    Maintain and build healthy muscle mass
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={24} />
                  </div>
                  <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                    Improving Metabolic Health
                  </h4>
                  <p className="text-sm text-gray-600">
                    Enhance overall body function and energy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-br from-lounge-secondary to-lounge-bg">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-16"
          >
            The ZAYN Approach – A Personalized Journey
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-lounge-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-cormorant shadow-luxury">
                  {step.step}
                </div>
                <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-12"
          >
            Benefits of the Best Weight Loss Clinic
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
              By choosing the most appropriate weight loss clinic, you do not just invest in your appearance, 
              but also in your health, self-esteem, and future life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-lounge-bg to-lounge-secondary">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-cormorant font-light text-lounge-accent text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-soft"
              >
                <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-lounge-accent to-lounge-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-cormorant font-light mb-6">
              Ready to Transform Your Body and Health?
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              If you're ready to transform your body and health, it's time to choose the best weight loss clinic in Pune.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-80">Call Us</div>
                  <div className="text-lg font-semibold">070280 07462</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-80">Visit Us</div>
                  <div className="text-lg font-semibold">Pune, Maharashtra</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6" />
                <div>
                  <div className="text-sm opacity-80">Open</div>
                  <div className="text-lg font-semibold">Mon-Sat 10AM-8PM</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => handleWhatsAppClick("Hi! I'm ready to start my weight loss journey. Can you provide more information about your programs and schedule a consultation?")}
                className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Journey
              </button>
              <a
                href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-lounge-accent px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer variant="lounge" />
    </div>
  );
};

export default WeightLoss;