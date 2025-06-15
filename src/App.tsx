// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContactPage from './Components/Contact';
import HomePage from './Components/Homepage';
import AboutPage from './Components/About';
import DigitalMarketingSolutions from './Components/DigitalMarketingSolutions';
import WebAppDevelopmentSolutions from './Components/WebAppDevelopmentSolutions';
import AISolutionsPage from './Components/AISolutionsPage';
import CustomSoftwarePage from './Components/CustomSoftwarePage';
import CloudInfrastructurePage from './Components/CloudInfrastructurePage';
import ITConsultingStrategyPage from './Components/ITConsultingStrategyPage';



function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/digitalmarketing" element={<DigitalMarketingSolutions />} />
        <Route path="/webdevelopment" element={<WebAppDevelopmentSolutions />} />
        <Route path="/AIsolutions" element={<AISolutionsPage />} />
        <Route path="/CustomService" element={<CustomSoftwarePage />} />
        <Route path="/Cloud" element={<CloudInfrastructurePage />} />
        <Route path="/ITS" element={<ITConsultingStrategyPage />} />
        
       
      </Routes>
      {/* <DigitalMarketingSolutions /> */}

      <Footer />
    </>
  );
}

export default App;
