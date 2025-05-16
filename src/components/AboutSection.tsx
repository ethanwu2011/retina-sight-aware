
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    elements?.forEach((el, index) => {
      // Add staggered delay based on index
      el.classList.add(`delay-[${index * 200}ms]`);
      observer.observe(el);
    });

    return () => {
      elements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-foresight-light">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="heading-lg text-gradient mb-6">The Problem: Late Diagnosis of "Silent Killers"</h2>
          <p className="text-lg text-gray-700">
            Pancreatic, ovarian, and hepatocellular carcinoma (HCC) are often called "silent killers" because they 
            typically cause no noticeable symptoms until they are in advanced stages. By then, treatment options are limited, 
            leaving patients with few options and little time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '0ms' }}>
            <div className="h-1 w-16 bg-foresight-navy mb-6 rounded-full"></div>
            <h3 className="text-xl font-semibold text-foresight-navy mb-4">The Problem</h3>
            <p className="text-gray-700 mb-4">
              Despite advancements in oncology, there are still no widely accessible or reliable screening tools for these diseases in the general population.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="h-1 w-16 bg-foresight-teal mb-6 rounded-full"></div>
            <h3 className="text-xl font-semibold text-foresight-navy mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              What if early warning signs were already visible, just not where we were looking?
              ForeSight challenges the conventional approach to cancer detection.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start animate-on-scroll opacity-0 translate-y-10 transition-all duration-700" style={{ transitionDelay: '400ms' }}>
            <div className="h-1 w-16 bg-foresight-gold mb-6 rounded-full"></div>
            <h3 className="text-xl font-semibold text-foresight-navy mb-4">The Breakthrough</h3>
            <p className="text-gray-700 mb-4">
              The retina is more than a visual structure; it's a living snapshot of the entire body, sharing embryological origins and microvascular structure with other vital organs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
