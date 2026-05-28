import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldCheck, Trophy, PieChart, FileSearch } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    { title: "Data Analytics", icon: <Award className="text-primary" />, provider: "Coursera", desc: "Professional certificate covering the entire data analysis process." },
    { title: "Power BI Data Analyst", icon: <PieChart className="text-secondary" />, provider: "Microsoft", desc: "Expertise in data modeling, visualization, and analysis using Power BI." },
    { title: "SQL for Data Science", icon: <FileSearch className="text-accent" />, provider: "Cognitive Class", desc: "Advanced SQL techniques for data manipulation and extraction." },
    { title: "Python for Data Analysis", icon: <ShieldCheck className="text-primary" />, provider: "IBM", desc: "Working with Pandas, NumPy, and Matplotlib for data insights." },
    { title: "Tableau Desktop Specialist", icon: <Trophy className="text-secondary" />, provider: "Tableau", desc: "Creating impactful visualizations and dashboards." },
    { title: "UI/UX Design Essentials", icon: <CheckCircle className="text-accent" />, provider: "Adobe", desc: "Foundations of user-centric design and prototyping." },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Credentials</p>
            <h2 className="text-5xl font-black font-outfit leading-tight">
              Verified <span className="text-gradient">Expertise.</span> <br />
              Continuous Learning.
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed">
              I am committed to staying at the forefront of the data landscape.
              My certifications validate my technical skills and my dedication
              to delivering high-quality, data-driven solutions.
            </p>

            <div className="pt-8">
              <div className="glass p-8 border-primary/20 bg-primary/5">
                <h3 className="text-2xl font-bold font-outfit mb-4 flex items-center space-x-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Trophy size={20} className="text-primary" />
                  </span>
                  <span>Professional Goals</span>
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Actively pursuing advanced certifications in Machine Learning
                  and Advanced SQL to further enhance my analytical capabilities
                  and business impact.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="glass p-6 border-white/5 flex flex-col justify-between h-52"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  {cert.icon}
                </div>
                <div>
                  <h4 className="font-bold font-outfit mb-1">{cert.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed line-clamp-2">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
