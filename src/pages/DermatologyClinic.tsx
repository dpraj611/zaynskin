import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Heart,
  Shield,
  Zap,
  ExternalLink,
  Quote,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Scissors,
  Sun,
  Droplets,
  Moon,
  Beaker,
  Leaf,
  Zap as Lightning
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import ArticleCard from '../components/ui/ArticleCard';

const DermatologyClinic: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update document title and meta tags for blog section
    document.title = 'Best Skin & Wellness Blog in Pune | Zayn Skin Clinic';

    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/best-dermatologist-in-pune';
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
      metaDescription.setAttribute('content', 'Looking for expert skincare and wellness advice? Read Zayn Skin Clinic\'s blog for trusted tips, beauty trends, and treatment guidance from Pune\'s top dermatologists.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Looking for expert skincare and wellness advice? Read Zayn Skin Clinic\'s blog for trusted tips, beauty trends, and treatment guidance from Pune\'s top dermatologists.';
      document.head.appendChild(meta);
    }

    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Happy Patients' },
    { number: '50+', label: 'Advanced Treatments' }
  ];

  const features = [
    {
      icon: <Award className="text-clinic-accent group-hover:text-white transition-colors duration-300" size={24} />,
      title: 'International Standards',
      description: 'World-class equipment and protocols from leading medical centers'
    },
    {
      icon: <Users className="text-clinic-accent group-hover:text-white transition-colors duration-300" size={24} />,
      title: 'Expert Team',
      description: 'Globally Recognized Experts in Anti-Ageing and Aesthetic Dermatology'
    },
    {
      icon: <Shield className="text-clinic-accent group-hover:text-white transition-colors duration-300" size={24} />,
      title: 'Safety First',
      description: 'FDA-approved treatments with highest safety standards'
    },
    {
      icon: <Heart className="text-clinic-accent group-hover:text-white transition-colors duration-300" size={24} />,
      title: 'Personalized Care',
      description: 'Customized treatment plans for your unique needs'
    }
  ];

  const serviceCategories = [
    {
      title: 'SKIN',
      image: 'https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
      description: 'Advanced skin treatments for radiant, healthy complexion',
      link: '/services#skin'
    }, 
    {
      title: 'HAIR',
image: 'https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
description: 'Comprehensive hair restoration and scalp treatments',
link: '/services#hair'
  
    },
    {
      title: 'AESTHETICS',
      image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg',
      description: 'Non-surgical aesthetic enhancements and anti-ageing',
      link: '/services#aesthetics'
    }
  ];

  const blogPosts = [
    {
      title: "Understanding Modern Hair Restoration Techniques",
      excerpt: "Explore the latest advancements in hair restoration, from PRP therapy to transplantation methods.",
      image: "https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg",
      date: "February 15, 2024",
      readTime: "5 min read",
      slug: "modern-hair-restoration-techniques"
    },
    {
      title: "The Science Behind Chemical Peels",
      excerpt: "Discover how chemical peels work and their transformative effects on different skin concerns.",
      image: "https://images.pexels.com/photos/3762567/pexels-photo-3762567.jpeg",
      date: "February 12, 2024",
      readTime: "4 min read",
      slug: "skin-treatment-pune-chemical-peels"
    },
    {
      title: "Combining Treatments for Optimal Results",
      excerpt: "Learn how combining different treatments can enhance your skincare results.",
      image: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg",
      date: "February 10, 2024",
      readTime: "6 min read",
      slug: "face-treatment-pune-combination-guide"
    }
  ];

  const beforeAfterImages = [
    {
      before: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
      after: "https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg",
      treatment: "Hair Transplant"
    },
    {
      before: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg",
      after: "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg",
      treatment: "Skin Rejuvenation"
    },
    {
      before: "https://images.pexels.com/photos/3764574/pexels-photo-3764574.jpeg",
      after: "https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg",
      treatment: "Anti-ageing"
    },
    {
      before: "https://images.pexels.com/photos/3762408/pexels-photo-3762408.jpeg",
      after: "https://images.pexels.com/photos/3762413/pexels-photo-3762413.jpeg",
      treatment: "Laser Treatment"
    },
    {
      before: "https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg",
      after: "https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg",
      treatment: "Chemical Peel"
    },
    {
      before: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg",
      after: "https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg",
      treatment: "Filler Treatment"
    },
    {
      before: "https://images.pexels.com/photos/3764574/pexels-photo-3764574.jpeg",
      after: "https://images.pexels.com/photos/3764579/pexels-photo-3764579.jpeg",
      treatment: "Acne Treatment"
    },
    {
      before: "https://images.pexels.com/photos/3762408/pexels-photo-3762408.jpeg",
      after: "https://images.pexels.com/photos/3762413/pexels-photo-3762413.jpeg",
      treatment: "Pigmentation"
    }
  ];

  const transformationGallery = [
    {
      before: "/images/ss1.png",
      after: "/images/ss2.png",
      description: "Hair Transplant - 6 months post-treatment"
    },
    {
      before: "/images/ss3.png",
      after: "/images/ss4.png",
      description: "Skin Rejuvenation - 3 months post-treatment"
    },
    {
      before: "/images/ss5.png",
      after: "/images/ss6.png",
      description: "Anti-ageing Treatment - 4 months post-treatment"
    },
    {
      before: "/images/ss7.png",
      after: "/images/ss8.png",
      description: "Laser Treatment - 2 months post-treatment"
    },
    {
      before: "/images/ss9.png",
      after: "/images/ss10.png",
      description: "Laser Treatment - 2 months post-treatment"
    },
    {
      before: "/images/ss11.png",
      after: "/images/ss12.png",
      description: "Laser Treatment - 2 months post-treatment"
    },
    {
      before: "/images/ss13.png",
      after: "/images/ss14.png",
      description: "Chemical Peel - 6 weeks post-treatment"
    }
  ];

  const skinJewellsProducts = [
    {
      name: "Fresh Start Foam Face Cleanser",
      subtitle: "Foaming Face Wash",
      description: "Exfoliates, Prevents Breakouts & Removes Makeup for Oily, Acne-Prone & Sensitive Skin",
      image: "/images/FreshstartCleanser2.jpeg",
      icon: <Droplets className="text-clinic-accent" size={20} />,
      category: "Cleansing",
      benefits: [
        "Exfoliates dead skin cells",
        "Prevents breakouts",
        "Removes makeup effectively",
        "Suitable for sensitive skin"
      ]
    },
    {
      name: "Supple'U Skin Serum",
      subtitle: "Fortified Hyaluronic Acid Concentrate",
      description: "Face Serum for Brightening & Glowing Skin, Fortified with Hyaluronic Acid, Niacinamide, Alpha Arbutin & Mulberry Extract",
      image: "/images/suppleu2.jpeg",
      icon: <Sparkles className="text-clinic-accent" size={20} />,
      category: "Hydration",
      benefits: [
        "Brightens & enhances radiance",
        "Deep hydration with HA",
        "Firms skin texture",
        "Multi-active formula"
      ]
    },
    {
      name: "Get Set Glo Vitamin C Serum",
      subtitle: "Brightening Vit C Concentrate",
      description: "For Brighter, Even-Toned Skin – Reduces Dark Spots, Improves Skin Texture & Radiance, Antioxidant Protection",
      image: "/images/GetSetGlo.jpeg",
      icon: <Sun className="text-clinic-accent" size={20} />,
      category: "Brightening",
      benefits: [
        "Reduces dark spots",
        "Improves skin texture",
        "Antioxidant protection",
        "Lightweight & non-greasy"
      ]
    },
    {
      name: "Fountain of Youth Retinol Concentrate",
      subtitle: "Retinol Concentrate with Vit C & E",
      description: "Anti-Aging Serum – Reduces Fine Lines, Wrinkles & Dark Spots, Brightens & Firms Skin",
      image: "/images/FountainOfYouth.jpeg",
      icon: <Moon className="text-clinic-accent" size={20} />,
      category: "Anti-Aging",
      benefits: [
        "Reduces fine lines & wrinkles",
        "Brightens & firms skin",
        "Lightweight & non-irritating",
        "Enhanced with Vit C & E"
      ]
    },
    {
      name: "Screen De-Fens Sunscreen",
      subtitle: "Broad Spectrum Hybrid Sunscreen",
      description: "SPF 50, Non-Greasy & Lightweight – Broad-Spectrum UVA/UVB Protection, Matte Finish for Acne-Prone & Sensitive Skin",
      image: "/images/screen-defens-product-pri.jpeg",
      icon: <Shield className="text-clinic-accent" size={20} />,
      category: "Protection",
      benefits: [
        "SPF 50 broad-spectrum",
        "Non-greasy matte finish",
        "Suitable for acne-prone skin",
        "Lightweight formula"
      ]
    },
    {
      name: "Renewing Peeling Gel",
      subtitle: "Foaming Face Wash",
      description: "Your Secret to Radiant Skin – Gentle exfoliation for smoother, brighter complexion",
      image: "/images/skin-jewells-2.jpeg",
      icon: <Lightning className="text-clinic-accent" size={20} />,
      category: "Exfoliation",
      benefits: [
        "Gentle exfoliation",
        "Reveals radiant skin",
        "Smooths skin texture",
        "Brightens complexion"
      ]
    }
  ];

  const patientReviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      review: "Dr. Sajid's expertise in hair transplant is unmatched. The results exceeded my expectations and the entire team was incredibly professional throughout the journey.",
      treatment: "Hair Transplant",
      location: "Pune",
      date: "January 2024"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      review: "Amazing experience with HydraFacial treatment. My skin has never looked better. The clinic maintains the highest standards of hygiene and care.",
      treatment: "HydraFacial",
      location: "Mumbai",
      date: "February 2024"
    },
    {
      name: "Sneha Patel",
      rating: 5,
      review: "The anti-ageing treatments at ZAYN have transformed my appearance. Dr. Urneeb's gentle approach made me feel comfortable throughout the entire process.",
      treatment: "Anti-ageing",
      location: "Pune",
      date: "December 2023"
    },
    {
      name: "Amit Desai",
      rating: 5,
      review: "Excellent laser treatment for pigmentation. The results are visible and long-lasting. Highly recommend ZAYN Clinic for all skin concerns.",
      treatment: "Laser Treatment",
      location: "Nashik",
      date: "January 2024"
    },
    {
      name: "Kavya Reddy",
      rating: 5,
      review: "Professional service and outstanding results. The clinic uses the latest technology and the doctors are highly skilled and experienced in their field.",
      treatment: "Chemical Peel",
      location: "Pune",
      date: "February 2024"
    },
    {
      name: "Arjun Mehta",
      rating: 5,
      review: "Exceptional care and remarkable results with my acne treatment. The team's attention to detail and personalized approach made all the difference in my skin transformation.",
      treatment: "Acne Treatment",
      location: "Mumbai",
      date: "January 2024"
    }
  ];

  const instagramReels = [
    {
      embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DIiqBiMIx8e/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DIiqBiMIx8e/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DIiqBiMIx8e/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Sajid Mughal (@dr.sajidmughal)</a></p></div></blockquote>`,
      title: "Hair Transplant Results"
    },
    {
      embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DJd432oo5kf/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Sajid Mughal (@dr.sajidmughal)</a></p></div></blockquote>`,
      title: "Skin Treatment Results"
    },
    {
      embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DIN-TcJoE7-/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DIN-TcJoE7-/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DIN-TcJoE7-/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Sajid Mughal (@dr.sajidmughal)</a></p></div></blockquote>`,
      title: "Aesthetic Treatments"
    },
    {
      embedCode: `<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DFz5aQbIyNe/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DFz5aQbIyNe/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DFz5aQbIyNe/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Sajid Mughal (@dr.sajidmughal)</a></p></div></blockquote>`,
      title: "Advanced Procedures"
    }
  ];

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = '//www.instagram.com/embed.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="bg-[#faf6f2]">
      <Navigation variant="clinic" />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 min-h-[80vh] md:min-h-screen flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
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

              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-cormorant font-light mb-4 md:mb-6 leading-tight text-clinic-accent">
                Science-Driven Aesthetics
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed font-light text-gray-700 max-w-2xl mx-auto lg:mx-0">
                Where advanced skin care meets personalized care. Experience transformative treatments 
                with international standards and exceptional results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 justify-center lg:justify-start">
                <Button 
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  variant="gold"
                  className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  Book Consultation
                </Button>
                <Button 
                  to="/services"
                  variant="clinic"
                  className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  Explore Services
                </Button>
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
                    <div className="text-xl md:text-2xl lg:text-3xl font-cormorant font-light text-gold mb-1">
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
              className="relative order-1 lg:order-2"
            >
              <img
                src="https://images.pexels.com/photos/3762408/pexels-photo-3762408.jpeg"
                alt="ZAYN Clinic Interior"
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose ZAYN Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Where Skin Science Meets Personalised Care
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with personalized care to deliver exceptional results 
              that exceed your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-clinic-secondary bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-clinic-accent transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-cormorant font-medium text-clinic-accent mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Image Based */}
      <section id="services" className="py-16 md:py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Our Premium Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Discover our comprehensive range of advanced treatments across skin care, hair restoration, and aesthetic medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={category.link}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 group-hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl md:text-3xl font-cormorant font-medium text-white mb-2">
                          {category.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 md:p-8 text-center">
                      <p className="text-gray-600 leading-relaxed mb-4 md:mb-6">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-center text-clinic-accent group-hover:text-gold transition-colors duration-300">
                        <span className="text-sm font-medium mr-2">Explore</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Signature FUE Hair Transplant Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 md:mb-12"
          >
            <div className="bg-gradient-to-r from-clinic-accent/10 via-white to-clinic-accent/10 rounded-3xl p-8 md:p-12 border border-clinic-accent/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <Sparkles className="text-clinic-accent mr-3" size={28} />
                    <span className="text-sm font-medium text-clinic-accent uppercase tracking-wider">Signature Treatment</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-light text-clinic-accent mb-4">
                    Signature FUE Hair Transplant
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Experience our exclusive Custom FUE technique featuring international-grade instruments 
                    and Dr. Sajid's personalized hairline design. Each procedure is individually crafted 
                    for natural, future-proof results.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-cormorant font-medium text-clinic-accent">International</div>
                      <div className="text-sm text-gray-600">Grade Equipment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-cormorant font-medium text-clinic-accent">Custom</div>
                      <div className="text-sm text-gray-600">Hairline Design</div>
                    </div>
                  </div>
                  
                  <Link to="/services/hair-transplant-in-pune">
                    <Button variant="clinic" className="inline-flex items-center">
                      Learn More
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="relative">
                  <img
                    src="/images/ht.jpg"
                    alt="Custom FUE Hair Transplant"
                    className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-luxury"
                  />
                  <div className="absolute top-4 right-4 bg-clinic-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Signature
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <Button 
              to="/services"
              variant="clinic"
              className="inline-flex items-center text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section - Reduced Empty Space */}
      <section id="doctors" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Meet Our Experts
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Led by internationally recognized specialists who combine medical expertise with artistic vision.
            </p>
          </motion.div>

          {/* Dr. Sajid Mughal - Featured - Compact Layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-12 md:mb-16"
          >
            <div className="bg-gradient-to-br from-clinic-secondary/30 to-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-luxury">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
                <div className="text-center lg:text-left">
                  <div className="relative mb-6 md:mb-8 inline-block">
                    <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gold p-2 shadow-luxury mx-auto lg:mx-0">
                      <img
                        src="/images/drsajid.png"
                        alt="Dr. Mohammad Sajid Mughal"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-luxury border-2 border-gold"
                    >
                      <span className="text-clinic-accent font-cormorant text-lg md:text-xl font-medium">
                        Founder & M.D Zayn Clinic
                      </span>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 max-w-sm mx-auto lg:mx-0">
                    <div className="bg-white rounded-xl p-3 md:p-4 shadow-soft text-center">
                      <Award className="text-gold mx-auto mb-2" size={20} />
                      <div className="text-xs md:text-sm font-medium text-clinic-accent">Top 3 Nominee</div>
                      <div className="text-xs text-gray-600">AMWC Monaco 2024</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 md:p-4 shadow-soft text-center">
                      <Users className="text-gold mx-auto mb-2" size={20} />
                      <div className="text-xs md:text-sm font-medium text-clinic-accent">15+ Years</div>
                      <div className="text-xs text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
                 

                <div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-cormorant mb-3 md:mb-4 text-clinic-accent text-center lg:text-left">
                    Dr. Mohammad Sajid Mughal
                  </h3>
                  <h4 className="text-lg md:text-xl lg:text-2xl font-cormorant text-gold mb-4 md:mb-6 text-center lg:text-left">
                    MBBS. PG Diploma Dermatology (U.K), Ex Jr. Resident Neuro Surgery A Pioneer in Aesthetic Medicine, Hair Restoration, and Regenerative Wellness
                  </h4>

                  <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    <p>
                      Dr. Mohammad Sajid Mughal is a globally recognized leader in aesthetic and regenerative medicine. As the founder of Zayn – Skin, Hair & Wellness, he has pioneered transformative solutions in hair transplants, anti-ageing injectables, laser therapies, and holistic wellness.
                    </p>
                    <p>
                      His expertise has earned him global recognition, including being a Top 3 Nominee for Best Hair Restoration at AMWC, Monaco (2024). Dr. Mughal's approach is a blend of medical precision and advanced innovation, ensuring natural, youthful results.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-white rounded-xl p-4 md:p-5 shadow-soft">
                      <h5 className="font-medium text-clinic-accent mb-2 md:mb-3 text-sm md:text-base">Specializations</h5>
                      <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                        <li>• Hair Transplant & Restoration</li>
                        <li>• Anti-ageing Injectables</li>
                        <li>• Regenerative Medicine</li>
                        <li>• Laser Therapies</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-5 shadow-soft">
                      <h5 className="font-medium text-clinic-accent mb-2 md:mb-3 text-sm md:text-base">Innovations</h5>
                      <ul className="text-xs md:text-sm text-gray-600 space-y-1">
                        <li>• EMSELLA Technology</li>
                        <li>• Exosome Therapy</li>
                        <li>• Skin Jewells Aesthetics</li>
                        <li>• Custom FUE Technique</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dr. Urneeb Fatima */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                <div className="text-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-clinic-accent p-1 mx-auto mb-4">
                    <img
                      src="/images/dru.jpg"
                      alt="Dr. Urneeb Fatima"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="bg-clinic-secondary bg-opacity-30 rounded-full px-4 py-2 inline-block">
                    <span className="text-clinic-accent font-cormorant text-sm">
                      Aesthetic Physician
                    </span>
                  </div>
                </div>

                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-cormorant mb-2 text-clinic-accent">
                    Dr. Urneeb Fatima, MBBS
                  </h3>
                  <h4 className="text-base md:text-lg font-cormorant text-gold mb-4">
                    Aesthetic Physician | Zayn Skin Clinic
                  </h4>

                  <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
                    <p>
                      Dr. Urneeb Fatima is an MBBS graduate with a background in emergency medicine from reputed hospitals like Ruby Hall Clinic. With hands-on training in aesthetic medicine and over six years of experience at Zayn Skin Clinic, she has developed a reputation for delivering consistently excellent results.
                    </p>
                    <p>
                      Known for her calm and empathetic nature, Dr. Fatima builds genuine connections with her patients, making them feel at ease throughout their treatment journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Gallery Section */}
      <section id="gallery" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Transformation Gallery
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover the remarkable transformations achieved through our advanced treatments and expert care.
            </p>
          </motion.div>

          <Swiper
            modules={[SwiperNavigation, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            className="w-full py-12"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              }
            }}
          >
            {transformationGallery.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-luxury border border-clinic-secondary/20"
                >
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium">Before</p>
                      <img
                        src={item.before}
                        alt="Before transformation"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2 font-medium">After</p>
                      <img
                        src={item.after}
                        alt="After transformation"
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <p className="text-center text-sm text-clinic-accent font-medium">{item.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Skin Jewells Products Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Beaker className="text-clinic-accent mr-3" size={32} />
              <span className="text-sm font-medium text-clinic-accent uppercase tracking-wider">Professional Skincare</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Skin Jewells Products
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Discover our exclusive range of dermatologist-formulated skincare products, designed to complement your in-clinic treatments and maintain optimal skin health at home.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {skinJewellsProducts.map((product, index) => (
              <motion.a
                key={index}
                href="https://skinjewells.com/collections/skin-care"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group block"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-luxury transition-all duration-500 border border-clinic-secondary/20 h-full">
                  {/* Product Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        {product.icon}
                        <span className="text-xs font-medium text-clinic-accent ml-2">{product.category}</span>
                      </div>
                    </div>

                    {/* Professional Grade Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-clinic-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                        Professional Grade
                      </div>
                    </div>

                    {/* External Link Icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                        <ExternalLink size={16} className="text-clinic-accent" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-cormorant font-medium text-clinic-accent mb-2 group-hover:text-gold transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gold font-medium mb-3 italic">
                        {product.subtitle}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start text-xs text-gray-600">
                          <CheckCircle className="text-gold mr-2 mt-0.5 flex-shrink-0" size={12} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-clinic-secondary/20">
                      <div className="text-xs text-clinic-accent font-medium uppercase tracking-wider">
                        Dermatologist Formulated
                      </div>
                      <div className="text-clinic-accent group-hover:text-gold transition-colors duration-300">
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-clinic-accent/10 via-white to-clinic-accent/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-clinic-accent/20">
              <h3 className="text-2xl md:text-3xl font-cormorant font-light text-clinic-accent mb-4">
                Complete Your Skincare Journey
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                Enhance your in-clinic treatments with our professional-grade skincare products. 
                Each formula is carefully crafted to deliver clinical-strength results at home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Beaker className="text-clinic-accent" size={20} />
                  </div>
                  <div className="text-sm font-medium text-clinic-accent mb-1">Dermatologist Formulated</div>
                  <div className="text-xs text-gray-600">Clinically tested ingredients</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-clinic-accent" size={20} />
                  </div>
                  <div className="text-sm font-medium text-clinic-accent mb-1">Clinical Strength</div>
                  <div className="text-xs text-gray-600">Professional-grade formulations</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-clinic-accent" size={20} />
                  </div>
                  <div className="text-sm font-medium text-clinic-accent mb-1">Professional Grade</div>
                  <div className="text-xs text-gray-600">Trusted by dermatologists</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://skinjewells.com/collections/skin-care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-clinic inline-flex items-center justify-center"
                >
                  Shop All Products
                  <ExternalLink size={18} className="ml-2" />
                </a>
                <Button 
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  variant="gold"
                  className="inline-flex items-center"
                >
                  Get Product Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Patient Stories & Reviews Section - 6 Reviews Grid */}
      <section id="testimonials" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Patient Stories & Reviews
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
              Read what our patients say about their transformative experiences at ZAYN Clinic.
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
                className="relative bg-gradient-to-br from-white to-clinic-secondary/10 rounded-3xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 border border-clinic-secondary/20 group"
              >
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={40} className="text-clinic-accent" />
                </div>
                
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-gold to-clinic-accent rounded-full opacity-20"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-br from-clinic-accent to-gold rounded-full opacity-30"></div>

                {/* Header with Name and Treatment */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-cormorant font-semibold text-clinic-accent">
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
                    <span className="bg-clinic-accent/10 text-clinic-accent px-3 py-1 rounded-full text-xs font-medium">
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
                <div className="flex items-center justify-between pt-4 border-t border-clinic-secondary/20">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={14} className="mr-1" />
                    <span>{review.location}</span>
                  </div>
                  <div className="text-xs text-clinic-accent font-medium uppercase tracking-wider">
                    Verified Patient
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Google Reviews & Practo Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-clinic-secondary/20 via-white to-clinic-secondary/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-clinic-secondary/30">
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center mr-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="text-gold fill-gold mx-1" />
                    ))}
                  </div>
                  <div className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent">
                    4.9<span className="text-lg text-gray-500">/5</span>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 mb-2">Excellent Rating</p>
                <p className="text-sm text-gray-500 mb-8">Based on 500+ verified reviews</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-cormorant font-light text-clinic-accent mb-2">500+</div>
                  <div className="text-sm text-gray-600">Total Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-cormorant font-light text-clinic-accent mb-2">98%</div>
                  <div className="text-sm text-gray-600">5-Star Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-cormorant font-light text-clinic-accent mb-2">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.google.com/search?q=zayn+skin+clinic&gs_ssp=eJzj4tVP1zc0TDYsL68oTzcwYLRSNagwTko2SjZMskhOTktNNbdMsjKoMDU2MDQwS0pLMbEwtDA0MvISqEqszFMozs7MU0jOyczLTAYAA18VyQ#lrd=0x3bc2c1b8ccfee79b:0x530106bfd4818122,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-clinic-accent text-white px-8 py-4 rounded-full hover:bg-clinic-accent/90 transition-all duration-300 text-base font-medium shadow-soft hover:shadow-luxury group"
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

                <a 
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white border-2 border-clinic-accent text-clinic-accent px-8 py-4 rounded-full hover:bg-clinic-accent hover:text-white transition-all duration-300 text-base font-medium shadow-soft hover:shadow-luxury group"
                >
                  {/* Practo Logo SVG */}
                  <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  View Reviews on Practo
                  <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Reels Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Instagram className="text-clinic-accent mr-3" size={32} />
              <span className="text-sm font-medium text-clinic-accent uppercase tracking-wider">Follow Our Journey</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Latest Transformations
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch real patient transformations and behind-the-scenes content from our clinic on Instagram.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 place-items-center">
            {instagramReels.map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden transition-all duration-500"
              >
                <div dangerouslySetInnerHTML={{ __html: reel.embedCode }} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-clinic-secondary/20 via-white to-clinic-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto border border-clinic-secondary/30">
              <h3 className="text-xl font-cormorant font-medium text-clinic-accent mb-4">
                Follow Us on Instagram
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Stay updated with daily transformations, treatment insights, and behind-the-scenes content from ZAYN Clinic.
              </p>
              <a 
                href="https://www.instagram.com/dr.sajidmughal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-base font-medium shadow-soft hover:shadow-luxury group"
              >
                <Instagram size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                Follow @dr.sajidmughal
                <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Latest Insights
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest developments in dermatology and aesthetic medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post, index) => (
              <ArticleCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                readTime={post.readTime}
                slug={post.slug}
                variant="clinic"
                className={`${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Clinic Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-clinic-bg to-clinic-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cormorant font-light text-clinic-accent mb-4 md:mb-6">
              Visit Our Clinic
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience personalized care in our state-of-the-art facility. Schedule your consultation today and begin your transformation journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-clinic-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">Location</h3>
                    <p className="text-gray-700">28, 7, Prithvi Garden, near, Bhagwan Tatyasaheb Kawade Rd, Uday Baug, Pune, Maharashtra 411001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-clinic-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">Phone</h3>
                    <p className="text-gray-700">070280 07462</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-clinic-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">Email</h3>
                    <p className="text-gray-700">info@zaynclinic.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-clinic-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="text-clinic-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-cormorant font-medium text-clinic-accent mb-2">Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  variant="clinic"
                  className="inline-flex items-center"
                >
                  Book Consultation
                </Button>
                <Button 
                  href="tel:+18001234567"
                  variant="gold"
                  className="inline-flex items-center"
                >
                  Call Now
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4093.703851703369!2d73.90355617519147!3d18.513035682579083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1b8ccfee79b%3A0x530106bfd4818122!2sZayn%20Skin%20Clinic%20l%20Best%20Hair%20Transplant%20in%20Pune%20l%20Best%20Skin%20and%20Hair%20Clinic%20%2F%20Doctor%20in%20Pune!5e1!3m2!1sen!2sin!4v1750585558501!5m2!1sen!2sin" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }}
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ZAYN Clinic Location"
                  className="md:h-[450px]"
                />
              </div>
              
              {/* Overlay with clinic info */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-soft">
                <div className="flex items-center mb-2">
                  <img 
                    src="/images/zayn-logo.png"
                    alt="ZAYN"
                    className="h-6 mr-2"
                  />
                  <span className="font-cormorant font-medium text-clinic-accent">Skin & Hair Clinic</span>
                </div>
                <p className="text-xs text-gray-600">Premium Skin Care & Aesthetics</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer variant="clinic" />
    </div>
  );
};

export default DermatologyClinic;