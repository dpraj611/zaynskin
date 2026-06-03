import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Navigation from '../../components/common/Navigation';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';

const WeightLossCaseStudy: React.FC = () => {
  useEffect(() => {
    document.title = 'Case Study: From Crash Diet Failures to Sustainable Results at a Weight Loss Clinic in Pune | ZAYN Wellness';

    const canonicalUrl = 'https://www.zaynskinclinic.com/blog/weight-loss-case-study-pune';
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
                  <span>May 22, 2026</span>
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
                Case Study: From Crash Diet Failures to Sustainable Results at a Weight Loss Clinic in Pune
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how Amit Deshpande broke free from the crash diet cycle and achieved lasting, sustainable weight loss with the help of Zayn Skin Clinic's personalized approach.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-luxury mb-12">
              <img
                src="/images/blog-weight-loss-clinic.jpg"
                alt="Weight Loss Case Study - Sustainable Results at Zayn Skin Clinic Pune"
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
                  Amit Deshpande, 32, a Pune sales executive, had been undergoing weight gain and weight loss for years, so he decided to visit <strong>Zayn Skin Clinic</strong>. Traveling, irregular feeding, and long hours were part of his lifestyle, and he had to rely on crash diets and quick fixes to help his body shed pounds.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  He did get results from these diets and weight loss plans in the short term, but he would always gain back the weight, and in some cases, more than he lost. The only problem Amit had with this was weight gain, besides which were dull skin, energy level, and more hair fall. He was fed up with this routine and began searching for a reliable <strong>weight loss clinic in Pune</strong> that would offer him enduring and sustainable weight loss.
                </p>

                {/* Challenges Faced */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Challenges Faced by the Client
                </h2>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Rapidly and repeatedly gaining weight following a weight loss diet',
                    'Low energy and tiredness',
                    'Difficult fat around the belly area',
                    'Hair fall due to poor nutrition',
                    'A lack of a structured and maintained routine'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  Amit wanted a program with some scientific base instead of severe restrictions, and it had to be consistent.
                </p>

                {/* Consultation & Assessment */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Consultation & Assessment at Zayn Skin Clinic
                </h2>

                <p className="text-lg leading-relaxed mb-4 text-gray-700">
                  Amit was thoroughly evaluated at <strong>Zayn Skin Clinic</strong> and received:
                </p>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Analysis of body composition and fat percentage',
                    'Metabolic rate assessment',
                    'A review of diet and lifestyle',
                    'Skin and scalp health check'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  The experts decided his metabolism had slowed down as a consequence of the crash diets he had endured and that he needed a balanced and restorative approach.
                </p>

                {/* Customized Treatment Plan */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Customized Treatment Plan
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  <strong>Zayn Skin Clinic</strong> developed a program that concentrates on restoring metabolism and maintaining a healthy weight loss:
                </p>

                {/* 1. Structured Weight Loss Program */}
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4 mt-8">
                  1. Structured Weight Loss Program
                </h3>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  {[
                    'Structured and accessible diet plan (not too strict restrictions)',
                    'Small bites and slow chewing — portion control and mindful eating',
                    'Non-invasive fat removal and inch loss treatments',
                    'Monitoring and progress tracking carried out once a week'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 2. Metabolism Recovery Approach */}
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4 mt-8">
                  2. Metabolism Recovery Approach
                </h3>

                <ul className="list-none space-y-3 mb-6 ml-4">
                  {[
                    'Rehabilitation of metabolic balance by nutrition therapy',
                    'A calorie adjustment strategy',
                    'Lifestyle changes to aid digestion and energy'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* 3. Hair & Skin Revitalization */}
                <h3 className="text-2xl font-cormorant font-medium text-lounge-accent mb-4 mt-8">
                  3. Hair & Skin Revitalization
                </h3>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Control of falling hair and nourishment of the scalp',
                    'Moisture and rejuvenating skin treatments',
                    'Holistic care support'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center text-lg text-gray-700">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Progress Timeline */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Progress Timeline
                </h2>

                {/* Month 1 */}
                <div className="bg-white/60 rounded-xl p-6 mb-4 border border-gold/10">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-3">
                    Month 1
                  </h3>
                  <ul className="list-none space-y-2 ml-2">
                    {[
                      'Improved eating habits',
                      'A better digestive process and a higher energy level',
                      'Initial inch loss'
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
                      'Slow weight loss – without fatigue',
                      'The loss of fat from the abdomen',
                      'The shedding of hair started to decrease'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Month 4 */}
                <div className="bg-white/60 rounded-xl p-6 mb-8 border border-gold/10">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-3">
                    Month 4
                  </h3>
                  <ul className="list-none space-y-2 ml-2">
                    {[
                      'Noticeable body transformation',
                      'Faster skin recovery and freshness',
                      'Improved endurance and well-being'
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
                  Final Results After 4 Months
                </h2>

                <ul className="list-none space-y-3 mb-8 ml-4">
                  {[
                    'Lost 8 kg with regular and sustainable progress without getting discouraged',
                    'No weight gain on rebound',
                    'Boosted metabolism and digestive function',
                    'The number of hair falls was considerably decreased',
                    'Smoother, more nourished skin and more energy'
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
                    "For the first time, I lost weight, and it was a natural and sustainable weight loss. They were not just going to treat the skin for a short time, but were treating me for long-term health. It helped me to break the cycle of crash dieting."
                  </p>
                  <p className="text-sm text-gray-500 mt-4 font-medium">— Amit Deshpande, Sales Executive, Pune</p>
                </div>

                {/* Conclusion */}
                <h2 className="text-3xl font-cormorant font-light text-lounge-accent mb-6 mt-12">
                  Conclusion
                </h2>

                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  This case study showcased how a professional <strong>weight loss clinic in Pune</strong>, such as <strong>Zayn Skin Clinic</strong>, can aid people in breaking away from harmful dieting habits and reach long-term achievements. With proper nutrition, therapies, and professional guidance, long-term transformation is possible and attainable.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-700">
                  If you have been struggling with yo-yo dieting and crash diet failures, it may be time to take a professional, science-based approach to your weight loss journey. The right clinic doesn't just help you lose weight — it helps you build a healthier lifestyle that lasts.
                </p>

                {/* CTA */}
                <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4">
                    Ready to Break Free from Crash Diets?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Discover how our medically-supervised weight loss programs can help you achieve safe, sustainable results — just like Amit. Schedule a consultation with our specialists today.
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

export default WeightLossCaseStudy;
