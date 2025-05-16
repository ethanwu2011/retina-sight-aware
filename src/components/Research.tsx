
import React from 'react';

const Research = () => {
  return (
    <section id="research" className="py-24 bg-foresight-light">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">Our Research</h2>
          <p className="text-lg text-gray-700">
            ForeSight is built on groundbreaking research that reveals the connection 
            between retinal changes and early cancer development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-foresight-teal/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-foresight-navy/5 rounded-full blur-2xl"></div>
            
            <div className="relative bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="h-1 w-16 bg-foresight-teal mb-6 rounded-full"></div>
              <h3 className="text-xl font-semibold text-foresight-navy mb-4">Key Research Findings</h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-foresight-navy/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-foresight-navy"></div>
                  </div>
                  <p>Significant association between age-related macular degeneration (AMD) and specific benign tumors known to precede hard-to-detect cancers.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-foresight-navy/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-foresight-navy"></div>
                  </div>
                  <p>The retina shares embryological origins and microvascular features with the brain and other vital organs.</p>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-foresight-navy/10 flex items-center justify-center mt-0.5 mr-3">
                    <div className="h-2 w-2 rounded-full bg-foresight-navy"></div>
                  </div>
                  <p>Advanced AI algorithms can identify retinal changes associated with systemic diseases with high accuracy.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-foresight-navy mb-4">Our Four-Phase Approach</h3>
              <ol className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-sm font-medium text-foresight-teal mr-3">01</span>
                  <p>Validate associations between eye disease onset and hard-to-detect cancers using All of Us database.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-sm font-medium text-foresight-teal mr-3">02</span>
                  <p>Train contextualized neural networks on multimodal clinical and retinal data to identify cancer-specific retinal phenotypes.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-sm font-medium text-foresight-teal mr-3">03</span>
                  <p>Develop deep learning models using Optical Coherence Tomography (OCT) and fundus images of patients.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-sm font-medium text-foresight-teal mr-3">04</span>
                  <p>Explore the development of portable, user-friendly retinal imaging devices for routine screening.</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-foresight-navy mb-4">Beyond Cancer</h3>
              <p className="text-gray-700">
                The technology behind ForeSight is not limited to only cancer. Its strength lies in the 
                flexibility of retinal imaging to capture subtle signs of systemic disease, potentially extending
                to early detection of Alzheimer's disease and multiple sclerosis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
