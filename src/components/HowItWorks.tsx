
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Retinal Imaging",
      description: "A simple, non-invasive retinal scan is performed, capturing high-resolution images of the eye's structures."
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our proprietary AI algorithms analyze the retinal images, identifying subtle biomarkers associated with early cancer development."
    },
    {
      number: "03",
      title: "Risk Assessment",
      description: "The system generates a comprehensive risk assessment, highlighting potential concerns that may warrant further investigation."
    },
    {
      number: "04",
      title: "Early Intervention",
      description: "For high-risk cases, targeted diagnostic tests are recommended, enabling early intervention when treatment is most effective."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-foresight-navy text-white overflow-hidden">
      <div className="section-container relative">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-foresight-teal/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-foresight-gold/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-6">How ForeSight Works</h2>
            <p className="text-lg text-foresight-white/80">
              Our technology transforms routine eye exams into powerful cancer screening tools, 
              using advanced AI to detect subtle retinal changes associated with early-stage cancers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="border border-foresight-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 rounded-lg backdrop-blur-sm"
              >
                <div className="text-4xl font-light text-foresight-teal mb-4">{step.number}</div>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-foresight-white/70">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a href="#research" className="inline-flex items-center px-6 py-3 border border-foresight-teal/30 text-base font-medium rounded-md text-white hover:bg-foresight-teal/10 transition-all duration-200">
              Explore Our Research
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
