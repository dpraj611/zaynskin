import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, Waves, Award, Zap, Sparkles, Heart, Scissors, Stethoscope, Droplets, RotateCcw, Microscope } from 'lucide-react';
import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import ServiceDropdown from '../components/ui/ServiceDropdown';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('ANTI-AGEING');
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    document.title = 'Our Services | ZAYN Clinic';

    // Add canonical tag
    const canonicalUrl = 'https://www.zaynskinclinic.com/services';
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    window.scrollTo(0, 0);
  }, []);

  const toggleDropdown = (serviceName: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName]
    }));
  };

  const serviceCategories = {
    'ANTI-AGEING': {
      icon: <Sparkles size={24} />,
      color: 'from-pink-500 to-rose-400',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      textColor: 'text-pink-600',
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg',
      description: 'Advanced anti-ageing treatments to restore youthful radiance and confidence',
      services: [
        { 
          name: 'Anti-ageing injectables', 
          description: 'Advanced injectable treatments to reduce signs of aging with precision and artistry',
          brand: 'Allergan & Galderma',
          howWeDoBetter: {
            title: 'Why We\'re Pune\'s Premier Injectable Specialists',
            content: 'Dr. Sajid\'s artistic approach combined with international-grade products ensures natural-looking results that enhance your features rather than changing them.',
            highlights: [
              'Only authentic Allergan Botox and Juvederm fillers used',
              'Dr. Sajid\'s 15+ years of injection expertise',
              'Customized treatment plans for each facial structure',
              'Pain-free injection techniques with topical anesthesia',
              'Immediate results with minimal downtime',
              'Follow-up care included for optimal results'
            ]
          }
        },
        { 
          name: 'Dermal filler', 
          description: 'Restore volume and smooth wrinkles with premium hyaluronic acid fillers',
          brand: 'Juvederm & Restylane',
          howWeDoBetter: {
            title: 'Pune\'s Most Natural Filler Results',
            content: 'Our technique focuses on subtle enhancement that looks completely natural. We use only FDA-approved, premium fillers with the latest injection methods.',
            highlights: [
              'Only premium Juvederm and Restylane products',
              'Micro-cannula technique for minimal bruising',
              'Facial anatomy expertise for safe placement',
              'Reversible hyaluronic acid fillers only',
              'Immediate correction with long-lasting results',
              'Complimentary touch-ups within 2 weeks'
            ]
          }
        },
        { 
          name: 'Profhilo®', 
          description: 'Revolutionary bio-remodelling treatment for skin hydration and firmness',
          brand: 'IBSA Profhilo',
          howWeDoBetter: {
            title: 'Pune\'s First Certified Profhilo® Center',
            content: 'We\'re among the first clinics in Pune to offer authentic Profhilo® treatments with proper certification and training from IBSA.',
            highlights: [
              'Certified Profhilo® practitioners',
              'Authentic IBSA Profhilo® product guarantee',
              'Specialized injection technique for optimal spread',
              'Comprehensive skin assessment before treatment',
              'Combination protocols for enhanced results',
              'Post-treatment skin monitoring and care'
            ]
          }
        },
        { 
          name: 'Tear trough filler', 
          description: 'Reduce under-eye hollows and dark circles with specialized techniques',
          howWeDoBetter: {
            title: 'Safest Tear Trough Treatments in Pune',
            content: 'This delicate area requires exceptional skill. Dr. Sajid\'s specialized training in periorbital anatomy ensures safe, beautiful results.',
            highlights: [
              'Specialized training in periorbital injections',
              'Ultra-fine cannula technique for safety',
              'Comprehensive eye area assessment',
              'Minimal swelling and bruising protocols',
              'Natural-looking under-eye rejuvenation',
              'Emergency reversal protocols available'
            ]
          }
        },
        { 
          name: 'Lip filler', 
          description: 'Enhance lip volume and definition with natural-looking results',
          brand: 'Juvederm Volbella',
          howWeDoBetter: {
            title: 'Pune\'s Most Natural Lip Enhancement',
            content: 'Our lip enhancement philosophy focuses on your natural lip shape and proportions, creating beautiful, kissable lips that look authentically yours.',
            highlights: [
              'Golden ratio lip proportions analysis',
              'Specialized lip filler products (Volbella)',
              'Pain-free injection with dental blocks',
              'Gradual enhancement approach available',
              'Immediate shape correction possible',
              'Lip care protocol for optimal healing'
            ]
          }
        },
        { 
          name: 'Jawline filler', 
          description: 'Define and contour your jawline for a sculpted, masculine or feminine look',
          howWeDoBetter: {
            title: 'Pune\'s Premier Jawline Contouring',
            content: 'Our advanced understanding of facial anatomy allows us to create strong, defined jawlines that complement your overall facial structure.',
            highlights: [
              'Advanced facial anatomy knowledge',
              'Gender-specific contouring techniques',
              'High-density filler for structural support',
              'Immediate dramatic improvement',
              'Long-lasting results (12-18 months)',
              'Combination with other treatments available'
            ]
          }
        },
        { 
          name: 'Chin filler', 
          description: 'Improve chin projection and facial balance with precise enhancement',
          howWeDoBetter: {
            title: 'Perfect Facial Harmony Specialists',
            content: 'Chin enhancement requires understanding of facial proportions. We analyze your entire facial structure to create perfect balance and harmony.',
            highlights: [
              'Facial proportion analysis and planning',
              'Structural filler for lasting projection',
              'Immediate improvement in profile',
              'Combination with jawline for best results',
              'Minimal downtime and swelling',
              'Reversible if desired'
            ]
          }
        },
        { 
          name: 'Thread lift', 
          description: 'Non-surgical lifting for immediate results without downtime',
          brand: 'PDO & PLLA Threads',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Thread Lifting',
            content: 'We use the latest generation PDO and PLLA threads with specialized insertion techniques for maximum lift and natural results.',
            highlights: [
              'Latest generation PDO and PLLA threads',
              'Specialized thread insertion techniques',
              'Immediate lifting with continued improvement',
              'Minimal pain and downtime',
              'Collagen stimulation for long-term benefits',
              'Combination with other treatments possible'
            ]
          }
        },
        { 
          name: 'Skin Boosters', 
          description: 'Deep hydration and skin quality improvement from within',
          brand: 'Restylane Vital',
          howWeDoBetter: {
            title: 'Pune\'s Skin Quality Transformation Experts',
            content: 'Our skin booster protocols are customized based on detailed skin analysis, ensuring optimal hydration and quality improvement.',
            highlights: [
              'Customized injection depth and pattern',
              'Premium hyaluronic acid formulations',
              'Comprehensive skin analysis before treatment',
              'Gradual, natural improvement',
              'Suitable for all skin types',
              'Maintenance protocols for lasting results'
            ]
          }
        },
        { 
          name: 'Bot. Tox A inj.', 
          description: 'Smooth dynamic wrinkles and prevent aging with precision injections',
          brand: 'Allergan Botox',
          howWeDoBetter: {
            title: 'Pune\'s Most Precise Botox Treatments',
            content: 'Dr. Sajid\'s injection technique preserves natural expressions while effectively treating wrinkles. Only authentic Allergan Botox used.',
            highlights: [
              'Only authentic Allergan Botox guaranteed',
              'Precision injection for natural expressions',
              'Customized units based on muscle strength',
              'Preventive treatment protocols available',
              'Minimal pain with ice and topical anesthesia',
              'Results visible within 3-5 days'
            ]
          }
        }
      ]
    },
    'LASER': {
      icon: <Zap size={24} />,
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-600',
      image: 'https://images.pexels.com/photos/19239092/pexels-photo-19239092.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
      description: 'State-of-the-art laser treatments for various skin concerns',
      services: [
        { 
          name: 'Laser hair removal', 
          description: 'Permanent hair reduction with advanced diode laser technology',
          brand: 'Alma Soprano ICE',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Hair Removal Technology',
            content: 'Our Alma Soprano ICE technology provides pain-free, effective hair removal for all skin types with the fastest treatment times in Pune.',
            highlights: [
              'Latest Alma Soprano ICE Platinum technology',
              'Pain-free treatment with cooling system',
              'Effective on all skin types including tanned skin',
              'Fastest treatment times in Pune',
              '90%+ permanent hair reduction guaranteed',
              'Comprehensive package deals available'
            ]
          }
        },
        { 
          name: 'Laser tattoo removal', 
          description: 'Safe and effective tattoo removal with Q-switched laser technology',
          brand: 'Q-Switch Nd:YAG',
          howWeDoBetter: {
            title: 'Pune\'s Safest Tattoo Removal Specialists',
            content: 'Our Q-switched laser technology safely removes tattoos of all colors with minimal scarring and maximum effectiveness.',
            highlights: [
              'Advanced Q-switched Nd:YAG laser',
              'Effective on all tattoo colors',
              'Minimal scarring and side effects',
              'Customized treatment protocols',
              'Proper aftercare and healing support',
              'Realistic timeline and expectation setting'
            ]
          }
        },
        { 
          name: 'Laser Toning', 
          description: 'Improve skin texture and reduce pigmentation with gentle laser treatment',
          brand: 'Q-Switch Laser',
          howWeDoBetter: {
            title: 'Pune\'s Gentlest Pigmentation Treatment',
            content: 'Our laser toning protocols are designed for Indian skin types, providing effective pigmentation reduction without irritation.',
            highlights: [
              'Specialized protocols for Indian skin',
              'Gentle, no-downtime treatment',
              'Effective for melasma and sun damage',
              'Gradual, natural improvement',
              'Combination with other treatments',
              'Maintenance protocols available'
            ]
          }
        },
        { 
          name: 'Q-Spot', 
          description: 'Targeted treatment for age spots and localized pigmentation',
          howWeDoBetter: {
            title: 'Precision Spot Treatment Experts',
            content: 'Our Q-spot treatments target specific pigmented lesions with precision, ensuring surrounding skin remains unaffected.',
            highlights: [
              'Precision targeting of pigmented spots',
              'Minimal damage to surrounding skin',
              'Immediate visible improvement',
              'Suitable for face and body',
              'Quick treatment sessions',
              'Excellent safety profile'
            ]
          }
        }
      ]
    },
    'SKIN': {
      icon: <Heart size={24} />,
      color: 'from-green-500 to-emerald-400',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-600',
      image: 'https://images.pexels.com/photos/14996840/pexels-photo-14996840.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
      description: 'Comprehensive skin treatments for healthy, glowing complexion',
      services: [
              { 
          name: 'Brightenol Z', 
          description: 'Advanced brightening treatment for glass like skin',
          howWeDoBetter: {
            title: 'Pune\'s Ultimate Skin Brightening Breakthrough',
            content: 'Experience what A-listers, brides, and grooms swear by. Brightenol Z isn’t just another facial — it’s a one-time, skin-transforming phenomenon.',
            highlights: [
              'Latest brightening technology',
              'Safe for all skin types',
              'Glass-like skin in just one session',
              'The go-to glow-up for celebrities & weddings',
              'Combination with other treatments',
              'Seamless. Show-stopping'
            ]
          }
        },
        { 
          name: 'HydraFacial', 
          description: 'Multi-step treatment for instant glow and deep hydration',
          brand: 'HydraFacial MD',
          howWeDoBetter: {
            title: 'Pune\'s Premier HydraFacial Experience',
            content: 'Our HydraFacial treatments are customized with premium serums and boosters, providing the most comprehensive facial experience in Pune.',
            highlights: [
              'Authentic HydraFacial MD equipment',
              'Customized serums for your skin type',
              'Premium boosters (Growth Factors, Britenol)',
              'Immediate visible results',
              'No downtime required',
              'Monthly maintenance packages available'
            ]
          }
        },
        { 
          name: 'Vampire Facial', 
          description: 'PRP treatment combined with microneedling for natural rejuvenation',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced PRP Facial',
            content: 'Our vampire facial combines the highest quality PRP extraction with precision microneedling for maximum regenerative benefits.',
            highlights: [
              'Advanced PRP extraction and concentration',
              'Sterile processing in controlled environment',
              'Combination with microneedling for enhanced results',
              'Natural collagen stimulation',
              'Suitable for all skin types',
              'Series treatments for optimal results'
            ]
          }
        },
        { 
          name: 'Microneedling Skin tightening', 
          description: 'Stimulate collagen production for firmer, smoother skin',
          brand: 'Dermapen 4',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Microneedling',
            content: 'Our Dermapen 4 technology provides the most precise and effective microneedling treatment with customizable depth and speed.',
            highlights: [
              'Latest Dermapen 4 technology',
              'Customizable needle depth and speed',
              'Sterile, single-use needle cartridges',
              'Combination with growth factors',
              'Minimal downtime and discomfort',
              'Progressive improvement over time'
            ]
          }
        },
        { 
          name: 'Chemical peels', 
          description: 'Professional-grade peels for skin renewal and texture improvement',
          brand: 'Medical Grade Peels',
          howWeDoBetter: {
            title: 'Pune\'s Safest Chemical Peel Specialists',
            content: 'Our chemical peel protocols are customized for Indian skin types with proper pre and post-treatment care for optimal results.',
            highlights: [
              'Medical-grade peel formulations',
              'Customized for Indian skin types',
              'Comprehensive pre-treatment preparation',
              'Proper neutralization and aftercare',
              'Progressive peel protocols available',
              'Combination with other treatments'
            ]
          }
        },
        { 
          name: 'Fountain of Youth', 
          description: 'Comprehensive anti-aging facial combining multiple modalities',
          howWeDoBetter: {
            title: 'Pune\'s Most Comprehensive Anti-Aging Facial',
            content: 'Our signature Fountain of Youth treatment combines the best of multiple technologies for comprehensive skin rejuvenation.',
            highlights: [
              'Combination of multiple treatment modalities',
              'Customized based on skin analysis',
              'Immediate and long-term benefits',
              'Luxurious spa-like experience',
              'Professional-grade products only',
              'Maintenance protocols for lasting results'
            ]
          }
        },
        { 
          name: 'Polishing Brightening', 
          description: 'Advanced exfoliation and brightening for radiant skin',
          howWeDoBetter: {
            title: 'Pune\'s Most Effective Brightening Treatment',
            content: 'Our polishing and brightening protocols use medical-grade ingredients to safely lighten and brighten all skin types.',
            highlights: [
              'Medical-grade brightening agents',
              'Safe for all skin types including sensitive',
              'Immediate glow and radiance',
              'Progressive lightening over time',
              'Combination with other treatments',
              'Home care products included'
            ]
          }
        },
        { 
          name: 'Skin analysis and assessment', 
          description: 'Comprehensive skin evaluation using advanced diagnostic tools',
          brand: 'VISIA Skin Analysis',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Skin Analysis',
            content: 'Our VISIA skin analysis system provides the most comprehensive skin assessment, allowing for truly personalized treatment plans.',
            highlights: [
              'Advanced VISIA skin analysis system',
              'Comprehensive skin health assessment',
              'UV damage and pore analysis',
              'Personalized treatment recommendations',
              'Progress tracking over time',
              'Detailed skin health reports'
            ]
          }
        },
        { 
          name: 'Microderm abrasion', 
          description: 'Gentle mechanical exfoliation for smoother skin texture',
          howWeDoBetter: {
            title: 'Pune\'s Gentlest Microdermabrasion',
            content: 'Our microdermabrasion technique is customized for Indian skin types, providing effective exfoliation without irritation.',
            highlights: [
              'Customized pressure and technique',
              'Suitable for sensitive Indian skin',
              'Immediate texture improvement',
              'No downtime required',
              'Combination with other treatments',
              'Regular maintenance protocols'
            ]
          }
        },
        { 
          name: 'Carbon Facial', 
          description: 'Deep pore cleansing and oil control with carbon laser treatment',
          howWeDoBetter: {
            title: 'Pune\'s Most Effective Pore Treatment',
            content: 'Our carbon facial treatment provides the deepest pore cleansing available, perfect for oily and acne-prone skin.',
            highlights: [
              'Medical-grade carbon lotion',
              'Deep pore cleansing and oil control',
              'Immediate pore size reduction',
              'Suitable for oily and acne-prone skin',
              'No downtime required',
              'Monthly treatments recommended'
            ]
          }
        },
        { 
          name: 'Cosmelan', 
          description: 'Professional depigmentation treatment for stubborn pigmentation',
          brand: 'Cosmelan Professional',
          howWeDoBetter: {
            title: 'Pune\'s Certified Cosmelan Specialists',
            content: 'We\'re certified Cosmelan specialists, providing the most effective treatment for stubborn melasma and pigmentation.',
            highlights: [
              'Certified Cosmelan treatment center',
              'Effective for stubborn melasma',
              'Comprehensive treatment protocol',
              'Proper home care guidance',
              'Regular monitoring and adjustments',
              'Long-term maintenance plans'
            ]
          }
        },
        { 
          name: 'Brite Express', 
          description: 'Quick brightening treatment for instant glow',
          howWeDoBetter: {
            title: 'Pune\'s Fastest Glow Treatment',
            content: 'Our Brite Express treatment provides immediate brightening and glow, perfect for special events or regular maintenance.',
            highlights: [
              'Immediate brightening results',
              'Quick 30-minute treatment',
              'Perfect for special events',
              'No downtime required',
              'Suitable for all skin types',
              'Can be done regularly'
            ]
          }
        },
        { 
          name: 'Back Peel', 
          description: 'Specialized chemical peel treatment for back acne and texture issues',
          howWeDoBetter: {
            title: 'Pune\'s Only Specialized Back Treatment',
            content: 'We\'re the only clinic in Pune offering specialized back peel treatments for acne and texture issues on the back and shoulders.',
            highlights: [
              'Specialized back treatment protocols',
              'Effective for back acne and scarring',
              'Large area treatment capability',
              'Customized peel strength',
              'Proper aftercare guidance',
              'Series treatments for best results'
            ]
          }
        }
      ]
    },
    'DERMATOLOGY': {
      icon: <Stethoscope size={24} />,
      color: 'from-purple-500 to-violet-400',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-600',
      image: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg',
      description: 'Medical dermatology treatments for various skin conditions',
      services: [
        { 
          name: 'Laser resurfacing', 
          description: 'Advanced fractional laser treatment for skin renewal',
          brand: 'Fractional CO2 Laser',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Laser Resurfacing',
            content: 'Our fractional CO2 laser provides the most effective skin resurfacing with minimal downtime and maximum safety.',
            highlights: [
              'Latest fractional CO2 laser technology',
              'Customizable treatment depth',
              'Minimal downtime protocols',
              'Effective for scars and wrinkles',
              'Comprehensive aftercare support',
              'Progressive improvement over months'
            ]
          }
        },
        { 
          name: 'Milia removal', 
          description: 'Safe and effective removal of small white bumps',
          howWeDoBetter: {
            title: 'Pune\'s Gentlest Milia Removal',
            content: 'Our milia removal technique is gentle and effective, ensuring no scarring or damage to surrounding skin.',
            highlights: [
              'Gentle extraction techniques',
              'No scarring or damage',
              'Immediate results',
              'Sterile procedure protocols',
              'Prevention advice included',
              'Follow-up care provided'
            ]
          }
        },
        { 
          name: 'Mole removal', 
          description: 'Professional mole assessment and safe removal',
          howWeDoBetter: {
            title: 'Pune\'s Safest Mole Removal Specialists',
            content: 'Dr. Sajid\'s dermatological expertise ensures proper mole assessment and safe removal with minimal scarring.',
            highlights: [
              'Comprehensive mole assessment',
              'Dermoscopy evaluation',
              'Safe surgical removal techniques',
              'Minimal scarring protocols',
              'Histopathology when required',
              'Post-removal care and monitoring'
            ]
          }
        },
        { 
          name: 'Pigmentation treatment', 
          description: 'Comprehensive treatment for various pigmentation disorders',
          howWeDoBetter: {
            title: 'Pune\'s Pigmentation Treatment Experts',
            content: 'Our comprehensive approach to pigmentation combines multiple modalities for the most effective treatment of all types of pigmentation.',
            highlights: [
              'Comprehensive pigmentation assessment',
              'Multiple treatment modalities available',
              'Customized treatment protocols',
              'Effective for all pigmentation types',
              'Long-term maintenance plans',
              'Prevention strategies included'
            ]
          }
        },
        { 
          name: 'Skin tag removal', 
          description: 'Quick and painless removal of skin tags',
          howWeDoBetter: {
            title: 'Pune\'s Most Comfortable Skin Tag Removal',
            content: 'Our skin tag removal is quick, painless, and leaves no scarring, with immediate results and proper aftercare.',
            highlights: [
              'Quick and painless procedure',
              'No scarring or marks',
              'Immediate results',
              'Multiple removal techniques available',
              'Proper aftercare guidance',
              'Prevention advice included'
            ]
          }
        },
        { 
          name: 'Wart and verruca removal', 
          description: 'Effective treatment for warts and verrucas using multiple modalities',
          howWeDoBetter: {
            title: 'Pune\'s Most Effective Wart Treatment',
            content: 'Our multi-modal approach to wart removal ensures the highest success rates with minimal recurrence.',
            highlights: [
              'Multiple treatment modalities',
              'High success rates',
              'Minimal recurrence',
              'Customized treatment approach',
              'Proper follow-up care',
              'Prevention strategies included'
            ]
          }
        },
        { 
          name: 'Xanthelasma Removal', 
          description: 'Safe removal of cholesterol deposits around the eyes',
          howWeDoBetter: {
            title: 'Pune\'s Safest Xanthelasma Treatment',
            content: 'Our specialized technique for xanthelasma removal ensures complete removal with minimal risk of scarring around the delicate eye area.',
            highlights: [
              'Specialized periorbital techniques',
              'Complete removal with minimal scarring',
              'Safe for delicate eye area',
              'Immediate results',
              'Proper wound care protocols',
              'Recurrence prevention advice'
            ]
          }
        },
        { 
          name: 'Ear lobe repair', 
          description: 'Reconstruction of torn or stretched earlobes',
          howWeDoBetter: {
            title: 'Pune\'s Best Earlobe Reconstruction',
            content: 'Our earlobe repair technique restores natural shape and allows for re-piercing, with excellent cosmetic results.',
            highlights: [
              'Natural shape restoration',
              'Re-piercing possible after healing',
              'Excellent cosmetic results',
              'Minimal scarring',
              'Proper surgical techniques',
              'Comprehensive aftercare'
            ]
          }
        }
      ]
    },
    'ACNE': {
      icon: <Droplets size={24} />,
      color: 'from-orange-500 to-amber-400',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-600',
      image: 'https://images.pexels.com/photos/6476077/pexels-photo-6476077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
      description: 'Comprehensive acne treatment and scar reduction solutions',
      services: [
        { 
          name: 'Acne scar treatment', 
          description: 'Advanced treatments to reduce and eliminate acne scarring',
          brand: 'Fractional Laser + Microneedling',
          howWeDoBetter: {
            title: 'Pune\'s Most Effective Acne Scar Treatment',
            content: 'Our combination approach using fractional laser, microneedling, and PRP provides the most effective acne scar reduction available.',
            highlights: [
              'Combination of multiple proven modalities',
              'Customized treatment based on scar type',
              'Significant improvement in texture',
              'Minimal downtime protocols',
              'Progressive improvement over time',
              'Maintenance protocols for lasting results'
            ]
          }
        },
        { 
          name: 'Active acne treatment', 
          description: 'Comprehensive management and treatment of active acne',
          howWeDoBetter: {
            title: 'Pune\'s Most Comprehensive Acne Treatment',
            content: 'Our multi-modal approach addresses all aspects of acne, from prevention to treatment, ensuring clear skin and preventing scarring.',
            highlights: [
              'Comprehensive acne assessment',
              'Multi-modal treatment approach',
              'Prevention of new breakouts',
              'Scar prevention protocols',
              'Customized skincare regimens',
              'Long-term maintenance plans'
            ]
          }
        },
        { 
          name: 'Acne spot reduction', 
          description: 'Targeted treatment for individual acne lesions',
          howWeDoBetter: {
            title: 'Pune\'s Fastest Acne Spot Treatment',
            content: 'Our targeted spot treatments provide rapid resolution of individual acne lesions with minimal inflammation.',
            highlights: [
              'Rapid lesion resolution',
              'Targeted treatment approach',
              'Minimal inflammation',
              'Prevention of scarring',
              'Immediate improvement',
              'Safe for all skin types'
            ]
          }
        },
        { 
          name: 'Radiance Blue Light Therapy', 
          description: 'Blue light therapy for acne-causing bacteria elimination',
          brand: 'Medical Grade LED',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Light Therapy',
            content: 'Our medical-grade blue light therapy provides the most effective bacterial elimination with no side effects.',
            highlights: [
              'Medical-grade LED technology',
              'Effective bacterial elimination',
              'No side effects or downtime',
              'Suitable for all skin types',
              'Can be combined with other treatments',
              'Regular sessions for best results'
            ]
          }
        },
        { 
          name: 'Acne lan', 
          description: 'Specialized acne treatment protocol for severe cases',
          howWeDoBetter: {
            title: 'Pune\'s Specialized Severe Acne Protocol',
            content: 'Our Acne lan protocol is designed for severe, treatment-resistant acne cases, providing comprehensive management.',
            highlights: [
              'Specialized protocol for severe acne',
              'Comprehensive treatment approach',
              'Effective for treatment-resistant cases',
              'Customized medication protocols',
              'Regular monitoring and adjustments',
              'Long-term management plans'
            ]
          }
        },
        { 
          name: 'LED therapy', 
          description: 'Multi-wavelength LED therapy for acne and healing',
          howWeDoBetter: {
            title: 'Pune\'s Most Comprehensive LED Therapy',
            content: 'Our multi-wavelength LED therapy addresses acne, inflammation, and healing simultaneously for optimal results.',
            highlights: [
              'Multi-wavelength LED technology',
              'Addresses multiple skin concerns',
              'Anti-inflammatory effects',
              'Promotes healing and regeneration',
              'No side effects or downtime',
              'Can be combined with other treatments'
            ]
          }
        },
        { 
          name: 'TCA back acne treatment', 
          description: 'Specialized chemical peel for back and body acne',
          howWeDoBetter: {
            title: 'Pune\'s Only Specialized Back Acne Treatment',
            content: 'We\'re the only clinic offering specialized TCA peels for back acne, providing effective treatment for this challenging condition.',
            highlights: [
              'Specialized back acne protocols',
              'Effective TCA peel formulations',
              'Large area treatment capability',
              'Significant improvement in texture',
              'Proper aftercare for body areas',
              'Series treatments for best results'
            ]
          }
        }
      ]
    },
    'SKIN RESET': {
      icon: <RotateCcw size={24} />,
      color: 'from-teal-500 to-cyan-400',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      textColor: 'text-teal-600',
      image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg',
      description: 'Advanced skin renewal and regeneration treatments',
      services: [
        { 
          name: 'Morpheus 8', 
          description: 'Fractional radiofrequency for deep skin remodeling',
          brand: 'InMode Morpheus8',
          howWeDoBetter: {
            title: 'Pune\'s First Morpheus8 Treatment Center',
            content: 'We\'re among the first in Pune to offer authentic Morpheus8 treatments, providing the most advanced skin remodeling available.',
            highlights: [
              'Authentic InMode Morpheus8 technology',
              'Deep skin remodeling capabilities',
              'Customizable treatment depth',
              'Effective for all skin types',
              'Minimal downtime protocols',
              'Progressive improvement over months'
            ]
          }
        },
        { 
          name: 'Dermapen 4', 
          description: 'Latest generation microneedling for skin rejuvenation',
          brand: 'Dermapen 4',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Microneedling',
            content: 'Our Dermapen 4 represents the latest in microneedling technology, providing the most effective and comfortable treatment.',
            highlights: [
              'Latest Dermapen 4 technology',
              'Most advanced microneedling available',
              'Customizable depth and speed',
              'Minimal discomfort and downtime',
              'Combination with growth factors',
              'Progressive skin improvement'
            ]
          }
        },
        { 
          name: 'Exosomes', 
          description: 'Cutting-edge regenerative therapy for skin renewal',
          brand: 'ExoCoBio',
          howWeDoBetter: {
            title: 'Pune\'s First Exosome Therapy Center',
            content: 'We\'re the first in Pune to offer authentic exosome therapy, representing the future of regenerative skin treatment.',
            highlights: [
              'Authentic ExoCoBio exosome therapy',
              'Cutting-edge regenerative technology',
              'Significant skin renewal effects',
              'Suitable for all skin types',
              'Combination with other treatments',
              'Long-lasting regenerative benefits'
            ]
          }
        },
        { 
          name: 'Mesotherapy', 
          description: 'Targeted nutrient delivery for skin rejuvenation',
          howWeDoBetter: {
            title: 'Pune\'s Most Comprehensive Mesotherapy',
            content: 'Our mesotherapy protocols use the highest quality ingredients with precise injection techniques for optimal results.',
            highlights: [
              'Highest quality mesotherapy cocktails',
              'Customized nutrient combinations',
              'Precise injection techniques',
              'Immediate and long-term benefits',
              'Suitable for face and body',
              'Regular maintenance protocols'
            ]
          }
        },
        { 
          name: 'Advanced Skin Boosters', 
          description: 'Premium skin boosters for deep hydration and quality improvement',
          brand: 'Profhilo & Restylane Vital',
          howWeDoBetter: {
            title: 'Pune\'s Premium Skin Booster Specialists',
            content: 'Our advanced skin booster treatments use only premium products with specialized injection techniques for maximum benefit.',
            highlights: [
              'Premium skin booster products only',
              'Specialized injection techniques',
              'Deep hydration and quality improvement',
              'Natural, gradual enhancement',
              'Suitable for all ages',
              'Maintenance protocols for lasting results'
            ]
          }
        }
      ]
    },
    'HAIR': {
      icon: <Waves size={24} />,
      color: 'from-indigo-500 to-blue-400',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-600',
      image: 'https://images.pexels.com/photos/20845681/pexels-photo-20845681.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920',
      description: 'Comprehensive hair restoration and scalp treatments',
      services: [
        { 
          name: 'ZAYN signature FUE Hair Transplant', 
          description: 'Custom hair transplant with international standards and exclusive design',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Hair Transplant',
            content: 'Dr. Sajid\'s exclusive FUE technique with international-grade instruments and custom hairline design sets us apart as Pune\'s premier hair transplant center.',
            highlights: [
              'Dr. Sajid\'s exclusive hairline design',
              'International-grade instruments from Barcelona/USA',
              'Custom FUE technique for each patient',
              'Grafts stored in fortified growth solution',
              'Future-proof design (looks natural after 10-15 years)',
              'Laser-assisted hairline mapping'
            ]
          }
        },
        { 
          name: 'PRP Hair Therapy', 
          description: 'Platelet-rich plasma therapy for natural hair growth stimulation',
          howWeDoBetter: {
            title: 'Pune\'s Most Effective PRP Hair Treatment',
            content: 'Our advanced PRP processing and injection techniques provide the highest concentration of growth factors for maximum hair growth stimulation.',
            highlights: [
              'Advanced PRP processing techniques',
              'Highest growth factor concentration',
              'Sterile processing protocols',
              'Customized injection patterns',
              'Combination with other treatments',
              'Series treatments for optimal results'
            ]
          }
        },
        { 
          name: 'GFC - Growth Factor Concentrate', 
          description: 'Advanced growth factor therapy for hair restoration',
          howWeDoBetter: {
            title: 'Pune\'s Most Advanced Growth Factor Therapy',
            content: 'Our GFC therapy provides concentrated growth factors for superior hair growth stimulation compared to traditional PRP.',
            highlights: [
              'Higher growth factor concentration than PRP',
              'Advanced processing technology',
              'Superior hair growth stimulation',
              'Suitable for all hair loss stages',
              'Minimal discomfort and downtime',
              'Progressive improvement over time'
            ]
          }
        },
        { 
          name: 'Hair Exosomes', 
          description: 'Cutting-edge exosome therapy for hair follicle regeneration',
          brand: 'ExoCoBio',
          howWeDoBetter: {
            title: 'Pune\'s First Hair Exosome Therapy',
            content: 'We\'re the first in Pune to offer exosome therapy for hair restoration, representing the most advanced regenerative treatment available.',
            highlights: [
              'First exosome therapy for hair in Pune',
              'Most advanced regenerative treatment',
              'Significant follicle regeneration',
              'Suitable for all hair loss types',
              'Combination with other treatments',
              'Long-lasting regenerative effects'
            ]
          }
        },
        { 
          name: 'Rapid rescue therapy', 
          description: 'Emergency treatment for sudden or severe hair loss',
          howWeDoBetter: {
            title: 'Pune\'s Emergency Hair Loss Specialists',
            content: 'Our rapid rescue protocol provides immediate intervention for sudden hair loss, preventing further loss and promoting recovery.',
            highlights: [
              'Emergency hair loss intervention',
              'Immediate treatment protocols',
              'Prevention of further hair loss',
              'Rapid recovery promotion',
              'Comprehensive assessment and treatment',
              'Follow-up care and monitoring'
            ]
          }
        },
        { 
          name: 'Regenera Activa', 
          description: 'Autologous cell therapy for natural hair regeneration',
          brand: 'Regenera Activa',
          howWeDoBetter: {
            title: 'Pune\'s Only Regenera Activa Center',
            content: 'We\'re the only clinic in Pune offering authentic Regenera Activa treatment, providing natural hair regeneration using your own cells.',
            highlights: [
              'Only authentic Regenera Activa in Pune',
              'Uses your own regenerative cells',
              'Natural hair regeneration process',
              'Single-session treatment',
              'No foreign substances used',
              'Long-lasting natural results'
            ]
          }
        },
        { 
          name: 'Scalp Peels', 
          description: 'Deep cleansing and exfoliation for optimal scalp health',
          howWeDoBetter: {
            title: 'Pune\'s Specialized Scalp Treatment',
            content: 'Our scalp peel treatments are specifically designed for scalp health, removing buildup and creating optimal conditions for hair growth.',
            highlights: [
              'Specialized scalp peel formulations',
              'Deep cleansing and exfoliation',
              'Optimal scalp health promotion',
              'Improved hair growth environment',
              'Customized for different scalp types',
              'Regular maintenance protocols'
            ]
          }
        },
        { 
          name: 'Dandruff / Seborrheic dermatitis treatment', 
          description: 'Comprehensive treatment for scalp conditions',
          howWeDoBetter: {
            title: 'Pune\'s Scalp Condition Specialists',
            content: 'Our comprehensive approach to scalp conditions addresses root causes and provides long-term management for healthy scalp.',
            highlights: [
              'Comprehensive scalp condition assessment',
              'Root cause identification and treatment',
              'Long-term management protocols',
              'Customized treatment approaches',
              'Prevention strategies included',
              'Regular monitoring and adjustments'
            ]
          }
        },
        { 
          name: 'Microneedling mesotherapy', 
          description: 'Enhanced nutrient delivery to hair follicles',
          howWeDoBetter: {
            title: 'Pune\'s Most Effective Hair Mesotherapy',
            content: 'Our combination of microneedling with mesotherapy provides the most effective nutrient delivery to hair follicles.',
            highlights: [
              'Enhanced nutrient delivery system',
              'Combination of microneedling and mesotherapy',
              'Maximum follicle penetration',
              'Customized nutrient cocktails',
              'Minimal discomfort and downtime',
              'Progressive hair improvement'
            ]
          }
        },
        { 
          name: 'Scalp Micropigmentation', 
          description: 'Advanced scalp tattooing for hair density appearance',
          howWeDoBetter: {
            title: 'Pune\'s Most Natural Scalp Micropigmentation',
            content: 'Our scalp micropigmentation technique creates the most natural-looking hair density appearance with proper color matching and technique.',
            highlights: [
              'Most natural-looking results',
              'Proper color matching techniques',
              'Advanced pigmentation technology',
              'Suitable for all hair loss stages',
              'Immediate density appearance',
              'Long-lasting results with touch-ups'
            ]
          }
        }
      ]
    }
  };

  return (
    <div className="bg-[#faf6f2] min-h-screen">
      <Navigation variant="clinic" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link
              to="/best-dermatologist-in-pune"
              className="inline-flex items-center text-clinic-accent hover:text-gold transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Clinic
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-cormorant font-light text-clinic-accent mb-6 leading-tight">
              Our Premium Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover our comprehensive range of advanced aesthetic and medical treatments, 
              each designed to deliver exceptional results with the highest standards of care.
            </p>
            
            {/* Skin Analyzer Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-gold/10 to-clinic-accent/10 rounded-2xl p-6 mb-12 border border-gold/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Microscope className="text-gold mr-3" size={28} />
                <h2 className="text-2xl font-cormorant font-medium text-clinic-accent">
                  SKIN ANALYSER
                </h2>
              </div>
              <p className="text-lg text-gray-700">
                Customised skin treatments based on comprehensive skin analysis
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([category, data]) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  activeCategory === category
                    ? `${data.borderColor} ${data.bgColor} ${data.textColor}`
                    : 'border-gray-200 bg-white text-gray-600 hover:border-clinic-accent hover:text-clinic-accent'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{data.icon}</span>
                <span className="font-medium">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Category Content */}
      <section className="pb-20">
        <div className="container-custom">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Category Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${serviceCategories[activeCategory].color} text-white mr-4`}>
                    {serviceCategories[activeCategory].icon}
                  </div>
                  <h2 className="text-4xl font-cormorant font-light text-clinic-accent">
                    {activeCategory}
                  </h2>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {serviceCategories[activeCategory].description}
                </p>
                <Button 
                  href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                  variant="clinic"
                  className="inline-flex items-center"
                >
                  Book Consultation
                </Button>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={serviceCategories[activeCategory].image}
                  alt={activeCategory}
                  className="rounded-2xl shadow-luxury w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </motion.div>
            </div>

            {/* Services with Dropdowns */}
            <div className="space-y-6">
              {serviceCategories[activeCategory].services.map((service, index) => (
                <ServiceDropdown
                  key={service.name}
                  service={service}
                  variant="clinic"
                  isOpen={openDropdowns[service.name] || false}
                  onToggle={() => toggleDropdown(service.name)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-cormorant font-light text-clinic-accent mb-6">
              Ready to Begin Your Transformation?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our expert team is ready to create a personalized treatment plan tailored to your unique needs and goals. 
              Schedule your consultation today and discover the ZAYN difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="https://www.practo.com/pune/clinic/zayn-skin-hair-and-laser-clinic-camp/overview"
                variant="clinic"
                className="inline-flex items-center text-lg px-8 py-4"
              >
                Book Consultation
              </Button>
              <Button
                to="/best-dermatologist-in-pune"
                variant="gold"
                className="inline-flex items-center text-lg px-8 py-4"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer variant="clinic" />
    </div>
  );
};

export default Services;