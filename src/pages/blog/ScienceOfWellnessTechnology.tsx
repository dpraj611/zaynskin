import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, Zap, Heart, Shield, Sparkles } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const ScienceOfWellnessTechnology: React.FC = () => {
  useEffect(() => {
    document.title = 'The Science of Wellness: How Modern Technology Enhances Natural Healing | ZAYN Wellness';
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: "Infrared Sauna Benefits: More Than Just Relaxation",
      excerpt: "Explore the profound health benefits of infrared sauna therapy beyond stress relief.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      slug: "infrared-sauna-health-benefits"
    },
    {
      title: "IV Therapy: Personalized Nutrition for Optimal Wellness",
      excerpt: "Learn how customized IV treatments can address your specific health and wellness goals.",
      image: "https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg",
      slug: "personalized-iv-therapy-guide"
    }
  ];

  const technologies = [
    {
      name: "EMSculpt Technology",
      icon: <Zap className="text-lounge-accent" size={24} />,
      description: "High-Intensity Focused Electromagnetic (HIFEM) technology",
      benefits: ["Builds muscle mass by 16%", "Reduces fat by 19%", "20,000 muscle contractions per session"],
      science: "HIFEM technology induces supramaximal muscle contractions that cannot be achieved through voluntary exercise, triggering both muscle building and fat reduction simultaneously."
    },
    {
      name: "HIFU Technology",
      icon: <Shield className="text-lounge-accent" size={24} />,
      description: "High-Intensity Focused Ultrasound for skin tightening",
      benefits: ["Non-surgical lifting", "Collagen stimulation", "Precise depth targeting"],
      science: "HIFU delivers focused ultrasound energy to specific depths in the skin, creating thermal coagulation points that stimulate natural collagen production and tissue tightening."
    },
    {
      name: "Infrared Technology",
      icon: <Heart className="text-lounge-accent" size={24} />,
      description: "Far-infrared wavelengths for deep tissue penetration",
      benefits: ["Deep detoxification", "Improved circulation", "Enhanced recovery"],
      science: "Far-infrared rays penetrate 1.5-2 inches into the body, directly heating tissues and promoting cellular repair, detoxification, and improved blood flow."
    },
    {
      name: "IV Nutrient Delivery",
      icon: <Sparkles className="text-lounge-accent" size={24} />,
      description: "Direct intravenous nutrient and vitamin delivery",
      benefits: ["100% bioavailability", "Immediate cellular uptake", "Customized formulations"],
      science: "Bypassing the digestive system allows for complete absorption of nutrients, delivering vitamins and minerals directly to cells for optimal therapeutic effect."
    }
  ];

  return (
    <div className="bg-[#f9f5f1] min-h-screen">
      <Navigation variant="lounge" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto">
            <Link 
              to="/wellness#blog" 
              className="inline-flex items-center text-lounge-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 18, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Dr. Sajid Mughal</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                The Science of Wellness: How Modern Technology Enhances Natural Healing
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how cutting-edge treatments like EMSculpt and HIFU work in harmony with your body's natural processes to deliver transformative wellness results.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg"
                alt="Acne Treatment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-8 text-gray-700 font-light">
                    In the realm of modern wellness, we stand at the intersection of ancient healing wisdom and cutting-edge technology. 
                    At ZAYN Wellness Lounge, we've carefully curated treatments that harness the power of advanced technology to 
                    enhance your body's natural healing capabilities, creating a synergy that delivers unprecedented results.
                  </p>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    The Philosophy of Technology-Enhanced Wellness
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    True wellness isn't about replacing natural processes—it's about amplifying them. Our approach combines 
                    the precision of modern technology with the wisdom of holistic healing, creating treatments that work 
                    with your body rather than against it.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8 border-l-4 border-lounge-accent">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      The Science Behind Synergy
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      When technology is applied with precision and understanding, it can trigger and enhance the body's 
                      natural healing mechanisms. This creates a multiplier effect where the results exceed what either 
                      natural healing or technology could achieve alone.
                    </p>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Revolutionary Technologies at ZAYN Wellness
                  </h2>
                  
                  <div className="space-y-8 mb-8">
                    {technologies.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-lounge-bg to-lounge-secondary rounded-2xl p-8"
                      >
                        <div className="flex items-center mb-4">
                          <div className="mr-4 p-3 bg-white rounded-full shadow-soft">
                            {tech.icon}
                          </div>
                          <h3 className="text-2xl font-cormorant font-light text-lounge-accent">
                            {tech.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-700 mb-4 italic">{tech.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-lounge-accent mb-3">Key Benefits</h4>
                            <ul className="space-y-1">
                              {tech.benefits.map((benefit, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lounge-accent mb-3">The Science</h4>
                            <p className="text-sm text-gray-600">{tech.science}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    The Holistic Integration Approach
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    What sets our wellness programs apart is our holistic integration approach. We don't just apply 
                    technology—we create comprehensive treatment protocols that consider your entire wellness ecosystem.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-6">
                      Our Integration Methodology
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          1. Comprehensive Assessment
                        </h4>
                        <p className="text-gray-700 mb-3">
                          We begin with a thorough evaluation of your physical, mental, and lifestyle factors
                        </p>
                        <p className="text-sm text-gray-600">
                          This includes body composition analysis, stress level assessment, and wellness goal identification.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          2. Technology Selection
                        </h4>
                        <p className="text-gray-700 mb-3">
                          We match the most appropriate technologies to your specific needs and goals
                        </p>
                        <p className="text-sm text-gray-600">
                          Each technology is chosen for its ability to enhance your body's natural healing processes.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          3. Synergistic Protocols
                        </h4>
                        <p className="text-gray-700 mb-3">
                          We create treatment combinations that amplify each other's effects
                        </p>
                        <p className="text-sm text-gray-600">
                          For example, combining EMSculpt with infrared sauna therapy enhances both muscle building and recovery.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          4. Continuous Optimization
                        </h4>
                        <p className="text-gray-700 mb-3">
                          We monitor your progress and adjust treatments for optimal results
                        </p>
                        <p className="text-sm text-gray-600">
                          Regular assessments ensure your treatment plan evolves with your changing needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    The Future of Wellness Technology
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    As we look toward the future, the integration of technology and natural healing will only deepen. 
                    We're already exploring next-generation treatments that promise even greater harmony between 
                    technological precision and biological wisdom.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-lounge-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">
                        Emerging Technologies
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• AI-powered treatment customization</li>
                        <li>• Biomarker-guided therapy selection</li>
                        <li>• Real-time biofeedback integration</li>
                        <li>• Quantum wellness technologies</li>
                      </ul>
                    </div>
                    <div className="bg-lounge-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">
                        Enhanced Integration
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Personalized wellness algorithms</li>
                        <li>• Predictive health modeling</li>
                        <li>• Seamless lifestyle integration</li>
                        <li>• Continuous wellness monitoring</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Your Journey with Technology-Enhanced Wellness
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Every individual's wellness journey is unique, and technology should enhance, not dictate, that journey. 
                    At ZAYN Wellness Lounge, we use advanced technology as a tool to unlock your body's natural potential 
                    for healing, strength, and vitality.
                  </p>

                  <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Ready to Experience Technology-Enhanced Wellness?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how our scientifically-backed treatments can amplify your body's natural healing abilities. 
                      Schedule a consultation to create your personalized wellness journey.
                    </p>
                    <Button 
                      href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                      variant="lounge"
                      className="inline-flex items-center"
                    >
                      Book Your Wellness Consultation
                    </Button>
                  </div>
                </div>
              </motion.article>

              {/* Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:col-span-1"
              >
                {/* Author Bio */}
                <div className="bg-white rounded-2xl p-6 shadow-soft mb-8">
                  <div className="text-center">
                  
                    <h3 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                      Dr. Sajid Mughal
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Wellness Technology Expert & Holistic Health Specialist
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Dr. Mughal specializes in integrating advanced wellness technologies with natural healing approaches for optimal health outcomes.
                    </p>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-cormorant font-light text-lounge-accent text-center mb-12"
            >
              Related Articles
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-cormorant font-light text-lounge-accent mb-3 group-hover:text-gold transition-colors duration-300">
                      <Link to={`/blog/${post.slug}`} className="animated-underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer variant="lounge" />
    </div>
  );
};

export default ScienceOfWellnessTechnology;