import React from 'react';
import { useNavigate } from 'react-router-dom';

const team = [
  {
    name: "Ethan Wu",
    role: "Lead Innovator",
    photo: "/images/ethanwu.jpeg",
    bio: `Ethan Wu is a physician-scientist-in-training whose career bridges the worlds of medicine, mathematics, and artificial intelligence. As an MD/PhD student in the Pitt/CMU MSTP program, Ethan's passion lies in harnessing machine learning to solve the most pressing challenges in healthcare and biology. His journey began at Duke University, where he graduated with distinction in mathematics and quickly established himself as a leader in computational research. Ethan's work has spanned from building predictive models for cancer and infectious diseases to uncovering new insights in ophthalmology.\n\nEthan's experience is as broad as it is deep: he has led machine learning projects at UPMC and Carnegie Mellon, driven high-impact consulting work at McKinsey & Co., and contributed to groundbreaking research at the NIH. His projects have revealed new systemic pathways in eye disease, advanced early detection of macular degeneration, and pioneered contextualized models for tuberculosis treatment. Ethan's vision is to bring together data, clinical insight, and innovative thinking to transform early disease detection and prevention, making a tangible impact on patient lives.`
  },
  {
    name: "Justin Navidzadeh",
    role: "Bioengineering Lead",
    photo: "/images/justinnavidzadeh.jpg",
    bio: `Justin Navidzadeh is a biomedical engineer and future physician whose career is defined by innovation at the intersection of technology and medicine. With advanced degrees from Northwestern University and the University of Pittsburgh School of Medicine, Justin has already made significant contributions to biotechnology and translational research. At Evozyne, a leading biotech startup, he developed high-throughput microfluidics platforms and AI-driven protein engineering tools, accelerating the discovery of novel therapeutics.\n\nJustin's research at Northwestern's Scott Lab led to breakthroughs in nanoparticle drug delivery, while his collaborative spirit has driven award-winning design projects to improve patient care and accessibility. His work has been published in top journals such as Cancer Cell and Nature Communications, and he is a named inventor on a US patent for a wheelchair training device. Justin's commitment to service is evident in his volunteer work with children's hospitals and Special Olympics. At ForeSight, he brings a unique blend of engineering expertise, clinical perspective, and a passion for making healthcare more innovative and equitable.`
  },
  {
    name: "Dr. Jay Chhablani",
    role: "Scientific Advisor",
    photo: "/images/drjaychhablani.jpg",
    bio: `Dr. Jay Chhablani is a world-renowned retinal surgeon, clinical researcher, and innovator at the forefront of ophthalmology. As Vice Chair of Clinical Trials and Director of Clinical Research at the UPMC Vision Institute, Dr. Chhablani has dedicated his career to advancing the science and practice of retinal disease management. With over 590 peer-reviewed publications and multiple books to his name, he is recognized globally for his expertise in macular disorders, advanced imaging, and the integration of artificial intelligence into clinical care.\n\nDr. Chhablani's leadership extends beyond the lab and clinic. He serves on editorial and grant review boards for top journals and funding agencies, and is a sought-after speaker and visiting professor worldwide. His pioneering work in choroidal imaging, proteomics, and machine learning has shaped the field and inspired a new generation of clinician-scientists. As a member of the exclusive Gonin Club and recipient of numerous international awards, Dr. Chhablani brings unparalleled clinical insight, research acumen, and a relentless drive to improve patient outcomes to the ForeSight team.`
  }
];

const Team = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-gradient-to-b from-foresight-light to-white min-h-screen">
      <div className="section-container">
        <button
          className="mb-8 px-5 py-2 bg-foresight-navy text-white rounded hover:bg-foresight-teal transition-colors duration-200 focus:outline-none"
          onClick={() => navigate('/')}
        >
          ← Back to Home
        </button>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-lg text-gradient mb-6">Meet the ForeSight Team</h2>
          <p className="text-lg text-gray-700">
            Our interdisciplinary team brings together expertise in medicine, engineering, and artificial intelligence to transform early disease detection.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 border border-gray-100 relative">
              <div className="relative mb-6">
                <div className="aspect-square w-32 h-32 bg-gradient-to-br from-foresight-navy/10 to-foresight-teal/10 rounded-full flex items-center justify-center overflow-hidden border-4 border-foresight-navy/10">
                  <img src={member.photo} alt={member.name + ' headshot'} className="w-28 h-28 object-cover rounded-full" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-2 bg-foresight-teal/40 rounded-full blur-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-foresight-navy mb-1">{member.name}</h3>
              <p className="text-sm text-foresight-teal font-medium mb-4">{member.role}</p>
              <p className="text-gray-700 whitespace-pre-line text-left">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 