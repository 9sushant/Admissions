import React, { useRef } from 'react';
import { 
  HeroSection, 
  TrustMarkers, 
  WhyChooseUsSection, 
  AIPoweredSection, 
  ExperientialLearningSection, 
  AcademicsSection,
  ParentTrustSection,
  AdmissionProcessSection,
  AdmissionForm,
  OurBranchesSection,
  Footer,
  StickyCTA
} from './components/Sections';

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <header className="absolute top-0 left-0 w-full z-10 p-4 sm:p-6">
        <div className="container mx-auto flex items-center gap-4">
          <img src="/logo.jpg" alt="Dalimss Sunbeam Logo" className="h-12 w-12 rounded-full object-cover" />
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Dalimss Sunbeam GROUP OF SCHOOLS & HOSTEL</h1>
        </div>
      </header>
      
      <main>
        <HeroSection onApplyNowClick={scrollToForm} />
        <TrustMarkers />
        <WhyChooseUsSection />
        <AIPoweredSection />
        <ExperientialLearningSection />
        <AcademicsSection />
        <ParentTrustSection />
        <AdmissionProcessSection />
        <OurBranchesSection />
        <AdmissionForm ref={formRef} />
      </main>
      
      <Footer />

      <StickyCTA onApplyNowClick={scrollToForm} />
    </div>
  );
}