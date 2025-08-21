import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const ModernHairRestoration: React.FC = () => {
  useEffect(() => {
    document.title = 'Understanding Modern Hair Restoration Techniques | ZAYN Clinic';
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: "The Science Behind Chemical Peels",
      excerpt: "Discover how chemical peels work and their transformative effects on different skin concerns.",
      image: "https://images.pexels.com/photos/3762567/pexels-photo-3762567.jpeg",
      slug: "science-of-chemical-peels"
    },
    {
      title: "Combining Treatments for Optimal Results",
      excerpt: "Learn how combining different treatments can enhance your skincare results.",
      image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg",
      slug: "combining-treatments-guide"
    }
  ];

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
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/dermatology#blog" 
              className="inline-flex items-center text-clinic-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>February 15, 2024</span>
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
              
              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-clinic-accent mb-6 leading-tight">
                Understanding Modern Hair Restoration Techniques
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore the latest advancements in hair restoration, from PRP therapy to transplantation methods that deliver natural-looking results.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg"
                alt="Modern Hair Restoration Techniques"
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
                    Hair loss affects millions of people worldwide, but modern medicine has revolutionized the way we approach hair restoration. At ZAYN Clinic, we combine cutting-edge technology with artistic precision to deliver results that look completely natural.
                  </p>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    The Evolution of Hair Transplantation
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Gone are the days of obvious "hair plugs" and unnatural hairlines. Today's hair restoration techniques focus on creating results that are virtually undetectable, even under close scrutiny.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8 border-l-4 border-clinic-accent">
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                      Key Advancement: FUE vs DHI
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI) represent the pinnacle of hair transplant technology. These minimally invasive techniques ensure faster healing, minimal scarring, and maximum graft survival rates.
                    </p>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    Revolutionary PRP and Growth Factor Therapy
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Platelet-Rich Plasma (PRP) therapy has emerged as a game-changer in hair restoration. By concentrating your body's own growth factors, we can stimulate dormant hair follicles and enhance the results of transplantation procedures.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-clinic-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-clinic-accent">
                        PRP Benefits
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Stimulates natural hair growth</li>
                        <li>• Improves hair thickness</li>
                        <li>• Enhances transplant success</li>
                        <li>• Minimal downtime</li>
                      </ul>
                    </div>
                    <div className="bg-clinic-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-clinic-accent">
                        Growth Factor Concentrate
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Advanced regenerative therapy</li>
                        <li>• Accelerated healing</li>
                        <li>• Enhanced follicle survival</li>
                        <li>• Long-lasting results</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    The ZAYN Approach: Artistry Meets Science
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our philosophy centers on creating hairlines that complement your facial structure and age appropriately. Dr. Mughal's artistic eye, combined with advanced techniques, ensures results that enhance your natural appearance.
                  </p>

                  <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-cormorant font-light text-clinic-accent mb-4">
                      Our Comprehensive Process
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2 text-clinic-accent">1. Detailed Consultation</h4>
                        <p className="text-sm text-gray-600 mb-4">Comprehensive assessment of your hair loss pattern and goals</p>
                        
                        <h4 className="font-medium mb-2 text-clinic-accent">2. Custom Design</h4>
                        <p className="text-sm text-gray-600">Artistic hairline design tailored to your features</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-clinic-accent">3. Advanced Extraction</h4>
                        <p className="text-sm text-gray-600 mb-4">Precise follicle harvesting using latest technology</p>
                        
                        <h4 className="font-medium mb-2 text-clinic-accent">4. Meticulous Implantation</h4>
                        <p className="text-sm text-gray-600">Strategic placement for optimal density and direction</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    Beyond Transplantation: Comprehensive Hair Health
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Modern hair restoration extends beyond transplantation. We offer innovative treatments like SULT1A1 enzyme boosters, mesotherapy, and exosome therapy to optimize your hair's health and appearance.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                      Innovative Adjunct Therapies
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-clinic-accent">Exosome Therapy</h4>
                          <p className="text-gray-600 text-sm">Regenerative cell-derived growth factors from South Korea's ExoCoBio technology</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-clinic-accent">Nucleopeptides</h4>
                          <p className="text-gray-600 text-sm">Advanced peptide therapy for strengthening hair roots</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium text-clinic-accent">SULT1A1 Enzyme Booster</h4>
                          <p className="text-gray-600 text-sm">Enhances minoxidil effectiveness for superior results</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    The Future of Hair Restoration
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    As technology continues to advance, we remain at the forefront of innovation. From robotic assistance to stem cell therapy, the future of hair restoration promises even more natural results with minimal invasiveness.
                  </p>

                  <div className="bg-gradient-to-br from-gold/10 to-clinic-accent/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                      Ready to Begin Your Hair Restoration Journey?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Schedule a consultation with Dr. Mughal to explore the best hair restoration options for your unique needs. Our personalized approach ensures results that exceed your expectations.
                    </p>
                    <Button 
                      href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                      variant="clinic"
                      className="inline-flex items-center"
                    >
                      Book Your Consultation
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
                    
                    <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">
                      Dr. Sajid Mughal
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      MBBS. PG Diploma Dermatology (U.K) & Hair Transplant Specialist
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      With over 15 years of experience, Dr. Mughal combines medical expertise with artistic vision to deliver exceptional hair restoration results.
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
              className="text-3xl font-cormorant font-light text-clinic-accent text-center mb-12"
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
                    <h3 className="text-xl font-cormorant font-light text-clinic-accent mb-3 group-hover:text-gold transition-colors duration-300">
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

      <Footer variant="clinic" />
    </div>
  );
};

export default ModernHairRestoration;