import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const team = [
  {
    name: "Ethan Wu",
    role: "Lead Innovator",
    description: "MD/PhD student, Pitt-CMU MSTP. Background in mathematics, machine learning, and healthcare analytics."
  },
  {
    name: "Justin Navidzadeh",
    role: "Bioengineering Lead",
    description: "Medical student with experience in bioengineering, translational research, and clinical applications of retinal imaging."
  },
  {
    name: "Dr. Jay Chhablani",
    role: "Scientific Advisor",
    description: "Professor of Ophthalmology, UPMC. Focused on retinal imaging, clinical research, and AI in ophthalmology."
  }
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          } else {
            entry.target.classList.add('opacity-0', 'translate-y-10');
            entry.target.classList.remove('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el, index) => {
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
              className="group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 cursor-pointer"
              style={{ transitionDelay: `${index * 300}ms` }}
              onClick={() => navigate('/team')}
            >
              <div className="aspect-square bg-gradient-to-br from-foresight-navy/5 to-foresight-teal/5 rounded-full mb-6 overflow-hidden relative flex items-center justify-center group-hover:shadow-lg transition-all duration-500">
                <div className="w-3/4 aspect-square bg-gradient-to-br from-foresight-navy/20 to-foresight-teal/20 rounded-full flex items-center justify-center">
                  <img
                    src={"/images/" + (member.name === "Ethan Wu" ? "ethanwu.jpeg" : (member.name === "Justin Navidzadeh" ? "justinnavidzadeh.jpg" : "drjaychhablani.jpg"))}
                    alt={member.name + " headshot"}
                    className="w-3/4 h-3/4 object-cover rounded-full"
                  />
                </div>
                <div className="absolute inset-0 bg-foresight-navy/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold text-center px-4">Click to learn more about {member.name}</span>
                </div>
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
