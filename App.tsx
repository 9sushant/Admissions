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
        <div className="container mx-auto">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Dalimss Sunbeam Global School Sigra</h1>
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
        <AdmissionForm ref={formRef} />
      </main>
      
      <Footer />

      <StickyCTA onApplyNowClick={scrollToForm} />
    </div>
  );
}