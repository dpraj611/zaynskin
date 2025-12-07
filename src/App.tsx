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
import WeightLoss from './pages/WeightLoss';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/best-dermatologist-in-pune" element={<DermatologyClinic />} />
      <Route path="/wellness" element={<WellnessLounge />} />
      <Route path="/weight-loss-clinic-in-pune" element={<WeightLoss />} />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;