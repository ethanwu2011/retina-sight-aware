
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foresight-navy text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold text-xl">ForeSight</span>
            </div>
            <p className="text-foresight-white/70 max-w-md">
              Revolutionary eye screening technology for early cancer detection, 
              developed by researchers at the University of Pittsburgh and UPMC.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Links</h4>
            <ul className="space-y-2 text-foresight-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#beyond-cancer" className="hover:text-white transition-colors">Beyond Cancer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-foresight-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foresight-white/50">
            &copy; {currentYear} ForeSight. All rights reserved.
          </p>
          <p className="text-sm text-foresight-white/50 mt-2 md:mt-0">
            University of Pittsburgh & UPMC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
