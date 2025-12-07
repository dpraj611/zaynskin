import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import ArticleCard from '../components/ui/ArticleCard';
import Button from '../components/ui/Button';
import TransformationSlider from '../components/ui/TransformationSlider';
import { 
  Zap, 
  Heart, 
  Droplets, 
  Flame, 
  Shield, 
  Sparkles,
  Star,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  MessageCircle,
  Quote,
  ExternalLink,
  Award,
  Users,
  Microscope,
  Target,
  Globe,
  Leaf,
  Brain
} from 'lucide-react';

const WellnessLounge: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update document title and meta tags
    document.title = 'Best Wellness & Skin Treatments in Pune | Zayn Skin Clinic';

    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/wellness';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Looking for expert wellness and skin treatments in Pune? Visit Zayn Skin Clinic for relaxing therapies, glowing skin, and total rejuvenation—book now!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Looking for expert wellness and skin treatments in Pune? Visit Zayn Skin Clinic for relaxing therapies, glowing skin, and total rejuvenation—book now!';
      document.head.appendChild(meta);
    }

    document.title = 'ZAYN | Luxury Wellness Lounge';
    setIsLoaded(true);
    
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Refresh Instagram embeds whenever they're loaded
    const refreshEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    // Call refresh when script loads
    script.onload = refreshEmbeds;

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const stats = [
    { number: '500+', label: 'Wellness Sessions' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '6', label: 'Premium Treatments' }
  ];

  const whyBestFeatures = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inside-Out Philosophy",
      description: "We don't chase surface-level fixes. Every treatment is rooted in inner healing — for real, lasting transformation that radiates outward."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global-Standard Therapies",
      description: "From EMSculpt NEO to IV drips, infrared saunas to EMSella, our technologies are trusted by global leaders in wellness and aesthetics."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Expert-Led Personalization",
      description: "Your body is unique. So is your healing. Our wellness experts craft programs tailored precisely to your needs, biology, and rhythm."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Serene Yet Scientific",
      description: "Our space blends nature-inspired calm with medical-grade innovation — so you don't just relax, you regenerate."
    }
  ];

  const services = [
    {
      title: 'EMSculpt',
      description: 'Revolutionary body contouring technology that builds muscle and burns fat simultaneously.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Emsella',
      description: 'Non-invasive treatment for pelvic floor strengthening and urinary incontinence.',
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: 'IV Therapy',
      description: 'Customized vitamin and nutrient infusions for optimal wellness and recovery.',
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      title: 'Infrared Sauna',
      description: 'Deep-penetrating heat therapy for detoxification and relaxation.',
      icon: <Flame className="w-8 h-8" />,
    },
    {
      title: 'HIFU',
      description: 'High-intensity focused ultrasound for non-surgical skin tightening.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'HydraFacial',
      description: 'Multi-step treatment for instant skin rejuvenation and hydration.',
      icon: <Sparkles className="w-8 h-8" />,
    },
  ];

  const programs = [
    {
      title: 'Core to Floor',
      description: 'Unleash your bodys true power—inside and out. This advanced 6-week transformation protocol combines EMSculpt and Emsella to build visible core strength, enhance posture, eliminate leaks, and activate your deep pelvic muscles—without a single crunch or Kegel.',
      services: ['EMSculpt', 'Emsella'],
      duration: '6 weeks',
      sessions: '6 EMSculpt + 6 Emsella sessions',
      discount: '25% OFF',
      image: '/images/loungehero.jpg',
      keyBenefits: [
  'Drastic muscle mass gain in abs & glutes',
  'Stronger pelvic floor → no more leaks or midnight pees',
  'Boosted posture, balance & physical performance',
  'Enhanced sexual health & core-powered confidence',
  'Non-invasive. Zero downtime. Scientifically proven.'
],
      whatsappMessage: 'Hi! I\'m interested in the Core to Floor program. Can you provide more details about scheduling and the 25% discount?'
    },
    {
      title: 'Lean & Clean',
      description: "An 8-week inside-out body reset that pairs the muscle-sculpting power of EMSculpt with the cellular detox magic of Infrared Sauna. Burn fat, tone up, and flush out hidden toxins to reveal your most confident, radiant self—because glow starts from within.",
      services: ['EMSculpt', 'Infrared Sauna'],
      duration: '8 weeks',
      sessions: '8 EMSculpt + 12 Infrared sessions',
      discount: '25% OFF',
      image: '/images/lnc.jpg', 
      keyBenefits: [
    'Burns up to 19% body fat',
    'Builds lean, toned muscle',
    'Deep cellular detoxification',
    'Boosts metabolic rate',
    'Reduces water retention & bloating',
    'Improves energy & recovery'
  ],
      whatsappMessage: 'Hello! I\'d like to learn more about the Lean & Clean program and the 25% discount offer. What does the treatment schedule look like?'
    },
    {
      title: 'Radiant Revival',
      description: "Our most holistic transformation program, Radiant Revival fuses skin-deep glow with internal cellular vitality. 6 HydraFacials paired with 8 IV drips to flood your system with hydration, antioxidants, and nourishment—resulting in lit-from-within skin and recharged energy.",
      services: ['HydraFacial', 'IV Therapy'],
      duration: '',
      sessions: '6 HydraFacial + 8 IV sessions',
      discount: '25% OFF',
      image: '/images/hf2.jpg',
      keyBenefits: [
    'Glass-like glow with deep hydration',
    'Cellular nutrition & detoxification',
    'Brighter, firmer, youthful skin',
    'Boosts immunity & energy levels',
    'Reduces fine lines & dullness',
    'Long-lasting radiance from inside out'
  ],
      whatsappMessage: 'Hi there! I\'m interested in the Radiant Revival program and would like to know more about the 25% discount. Could you share more information about the treatment timeline?'
    },
    {
      title: 'Sculpt & Lift',
      description: "Achieve the ultimate body sculpt with our dual-action program that tightens skin and builds lean muscle. Perfect for lifting, toning, and redefining your body contours—without surgery or downtime.",
      services: ['HIFU', 'EMSculpt'],
      duration: '8 weeks',
      sessions: '2 HIFU + 8 EMSculpt sessions',
      discount: '25% OFF',
      image: '/images/hifu2.jpg',
      keyBenefits: [
      "Non-surgical skin tightening & lifting",
      "Builds muscle mass",
      "Reduces fat - no double chin!",
      "Contours and tones key areas",
      "Improves skin firmness and elasticity",
      "Safe, effective, and zero downtime"
      ],
      whatsappMessage: 'Hi! I\'m interested in the Sculpt & Lift program. Can you provide more details about the HIFU and EMSculpt combination and the 25% discount?'
    },
    {
      title: 'Wellness & Recovery',
      description: "Revive your body from within. This restorative duo combines nutrient-rich IV drips with deep detox via infrared sauna for enhanced immunity, energy, and total relaxation.",
      services: ['IV Therapy', 'Infrared Sauna'],
      duration: '8 weeks',
      sessions: '8 IV + 12 Infrared Sauna sessions',
      discount: '25% OFF',
      image: '/images/ir1.jpg',
      keyBenefits: [
      "Enhanced cellular hydration & nutrition",
      "Deep detoxification and cleansing",
      "Improved immunity and energy",
      "Relieves fatigue and muscle tension",
      "Reduces stress, promotes better sleep",
      "Supports overall physical recovery"
      ],
      whatsappMessage: 'Hello! I\'d like to learn more about the Wellness & Recovery program combining IV therapy and infrared sauna with 25% discount.'
    },
    {
      title: 'Ultimate Transformation',
      description:  "Our most luxurious, results-driven transformation. Core strength, skin tightening, pelvic restoration, detox, and visible toning—all in one elite protocol built for those seeking total renewal.",
      services: ['Emsella', 'EMSculpt', 'HIFU', 'Infrared Sauna'],
      duration: '8 weeks',
      sessions: '6 Emsella + 8 EMSculpt + 2 HIFU + 16 Infrared sessions',
      discount: '35% OFF',
      image: '/images/ultt.jpg',
     keyBenefits: [
      "Complete inside-out transformation",
      "Pelvic floor strengthening & control",
      "Visible lift and sculpted contours",
      "Infrared-powered detox and recovery",
      "Ideal for pre-events, weddings, and lifestyle reset"
       ],
      whatsappMessage: 'Hi! I\'m interested in the Ultimate Transformation program with all treatments and the 35% discount. Can you provide full details?'
    }
  ];

  const transformations = [
    {
      before: "/images/sd1.png",
      after: "/images/sd2.png",
      description: "Core to Floor"
    },
    {
      before: "/images/sd3.png",   
      after: "/images/sd4.png",
      description: "EMSculpt Body Transformation"
    },
    {
      before: "/images/sd5.png",
      after: "/images/sd6.png",
      description: "EMSculpt Body Transformation"
    },
    {
      before: "/images/sd7.png",
      after: "/images/sd8.png",
      description: "EMSculpt Body Transformation"
    },
    {
      before: "/images/sd9.png",
      after: "/images/sd10.png",
      description: "EMSculpt Body Transformation"
    },
    {
      before: "/images/sd11.png",
      after: "/images/sd12.png",
      description: "EMSculpt NEO"
    },
  ];

  const blogPosts = [
    {
      title: "2026 Guide to Fat Loss Treatment: What Really Works for Sustainable Results",
      excerpt: "Discover the latest advances in fat loss treatments and how to choose the best option for lasting results.",
      image: "https://images.pexels.com/photos/4498361/pexels-photo-4498361.jpeg",
      date: "February 1, 2026",
      readTime: "8 min read",
      slug: "fat-loss-treatment-guide-2026"
    },
    {
      title: "Top-Rated Wellness Lounge Pune: What to Expect in 2026",
      excerpt: "Explore how wellness lounges are evolving to offer premium experiences for complete rejuvenation.",
      image: "/images/loungehero.jpg",
      date: "January 25, 2026",
      readTime: "7 min read",
      slug: "wellness-lounge-pune-2026"
    },
    {
      title: "Top Benefits of Choosing Non Surgical Weight Loss Treatment in 2026",
      excerpt: "Learn why non-surgical weight loss treatments are becoming the top choice for sustainable body transformation.",
      image: "https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg",
      date: "January 20, 2026",
      readTime: "7 min read",
      slug: "non-surgical-weight-loss-2026"
    },
    {
      title: "2026 Guide: How to Choose the Right Wellness Lounge Pune for Your Needs",
      excerpt: "A comprehensive guide to selecting the perfect wellness lounge that matches your lifestyle and goals.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      date: "January 15, 2026",
      readTime: "8 min read",
      slug: "choosing-wellness-lounge-2026"
    },
    {
      title: "The Science of Wellness: How Modern Technology Enhances Natural Healing",
      excerpt: "Discover how cutting-edge treatments like EMSculpt and HIFU work in harmony with your body's natural processes.",
      image: "https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg",
      date: "February 18, 2024",
      readTime: "6 min read",
      slug: "skin-care-clinic-pune-technology"
    },
    {
      title: "Infrared Sauna Benefits: More Than Just Relaxation",
      excerpt: "Explore the profound health benefits of infrared sauna therapy beyond stress relief.",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
      date: "February 16, 2024",
      readTime: "4 min read",
      slug: "infrared-sauna-skin-clinic-pune"
    },
    {
      title: "IV Therapy: Personalized Nutrition for Optimal Wellness",
      excerpt: "Learn how customized IV treatments can address your specific health and wellness goals.",
      image: "/images/iv3.jpg",
      date: "February 14, 2024",
      readTime: "5 min read",
      slug: "personalized-iv-therapy-guide"
    }
  ];

  const patientReviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review: "The Core to Floor program completely transformed my confidence. I feel stronger and more empowered than ever before. The combination of EMSculpt and Emsella is truly revolutionary.",
      treatment: "Core to Floor Program",
      location: "Mumbai",
      date: "January 2024"
    },
    {
      name: "Arjun Patel",
      rating: 5,
      review: "The Lean & Clean program gave me results I never thought possible. My energy levels are through the roof and I've never felt better about my body.",
      treatment: "Lean & Clean Program",
      location: "Pune",
      date: "February 2024"
    },
    {
      name: "Kavya Reddy",
      rating: 5,
      review: "My skin has never looked better after the Radiant Revival program. I feel rejuvenated from the inside out. This place is pure magic!",
      treatment: "Radiant Revival Program",
      location: "Delhi",
      date: "December 2023"
    },
    {
      name: "Rohit Gupta",
      rating: 5,
      review: "The HIFU treatment delivered incredible non-surgical skin tightening results. I look 10 years younger and couldn't be happier with the outcome.",
      treatment: "HIFU Treatment",
      location: "Nagpur",
      date: "January 2024"
    },
    {
      name: "Ananya Singh",
      rating: 5,
      review: "The infrared sauna sessions have become an essential part of my wellness routine. The detoxification and relaxation benefits are incredible.",
      treatment: "Infrared Sauna Series",
      location: "Mumbai",
      date: "February 2024"
    },
    {
      name: "Vikram Joshi",
      rating: 5,
      review: "Truly a life-changing experience. I came all the way from Delhi for the Ultimate Transformation program—and it was worth every mile. Nothing else compares.",
      treatment: "Ultimate Transformation",
      location: "Delhi",
      date: "January 2024"
    }
  ];

  const instagramEmbeds = [
    {
      url: "https://www.instagram.com/reel/DKHCh7QoOBE/?utm_source=ig_embed&utm_campaign=loading",
      embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DKHCh7QoOBE/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DKHCh7QoOBE/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DKHCh7QoOBE/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Sajid Mughal (@dr.sajidmughal)</a></p></div></blockquote>`
    },
    {
      url: "https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&utm_campaign=loading",
      embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Dr. Sajid Mughal (@dr.sajidmughal)</a></p></div></blockquote>`
    }
  ];

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "917028007462"; // WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-lounge-bg">
      <Navigation variant="lounge" />
      
      {/* Hero Section - Clinic Style Layout with Lounge Colors */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 min-h-[80vh] md:min-h-screen flex items-center bg-gradient-to-br from-lounge-bg via-lounge-secondary/30 to-lounge-accent/10">
        {/* Additional gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-lounge-bg/80 via-transparent to-lounge-secondary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-lounge-bg/10 to-lounge-secondary/5"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold/10 to-lounge-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-lounge-accent/10 to-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-lounge-secondary/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Additional gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-lounge-secondary/20 to-transparent"></div>
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1 relative z-10"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 md:mb-8"
              >
                <img 
                  src="/images/zayn-logo.png"
                  alt="ZAYN"
                  className="h-12 md:h-16 lg:h-20 mb-4 md:mb-6 mx-auto lg:mx-0"
                />
              </motion.div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-pinyon font-light mb-4 md:mb-6 leading-tight text-lounge-accent">
                Wellness Lounge
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed font-light text-gray-700 max-w-2xl mx-auto lg:mx-0">
               We don't treat symptoms, we transform roots.
From cellular-level therapies to mind-body technologies, everything is designed to realign, restore, and reveal the best version of you.


              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                <motion.a
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-base md:text-lg px-8 md:px-10 py-4 md:py-5 font-semibold bg-gradient-to-r from-gold to-yellow-400 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-gold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-medium text-white bg-gradient-to-r from-gold to-yellow-400 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-yellow-400 hover:to-gold transform hover:scale-105 text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Experience
                </motion.a>
                <motion.button
                  className="inline-flex items-center justify-center text-base md:text-lg px-8 md:px-10 py-4 md:py-5 font-semibold bg-white text-lounge-accent border border-lounge-accent rounded-lg shadow-lg hover:bg-lounge-accent hover:text-white hover:shadow-xl transition-all duration-300"
                  onClick={scrollToServices}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Services
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto lg:mx-0"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-pinyon font-light text-gold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-1 lg:order-2 z-10"
            >
              <img
                src="/images/loungehero.jpg" 
                alt="ZAYN Wellness Lounge"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold/20 to-lounge-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-lounge-accent/20 to-gold/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We're One of a Kind Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-pinyon font-light text-lounge-accent mb-4 md:mb-6">
              One of a Kind Experience
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Not just wellness — a whole new way of healing. Here's what makes ZAYN Wellness Lounge unlike anything else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyBestFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-lounge-accent to-lounge-secondary rounded-full flex items-center justify-center text-white shadow-luxury group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-gold to-yellow-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-cormorant font-medium text-lounge-accent mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <div className="container-custom">
          <SectionHeading 
            title="Wellness Services" 
            subtitle="Advanced treatments for holistic wellness and rejuvenation"
            variant="lounge"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onClick={() => {
                  window.location.href = `/services/${service.title.toLowerCase().replace(' ', '-')}`;
                }}
              >
                <div className="bg-gradient-to-br from-white via-lounge-secondary/10 to-lounge-accent/5 hover:from-lounge-secondary/20 hover:via-lounge-accent/10 hover:to-lounge-accent/15 rounded-2xl p-8 shadow-soft transition-all duration-500 hover:shadow-luxury hover:-translate-y-2 cursor-pointer border border-lounge-secondary/20 hover:border-lounge-accent/30">
                  <div className="text-lounge-accent mb-6 group-hover:text-gold transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-cormorant mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="inline-flex items-center text-lounge-accent font-medium group-hover:text-gold transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Updated with New Programs and Discounts */}
      <section id="packages" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-pinyon font-light text-lounge-accent mb-4 md:mb-6">
              Signature Programs
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Curated treatment combinations for enhanced results and value
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-white px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              <span className="font-semibold">Limited Time: Up to 35% OFF Programs</span>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-luxury hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Improved Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-lounge-accent/60 group-hover:via-gold/20 group-hover:to-transparent transition-all duration-500" />
                  
                  {/* Gold Accent Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-all duration-500 rounded-t-3xl" />
                  
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-gold to-yellow-400 text-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold">{program.discount}</span>
                  </div>
                  
                  {/* Program Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-cormorant text-white mb-2 drop-shadow-lg">{program.title}</h3>
                    <div className="flex items-center space-x-2">
                      {program.duration && (
                        <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                          {program.duration}
                        </span>
                      )}
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                        {program.sessions}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  {/* Services Combined */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-lounge-accent mb-3 uppercase tracking-wider">Services Combined</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.services.map((service, idx) => (
                        <span key={idx} className="bg-lounge-secondary/30 text-lounge-accent px-3 py-1 rounded-full text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-lounge-accent mb-3 uppercase tracking-wider">Key Benefits</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {program.keyBenefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                      {program.keyBenefits.length > 4 && (
                        <div className="text-xs text-gray-500 mt-1">
                          +{program.keyBenefits.length - 4} more benefits
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Program Details */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-lounge-bg to-lounge-secondary/30 rounded-xl">
                    {program.duration ? (
                      <>
                        <div>
                          <div className="text-sm text-gray-600 mb-1">Duration</div>
                          <div className="font-semibold text-lounge-accent">{program.duration}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600 mb-1">Sessions</div>
                          <div className="font-semibold text-lounge-accent">{program.sessions}</div>
                        </div>
                      </>
                    ) : (
                      <div className="w-full text-center">
                        <div className="text-sm text-gray-600 mb-1">Sessions</div>
                        <div className="font-semibold text-lounge-accent">{program.sessions}</div>
                      </div>
                    )}
                  </div>
                  
                  {/* WhatsApp CTA Button - Now at bottom with margin-top auto */}
                  <button
                    onClick={() => handleWhatsAppClick(program.whatsappMessage)}
                    className="w-full bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group mt-auto"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                    <span>Book Program via WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Loss Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gold/5 via-white to-lounge-accent/5">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="mb-6">
                  <span className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Target className="w-4 h-4 mr-2" />
                    Specialized Program
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-pinyon font-light text-lounge-accent mb-6 leading-tight">
                  Best Weight Loss Clinic in Pune
                </h2>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Transform your body with our medically-supervised weight loss programs. We combine advanced technology, 
                  personalized nutrition, and expert guidance for lasting results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">Doctor-led care</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">Non-surgical options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">Customized programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-gray-700">Proven results</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    to="/weight-loss-clinic-in-pune"
                    variant="gold"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Explore Weight Loss Programs
                  </Button>
                  <button
                    onClick={() => handleWhatsAppClick("Hi! I'm interested in your weight loss programs. Can you provide more information about the treatments and pricing?")}
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold bg-white text-lounge-accent border-2 border-lounge-accent rounded-lg hover:bg-lounge-accent hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Get Consultation
                  </button>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-luxury">
                  <img
                    src="https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg"
                    alt="Weight Loss Transformation"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lounge-accent/30 via-transparent to-transparent"></div>
                  
                  {/* Floating stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-pinyon text-lounge-accent">95%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                        <div>
                          <div className="text-2xl font-pinyon text-lounge-accent">1000+</div>
                          <div className="text-xs text-gray-600">Transformations</div>
                        </div>
                        <div>
                          <div className="text-2xl font-pinyon text-lounge-accent">0</div>
                          <div className="text-xs text-gray-600">Surgery Required</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gold/20 to-lounge-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-lounge-accent/20 to-gold/20 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="gallery" className="py-16 md:py-20 bg-gradient-to-br from-lounge-bg to-lounge-secondary">
        <div className="container-custom">
          <SectionHeading 
            title="Transformation Gallery" 
            subtitle="Real results from our wellness programs and treatments"
            variant="lounge"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TransformationSlider transformations={transformations} />
          </motion.div>
        </div>
      </section>

      {/* Patient Stories & Reviews Section - Clinic Style with Lounge Colors */}
      <section id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-pinyon font-light text-lounge-accent mb-4 md:mb-6">
              Wellness Stories & Reviews
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Read what our clients say about their transformative wellness experiences at ZAYN Lounge.
            </p>
          </motion.div>

          {/* Elegant Text-Based Review Cards - 6 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {patientReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-white to-lounge-secondary/10 rounded-3xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 border border-lounge-secondary/20 group"
              >
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={40} className="text-lounge-accent" />
                </div>
                
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-gold to-lounge-accent rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-lounge-accent to-gold rounded-full opacity-30"></div>

                {/* Header with Name and Treatment */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-cormorant font-semibold text-lounge-accent">
                      {review.name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'text-gold fill-gold' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-lounge-accent/10 text-lounge-accent px-3 py-1 rounded-full text-xs font-medium">
                      {review.treatment}
                    </span>
                    <span>{review.date}</span>
                  </div>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                  "{review.review}"
                </blockquote>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-lounge-secondary/20">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    <span>{review.location}</span>
                  </div>
                  <div className="text-xs text-lounge-accent font-medium uppercase tracking-wider">
                    Verified Client
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-lounge-secondary/20 via-white to-lounge-secondary/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-lounge-secondary/30">
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center mr-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="text-gold fill-gold mx-1" />
                    ))}
                  </div>
                  <div className="text-3xl md:text-4xl font-pinyon font-light text-lounge-accent">
                    4.9<span className="text-lg text-gray-500">/5</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-2">Excellent Rating</p>
                <p className="text-sm text-gray-500 mb-8">Based on 500+ verified Google Reviews</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-pinyon font-light text-lounge-accent mb-2">500+</div>
                  <div className="text-sm text-gray-600">Total Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-pinyon font-light text-lounge-accent mb-2">98%</div>
                  <div className="text-sm text-gray-600">5-Star Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-pinyon font-light text-lounge-accent mb-2">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>

              <a 
                href="https://www.google.com/search?q=zayn+skin+clinic&gs_ssp=eJzj4tVP1zc0TDYsL68oTzcwYLRSNagwTko2SjZMskhOTktNNbdMsjKoMDU2MDQwS0pLMbEwtDA0MvISqEqszFMozs7MU0jOyczLTAYAA18VyQ#lrd=0x3bc2c1b8ccfee79b:0x530106bfd4818122,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-lounge-accent text-white px-8 py-4 rounded-full hover:bg-lounge-accent/90 transition-all duration-300 text-base font-medium shadow-soft hover:shadow-luxury group"
              >
                {/* Google Logo SVG */}
                <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                View All Reviews on Google
                <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-20 bg-gradient-to-br from-lounge-bg to-lounge-secondary">
        <div className="container-custom">
          <SectionHeading 
            title="Wellness Insights" 
            subtitle="Expert guidance on wellness, treatments, and lifestyle"
            variant="lounge"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ArticleCard
                  title={post.title}
                  excerpt={post.excerpt}
                  image={post.image}
                  date={post.date}
                  readTime={post.readTime}
                  slug={post.slug}
                  variant="lounge"
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button variant="lounge" to="/blog">
              View All Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Socialise with Us Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <SectionHeading 
            title="Socialise with Us" 
            subtitle="Follow our wellness journey and discover daily inspiration"
            variant="lounge"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {instagramEmbeds.map((embed, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <div 
                  className="w-full max-w-[540px]"
                  dangerouslySetInnerHTML={{ __html: embed.embedCode }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button 
              variant="lounge"
              href="https://www.instagram.com/dr.sajidmughal"
              className="inline-flex items-center space-x-2"
            >
              Follow Us on Instagram
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-lounge-bg to-lounge-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-pinyon text-lounge-accent mb-4">
              Visit Our Wellness Sanctuary
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Pune, our tranquil wellness lounge provides the perfect escape for your mind, body, and soul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-pinyon mb-6 text-lounge-accent">Connect With Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-lounge-accent text-white p-3 rounded-full">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Address</h4>
                      <p className="text-gray-600">
                        28, 7, Prithvi Garden, near, Bhagwan Tatyasaheb Kawade Rd, Uday Baug, Pune, Maharashtra 411001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-lounge-accent text-white p-3 rounded-full">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <p className="text-gray-600">070280 07462</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-lounge-accent text-white p-3 rounded-full">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <Button variant="gold" className="w-full md:w-auto">
                  Book Your Wellness Journey
                </Button>
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-luxury overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6418.888229566173!2d73.90355617519147!3d18.513035682579083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b8ccfee79b%3A0x530106bfd4818122!2sZayn%20Skin%20Clinic%20l%20Best%20Hair%20Transplant%20in%20Pune%20l%20Best%20Skin%20and%20Hair%20Clinic%20%2F%20Doctor%20in%20Pune!5e1!3m2!1sen!2sin!4v1749200543972!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 md:h-[400px]"
                  title="ZAYN Wellness Lounge Location"
                ></iframe>
              </div>
                
              {/* Overlay with lounge info */}
              
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-lounge-accent to-lounge-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-pinyon mb-8">Begin Your Wellness Journey</h2>
            <p className="text-lg mb-12 leading-relaxed opacity-90">
              Experience the perfect harmony of luxury and wellness in our serene sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <motion.a
                href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-lg px-12 py-4 bg-gradient-to-r from-gold to-yellow-400 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-gold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Experience
              </motion.a>
              <motion.a
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                href="tel:+917028007462"
                className="inline-flex items-center justify-center text-lg px-12 py-4 bg-white text-lounge-accent border border-white rounded-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer variant="lounge" />
    </div>
  );
};

export default WellnessLounge;