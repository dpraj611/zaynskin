import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const ClearSkinCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: How Zayn Skin Clinic Helped a Patient Achieve Clear and Healthy Skin | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/clear-skin-case-study';
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
                  <span>March 26, 2026</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>Dr. Sajid Mughal</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-cormorant font-light text-lounge-accent mb-6 leading-tight">
                Case Study: How Zayn Skin Clinic Helped a Patient Achieve Clear and Healthy Skin
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how a patient struggling with persistent acne and pigmentation found a lasting solution through personalized dermatological care at Zayn Skin Clinic in Pune.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                alt="Clear and Healthy Skin Case Study at Zayn Skin Clinic"
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
                  Daily life and confidence: Skin issues like acne, pigmentation, and dull skin can be a problem. Others use home-based solutions or over-the-counter drugs and do not achieve long-term outcomes. The case study describes how a patient discovered the correct solution after attending a <strong>skin specialist in Pune</strong> at <strong>Zayn Skin Clinic</strong>.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Patient Background
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The patient was a 27-year-old working professional based in Pune visiting <strong>Zayn Skin Clinic</strong>, complaining about the presence of persistent acne and dark spots over the last three years. Stress, changeable sleep, and constant exposure to pollution had developed in her skin gradually.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Even with several experimental skincare products and internet solutions, she still had frequent breakouts with uneven skin tone. She got fed up with the temporaries and chose to apply to a <strong>skin specialist in Pune</strong> to seek medical attention.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Problem
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Among the issues that the patient expressed during her consultation were the following:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Frequent eruptions of acne on the cheeks and forehead',
                    'Dark spots and acne scars from old breakouts',
                    'Oily skin and clogged pores',
                    'Flattened skin color and an unluminous face'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  She also stated that most of the cosmetic products irritated her more than anything positive. Due to this reason, she desired a medically assisted and secure solution with an expert <strong>skin specialist in Pune</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Such skin conditions as acne and pigmentation may have to be medically diagnosed, as they may be attributed to hormonal fluctuations, bacteria, pore clogs, or lifestyle. The skin condition is normally assessed by dermatologists who may then propose treatments depending on the situation.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Detailed Skin Analysis at Zayn Skin Clinic
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  At <strong>Zayn Skin Clinic</strong>, a thorough skin examination was done, and the treatment commenced with the dermatology team. The examination included:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Analysis of skin type and sensitivity',
                    'Acne severity assessment',
                    'Assessment of pigmentation and scars',
                    'Lifestyle and diet review'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The examination revealed that the patient had moderate inflammatory acne with post-inflammatory pigmentation. Overproduction of oil and blocked pores were the key causes of frequent breakouts.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Due to the findings, the dermatologist formulated a special treatment plan in the presence of a <strong>skin specialist in Pune</strong>.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Customized Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The treatment plan was aimed at the management of acne, the enhancement of skin texture, and pigmentation.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Acne Control Medical Treatment
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The initial process was the management of active acne. The medications and topical treatments prescribed to the patient by the dermatologist were aimed at decreasing inflammation and stopping new breakouts.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Chemical Peel Sessions
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  As soon as acne began to smooth out, chemical peel treatments came in with mild treatment. These peels assist in removing dead cells in the skin, clear the pores, and make the skin tone light. These are dermatological interventions that are usually applied in the treatment of acne and pigmentation problems.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Advanced Skin Rejuvenation Therapy
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  To minimize acne scars and pigmentation, the patient was taking up advanced skin rejuvenation sessions aimed to stimulate collagen and enhance the texture of the skin.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Personalized Skincare Routine
                </h3>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The Pune <strong>skin specialist</strong> also developed a tailored skincare program including:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Gentle cleanser',
                    'Oil-control moisturizer',
                    'Dermatologist-approved sunscreen',
                    'Targeted anti-acne serum'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The patient was also recommended to stay away from harsh cosmetic products and eat a balanced diet to take care of the skin.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Treatment Progress
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Over a relatively long period of several months, the patient adhered to the treatment plan.
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 1–2
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Significant reduction in active acne',
                      'A decreased number of breakouts and oiliness',
                      'Skin irritation reduced'
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
                    Month 3–4
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Obvious improvement of skin texture',
                      'Acne marks began fading',
                      'Skin color began to appear more homogenous'
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
                    Month 5–6
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'Healthy and clear skin appearance',
                      'Minimal acne breakouts',
                      'Observable decrease in pigmentation and scars'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Frequent visits to the <strong>skin specialist in Pune</strong> ensured that the therapy was changed depending on the reaction of the skin in the patient.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Final Results
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The patient showed significant improvements after 6 months of treatment in <strong>Zayn Skin Clinic</strong>:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Acne reduced by almost 80%',
                    'Dark spots and scars were greatly diminished',
                    'Smoother texture of the skin',
                    'Greater general body self-confidence'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Combining medical therapy, sophisticated surgeries, and lifestyle education assisted in attaining sustainable outcomes.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Patient Feedback
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The patient conveyed that <strong>Zayn Skin Clinic</strong> had the largest difference, which was the professional approach. Rather than using random skincare products, she was provided with a scientifically formulated treatment schedule that was done by a <strong>skin specialist in Pune</strong>.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  She also liked the step-by-step treatment and constant attention paid to her by the dermatology team of the clinic.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Our skin problems may be acne, pigmentation, dullness and all these aspects may need to be well diagnosed and treated by a dermatologist. When one visits a qualified <strong>skin specialist in Pune</strong>, it is possible to discover the root cause of the problem and offer solutions to the same, as opposed to offering quick solutions.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  In the given case study, the author emphasizes ways in which <strong>Zayn Skin Clinic</strong> was able to resolve a patient with a long-time history of acne and pigmentation issues using a personalized approach and state-of-the-art dermatological methods. Most patients can have clear and healthy skin as the right treatment and professional guidance can help them to reach their goal.
                </p>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Achieve Clear, Healthy Skin?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our expert dermatologists and personalized treatment plans can help you overcome acne, pigmentation, and other skin concerns. Schedule a consultation today.
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

export default ClearSkinCaseStudy;
