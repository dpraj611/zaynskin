import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const HairRestorationCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: Successful Hair Restoration with Advanced Care at Zayn Skin Clinic | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/hair-restoration-case-study';
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
                  <span>March 18, 2026</span>
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
                Case Study: Successful Hair Restoration with Advanced Care at Zayn Skin Clinic
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how a patient with severe hair thinning achieved remarkable results through a personalized hair regrowth treatment plan at Zayn Skin Clinic in Pune.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="/images/blog-hair-loss-treatment.jpg"
                alt="Hair Restoration Case Study at Zayn Skin Clinic"
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
                  Hair loss may be a traumatic experience for most people who lose confidence and general appearance. <strong>Zayn Skin Clinic</strong> is a place where patients are provided with specific attention and offered innovative dermatological services that will solve various types of hair issues. The case study gives an insight into how a patient with severe problems with hair thinning got a successful remedy by registering for <strong>hair regrowth treatment Pune</strong> at the clinic.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Patient Background
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The client is a 32-year-old man who works as a professional in Pune, and complains of a severe loss of hair over almost two years. It was his demanding work schedule, stress, and unbalanced lifestyle that slowly took a toll on his hair. The hair fall initially appeared to be under control, but eventually he started to notice that the part of the hair was widening and portions of the scalp appeared.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Being worried about the current state, he chose to visit experts dealing with <strong>hair regrowth treatment in Pune</strong> and identify a permanent and safe solution.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  The Problem
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The patient described the following problems during the first consultation:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Greater than 18 months of continuous hair fall',
                    'Evidential atrophy of the crown region',
                    'The strands of hair were weak and broke easily',
                    'Male pattern baldness: Involvement of hair density in overall appearance'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0 mt-2.5"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  He had already experimented with a number of over-the-counter oils and supplements but had not noticed much improvement. The patient was also concerned that the issue may escalate to irreversible baldness unless the problem is tackled promptly.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  In-depth Diagnosis at Zayn Skin Clinic
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The dermatology team in <strong>Zayn Skin Clinic</strong> provided an extensive scalp examination with the help of modern diagnostic equipment. The evaluation included:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Hair follicles assessment',
                    'Scalp condition analysis',
                    'History of lifestyle and medical history',
                    'Hair density examination'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The findings indicated that the patient was having early-stage androgenetic alopecia, also referred to as male pattern hair loss. Scalp inflammation and weakened follicles, besides, were also contributing to excessive shedding.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  According to the diagnosis, the specialists suggested a personalized <strong>hair regrowth treatment</strong> program that was aimed at strengthening hair follicles, nourishing the scalp, and accelerating hair growth.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Customized Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The clinic did not suggest a particular procedure; instead, it developed a holistic approach to treatment incorporating several scientifically supported techniques.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Medical Scalp Therapy
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The patient was initially subjected to special scalp therapy sessions that would enhance blood circulation in the body and nourish the hair follicles. These sessions have contributed to lessening the inflammation in the scalp, and the follicles are ready to undergo regrowth treatments.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  PRP (Platelet-Rich Plasma) Therapy
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  PRP treatment has been proposed as one of the major components in the Pune plan for <strong>hair regrowth</strong>. In this procedure, platelet-rich plasma of the patient was injected into the scalp to induce inert follicles and accelerate the natural growth of hair.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Nutritional and Lifestyle Instruction
                </h3>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Zayn Skin Clinic</strong> doctors also provided the patient with recommendations on dietary changes and lifestyle improvement that would support the treatment. Biotin, iron, and vitamins were prescribed as nutritional supplements to be taken internally to strengthen hair.
                </p>

                <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4 mt-8">
                  Advanced Hair Growth Serums
                </h3>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Medical dermatologists recommended serums to boost the follicle activity and inhibit further loss of hair.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Treatment Timeline
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The patient adhered to the treatment plan over a number of months.
                </p>

                <div className="bg-gradient-to-br from-lounge-secondary/20 to-white rounded-2xl p-8 mb-8 border border-lounge-secondary/30">
                  <h3 className="text-2xl font-cormorant font-light text-lounge-accent mb-4">
                    Month 1–2
                  </h3>
                  <ul className="list-none space-y-3 ml-4">
                    {[
                      'The fall in the hair started to diminish slowly',
                      'There was an improvement in the health of the scalp',
                      'Hair strands felt stronger'
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
                      'Observable decreased shedding of hair',
                      'The development of thinning areas with baby hair',
                      'Increased thickness and hair texture'
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
                      'An obvious increase in the density of hair',
                      'Regrowth in the crown region',
                      'Thicker and healthier hair growth'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-lg text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The effectiveness of the Pune method of <strong>hair regrowth treatment</strong> can be seen through the fact that the hair of the patient slowly became more voluminous and stronger.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Final Results
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  The patient greatly improved after six months of treatment in <strong>Zayn Skin Clinic</strong>:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Hair fall reduced by nearly 70%',
                    'New hair in the new areas of thinning hair',
                    'Higher scalp health and better follicles',
                    'High hair density, an increase in thickness'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Above all, the patient did not feel embarrassed about himself anymore and was happy with the outcome.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Patient Feedback
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  According to the patient, the biggest difference was the individual approach <strong>Zayn Skin Clinic</strong> took. The clinic did not provide a universal solution, but instead examined his hair situation very thoroughly and suggested a specific plan of <strong>hair growth treatment in Pune</strong> that was effective.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Another important aspect that he liked was the support that he received during the process of treatment, such as lifestyle counseling and frequent follow-ups.
                </p>

                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Loss of hair may be caused by various reasons, which may include genetic factors, stress, lifestyle, and scalp conditions. The fact of timely diagnosis and scientifically supported treatment is the key to successful recovery.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  The case study shows how <strong>Zayn Skin Clinic</strong> assisted a patient in eliminating the adverse problem of hair thinning using a unique method of <strong>hair regrowth Pune</strong> treatment. Through a combination of state-of-the-art processes, medical knowledge, and patient-centred care, the clinic could offer tangible and sustainable outcomes.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  In those people who have been having chronic hair fall or thinning, there is always a difference in time and proper treatment, which might help in regaining healthy hair growth, too, only that they need to seek professional advice and initiate the appropriate treatment at an early age.
                </p>

                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Start Your Hair Restoration Journey?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our expert dermatologists and advanced hair regrowth treatments can help you achieve thicker, healthier hair. Schedule a consultation today.
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

export default HairRestorationCaseStudy;
