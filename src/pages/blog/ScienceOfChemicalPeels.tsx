import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const ScienceOfChemicalPeels: React.FC = () => {
  useEffect(() => {
    document.title = 'The Science Behind Chemical Peels | ZAYN Clinic';
    window.scrollTo(0, 0);
  }, []);

  const relatedPosts = [
    {
      title: "Understanding Modern Hair Restoration Techniques",
      excerpt: "Explore the latest advancements in hair restoration, from PRP therapy to transplantation methods.",
      image: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg",
      slug: "modern-hair-restoration-techniques"
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
                  <span>February 12, 2024</span>
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
              
              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-clinic-accent mb-6 leading-tight">
                The Science Behind Chemical Peels
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how chemical peels work at the molecular level and their transformative effects on different skin concerns.
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/3762567/pexels-photo-3762567.jpeg"
                alt="Chemical Peels Science"
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
                    Chemical peels represent one of the most scientifically proven methods for skin rejuvenation. By understanding the molecular mechanisms behind these treatments, we can better appreciate their remarkable ability to transform skin texture, tone, and overall appearance.
                  </p>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    The Molecular Foundation
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chemical peels work by inducing controlled damage to specific layers of the skin, triggering the body's natural healing response. This process stimulates cellular turnover, collagen production, and the formation of new, healthier skin cells.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8 border-l-4 border-clinic-accent">
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                      Understanding Skin Layers
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-clinic-secondary bg-opacity-50 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-clinic-accent font-medium">1</span>
                        </div>
                        <h4 className="font-medium text-clinic-accent mb-1">Epidermis</h4>
                        <p className="text-gray-600">Superficial peels target this outermost layer</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-clinic-secondary bg-opacity-50 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-clinic-accent font-medium">2</span>
                        </div>
                        <h4 className="font-medium text-clinic-accent mb-1">Papillary Dermis</h4>
                        <p className="text-gray-600">Medium peels reach this deeper layer</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-clinic-secondary bg-opacity-50 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-clinic-accent font-medium">3</span>
                        </div>
                        <h4 className="font-medium text-clinic-accent mb-1">Reticular Dermis</h4>
                        <p className="text-gray-600">Deep peels penetrate to this level</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    Types of Chemical Peels and Their Mechanisms
                  </h2>
                  
                  <div className="space-y-8 mb-8">
                    <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary rounded-2xl p-8">
                      <h3 className="text-2xl font-cormorant font-light text-clinic-accent mb-4">
                        Alpha Hydroxy Acids (AHAs)
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Glycolic acid and lactic acid work by breaking down the bonds between dead skin cells, promoting gentle exfoliation and revealing fresher skin underneath.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-clinic-accent mb-2">Glycolic Acid</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Smallest molecular size</li>
                            <li>• Deepest penetration</li>
                            <li>• Excellent for fine lines</li>
                            <li>• Improves skin texture</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-clinic-accent mb-2">Lactic Acid</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Gentler than glycolic</li>
                            <li>• Hydrating properties</li>
                            <li>• Suitable for sensitive skin</li>
                            <li>• Brightening effects</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-clinic-secondary to-clinic-bg rounded-2xl p-8">
                      <h3 className="text-2xl font-cormorant font-light text-clinic-accent mb-4">
                        Beta Hydroxy Acids (BHAs)
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Salicylic acid is oil-soluble, allowing it to penetrate deep into pores and dissolve sebum buildup, making it ideal for acne-prone skin.
                      </p>
                      <div className="bg-white rounded-xl p-6">
                        <h4 className="font-medium text-clinic-accent mb-3">Salicylic Acid Benefits</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">• Deep pore cleansing</p>
                            <p className="text-gray-600">• Anti-inflammatory</p>
                          </div>
                          <div>
                            <p className="text-gray-600">• Reduces blackheads</p>
                            <p className="text-gray-600">• Controls oil production</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary rounded-2xl p-8">
                      <h3 className="text-2xl font-cormorant font-light text-clinic-accent mb-4">
                        Trichloroacetic Acid (TCA)
                      </h3>
                      <p className="text-gray-700 mb-4">
                        TCA peels provide deeper penetration, causing controlled coagulation of proteins in the skin, leading to significant improvement in skin texture and pigmentation.
                      </p>
                      <div className="bg-white rounded-xl p-6">
                        <h4 className="font-medium text-clinic-accent mb-3">TCA Applications</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>• Moderate to severe sun damage</p>
                          <p>• Melasma and hyperpigmentation</p>
                          <p>• Acne scarring</p>
                          <p>• Fine to moderate wrinkles</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    The Healing Process: What Happens After a Peel
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the post-peel healing process helps patients appreciate the remarkable transformation occurring at the cellular level.
                  </p>

                  <div className="bg-white rounded-2xl p-8 shadow-soft mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-6">
                      Healing Timeline
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-clinic-accent text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-medium">1-3</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-clinic-accent mb-1">Days 1-3: Immediate Response</h4>
                          <p className="text-gray-600 text-sm">Controlled inflammation triggers the healing cascade. Skin may appear red and feel tight.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-clinic-accent text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-medium">4-7</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-clinic-accent mb-1">Days 4-7: Peeling Phase</h4>
                          <p className="text-gray-600 text-sm">Damaged skin cells shed, revealing fresh, new skin underneath. Peak peeling occurs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-clinic-accent text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-medium">2-4</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-clinic-accent mb-1">Weeks 2-4: Regeneration</h4>
                          <p className="text-gray-600 text-sm">New collagen formation begins. Skin texture and tone continue to improve.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-sm font-medium">3+</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-clinic-accent mb-1">Months 3+: Optimal Results</h4>
                          <p className="text-gray-600 text-sm">Maximum collagen remodeling achieved. Full benefits of the treatment are visible.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    Customizing Peels for Individual Skin Types
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At ZAYN Clinic, we understand that no two patients are alike. Our approach involves careful assessment of skin type, concerns, and goals to create a personalized treatment plan.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-clinic-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-clinic-accent">
                        For Sensitive Skin
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Lower concentration acids</li>
                        <li>• Shorter contact times</li>
                        <li>• Gentle neutralization</li>
                        <li>• Extended healing periods</li>
                      </ul>
                    </div>
                    <div className="bg-clinic-secondary bg-opacity-30 rounded-xl p-6">
                      <h4 className="text-lg font-cormorant font-medium mb-3 text-clinic-accent">
                        For Resilient Skin
                      </h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Higher concentration options</li>
                        <li>• Combination acid approaches</li>
                        <li>• Deeper penetration levels</li>
                        <li>• Accelerated treatment schedules</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-3xl font-cormorant font-light text-clinic-accent mb-6 mt-12">
                    Safety and Expertise: The ZAYN Difference
                  </h2>
                  
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Chemical peels, while highly effective, require expert knowledge and precise application. Our team's extensive training ensures optimal results while minimizing risks.
                  </p>

                  <div className="bg-gradient-to-br from-gold/10 to-clinic-accent/10 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                      Ready to Experience the Science of Beautiful Skin?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Schedule a consultation to discover how our scientifically-backed chemical peel treatments can address your specific skin concerns and reveal your most radiant complexion.
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
                     MBBS. PG Diploma Dermatology (U.K) & Chemical Peel Specialist
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Dr. Mughal's expertise in chemical peels spans over 15 years, with advanced training in the latest peel technologies and techniques.
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

export default ScienceOfChemicalPeels;