
import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-foresight-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 retina-pattern opacity-30"></div>
      
      {/* Scanning Line Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line animate-scan-line"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="heading-xl">
              <span className="text-gradient">ForeSight</span>
            </h1>
            <p className="text-2xl font-light text-foresight-navy">Eye Screening to Prevent Cancers</p>
            <p className="text-lg text-gray-700 max-w-lg">
              Revolutionary technology that uses non-invasive retinal imaging to detect pancreatic, ovarian, and liver cancers before symptoms appear.
            </p>
            <div className="pt-4">
              <a href="#about" className="btn-primary">
                Discover How
              </a>
            </div>
            <div className="pt-6">
              <p className="text-sm text-gray-500">University of Pittsburgh & UPMC</p>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-fade-in-slow">
            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-foresight-navy to-foresight-teal opacity-10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-foresight-navy/20 to-foresight-teal/20 animate-pulse-gentle"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full border-2 border-foresight-teal/30"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-2/5 h-2/5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-foresight-navy/40 to-foresight-teal/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full bg-black"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
