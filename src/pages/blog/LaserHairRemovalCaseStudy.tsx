import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const LaserHairRemovalCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: Transforming Confidence with Laser Hair Removal in Pune | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/laser-hair-removal-case-study';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f9f5f1] min-h-screen">
      <Navigation variant="lounge" />

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
                  <span>April 2, 2026</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Dr. Sajid Mughal</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                Case Study: Transforming Confidence with Laser Hair Removal in Pune
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how a 29-year-old professional from Pune overcame unwanted body hair and skin irritation through a customized laser hair removal plan at Zayn Skin Clinic, achieving 80–90% permanent hair reduction.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="/images/blog-laser-hair-removal.jpg"
                alt="Laser Hair Removal Case Study at Zayn Skin Clinic Pune"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Unwanted body hair can be more than just a cosmetic concern—it can affect daily routines, self-confidence, and overall well-being. <strong>Zayn Skin Clinic</strong> specializes in advanced, personalized <strong>laser hair removal in Pune</strong>, helping clients achieve smooth, irritation-free skin with long-lasting results. This case study highlights how one client transformed her confidence through a tailored laser hair removal plan.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Client's Background
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A 29-year-old professional named Priya Singh from Pune came to the <strong>Zayn Skin Clinic</strong> with a long-standing problem—excessive and unsightly body hair. Between her demanding work schedule and active social life, she found it increasingly difficult to keep up with daily shaving routines. Even waxing, which she turned to as a last resort, offered only temporary relief and came with its own set of drawbacks.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Specifically, she was seeking a safe, long-term solution to the troublesome nature of body hair in the form of <strong>laser hair removal</strong> that would deliver on-site treatment and long-lasting outcomes. The treatment had to further fit into her daily life without imposing any noticeable strain or inconvenience.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Challenges Faced
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Prior to her treatment at <strong>Zayn Skin Clinic</strong>, the client experienced:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Rapid regrowth—sometimes even within days of shaving or waxing',
                    'Skin irritation, redness and ingrown hairs',
                    'Uneven skin texture due to frequent hair removal methods over time',
                    'Lack of confidence in wearing her favourite outfits'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  She had also visited many clinics previously, insisting on safety and effectiveness because there are different requirements for different skin types. Finding a clinic that could cater to Indian skin tones with precision and care was essential for her.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Consultation and Diagnosis
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At <strong>Zayn Skin Clinic</strong>, the process began with a detailed skin and hair analysis conducted by certified professionals. The consultation focused on:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Her skin type and hair growth pattern',
                    'Influencing factors from the hormonal system and genetic background',
                    'Desired objectives and reasonable expectations for treatment',
                    'Assessment of previous hair removal methods and their effects'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Based upon the assessment, a customized plan for her <strong>laser hair removal in Pune</strong> was recommended—ensuring both its safety and optimal results for her specific skin type.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  A personalized treatment regime was designed by the clinic's expert team, tailored specifically to Priya's needs:
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Treatment Protocol
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      '6–8 sessions, scheduled 4–6 weeks apart',
                      'Advanced laser technology suitable for Indian skin types',
                      'Pre-treatment and post-care advice to minimize side effects',
                      'Progressive approach to effectively target hair follicles at the source'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Each session required minimal time and could be conveniently scheduled to suit her work commitments. The procedure was virtually painless, allowing her to resume normal activities immediately afterward.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Results Obtained
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Within just a few treatments, the client began noticing significant improvement:
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    After Initial Sessions
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Noticeable reduction in hair regrowth after the first 2–3 sessions',
                      'Skin began to feel softer and smoother',
                      'Ingrown hairs started to diminish significantly',
                      'Reduced need for shaving or waxing between sessions'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Final Results
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'As much as 80–90% less hair growth',
                      'Skin texture softer and smoother than ever',
                      'Ingrown hairs completely eliminated',
                      'Long-lasting results with minimal maintenance sessions as needed'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  By the close of her treatment cycles, she had achieved virtually permanent reduction and no longer needed traditional techniques for hair removal. The transformation went beyond skin-deep—her confidence soared.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Client Feedback
                </h2>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8 border border-gold/20">
                  <div className="text-5xl text-gold/40 font-serif mb-4">"</div>
                  <p className="text-lg leading-relaxed text-gray-700 italic mb-4">
                    I made the right choice by coming here. The treatment was safe and effective. Now instead of always running to the salon every other week, my skin feels better than ever. Say goodbye to worries about skin irritation—my skin looks and feels amazing!
                  </p>
                  <p className="text-sm text-lounge-accent font-medium">— Priya Singh, Pune</p>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The client expressed her high satisfaction with the results and overall treatment experience. The convenience of the sessions, the professionalism of the staff, and the life-changing results all contributed to her glowing recommendation of <strong>Zayn Skin Clinic</strong>.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case study demonstrates that expertise and advanced facilities can make a marked difference in the lives of individuals dealing with unwanted hair growth. <strong>Zayn Skin Clinic's</strong> tailor-made approach provides a <strong>laser hair removal</strong> solution that combines modern technology with personalized care for reliable, long-lasting results.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Whether you're dealing with rapid regrowth, ingrown hairs, or skin irritation from traditional hair removal methods, professional laser treatment offers a path to smooth, carefree skin. With the right clinic and experts by your side, achieving the confidence you deserve is entirely within reach.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  If you're looking for effective and safe <strong>laser hair removal in Pune</strong>, consulting with certified professionals at a trusted clinic like <strong>Zayn Skin Clinic</strong> is the first step toward a life free from the hassle of unwanted hair.
                </p>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Transform Your Confidence?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our certified professionals and advanced laser technology can help you achieve smooth, hair-free skin. Schedule your consultation today.
                  </p>
                  <Button
                    href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                    variant="lounge"
                    className="inline-flex items-center"
                  >
                    Book Your Consultation
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer variant="lounge" />
    </div>
  );
};

export default LaserHairRemovalCaseStudy;
