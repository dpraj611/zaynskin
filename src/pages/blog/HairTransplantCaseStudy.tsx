import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const HairTransplantCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: Restoring Confidence with the Best Hair Transplant in Pune | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/hair-transplant-case-study';
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
                  <span>April 9, 2026</span>
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
                Case Study: Restoring Confidence with the Best Hair Transplant in Pune
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how a 34-year-old professional overcame years of progressive hair loss and regained a natural-looking hairline through advanced FUE hair transplant at Zayn Skin Clinic in Pune.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="/images/blog-hair-loss-treatment.jpg"
                alt="Hair Transplant Case Study at Zayn Skin Clinic Pune"
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
                  Hair loss is a concern that goes far beyond appearance—it can deeply impact self-esteem, professional confidence, and quality of life. <strong>Zayn Skin Clinic</strong> offers state-of-the-art solutions for individuals seeking the <strong>best hair transplant in Pune</strong>, delivering natural-looking results through expert care and advanced technology. This case study highlights how one client restored both his hairline and his confidence.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Client Background
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case involved a 34-year-old male named Mohit Sharma, a professional who visited <strong>Zayn Skin Clinic</strong>, worried about the gradual nature of his hair loss over about 5 or 6 years. His role required making a favorable impression, but his appearance had begun to affect his confidence. The recession in apparent hair volume upon the crown and hairline had started to impact him both personally and professionally.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  He had tried many different oils, medications, and home remedies, but found little or no improvement from them. Now he was actively searching for the <strong>best hair transplant in Pune</strong>, which could provide natural, sustainable results.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Challenges
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Before visiting <strong>Zayn Skin Clinic</strong>, the patient struggled with:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Advanced hair thinning and visible bald patches',
                    'Receding hairline affecting facial aesthetics',
                    'Low confidence in social and professional settings',
                    'Frustration with temporary and ineffectual solutions'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  He also worried about unnatural-looking results and the safety of the surgical procedure. Finding a clinic that could deliver both natural aesthetics and medical safety was paramount for him.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Consultation &amp; Diagnosis
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At <strong>Zayn Skin Clinic</strong>, a comprehensive scalp and hair analysis was conducted for the customer. This included:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Degree of hair loss (Norwood grading scale assessment)',
                    'Donor area density and hair quality evaluation',
                    'Scalp health and underlying causes analysis',
                    'Facial structure assessment for natural hairline design'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  From these findings, the team suggested a personalized solution designed for the <strong>best hair transplant in Pune</strong>. This would be tailored according to his facial bone structure to create results that looked as natural as possible.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Using advanced techniques, the clinic devised a personalized hair restoration plan:
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    FUE Hair Transplant Protocol
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'FUE (Follicular Unit Extraction) method for minimal scarring',
                      'Natural hairline design matched to facial features',
                      'Careful graft extraction from the donor area',
                      'Precision implantation for maximum density and coverage'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The procedure was performed under expert supervision with a focus on safety, hygiene, and patient comfort throughout the entire process.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Outcome
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The transformation was a slow, steady process that delivered remarkable results:
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 3–4
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'New hair started showing initial growth',
                      'Early signs of hairline restoration became visible',
                      'Patient noticed increased confidence'
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
                    Month 6–8
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Significant density improvement appeared',
                      'Crown area began to fill in noticeably',
                      'Hair texture and quality improved steadily'
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
                    Month 10–12
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Completely natural-looking hairline achieved',
                      'Full density and coverage restored',
                      'Permanent and sustainable results confirmed'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The customer once again looked youthful and no longer needed any temporary solutions for his hair loss. The results were permanent, natural-looking, and life-changing.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Customer Feedback
                </h2>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8 border border-gold/20">
                  <div className="text-5xl text-gold/40 font-serif mb-4">"</div>
                  <p className="text-lg leading-relaxed text-gray-700 italic mb-4">
                    I had been looking for the best hair transplant in Pune, to no avail. Zayn Skin Clinic offered me everything I wanted and then some; completely natural-looking results, a professional and seamless experience from start to finish. It truly transformed my confidence.
                  </p>
                  <p className="text-sm text-lounge-accent font-medium">— Mohit Sharma, Pune</p>
                </div>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case shows how high technology, personal care, and expert treatment can achieve a first-rate outcome. <strong>Zayn Skin Clinic</strong> has established itself as the destination for the <strong>best hair transplant in Pune</strong>—not only helping individuals recover their natural hair, but also restoring their sense of self-confidence.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Whether you're dealing with a receding hairline, thinning crown, or advanced hair loss, modern FUE hair transplant technology offers a path to permanent, natural-looking results. With the right clinic and experts by your side, achieving the look you desire is entirely within reach.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  If you're searching for the <strong>best hair transplant in Pune</strong>, consulting with the certified professionals at <strong>Zayn Skin Clinic</strong> is the first step toward a life of renewed confidence and natural-looking hair.
                </p>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Start Your Hair Restoration Journey?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our expert team and advanced FUE hair transplant technology can help you achieve natural-looking, permanent results. Schedule your consultation today.
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

export default HairTransplantCaseStudy;
