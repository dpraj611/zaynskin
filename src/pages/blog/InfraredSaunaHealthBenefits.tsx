import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, Thermometer, Heart, Droplets, Zap, Shield, Brain } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const InfraredSaunaHealthBenefits: React.FC = () => {
  useEffect(() => {
    document.title = 'Infrared Sauna Benefits: More Than Just Relaxation | ZAYN Wellness';

    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/infrared-sauna-skin-clinic-pune';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: "The Science of Wellness: How Modern Technology Enhances Natural Healing",
      excerpt: "Discover how cutting-edge treatments like EMSculpt and HIFU work in harmony with your body's natural processes.",
      image: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg",
      slug: "skin-care-clinic-pune-technology"
    },
    {
      title: "IV Therapy: Personalized Nutrition for Optimal Wellness",
      excerpt: "Learn how customized IV treatments can address your specific health and wellness goals.",
      image: "https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg",
      slug: "personalized-iv-therapy-guide"
    }
  ];

  const healthBenefits = [
    {
      icon: <Heart className="text-lounge-accent" size={24} />,
      title: "Cardiovascular Health",
      description: "Improved circulation and heart health",
      details: [
        "Increases heart rate similar to moderate exercise",
        "Improves blood vessel function and flexibility",
        "Reduces blood pressure in hypertensive individuals",
        "Enhances overall cardiovascular endurance"
      ]
    },
    {
      icon: <Droplets className="text-lounge-accent" size={24} />,
      title: "Detoxification",
      description: "Deep cellular cleansing and toxin elimination",
      details: [
        "Promotes sweating at cellular level",
        "Eliminates heavy metals and environmental toxins",
        "Supports liver and kidney function",
        "Enhances lymphatic system drainage"
      ]
    },
    {
      icon: <Zap className="text-lounge-accent" size={24} />,
      title: "Pain Relief",
      description: "Natural pain management and muscle recovery",
      details: [
        "Reduces inflammation and muscle tension",
        "Accelerates healing of injured tissues",
        "Provides relief from arthritis and joint pain",
        "Enhances post-workout recovery"
      ]
    },
    {
      icon: <Shield className="text-lounge-accent" size={24} />,
      title: "Immune Support",
      description: "Strengthened immune system function",
      details: [
        "Increases white blood cell production",
        "Enhances body's natural defense mechanisms",
        "Reduces frequency of common illnesses",
        "Supports overall immune system resilience"
      ]
    },
    {
      icon: <Brain className="text-lounge-accent" size={24} />,
      title: "Mental Wellness",
      description: "Stress reduction and mental clarity",
      details: [
        "Reduces cortisol (stress hormone) levels",
        "Promotes release of endorphins",
        "Improves sleep quality and duration",
        "Enhances mental clarity and focus"
      ]
    },
    {
      icon: <Thermometer className="text-lounge-accent" size={24} />,
      title: "Skin Health",
      description: "Improved skin tone and texture",
      details: [
        "Increases collagen production",
        "Improves skin elasticity and firmness",
        "Reduces appearance of fine lines",
        "Promotes healthy, glowing complexion"
      ]
    }
  ];

  const infraredTypes = [
    {
      type: "Near-Infrared (700-1400nm)",
      benefits: "Cellular energy production, wound healing, skin health",
      penetration: "Surface level penetration"
    },
    {
      type: "Mid-Infrared (1400-3000nm)",
      benefits: "Improved circulation, pain relief, muscle relaxation",
      penetration: "Moderate tissue penetration"
    },
    {
      type: "Far-Infrared (3000-10000nm)",
      benefits: "Deep detoxification, core body heating, weight loss",
      penetration: "Deep tissue penetration (1.5-2 inches)"
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
            className="max-w-4xl mx-auto"
          >
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
                  <span>February 16, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>4 min read</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Dr. Sajid Mughal</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                Infrared Sauna Benefits: More Than Just Relaxation
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore the profound health benefits of infrared sauna therapy that extend far beyond stress relief, from cardiovascular health to deep detoxification.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                alt="Top Health Benefits of Infrared Sauna Therapy"
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
                    While many people think of saunas as simply a way to relax and unwind, infrared sauna therapy offers 
                    a wealth of scientifically-backed health benefits that extend far beyond stress relief. At ZAYN Wellness 
                    Lounge, our Sunlighten infrared sauna technology harnesses the power of specific light wavelengths to 
                    promote healing, detoxification, and overall wellness at the cellular level.
                  </p>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Understanding Infrared Technology
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Unlike traditional saunas that heat the air around you, infrared saunas use light wavelengths to 
                    directly heat your body's tissues. This allows for deeper penetration and more efficient heating 
                    at lower, more comfortable temperatures.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8 border-l-4 border-lounge-accent">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      The Three Types of Infrared
                    </h3>
                    <div className="space-y-4">
                      {infraredTypes.map((type, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="font-medium text-lounge-accent mb-2">{type.type}</h4>
                          <p className="text-gray-700 text-sm mb-1">{type.benefits}</p>
                          <p className="text-gray-500 text-xs italic">{type.penetration}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Comprehensive Health Benefits
                  </h2>
                  
                  <div className="space-y-8 mb-8">
                    {healthBenefits.map((benefit, index) => (
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
                            {benefit.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-cormorant font-light text-lounge-accent">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 italic">{benefit.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {benefit.details.map((detail, i) => (
                            <div key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    The Science Behind the Benefits
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The therapeutic effects of infrared sauna therapy are backed by extensive scientific research. 
                    Studies have shown measurable improvements in various health markers after regular infrared sauna use.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-6">
                      Research-Backed Results
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">Cardiovascular Studies</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• 13% improvement in cardiac output</li>
                          <li>• 7% reduction in blood pressure</li>
                          <li>• Enhanced endothelial function</li>
                          <li>• Improved heart rate variability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">Detoxification Research</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• 7x more toxin elimination vs. traditional sauna</li>
                          <li>• Significant heavy metal reduction</li>
                          <li>• Enhanced liver enzyme function</li>
                          <li>• Improved cellular waste removal</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Optimizing Your Infrared Sauna Experience
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To maximize the health benefits of infrared sauna therapy, proper preparation and session structure 
                    are essential. Our wellness specialists guide you through the optimal protocol for your individual needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-lounge-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">
                        Pre-Session Preparation
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Hydrate thoroughly 2-3 hours before</li>
                        <li>• Avoid heavy meals 1-2 hours prior</li>
                        <li>• Remove all jewelry and metal objects</li>
                        <li>• Bring a towel and water bottle</li>
                      </ul>
                    </div>
                    <div className="bg-lounge-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">
                        During Your Session
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Start with 15-20 minute sessions</li>
                        <li>• Gradually increase to 30-45 minutes</li>
                        <li>• Listen to your body's signals</li>
                        <li>• Practice deep breathing or meditation</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Integration with Other Wellness Treatments
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Infrared sauna therapy works synergistically with other wellness treatments to amplify benefits. 
                    Our signature programs combine infrared sessions with complementary therapies for enhanced results.
                  </p>

                  <div className="bg-gradient-to-br from-lounge-bg to-lounge-secondary rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Powerful Treatment Combinations
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">Infrared Sauna + EMSculpt</h4>
                          <p className="text-gray-600 text-sm">Enhanced muscle recovery and fat burning for body transformation</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">Infrared Sauna + IV Therapy</h4>
                          <p className="text-gray-600 text-sm">Accelerated detoxification with immediate nutrient replenishment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">Infrared Sauna + HydraFacial</h4>
                          <p className="text-gray-600 text-sm">Deep skin detoxification followed by intensive hydration and nourishment</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Who Can Benefit from Infrared Sauna Therapy?
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Infrared sauna therapy is suitable for most individuals and can be particularly beneficial for those 
                    seeking natural approaches to health optimization, stress management, and wellness enhancement.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Ideal Candidates
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2 text-lounge-accent">Health Optimization</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Individuals seeking natural detoxification</li>
                          <li>• Those with cardiovascular concerns</li>
                          <li>• People with chronic pain or inflammation</li>
                          <li>• Athletes looking for enhanced recovery</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-lounge-accent">Wellness Goals</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Stress reduction and relaxation</li>
                          <li>• Improved sleep quality</li>
                          <li>• Enhanced skin health</li>
                          <li>• Weight management support</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Ready to Experience the Benefits?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how infrared sauna therapy can enhance your wellness journey. Our Sunlighten technology 
                      provides the most advanced infrared experience available. Schedule your session today.
                    </p>
                    <Button 
                      href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                      variant="lounge"
                      className="inline-flex items-center"
                    >
                      Book Your Infrared Sauna Session
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
                      Infrared Therapy Specialist & Wellness Expert
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Dr. Mughal has extensive experience in infrared therapy applications and integrative wellness approaches for optimal health outcomes.
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

export default InfraredSaunaHealthBenefits;