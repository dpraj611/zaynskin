import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const FueHairTransplantCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: Restoring Confidence with Advanced FUE Hair Transplant in Pune | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/fue-hair-transplant-case-study-pune';
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
                  <span>May 13, 2026</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>14 min read</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Dr. Sajid Mughal</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                Case Study: Restoring Confidence with Advanced FUE Hair Transplant in Pune
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how Rahul Verma overcame 5 years of progressive hair loss and regained a natural-looking hairline through advanced FUE hair transplant at Zayn Skin Clinic in Pune.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="/images/blog-best-hair-treatment-pune.jpg"
                alt="FUE Hair Transplant Case Study - Restoring Confidence at Zayn Skin Clinic Pune"
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

                {/* Client Background */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Client Background
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  A 34-year-old Rahul Verma, from Pune, visited <strong>Zayn Skin Clinic</strong> with a huge challenge – progressive hair fall for the past 5 years. The hair loss on the crown and the receding hairline had taken a toll on his self-confidence, especially in his work and social life.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Rahul had already tried many hair oils, medicines and home remedies but nothing had worked. After doing the required research he knew that there is a way to look for a permanent solution and he searched for a <strong>hair transplant clinic in Pune</strong> that also provides FUE services.
                </p>

                {/* Challenges Faced */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Challenges Faced by the Client
                </h2>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Hair-parting and baldness on the crown',
                    'Thinning hair covering the entire scalp',
                    'Not always being able to rely on others for any assistance',
                    'Results of a previous treatment that are not permanent',
                    'A fear of results that might not be what is expected or visible scars'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Rahul was interested in a procedure that was safe, minimally invasive, and would have good natural-looking results.
                </p>

                {/* Consultation & Diagnosis */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Consultation & Diagnosis at Zayn Skin Clinic
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  During his detailed consultation at <strong>Zayn Skin Clinic</strong>, Rahul got to see:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Scalp and hair density analysis',
                    'Donor area evaluation',
                    'Assessment of the hair loss pattern',
                    'Medical history review'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The experts decided that he was suffering from Male Pattern Baldness (Androgenetic Alopecia) and the only long-term remedy that he could get was an advanced <strong>FUE hair transplant in Pune</strong>.
                </p>

                {/* Personalized Treatment Plan */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Personalized Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Zayn Skin Clinic</strong> created a customized hair restoration program:
                </p>

                {/* 1. FUE Hair Transplant Procedure */}
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4 mt-8">
                  1. FUE Hair Transplant Procedure
                </h3>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  {[
                    'Customized diet plan focusing on balanced nutrition',
                    'Accurate hair transplantation in thinning and bald areas',
                    'Emphasis on natural hairline design',
                    'Surgical technique that leaves little to no visible scarring'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 2. Post-Transplant Care */}
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4 mt-8">
                  2. Post-Transplant Care
                </h3>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  {[
                    'Detailed aftercare instructions',
                    'Medications to aid healing and growth',
                    'Follow-up to track progress on a regular basis'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 3. Supportive Hair Therapies */}
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4 mt-8">
                  3. Supportive Hair Therapies
                </h3>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'PRP sessions for increased hair growth',
                    'Nutrition tips to improve follicle strength',
                    'Scalp care treatments'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Procedure & Recovery Timeline */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Procedure & Recovery Timeline
                </h2>

                {/* Day of Procedure */}
                <div className="bg-white/60 rounded-xl p-6 mb-4 border border-gold/10">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-3">
                    Day of Procedure
                  </h3>
                  <ul className="list-none space-y-2 ml-2">
                    {[
                      'Smooth and comfortable experience under expert supervision',
                      'No major discomfort or downtime'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Week 1–2 */}
                <div className="bg-white/60 rounded-xl p-6 mb-4 border border-gold/10">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-3">
                    Week 1–2
                  </h3>
                  <ul className="list-none space-y-2 ml-2">
                    {[
                      'Mild scabbing and natural shedding stage',
                      'Healed scales and good scalp healing'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Month 2–3 */}
                <div className="bg-white/60 rounded-xl p-6 mb-4 border border-gold/10">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-3">
                    Month 2–3
                  </h3>
                  <ul className="list-none space-y-2 ml-2">
                    {[
                      'Initial hair growth was noticed',
                      'Denser hair, increased volume'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Month 5–6 */}
                <div className="bg-white/60 rounded-xl p-6 mb-8 border border-gold/10">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-3">
                    Month 5–6
                  </h3>
                  <ul className="list-none space-y-2 ml-2">
                    {[
                      'Clear-cut results — thicker, healthier hair',
                      'Natural-looking hairline restored'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Final Results */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Final Results After 6 Months
                </h2>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Hair density significantly improved',
                    'Natural and well-defined hairline',
                    'No external damage or evidence of surgery',
                    'Additional boost of confidence and personality',
                    'Results that will last a lifetime'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Client Feedback */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Client Feedback
                </h2>

                <div className="bg-gradient-to-br from-lounge-accent/5 to-gold/5 rounded-2xl p-8 mb-8 border-l-4 border-gold">
                  <p className="text-lg leading-relaxed text-gray-700 italic">
                    "Undergoing an FUE hair transplant at Zayn Skin Clinic was the best decision I ever made. I was very pleased with the natural results and professional team. Not only did it restore my hair, but my self-confidence, too."
                  </p>
                  <p className="text-sm text-gray-500 mt-4 font-medium">— Rahul Verma, 34, Pune</p>
                </div>

                {/* Conclusion */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case study serves as an example of how innovative procedures, like <strong>FUE hair transplants in Pune</strong> from <strong>Zayn Skin Clinic</strong>, are effective at combating hair loss. Natural, long-lasting hair restoration is achievable with expert precision, planning and treatment.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  If you have been struggling with hair loss, thinning, or a receding hairline, an advanced FUE hair transplant could be the permanent solution you've been looking for. The right clinic with experienced professionals can make all the difference in your hair restoration journey.
                </p>

                {/* CTA */}
                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Restore Your Confidence?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our advanced FUE hair transplant procedures can help you achieve natural, long-lasting results — just like Rahul. Schedule a consultation with our specialists today.
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

export default FueHairTransplantCaseStudy;
