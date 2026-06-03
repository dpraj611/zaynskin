import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const SkinTreatmentCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: Transforming Problem Skin with the Right Skin Treatment in Pune | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/skin-treatment-case-study-pune';
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
                  <span>March 17, 2026</span>
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
                Case Study: Transforming Problem Skin with the Right Skin Treatment in Pune
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how Ms. Anita, a 29-year-old marketing professional, overcame severe acne, pigmentation, and acne scars through a personalized 4-phase treatment plan at Zayn Skin Clinic in Pune.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                alt="Skin Treatment Case Study at Zayn Skin Clinic"
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

                {/* Patient Overview Card */}
                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Patient Overview
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Clinic: Zayn Skin Clinic',
                      'Patient: Ms. Anita',
                      'Age: 29',
                      'Concern: Severe acne, pigmentation & acne scars'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Problem */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Problem
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Ms. Anita, a 29-year-old marketing professional, presented herself at <strong>Zayn Skin Clinic</strong> because she had developed persistent acne over the last 6 years. She developed stress, sleeplessness, and the use of over-the-counter products, which slowly led to the worsening of her condition.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At the time she came, she was handling:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Active cystic acne',
                    'Post-acne pigmentation',
                    'Deep acne scars',
                    'Uneven skin tone',
                    'Low self-confidence'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  She had experimented with home treatments and salon treatments, but there were no lasting effects. During her research of available options that were reliable in the process of <strong>Skin Treatment in Pune</strong>, she came across Zayn Skin Clinic and made an appointment.
                </p>

                {/* The Consultation Process */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Consultation Process
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  In <strong>Zayn Skin Clinic</strong>, this started with an elaborate analysis of the skin. The dermatologist:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Evaluated her skin type and grade of acne',
                    'Determined hormonal triggers',
                    'Investigated lifestyle and diet',
                    'Analysed past product responses',
                    'Elaborated realistic treatment schedules'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The clinic did not recommend a cosmetic solution but rather tried to establish the driving force behind her acne and scarring. The team elaborated that <strong>Skin Treatment in Pune</strong> requires customization, particularly when subjects have active acne and scars.
                </p>

                {/* Diagnosis */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Diagnosis
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  After evaluation, Ms. Anita was diagnosed with:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Grade 3 inflammatory acne',
                    'PIH: post-inflammatory hyperpigmentation',
                    'Atrophic acne scars',
                    'Sensitive combination skin'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The clinic focused its care in stages so as not to damage the skin but to guarantee slow healing.
                </p>

                {/* The Individualized Treatment Plan */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Individualized Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The 4-phase treatment plan at <strong>Zayn Skin Clinic</strong> was developed:
                </p>

                {/* Phase 1 */}
                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Phase 1: Active Acne Control (Month 1-2)
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Oral and topical medical-grade drugs',
                      'Salicylic-based chemical peels',
                      'Oil-controlling skin care regimen'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-lounge-accent font-medium mt-4 italic">
                    Purpose: Prevent new outbreaks and lower inflammation.
                  </p>
                </div>

                {/* Phase 2 */}
                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Phase 2: Pigmentation Correction (Month 3-4)
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Advanced chemical peels',
                      'Laser toning sessions',
                      'Custom-made depigmentation creams'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-lounge-accent font-medium mt-4 italic">
                    Purpose: Flatten skin complexion and decrease dark spots.
                  </p>
                </div>

                {/* Phase 3 */}
                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Phase 3: Scar Treatment (Month 5-7)
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Microneedling with PRP',
                      'Fractional laser therapy',
                      'Collagen stimulation procedures'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-lounge-accent font-medium mt-4 italic">
                    Aim: To improve the skin texture and the depth of scarring.
                  </p>
                </div>

                {/* Phase 4 */}
                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Phase 4: Skin Maintaining & Glow Improvement (Month 8+)
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Hydrafacial sessions',
                      'Maintenance peels',
                      'Skincare prevention education'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base text-lounge-accent font-medium mt-4 italic">
                    Purpose: Ensure lasting results through continued care and education.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  This systematic practice was done to make sure that Ms. Anita underwent full <strong>Skin Treatment in Pune</strong>, as opposed to temporary cosmetic enhancement.
                </p>

                {/* The Procedure & Experience */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Procedure & Experience
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  All the operations were done under the strict supervision of dermatologists. The clinic was well kept, and all the sessions were discussed in detail before the program.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Ms. Anita appreciated:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Transparent communication',
                    'Realistic expectations',
                    'Slow yet noticeable progress',
                    'Minimal downtime'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  No aggressive or hurried course of treatment was given. It was still about the health of the skin first and then about aesthetics.
                </p>

                {/* Results Timeline */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Results Timeline
                </h2>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 2
                  </h3>
                  <p className="text-lg text-gray-700">
                    Acne reduced by nearly 70%. Inflammation on the skin reduced greatly.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 4
                  </h3>
                  <p className="text-lg text-gray-700">
                    Pigmentation began to fade. Skin tone appeared more even.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 6
                  </h3>
                  <p className="text-lg text-gray-700">
                    Scars visibly softened. Skin texture improved.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 8
                  </h3>
                  <p className="text-lg text-gray-700">
                    Smoother, brighter, and glossier skin with few scars.
                  </p>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Her skin change was astonishing by the close of 8 months. She could afford not to have to wear heavy makeup anymore and was confident in going to work events and social gatherings. This is what will make the patients put their trust in <strong>Zayn Skin Clinic</strong> when they are seeking an honest <strong>Skin Treatment in Pune</strong>.
                </p>

                {/* The Outcome */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Outcome
                </h2>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    '80-90% reduction in active acne',
                    'Acne scarring has been improved significantly',
                    'Even skin tone',
                    'Healthy glow',
                    'Boosted confidence'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Ms. Anita described the experience as life-changing.
                </p>

                {/* Why Zayn Skin Clinic Stands Out */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Why Zayn Skin Clinic Stands Out
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The patients who seek <strong>Skin Treatment in Pune</strong> usually desire:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Personalized diagnosis',
                    'State-of-the-art dermatological technology',
                    'Clinically approved procedures that are safe',
                    'Skincare long-term solutions',
                    'Transparent consultation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  <strong>Zayn Skin Clinic</strong> is a blend of medical and aesthetic accuracy. Every patient is given a treatment roadmap depending on their skin condition instead of an ordinary skincare regimen.
                </p>

                {/* Patient Testimonial */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Patient Testimonial
                </h2>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8 border-l-4 border-gold">
                  <p className="text-lg leading-relaxed text-gray-700 italic mb-4">
                    "I had nearly lost hope of my skin. However, Zayn Skin Clinic made me realize that acne can be treated through proper guidance. I have made the correct choice by selecting them as Skin Treatment in Pune, and this decision has helped me with my skin and confidence."
                  </p>
                  <p className="text-base font-medium text-lounge-accent">— Ms. Anita</p>
                </div>

                {/* Conclusion */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The skin issues, such as acne, pigmentation, and scars, may have a profound emotional impact. Nevertheless, through precise diagnosis and systematic treatment, the situation can be changed.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case study indicates the way <strong>Zayn Skin Clinic</strong> managed to cure not only healthy skin, but also self-confidence. Any person who has troubles with a skin that does not clear away may find the first step to be the professional <strong>Skin Treatment in Pune</strong> which will have a lasting effect and smooth skin.
                </p>

                {/* CTA */}
                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Transform Your Skin?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our expert dermatologists and advanced skin treatments can help you achieve clear, healthy, and glowing skin. Schedule a consultation today.
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

export default SkinTreatmentCaseStudy;
