
import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: "Ethan Wu",
      role: "Lead Researcher",
      description: "Medical student at the University of Pittsburgh with a background in machine learning and healthcare analytics."
    },
    {
      name: "Justin Navidzadeh",
      role: "Clinical Lead",
      description: "Medical student focusing on translational research and clinical applications of retinal imaging technologies."
    },
    {
      name: "Dr. Jay Chhablani",
      role: "Scientific Advisor",
      description: "Distinguished professor with expertise in retinal imaging and its applications in systemic disease detection."
    }
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
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
              className="group"
            >
              <div className="aspect-square bg-gradient-to-br from-foresight-navy/5 to-foresight-teal/5 rounded-full mb-6 overflow-hidden group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <div className="w-1/2 aspect-square bg-gradient-to-br from-foresight-navy/20 to-foresight-teal/20 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
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
