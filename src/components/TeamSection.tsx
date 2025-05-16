
import React, { useEffect, useRef } from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Ethan Wu",
      role: "Lead Researcher",
      description: "MD/PhD Student in the Pitt-CMU MSTP Program with extensive computer science and machine learning experience. Former McKinsey consultant with expertise in healthcare analytics."
    },
    {
      name: "Justin Navidzadeh",
      role: "Clinical Lead",
      description: "Medical student with years of bioengineering experience focusing on translational research and clinical applications of retinal imaging technologies."
    },
    {
      name: "Dr. Jay Chhablani",
      role: "Scientific Advisor",
      description: "World leading expert in retinal imaging and ophthalmology with extensive experience in machine learning applications for retinal analysis and disease detection."
    }
  ];
  
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
      { threshold: 0.1, rootMargin: "-100px 0px" }
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
    <section id="team" ref={sectionRef} className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <h2 className="heading-lg text-gradient mb-6">Our Team</h2>
          <p className="text-lg text-gray-700">
            An interdisciplinary team made up of physician-scientists, bioengineers, 
            machine learning researchers, and business leads dedicated to transforming cancer detection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <div className="aspect-square bg-gradient-to-br from-foresight-navy/5 to-foresight-teal/5 rounded-full mb-6 overflow-hidden group-hover:shadow-lg transition-all duration-500 flex items-center justify-center transform group-hover:scale-105">
                <div className="w-1/2 aspect-square bg-gradient-to-br from-foresight-navy/20 to-foresight-teal/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-foresight-navy">{member.name}</h3>
                <p className="text-sm text-foresight-teal font-medium mt-1 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
