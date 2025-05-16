
import React, { useEffect, useRef } from 'react';

const BeyondCancer = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="beyond-cancer" ref={sectionRef} className="py-24 bg-foresight-light">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="heading-lg text-gradient mb-6">Beyond Cancer</h2>
          <p className="text-lg text-gray-700">
            ForeSight is built on groundbreaking research that reveals the connection 
            between retinal changes and early disease development.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <h3 className="text-xl font-semibold text-foresight-navy mb-4">Beyond Cancer</h3>
          <p className="text-gray-700 mb-4">
            The technology behind ForeSight is not limited to only cancer. Its strength lies in the 
            flexibility of retinal imaging to capture subtle signs of systemic disease, potentially extending
            to early detection of Alzheimer's disease and multiple sclerosis.
          </p>
          <p className="text-gray-700">
            The retina shares embryological origins and microvascular features with the brain and other
            vital organs, making it uniquely suited for observing systemic vascular and neurologic changes.
            Advanced AI algorithms can identify retinal changes associated with systemic diseases with high accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondCancer;
