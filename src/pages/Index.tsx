
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import TeamSection from '@/components/TeamSection';
import BeyondCancer from '@/components/BeyondCancer';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <HowItWorks />
      <TeamSection />
      <BeyondCancer />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
