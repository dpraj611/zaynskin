import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const SkinTreatmentPuneCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: Transforming Problem Skin with the Right Skin Treatment in Pune | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/skin-treatment-pune-case-study';
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
                  <span>February 18, 2026</span>
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
                alt="Skin Treatment Case Study at Zayn Skin Clinic Pune"
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

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Patient Profile
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Clinic: Zayn Skin Clinic',
                      'Patient: Ms. Anita',
                      'Age: 29',
                      'Profession: Marketing Professional',
                      'Concern: Severe acne, pigmentation & acne scars'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Problem
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Ms. Anita, a 29-year-old marketing professional, presented herself at <strong>Zayn Skin Clinic</strong> because she had developed persistent acne over the last 6 years. Stress, sleeplessness, and the use of over-the-counter products slowly led to the worsening of her condition.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At the time she came, she was dealing with:
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
                  She had experimented with home treatments and salon treatments, but there were no lasting effects. During her research of available options for reliable <strong>skin treatment in Pune</strong>, she came across <strong>Zayn Skin Clinic</strong> and made an appointment.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Consultation Process
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At <strong>Zayn Skin Clinic</strong>, the journey started with an elaborate analysis of the skin. The dermatologist:
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

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The clinic did not recommend a cosmetic solution but rather tried to establish the driving force behind her acne and scarring.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The team explained that <strong>skin treatment in Pune</strong> requires customization, particularly when patients have active acne and scars simultaneously.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Diagnosis
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  After thorough evaluation, Ms. Anita was diagnosed with:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Grade 3 inflammatory acne',
                    'PIH: Post-inflammatory hyperpigmentation',
                    'Atrophic acne scars',
                    'Sensitive combination skin'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The clinic focused its care in stages so as not to damage the skin but to guarantee gradual, sustainable healing.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Individualized Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  A comprehensive 4-phase treatment plan was developed at <strong>Zayn Skin Clinic</strong>:
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-2">
                    Phase 1: Active Acne Control
                  </h3>
                  <p className="text-sm text-gold font-medium mb-4">Month 1–2</p>
                  <ul className="list-none space-y-3 ml-4 mb-4">
                    {[
                      'Oral and topical medical-grade medications',
                      'Salicylic-based chemical peels',
                      'Oil-controlling skincare regimen'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-lounge-accent italic">Purpose: Prevent new outbreaks and lower inflammation.</p>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-2">
                    Phase 2: Pigmentation Correction
                  </h3>
                  <p className="text-sm text-gold font-medium mb-4">Month 3–4</p>
                  <ul className="list-none space-y-3 ml-4 mb-4">
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
                  <p className="text-sm text-lounge-accent italic">Purpose: Flatten skin complexion and decrease dark spots.</p>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-2">
                    Phase 3: Scar Treatment
                  </h3>
                  <p className="text-sm text-gold font-medium mb-4">Month 5–7</p>
                  <ul className="list-none space-y-3 ml-4 mb-4">
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
                  <p className="text-sm text-lounge-accent italic">Aim: Improve skin texture and reduce the depth of scarring.</p>
                </div>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-2">
                    Phase 4: Skin Maintenance &amp; Glow Improvement
                  </h3>
                  <p className="text-sm text-gold font-medium mb-4">Month 8 and above</p>
                  <ul className="list-none space-y-3 ml-4 mb-4">
                    {[
                      'HydraFacial sessions',
                      'Maintenance peels',
                      'Skincare prevention education'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-lounge-accent italic">Purpose: Maintain results and enhance skin radiance long-term.</p>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  This systematic approach ensured that Ms. Anita received comprehensive <strong>skin treatment in Pune</strong>, as opposed to temporary cosmetic enhancement.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Procedure &amp; Experience
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  All procedures were performed under strict supervision of dermatologists. The clinic was well maintained, and all sessions were discussed in detail before the program. Ms. Anita appreciated:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Transparent communication at every stage',
                    'Realistic expectations set from the beginning',
                    'Slow yet noticeable progress',
                    'Minimal downtime between sessions'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  No aggressive or hurried course of treatment was given. The focus was always on the health of the skin first and then on aesthetics.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Results Timeline
                </h2>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 2
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Acne reduced by nearly 70%',
                      'Inflammation on the skin reduced greatly',
                      'No new cystic breakouts'
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
                    Month 4
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Pigmentation began to fade',
                      'Skin tone appeared more even',
                      'Dark spots noticeably lighter'
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
                    Month 6
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Scars visibly softened',
                      'Skin texture improved significantly',
                      'Overall complexion more radiant'
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
                    Month 8
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Smoother, brighter, and glossier skin',
                      'Few remaining scars barely visible',
                      'No longer needed heavy makeup'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Her skin transformation was astonishing by the close of 8 months. She could afford not to wear heavy makeup anymore and felt confident attending work events and social gatherings. This is what makes patients put their trust in <strong>Zayn Skin Clinic</strong> when seeking an effective <strong>skin treatment in Pune</strong>.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Outcome
                </h2>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    '80–90% reduction in active acne',
                    'Acne scarring improved significantly',
                    'Even skin tone restored',
                    'Healthy, radiant glow',
                    'Boosted confidence in personal and professional life'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Ms. Anita described the experience as life-changing.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Why Zayn Skin Clinic Stands Out
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Patients who seek <strong>skin treatment in Pune</strong> usually desire:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Personalized diagnosis',
                    'State-of-the-art dermatological technology',
                    'Clinically approved procedures that are safe',
                    'Long-term skincare solutions',
                    'Transparent consultation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  <strong>Zayn Skin Clinic</strong> is a blend of medical and aesthetic precision. Every patient is given a treatment roadmap depending on their skin condition instead of an ordinary skincare regimen.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Patient Testimonial
                </h2>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8 border border-gold/20">
                  <div className="text-5xl text-gold/40 font-serif mb-4">"</div>
                  <p className="text-lg leading-relaxed text-gray-700 italic mb-4">
                    I had nearly lost hope for my skin. However, Zayn Skin Clinic made me realize that acne can be treated through proper guidance. I have made the correct choice by selecting them for skin treatment in Pune, and this decision has helped me with my skin and confidence.
                  </p>
                  <p className="text-sm text-lounge-accent font-medium">— Ms. Anita, Pune</p>
                </div>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Skin issues such as acne, pigmentation, and scars may have a profound emotional impact. Nevertheless, through precise diagnosis and systematic treatment, the situation can be completely transformed.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case study indicates how <strong>Zayn Skin Clinic</strong> managed to restore not only healthy skin but also self-confidence. Anyone who struggles with skin that does not clear may find the first step to be professional <strong>skin treatment in Pune</strong> for a lasting effect and smooth, radiant skin.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  If you're dealing with persistent acne, pigmentation, or scarring, consulting with certified dermatologists at a trusted clinic is the first step toward the clear, healthy skin you deserve.
                </p>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Transform Your Skin?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our expert dermatologists and advanced skin treatments can help you achieve clear, glowing skin. Schedule your consultation today.
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

export default SkinTreatmentPuneCaseStudy;
