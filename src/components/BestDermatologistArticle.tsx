import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const BestDermatologistArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent text-center mb-8">
              Best Dermatologist in Pune – Expert Skin &amp; Hair Care at Zayn Skin Clinic
            </h2>

            {/* Always visible intro */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <h3 className="text-2xl font-cormorant font-medium text-clinic-accent">
                Welcome to Zayn Skin Clinic: Your Healthy Skin Experts
              </h3>
              <p>
                To get the best results for skin and hair care, it's important to visit the best dermatologist in Pune. We, at Zayn Skin Clinic, realise that good skin health starts with a proper diagnosis and individualised and patient-focused care. Our focus is on providing the best dermatology treatment for skin and hair issues, as well as cosmetic issues.
              </p>
              <p>
                Our specialised team offers personalised services for all types of acne, pigmentation, anti-ageing, hair loss and more, using the newest technologies and effective treatments. Whether you are looking for medical dermatology treatment or cosmetic skin care, the goal of Zayn Skin Clinic is to deliver comprehensive skin care in Pune.
              </p>
            </div>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[20000px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}
            >
              <div className="space-y-10 text-gray-700 leading-relaxed text-lg">

                {/* Why Best Dermatologist is Essential */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Why the Best Dermatologist in Pune is Essential
                  </h3>
                  <p className="mb-6">
                    Skin problems are unique, as is the skin. A dermatologist is not just about prescribing or recommending creams for a skin condition, but diagnosing and treating the root cause of the condition, creating an individualised treatment plan for your skin and helping you deal with your skin issue in the long run.
                  </p>
                  <p className="font-semibold text-clinic-accent mb-3">Why a dermatologist can help with:</p>
                  <ul className="space-y-3">
                    {['Accurate diagnosis of skin conditions', 'Safe and effective treatments', 'Personalised skincare plans', 'Advanced cosmetic procedures', 'Prevention of recurring skin issues', 'Professional hair and scalp treatments'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6">Zayn Skin Clinic is a place where we offer the best treatment according to your needs with expertise and care.</p>
                </div>

                {/* How Zayn is Pune's Best */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    How Zayn Skin Clinic is Pune's Best Dermatologist
                  </h3>
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Cosmetic Dermatology for a Variety of Skin Types</h4>
                  <p className="mb-6">We at Zayn Skin Clinic understand that all skin types respond differently to treatments. We prefer personalised treatment, not a "one size fits all" approach.</p>
                </div>

                {/* Acne */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Acne and Acne Scar Management</h4>
                  <p className="mb-4">Acne can lead to low self-esteem and damaged skin. Our dermatologists will examine the factors and provide treatments that work for your skin.</p>
                  <p className="font-semibold text-clinic-accent mb-3">Treatments may include:</p>
                  <ul className="space-y-2">
                    {['Medical acne management', 'Chemical peels', 'Acne scar reduction treatments', 'Advanced laser procedures', 'Skin rejuvenation therapies'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pigmentation */}
                <div>
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Pigmentation and Uneven Skin Tone</h4>
                  <p className="mb-4">Uneven skin tone, tanning, melasma and dark spots can be treated by a dermatologist.</p>
                  <p className="font-semibold text-clinic-accent mb-3">Solutions may include:</p>
                  <ul className="space-y-2">
                    {['Medical peels', 'Laser solutions', 'Brightening skin therapies', 'Customized skincare protocols'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Anti-Aging */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Anti-Aging and Skin Rejuvenation</h4>
                  <p className="mb-4">Aging skin needs preventive and corrective treatment.</p>
                  <p className="font-semibold text-clinic-accent mb-3">Our anti-aging treatments can include:</p>
                  <ul className="space-y-2">
                    {['Fine line and wrinkle reduction', 'Skin tightening procedures', 'Hydrating and revitalising therapies', 'Collagen-boosting therapies', 'Advanced facial treatments'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Medical Dermatology */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Medical Dermatology, Skin Specialist in Pune
                  </h3>
                  <p className="mb-6">Those looking for a skin specialist in Pune may have a medical need. Medical dermatology is a key element of our practice at Zayn Skin Clinic.</p>
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Treatment for Common Skin Conditions</h4>
                  <div className="space-y-4 mt-4">
                    <div>
                      <h5 className="font-semibold text-clinic-accent">Eczema and Dermatitis</h5>
                      <p>Itchy, red and irritated skin requires professional care. We offer treatment strategies to manage the condition and enhance skin comfort.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-clinic-accent">Psoriasis Management</h5>
                      <p>Psoriasis can be difficult to manage. Our dermatologists can provide supportive treatment to improve the skin.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-clinic-accent">Fungal Infections</h5>
                      <p>Fungal skin infections require effective treatment to prevent recurrent infections.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-clinic-accent">Skin Allergies</h5>
                      <p>Allergies of the skin can be caused by many factors. Our dermatologists can determine causes and provide treatment.</p>
                    </div>
                  </div>
                </div>

                {/* Hair Specialist */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Best Dermatologist and Hair Specialist in Pune
                  </h3>
                  <p className="mb-6">Hair and scalp go hand in hand. Zayn Skin Clinic not only provides skin treatments but also hair and scalp treatments.</p>

                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Hair Loss Treatments</h4>
                  <p className="mb-4">Hair loss may be a result of stress, hormone imbalances, diet, genetics and scalp diseases.</p>
                  <div className="space-y-3 mb-6">
                    <div><h5 className="font-semibold text-clinic-accent">Hair Fall Evaluation</h5><p>We determine the causes before starting treatment.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Scalp Treatments</h5><p>Good scalp health may promote hair growth.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">PRP and Hair Restoration Solutions</h5><p>Cutting-edge techniques can be considered for those who are eligible.</p></div>
                  </div>

                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Pune Hair Treatment for Various Conditions</h4>
                  <ul className="space-y-2">
                    {['Hair thinning', 'Pattern baldness', 'Dandruff and scalp disorders', 'Hair shedding', 'Weak hair growth'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Dermatological expertise can go a long way in effective hair treatment in Pune.</p>
                </div>

                {/* Cosmetic Dermatology */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Zayn Skin Clinic's Advanced Cosmetic Dermatology
                  </h3>
                  <p className="mb-6">We are a contemporary skin care clinic, specialising in advanced cosmetic dermatology treatments that improve skin quality and appearance.</p>

                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Face Treatments for Radiant Skin</h4>
                  <p className="mb-4">Those seeking facial treatment in Pune can choose from a range of facial treatments depending on their skin types and preferences.</p>
                  <div className="space-y-3 mb-6">
                    <div><h5 className="font-semibold text-clinic-accent">Hydrating Treatments</h5><p>Replump skin and refresh its appearance.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Skin Brightening Procedures</h5><p>Reduce dullness and promote healthy skin.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Deep Cleansing Treatments</h5><p>Keep congestion at bay and keep skin healthy.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Customised Dermatologist Facials</h5><p>Tailored to your skin concerns.</p></div>
                  </div>
                </div>

                {/* Laser Services */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Laser Services by Dermatologists</h4>
                  <p className="mb-4">Laser dermatology provides cutting-edge treatment for a range of conditions.</p>
                  <div className="space-y-3">
                    <div><h5 className="font-semibold text-clinic-accent">Laser Hair Reduction</h5><p>Permanent reduction of unwanted hair.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Pigmentation Lasers</h5><p>Effective treatment for dark spots and pigmentation.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Acne Scar Laser Treatment</h5><p>Smooths skin and improves skin texture.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Skin Rejuvenation Lasers</h5><p>Promote collagen and skin regeneration.</p></div>
                  </div>
                  <p className="mt-4">All treatments are recommended following consultation.</p>
                </div>

                {/* Customised Skincare */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Customised Skincare at Zayn Skin Clinic
                  </h3>
                  <p className="mb-6">The key to our success, especially for those looking for the best skin specialist in Pune, is our individualised approach.</p>
                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Consultation Process</h4>
                  <div className="space-y-3 mb-6">
                    <div><h5 className="font-semibold text-clinic-accent">Skin Analysis</h5><p>Analysing your skin type, concerns and history.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Customized Treatment Planning</h5><p>Personalised care and advice for each individual.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Long-Term Skin Health Advice</h5><p>Care includes maintenance and skin care information.</p></div>
                  </div>

                  <h4 className="text-xl font-cormorant font-medium text-clinic-accent mb-2">Conditions We Commonly Treat</h4>
                  <ul className="space-y-2">
                    {['Acne and Oily Skin', 'Pigmentation Issues', 'Sensitive Skin', 'Aging Concerns', 'Hair and Scalp Problems'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Best Skin Care Clinic */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Why Zayn Skin Clinic is the Best Skin Care Clinic in Pune
                  </h3>
                  <div className="space-y-3">
                    <div><h5 className="font-semibold text-clinic-accent">Experienced Dermatology Team</h5><p>Our dermatologists provide safe, ethical and proven solutions.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Patient-Centered Care</h5><p>We focus on active listening, understanding and patient education.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Modern Treatment Technology</h5><p>We use state-of-the-art dermatology approaches and technology.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Customized Solutions</h5><p>Skin is unique to each individual and so are treatment solutions.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Natural-Looking Results</h5><p>We strive for balanced, healthy improvements.</p></div>
                  </div>
                </div>

                {/* When to Consult */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    When to Consult a Dermatologist
                  </h3>
                  <p className="mb-4">People often wait until their condition becomes severe. Consult early to avoid complications.</p>
                  <p className="font-semibold text-clinic-accent mb-3">See a Dermatologist If You Have:</p>
                  <ul className="space-y-2">
                    {['Persistent acne', 'Sudden hair fall', 'Chronic pigmentation', 'Itchy or irritated skin', 'Skin infections', 'Premature aging concerns', 'Acne scars', 'Scalp problems', 'Unexplained rashes', 'Recurring skin issues'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4">Seeking the help of the best dermatologist in Pune early in the process can help with quicker recovery.</p>
                </div>

                {/* Skincare Tips */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Skincare Tips from Dermatologists
                  </h3>
                  <div className="space-y-3">
                    <div><h5 className="font-semibold text-clinic-accent">Maintain a Consistent Routine</h5><p>Choose appropriate products for your skin.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Never Skip Sunscreen</h5><p>Protecting your skin aids healthy skin.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Avoid Self-Medicating</h5><p>Random products could make problems worse.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Stay Hydrated</h5><p>Water helps keep skin healthy.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Seek Professional Advice</h5><p>It's best to seek professional help for persistent skin concerns.</p></div>
                  </div>
                </div>

                {/* One Stop Shop */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    One Stop Shop for Skin and Hair Care
                  </h3>
                  <p className="mb-4">Zayn Skin Clinic provides care for:</p>
                  <ul className="space-y-2 mb-6">
                    {['Medical Dermatology – Treatment of skin diseases', 'Cosmetic Dermatology – Cutting-edge skin care treatments', 'Hair Treatments – Hair and scalp support', 'Preventive Skin Care – Advice on ongoing skin health'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>And this holistic approach makes us a popular option for those looking for a skin care clinic in Pune.</p>
                </div>

                {/* Finding the Right Dermatologist */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Finding the Right Dermatologist in Pune
                  </h3>
                  <p className="mb-4">It takes more than a Google search to find the right expert.</p>
                  <p className="font-semibold text-clinic-accent mb-3">What to Look For:</p>
                  <div className="space-y-3">
                    <div><h5 className="font-semibold text-clinic-accent">Experience</h5><p>Look for a dermatologist who treats both medical and cosmetic issues.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Personalized Consultation</h5><p>Understanding your needs is key to good treatment.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Advanced Treatment Options</h5><p>New methods may be more effective.</p></div>
                    <div><h5 className="font-semibold text-clinic-accent">Ethical Care</h5><p>Treatment advice should be in the best interest of the patient.</p></div>
                  </div>
                  <p className="mt-4">At Zayn Skin Clinic, we prioritise all of the above in caring for you.</p>
                </div>

                {/* Take the First Step */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Take the First Step towards Better Skin
                  </h3>
                  <p className="mb-4">Whether you are struggling with acne, pigmentation, hair loss or simply need some expert advice on your skin, the best dermatologist in Pune can help.</p>
                  <p className="mb-4">At Zayn Skin Clinic, our mission is to provide:</p>
                  <ul className="space-y-2 mb-6">
                    {['Expert dermatology care', 'Personalized treatments', 'Advanced skin solutions', 'Patient-first approach', 'Genuine and ethical practice'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-semibold text-clinic-accent text-xl font-cormorant">Skin health is not a "fashion" – it is a special care.</p>
                </div>

                {/* FAQs */}
                <div className="bg-gradient-to-r from-clinic-bg to-clinic-secondary/30 rounded-3xl p-8">
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-6">
                    Frequently Asked Questions (FAQs)
                  </h3>
                  <div className="space-y-6">
                    {[
                      { q: '1. Why is Zayn Skin Clinic one of the best dermatologist clinics in Pune?', a: 'Zayn Skin Clinic offers personalised dermatology treatment, advanced treatments, highly qualified dermatologists and treats skin and hair issues and is preferred by many.' },
                      { q: '2. What treatments are available with a skin specialist in Pune?', a: 'Acne, pigmentation, allergies, psoriasis, hair loss, anti-aging, laser therapies, and skin health are treated by skin specialists.' },
                      { q: '3. When should I go to a dermatologist for acne?', a: "If you have persistent, painful, scarring or non-responsive acne to over-the-counter products, you should visit a dermatologist." },
                      { q: '4. Do dermatologists treat hair loss?', a: 'Dermatologists can help figure out the cause and treatment based on that.' },
                      { q: '5. Can a dermatologist treat pigmentation?', a: 'Yes, a dermatologist can treat pigmentation issues, such as melasma, tanning and dark patches.' },
                      { q: '6. Is cosmetic skin treatment safe?', a: 'Cosmetic skin treatments are safe when administered by dermatologists after consultation.' },
                      { q: '7. What can I expect from my dermatology consultation?', a: 'Consultations may include examination, consultation, diagnosis and treatment.' },
                      { q: '8. Who are the best dermatologists in Pune?', a: 'Expertise, reviews, tailored treatment plans, technology and ethics.' }
                    ].map((faq, i) => (
                      <div key={i}>
                        <h4 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">{faq.q}</h4>
                        <p>{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Book Appointment CTA */}
                <div>
                  <h3 className="text-2xl font-cormorant font-medium text-clinic-accent mb-4">
                    Book an Appointment with Zayn Skin Clinic
                  </h3>
                  <p>To get skin and hair treatment from the best dermatologist in Pune, book an appointment with Zayn Skin Clinic. Get the healthy skin and hair you've always wanted with expert care.</p>
                </div>

              </div>
            </div>

            {/* Read More / Read Less Button */}
            <div className="text-center mt-8">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-clinic-accent to-clinic-secondary text-white px-8 py-3 rounded-full hover:shadow-luxury transition-all duration-300 text-lg font-semibold group"
              >
                {isExpanded ? (
                  <>
                    Read Less
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </>
                ) : (
                  <>
                    Read More
                    <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BestDermatologistArticle;
