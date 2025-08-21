import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin, Droplets, Zap, Shield, Heart, Brain, Sparkles } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const PersonalizedIVTherapyGuide: React.FC = () => {
  useEffect(() => {
    document.title = 'IV Therapy: Personalized Nutrition for Optimal Wellness | ZAYN Wellness';
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: "The Science of Wellness: How Modern Technology Enhances Natural Healing",
      excerpt: "Discover how cutting-edge treatments like EMSculpt and HIFU work in harmony with your body's natural processes.",
      image: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg",
      slug: "science-of-wellness-technology"
    },
    {
      title: "Infrared Sauna Benefits: More Than Just Relaxation",
      excerpt: "Explore the profound health benefits of infrared sauna therapy beyond stress relief.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      slug: "infrared-sauna-health-benefits"
    }
  ];

  const ivFormulations = [
    {
      name: "Energy & Vitality Boost",
      icon: <Zap className="text-lounge-accent" size={24} />,
      description: "Combat fatigue and enhance energy levels",
      keyIngredients: ["B-Complex Vitamins", "B12", "Magnesium", "Amino Acids"],
      benefits: [
        "Increased energy and stamina",
        "Enhanced mental clarity",
        "Improved mood and motivation",
        "Better stress resilience"
      ],
      idealFor: "Busy professionals, athletes, those with chronic fatigue"
    },
    {
      name: "Immune System Support",
      icon: <Shield className="text-lounge-accent" size={24} />,
      description: "Strengthen your body's natural defenses",
      keyIngredients: ["Vitamin C", "Zinc", "Glutathione", "B-Complex"],
      benefits: [
        "Enhanced immune function",
        "Faster recovery from illness",
        "Antioxidant protection",
        "Reduced inflammation"
      ],
      idealFor: "Frequent travelers, those prone to illness, seasonal support"
    },
    {
      name: "Hydration & Recovery",
      icon: <Droplets className="text-lounge-accent" size={24} />,
      description: "Rapid rehydration and cellular repair",
      keyIngredients: ["Electrolytes", "Saline Solution", "Magnesium", "Calcium"],
      benefits: [
        "Immediate hydration",
        "Electrolyte balance restoration",
        "Faster muscle recovery",
        "Improved physical performance"
      ],
      idealFor: "Athletes, post-workout recovery, dehydration"
    },
    {
      name: "Anti-Aging & Beauty",
      icon: <Sparkles className="text-lounge-accent" size={24} />,
      description: "Cellular rejuvenation and skin health",
      keyIngredients: ["Glutathione", "Vitamin C", "Biotin", "Collagen Peptides"],
      benefits: [
        "Improved skin radiance",
        "Enhanced collagen production",
        "Reduced oxidative stress",
        "Cellular regeneration"
      ],
      idealFor: "Anti-aging goals, skin health, beauty enhancement"
    },
    {
      name: "Detoxification & Cleanse",
      icon: <Heart className="text-lounge-accent" size={24} />,
      description: "Deep cellular cleansing and liver support",
      keyIngredients: ["Glutathione", "Alpha Lipoic Acid", "Vitamin C", "NAD+"],
      benefits: [
        "Enhanced liver function",
        "Heavy metal detoxification",
        "Improved cellular health",
        "Toxin elimination"
      ],
      idealFor: "Environmental exposure, liver support, general detox"
    },
    {
      name: "Cognitive Enhancement",
      icon: <Brain className="text-lounge-accent" size={24} />,
      description: "Brain health and mental performance optimization",
      keyIngredients: ["NAD+", "B-Complex", "Magnesium", "Amino Acids"],
      benefits: [
        "Enhanced mental clarity",
        "Improved focus and concentration",
        "Better memory function",
        "Neuroprotective effects"
      ],
      idealFor: "Students, professionals, cognitive decline prevention"
    }
  ];

  const treatmentProcess = [
    {
      step: "1",
      title: "Comprehensive Consultation",
      description: "Our medical team conducts a thorough health assessment to understand your wellness goals, medical history, and current health status."
    },
    {
      step: "2",
      title: "Personalized Formulation",
      description: "Based on your consultation, we create a customized IV blend tailored to your specific needs and health objectives."
    },
    {
      step: "3",
      title: "Comfortable Administration",
      description: "Relax in our luxury treatment room while our skilled nurses safely administer your personalized IV therapy."
    },
    {
      step: "4",
      title: "Monitoring & Follow-up",
      description: "We monitor your response and adjust future treatments to optimize results and ensure your continued wellness journey."
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
                  <span>February 14, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Dr. Sajid Mughal</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                IV Therapy: Personalized Nutrition for Optimal Wellness
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn how customized IV treatments can address your specific health and wellness goals through targeted nutrient delivery and personalized formulations.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/3846038/pexels-photo-3846038.jpeg"
                alt="Personalized IV Therapy Guide"
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
                    In our fast-paced world, achieving optimal nutrition through diet alone can be challenging. 
                    IV therapy offers a revolutionary approach to wellness by delivering essential nutrients directly 
                    into your bloodstream, bypassing the digestive system for maximum absorption and immediate benefits. 
                    At ZAYN Wellness Lounge, we specialize in personalized IV formulations tailored to your unique health goals.
                  </p>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    The Science of Intravenous Nutrition
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When nutrients are delivered intravenously, they achieve 100% bioavailability—meaning your cells 
                    receive the full therapeutic dose without the limitations of digestive absorption. This allows for 
                    higher concentrations of vitamins and minerals to reach your tissues, creating more profound and 
                    immediate health benefits.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8 border-l-4 border-lounge-accent">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      IV Therapy vs. Oral Supplements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-lounge-accent mb-2">IV Therapy Benefits</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 100% bioavailability</li>
                          <li>• Immediate cellular uptake</li>
                          <li>• Higher therapeutic doses</li>
                          <li>• Bypasses digestive limitations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-lounge-accent mb-2">Oral Supplements</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 10-30% absorption rate</li>
                          <li>• Digestive system dependent</li>
                          <li>• Limited by gut health</li>
                          <li>• Slower onset of benefits</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Our Personalized IV Formulations
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We offer a comprehensive range of IV formulations, each designed to address specific health goals 
                    and wellness needs. Our medical team customizes each treatment based on your individual requirements.
                  </p>

                  <div className="space-y-8 mb-8">
                    {ivFormulations.map((formulation, index) => (
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
                            {formulation.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-cormorant font-light text-lounge-accent">
                              {formulation.name}
                            </h3>
                            <p className="text-gray-600 italic">{formulation.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-medium text-lounge-accent mb-3">Key Ingredients</h4>
                            <ul className="space-y-1">
                              {formulation.keyIngredients.map((ingredient, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {ingredient}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lounge-accent mb-3">Benefits</h4>
                            <ul className="space-y-1">
                              {formulation.benefits.map((benefit, i) => (
                                <li key={i} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-lounge-accent mb-3">Ideal For</h4>
                            <p className="text-sm text-gray-600">{formulation.idealFor}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    The ZAYN IV Therapy Experience
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our IV therapy process is designed to be comfortable, safe, and effective. From consultation to 
                    treatment, every step is carefully managed by our experienced medical team.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-6">
                      Your Treatment Journey
                    </h3>
                    
                    <div className="space-y-6">
                      {treatmentProcess.map((process, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-12 h-12 bg-lounge-accent text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-sm font-medium">{process.step}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-lounge-accent mb-1">{process.title}</h4>
                            <p className="text-gray-600 text-sm">{process.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Safety and Quality Standards
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Safety is our top priority. All IV therapies are administered by licensed medical professionals 
                    using pharmaceutical-grade ingredients in a sterile, clinical environment.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-lounge-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">
                        Quality Assurance
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Pharmaceutical-grade ingredients</li>
                        <li>• Sterile compounding procedures</li>
                        <li>• Licensed medical professionals</li>
                        <li>• Comprehensive safety protocols</li>
                      </ul>
                    </div>
                    <div className="bg-lounge-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-lounge-accent">
                        Patient Safety
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Pre-treatment health screening</li>
                        <li>• Continuous monitoring during treatment</li>
                        <li>• Emergency protocols in place</li>
                        <li>• Post-treatment follow-up care</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Optimizing Your IV Therapy Results
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To maximize the benefits of your IV therapy, proper preparation and post-treatment care are essential. 
                    Our team provides comprehensive guidance to ensure optimal results.
                  </p>

                  <div className="bg-gradient-to-br from-lounge-bg to-lounge-secondary rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Maximizing Your Results
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">Pre-Treatment Preparation</h4>
                          <p className="text-gray-600 text-sm">Hydrate well, eat a light meal, and inform us of any medications or health conditions</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">During Treatment</h4>
                          <p className="text-gray-600 text-sm">Relax in our comfortable treatment room, stay hydrated, and communicate any concerns</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">Post-Treatment Care</h4>
                          <p className="text-gray-600 text-sm">Continue hydrating, maintain a healthy diet, and follow any specific aftercare instructions</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-lounge-accent">Ongoing Optimization</h4>
                          <p className="text-gray-600 text-sm">Regular treatments and lifestyle modifications for sustained wellness benefits</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                    Integration with Wellness Programs
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    IV therapy works synergistically with other wellness treatments to amplify benefits and accelerate 
                    your journey to optimal health. Our signature programs combine IV therapy with complementary treatments.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Powerful Wellness Combinations
                    </h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          IV Therapy + Infrared Sauna
                        </h4>
                        <p className="text-gray-700 mb-2">
                          Enhanced detoxification and nutrient absorption
                        </p>
                        <p className="text-sm text-gray-600">
                          The heat from infrared therapy increases circulation, enhancing the distribution of IV nutrients throughout your body.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          IV Therapy + EMSculpt
                        </h4>
                        <p className="text-gray-700 mb-2">
                          Optimized muscle building and recovery
                        </p>
                        <p className="text-sm text-gray-600">
                          Targeted nutrients support muscle protein synthesis and accelerate recovery from intense muscle contractions.
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-gold pl-6">
                        <h4 className="text-lg font-cormorant font-medium text-lounge-accent mb-2">
                          IV Therapy + HydraFacial
                        </h4>
                        <p className="text-gray-700 mb-2">
                          Complete skin rejuvenation inside and out
                        </p>
                        <p className="text-sm text-gray-600">
                          Internal nutrition supports the external benefits of facial treatments for radiant, healthy skin.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                      Ready to Optimize Your Wellness?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Discover how personalized IV therapy can enhance your health and vitality. Schedule a consultation 
                      to create your customized treatment plan and begin your journey to optimal wellness.
                    </p>
                    <Button 
                      href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                      variant="lounge"
                      className="inline-flex items-center"
                    >
                      Book Your IV Therapy Consultation
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
                      IV Therapy Specialist & Integrative Medicine Expert
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Dr. Mughal specializes in personalized IV therapy protocols and integrative approaches to optimal health and wellness.
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

export default PersonalizedIVTherapyGuide;