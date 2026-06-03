import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, HelpCircle } from 'lucide-react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = 'Frequently Asked Questions | Zayn Skin Clinic Pune';

    const canonicalUrl = 'https://www.zaynskinclinic.com/faq';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Find answers to the most frequently asked questions about skin treatments, hair transplant, laser hair removal, weight loss, and more at Zayn Skin Clinic Pune.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Find answers to the most frequently asked questions about skin treatments, hair transplant, laser hair removal, weight loss, and more at Zayn Skin Clinic Pune.';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
  }, []);

  const faqItems: FAQItem[] = [
    {
      question: "What is the Most Recommended Hair Transplant in Pune?",
      answer: "The expertise of the clinic and the technology that is applied in relation to hair transplant determine the best hair transplant in Pune. In Zayn Skin Clinic, hair transplant Pune in the form of FUE is administered by qualified people to guarantee a natural appearance and the least amount of downtime."
    },
    {
      question: "What is Hair Transplant Pune FUE, and is it Effective?",
      answer: "FUE hair transplant Pune (Follicular Unit Extraction) is a new, less invasive surgery, in which single hair follicles are grafted. Zayn Skin Clinic provides this high-tech solution to successful and permanent hair restoration."
    },
    {
      question: "Which is the Best Treatment for Hair Loss in Pune?",
      answer: "Treatment of hair loss in Pune depends on the root cause of the hair fall. Zayn Skin Clinic offers individualized therapies such as PRP therapy, medications, and scalp therapy to achieve success."
    },
    {
      question: "Where do I get a Good Hair Growth Specialist in Pune?",
      answer: "At Zayn Skin Clinic, Pune, you can meet a reputable specialist on hair growth who would identify the underlying cause of hair loss and design a unique regrowth program based on the selected diagnosis to achieve maximum hair growth."
    },
    {
      question: "Is the Treatment of Hair Regrowth Safe and Effective in Pune?",
      answer: "Yes, treating hair regrowth in Pune is safe when done by professionals. Zayn Skin Clinic provides a range of innovative dermatological methods and medically verified treatments to achieve safe and noticeable outcomes."
    },
    {
      question: "What is the Best Skin Clinic in Pune for all Skin Issues?",
      answer: "Zayn Skin Clinic is believed to be the most recommended skin clinic in Pune, which has high-end treatments related to acne, pigmentation, anti-aging, and general rejuvenation of the skin with customized care."
    },
    {
      question: "Which is the Best Place to Find Skin Treatment in Pune?",
      answer: "Zayn Skin Clinic offers personalized dermatology treatments, such as chemical peels, laser therapies, and skin rejuvenation procedures specific to your skin type, to treat your skin in Pune."
    },
    {
      question: "Who is the Most Qualified Skin Specialist in Pune?",
      answer: "The highest quality of skin specialist in Pune is the specialist who is able to provide a personal diagnosis and treatment. At Zayn Skin Clinic, there are well-trained dermatologists who take good care of all skin problems with the latest technology."
    },
    {
      question: "Is it Permanent Laser Hair Removal in Pune?",
      answer: "Hair removal in Pune is a long-term hair removal using Laser. Zayn Skin Clinic offers the most efficient, safe, long-lasting, and high-quality laser hair removal in Pune with the best technology."
    },
    {
      question: "What is the Most Recommended Weight Loss Clinic in Pune?",
      answer: "When it comes to the best weight loss clinic in Pune, Zayn Skin Clinic provides tailor-made weight/fat loss programs that will enable you to attain healthy and sustainable weight loss."
    },
    {
      question: "What's the Best Hair Transplant in Pune?",
      answer: "The most important factor to think about regarding the best hair transplant in Pune would be its expertise, technology, and results. If one desires to achieve natural-looking hair transplants, then clinics that use sophisticated methods like FUE or DHI, as well as clinics with specialists such as Zayn Skin Clinic, may be preferred."
    },
    {
      question: "What is FUE Hair Transplant in Pune, and is it Effective?",
      answer: "FUE hair transplant in Pune is a minimally invasive hair transplant technique in which individual hair follicles are removed and transplanted. It has a high efficacy, it has minimal scarring, and when performed by the experts at Zayn Skin Clinic, it will help promote natural hair growth."
    },
    {
      question: "What is the Best place to find the Best Treatment for Hair Loss in Pune?",
      answer: "Advanced treatments like hair transplant, medications, and PRP therapy are the best hair loss treatments in Pune. Zayn Skin Clinic provides customized treatment to address the cause of hair loss."
    },
    {
      question: "What's the Best Hair Loss Treatment in Pune for Early Hair fall?",
      answer: "Medical management, PRP, and GFC therapy are effective for the early stages of hair loss. In Zayn Skin Clinic, experts propose personalized strategies after the analysis of the scalp."
    },
    {
      question: "What are the options for Hair Regrowth Treatment in Pune?",
      answer: "Hair regrowth therapy in Pune involves PRP, laser therapy and nutrition. Clinics such as Zayn Skin Clinic take several methods to encourage natural hair growth."
    },
    {
      question: "Who is the Best Hair Growth Specialist in Pune?",
      answer: "One of the best hair growth specialists in Pune will be someone who has experience with diagnosing scalp issues and advanced scalp treatments. Zayn Skin Clinic has trained professionals to work in hair restoration and regrowth."
    },
    {
      question: "What is the Best Skin Clinic in Pune for overall skin care?",
      answer: "The best Pune skin clinic must have the latest dermatological treatment facility along with advanced technology and professional doctors. Zayn Skin Clinic is one such skin clinic offering full skin and hair care solutions."
    },
    {
      question: "What is the Top Laser Hair Removal in Pune?",
      answer: "Advanced machines and lasers are available in the best laser hair removal in Pune that are suitable for the Indian skin type. Zayn Skin Clinic provides effective and long-lasting laser hair removal treatments."
    },
    {
      question: "Do you have a Good Fat Reduction Clinic near Pune?",
      answer: "Yes, there are several fat reduction clinics in Pune that provide fat reduction treatments such as inch loss, body contouring and diet plan. Zayn Skin Clinic offers medically supervised and safe fat loss programs."
    },
    {
      question: "Who is the best dermatologist in Pune for treating several skin problems?",
      answer: "There are some skin clinics in Pune where one can get a complete treatment of skin and hair under one roof by consulting a skin specialist. Zayn Skin Clinic is the most trusted skin clinic."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f9f5f1] min-h-screen">
      <Navigation variant="lounge" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-lounge-bg via-lounge-secondary/30 to-lounge-accent/10">
        <div className="absolute inset-0 bg-gradient-to-r from-lounge-bg/80 via-transparent to-lounge-secondary/20"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-lounge-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-lounge-accent/10 to-gold/5 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              to="/wellness"
              className="inline-flex items-center text-lounge-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Wellness
            </Link>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-lounge-accent to-lounge-secondary rounded-full flex items-center justify-center text-white shadow-luxury">
                <HelpCircle className="w-10 h-10" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-pinyon font-light text-lounge-accent mb-6 leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our treatments, procedures, and services at Zayn Skin Clinic, Pune.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-start justify-between group ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-white via-lounge-secondary/10 to-lounge-accent/5 shadow-luxury border border-lounge-accent/20'
                      : 'bg-white shadow-soft hover:shadow-luxury border border-transparent hover:border-lounge-secondary/30'
                  }`}
                  id={`faq-${index}`}
                >
                  <div className="flex items-start flex-1 mr-4">
                    <span className={`text-sm font-semibold mr-4 mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-r from-gold to-yellow-400 text-white'
                        : 'bg-lounge-secondary/30 text-lounge-accent group-hover:bg-gold/20'
                    }`}>
                      {index + 1}
                    </span>
                    <h3 className={`text-lg font-cormorant font-medium transition-colors duration-300 ${
                      openIndex === index ? 'text-lounge-accent' : 'text-gray-800 group-hover:text-lounge-accent'
                    }`}>
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={22}
                    className={`flex-shrink-0 mt-1 transition-all duration-300 ${
                      openIndex === index
                        ? 'rotate-180 text-gold'
                        : 'text-gray-400 group-hover:text-lounge-accent'
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 ml-12">
                        <p className="text-gray-700 leading-relaxed text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gold/10 to-lounge-accent/10 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-pinyon font-light text-lounge-accent mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 mb-8 text-lg max-w-xl mx-auto">
                Our expert team is here to help. Book a consultation and get personalized answers to all your skin, hair, and wellness concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-base px-8 py-4 font-semibold bg-gradient-to-r from-gold to-yellow-400 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-gold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book a Consultation
                </motion.a>
                <motion.a
                  href="https://wa.me/917028007462?text=Hi!%20I%20have%20a%20question%20about%20your%20treatments."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-base px-8 py-4 font-semibold bg-white text-lounge-accent border border-lounge-accent rounded-lg shadow-lg hover:bg-lounge-accent hover:text-white hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Chat on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer variant="lounge" />
    </div>
  );
};

export default FAQ;
