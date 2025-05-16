import React, { useEffect, useRef } from 'react';
import { FaBrain, FaHeartbeat, FaVials, FaDna } from 'react-icons/fa';

const diseases = [
  {
    name: "Alzheimer's Disease",
    icon: <FaBrain className="text-foresight-teal text-3xl mb-2" />,
    description: "Retinal imaging can reveal early neurodegenerative changes, offering a non-invasive window into Alzheimer's risk and progression."
  },
  {
    name: "Multiple Sclerosis",
    icon: <FaDna className="text-foresight-navy text-3xl mb-2" />,
    description: "Retinal nerve fiber layer thinning and other subtle changes can serve as early biomarkers for MS, supporting earlier diagnosis and monitoring."
  },
  {
    name: "Cardiovascular Disease",
    icon: <FaHeartbeat className="text-foresight-gold text-3xl mb-2" />,
    description: "Microvascular changes in the retina reflect systemic vascular health, enabling risk assessment for heart disease and stroke."
  },
  {
    name: "Diabetes",
    icon: <FaVials className="text-foresight-navy text-3xl mb-2" />,
    description: "Early diabetic retinopathy and metabolic changes can be detected through retinal imaging, supporting proactive management and intervention."
  }
];

const BeyondCancer = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          } else {
            // Add fade out effect when element leaves viewport
            entry.target.classList.add('opacity-0', 'translate-y-10');
            entry.target.classList.remove('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el, index) => {
      // Add staggered delay based on index
      el.classList.add(`delay-[${index * 300}ms]`);
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
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="heading-lg text-gradient mb-6">Beyond Cancer</h2>
          <p className="text-lg text-gray-700">
            ForeSight's retinal imaging platform is designed to detect more than just cancer. Its flexibility enables early detection and monitoring of a range of systemic diseases.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {diseases.map((disease, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              {disease.icon}
              <h3 className="text-lg font-semibold text-foresight-navy mb-2 text-center">{disease.name}</h3>
              <p className="text-gray-700 text-center text-sm">{disease.description}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto mt-16 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          <p className="text-gray-700">
            The retina shares embryological origins and microvascular features with the brain and other vital organs, making it uniquely suited for observing systemic vascular and neurologic changes. Advanced AI algorithms can identify retinal changes associated with systemic diseases with high accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondCancer;
