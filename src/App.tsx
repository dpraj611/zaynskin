import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DermatologyClinic from './pages/DermatologyClinic';
import WellnessLounge from './pages/WellnessLounge';
import Services from './pages/Services';
import EMSculpt from './pages/services/EMSculpt';
import Emsella from './pages/services/Emsella';
import InfraredSauna from './pages/services/InfraredSauna';
import IVTherapy from './pages/services/IVTherapy';
import HIFU from './pages/services/HIFU';
import HydraFacial from './pages/services/HydraFacial';
import HairTransplant from './pages/services/HairTransplant';
import ModernHairRestoration from './pages/blog/ModernHairRestoration';
import ScienceOfChemicalPeels from './pages/blog/ScienceOfChemicalPeels';
import CombiningTreatmentsGuide from './pages/blog/CombiningTreatmentsGuide';
import ScienceOfWellnessTechnology from './pages/blog/ScienceOfWellnessTechnology';
import InfraredSaunaHealthBenefits from './pages/blog/InfraredSaunaHealthBenefits';
import PersonalizedIVTherapyGuide from './pages/blog/PersonalizedIVTherapyGuide';
import FatLossTreatmentGuide2026 from './pages/blog/FatLossTreatmentGuide2026';
import WellnessLoungePune2026 from './pages/blog/WellnessLoungePune2026';
import NonSurgicalWeightLoss2026 from './pages/blog/NonSurgicalWeightLoss2026';
import ChoosingWellnessLounge2026 from './pages/blog/ChoosingWellnessLounge2026';
import EmsculptTreatmentPlan from './pages/blog/EmsculptTreatmentPlan';
import BestHairTreatmentPune from './pages/blog/BestHairTreatmentPune';
import TopFatLossTreatment from './pages/blog/TopFatLossTreatment';
import EmsculptTreatmentPune from './pages/blog/EmsculptTreatmentPune';
import EmsellaTreatmentSafety from './pages/blog/EmsellaTreatmentSafety';
import HairTransplantClinicPune from './pages/blog/HairTransplantClinicPune';
import HairRegrowthVsTransplant from './pages/blog/HairRegrowthVsTransplant';
import BestSkinClinicPune from './pages/blog/BestSkinClinicPune';
import LaserHairRemovalPune from './pages/blog/LaserHairRemovalPune';
import WeightLossClinicPune from './pages/blog/WeightLossClinicPune';
import InfraredSaunaBenefits from './pages/blog/InfraredSaunaBenefits';
import BestFatLossTreatmentPune from './pages/blog/BestFatLossTreatmentPune';
import HairGrowthSpecialistPune from './pages/blog/HairGrowthSpecialistPune';
import BestSkinTreatmentPune from './pages/blog/BestSkinTreatmentPune';
import HairRestorationCaseStudy from './pages/blog/HairRestorationCaseStudy';
import ClearSkinCaseStudy from './pages/blog/ClearSkinCaseStudy';
import SkinTreatmentCaseStudy from './pages/blog/SkinTreatmentCaseStudy';
import LaserHairRemovalCaseStudy from './pages/blog/LaserHairRemovalCaseStudy';
import HairTransplantCaseStudy from './pages/blog/HairTransplantCaseStudy';
import BestHairTransplantPune from './pages/blog/BestHairTransplantPune';
import SkinTreatmentPuneCaseStudy from './pages/blog/SkinTreatmentPuneCaseStudy';
import LaserHairRemovalVsWaxing from './pages/blog/LaserHairRemovalVsWaxing';
import BestHairLossTreatmentPune from './pages/blog/BestHairLossTreatmentPune';
import BestHairLossSolutions from './pages/blog/BestHairLossSolutions';
import ChoosingRightSkinClinic from './pages/blog/ChoosingRightSkinClinic';
import AcneAndAcneScarSolutions from './pages/blog/AcneAndAcneScarSolutions';
import HairLossTreatmentPuneRegrowth from './pages/blog/HairLossTreatmentPuneRegrowth';
import ChoosingBestHairLossTreatment from './pages/blog/ChoosingBestHairLossTreatment';
import HairRegrowthYoungAdults from './pages/blog/HairRegrowthYoungAdults';
import WeightLossCaseStudy from './pages/blog/WeightLossCaseStudy';
import FueHairTransplantCaseStudy from './pages/blog/FueHairTransplantCaseStudy';
import WeightLoss from './pages/WeightLoss';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/best-dermatologist-in-pune" element={<DermatologyClinic />} />
      <Route path="/wellness" element={<WellnessLounge />} />
      <Route path="/weight-loss-clinic-in-pune" element={<WeightLoss />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/emsculpt" element={<EMSculpt />} />
      <Route path="/services/emsella" element={<Emsella />} />
      <Route path="/services/infrared-sauna" element={<InfraredSauna />} />
      <Route path="/services/iv-therapy" element={<IVTherapy />} />
      <Route path="/services/hifu" element={<HIFU />} />
      <Route path="/services/hydrafacial" element={<HydraFacial />} />
      <Route path="/services/hair-transplant-in-pune" element={<HairTransplant />} />
      <Route path="/blog/modern-hair-restoration-techniques" element={<ModernHairRestoration />} />
      <Route path="/blog/skin-treatment-pune-chemical-peels" element={<ScienceOfChemicalPeels />} />
      <Route path="/blog/face-treatment-pune-combination-guide" element={<CombiningTreatmentsGuide />} />
      <Route path="/blog/skin-care-clinic-pune-technology" element={<ScienceOfWellnessTechnology />} />
      <Route path="/blog/infrared-sauna-skin-clinic-pune" element={<InfraredSaunaHealthBenefits />} />
      <Route path="/blog/personalized-iv-therapy-guide" element={<PersonalizedIVTherapyGuide />} />
      <Route path="/blog/fat-loss-treatment-guide-2026" element={<FatLossTreatmentGuide2026 />} />
      <Route path="/blog/wellness-lounge-pune-2026" element={<WellnessLoungePune2026 />} />
      <Route path="/blog/non-surgical-weight-loss-2026" element={<NonSurgicalWeightLoss2026 />} />
      <Route path="/blog/choosing-wellness-lounge-2026" element={<ChoosingWellnessLounge2026 />} />
      <Route path="/blog/emsculpt-treatment-plan-results" element={<EmsculptTreatmentPlan />} />
      <Route path="/blog/best-hair-treatment-pune" element={<BestHairTreatmentPune />} />
      <Route path="/blog/top-fat-loss-treatment-options" element={<TopFatLossTreatment />} />
      <Route path="/blog/emsculpt-treatment-pune" element={<EmsculptTreatmentPune />} />
      <Route path="/blog/emsella-treatment-safety-guide" element={<EmsellaTreatmentSafety />} />
      <Route path="/blog/hair-transplant-clinic-pune" element={<HairTransplantClinicPune />} />
      <Route path="/blog/hair-regrowth-vs-transplant" element={<HairRegrowthVsTransplant />} />
      <Route path="/blog/best-skin-clinic-pune-2026" element={<BestSkinClinicPune />} />
      <Route path="/blog/laser-hair-removal-pune-sessions" element={<LaserHairRemovalPune />} />
      <Route path="/blog/weight-loss-clinic-pune-2026" element={<WeightLossClinicPune />} />
      <Route path="/blog/infrared-sauna-benefits" element={<InfraredSaunaBenefits />} />
      <Route path="/blog/best-fat-loss-treatment-pune-2026" element={<BestFatLossTreatmentPune />} />
      <Route path="/blog/hair-growth-specialist-pune" element={<HairGrowthSpecialistPune />} />
      <Route path="/blog/best-skin-treatment-pune" element={<BestSkinTreatmentPune />} />
      <Route path="/blog/hair-restoration-case-study" element={<HairRestorationCaseStudy />} />
      <Route path="/blog/clear-skin-case-study" element={<ClearSkinCaseStudy />} />
      <Route path="/blog/skin-treatment-case-study-pune" element={<SkinTreatmentCaseStudy />} />
      <Route path="/blog/laser-hair-removal-case-study" element={<LaserHairRemovalCaseStudy />} />
      <Route path="/blog/hair-transplant-case-study" element={<HairTransplantCaseStudy />} />
      <Route path="/blog/best-hair-transplant-pune-case-study" element={<BestHairTransplantPune />} />
      <Route path="/blog/skin-treatment-pune-case-study" element={<SkinTreatmentPuneCaseStudy />} />
      <Route path="/blog/laser-hair-removal-vs-waxing-pune" element={<LaserHairRemovalVsWaxing />} />
      <Route path="/blog/best-hair-loss-treatment-pune-tips" element={<BestHairLossTreatmentPune />} />
      <Route path="/blog/best-hair-loss-solutions-men-women" element={<BestHairLossSolutions />} />
      <Route path="/blog/choosing-right-skin-clinic-healthy-skin" element={<ChoosingRightSkinClinic />} />
      <Route path="/blog/acne-and-acne-scar-solutions" element={<AcneAndAcneScarSolutions />} />
      <Route path="/blog/hair-loss-treatment-pune-healthy-regrowth" element={<HairLossTreatmentPuneRegrowth />} />
      <Route path="/blog/choosing-best-hair-loss-treatment-pune" element={<ChoosingBestHairLossTreatment />} />
      <Route path="/blog/hair-regrowth-treatment-pune-young-adults" element={<HairRegrowthYoungAdults />} />
      <Route path="/blog/weight-loss-case-study-pune" element={<WeightLossCaseStudy />} />
      <Route path="/blog/fue-hair-transplant-case-study-pune" element={<FueHairTransplantCaseStudy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;