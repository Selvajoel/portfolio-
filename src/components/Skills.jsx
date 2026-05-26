import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, LineChart, Cpu, FileSpreadsheet, Terminal, Globe, BrainCircuit } from 'lucide-react';

const Skills = () => {
  const mainSkills = [
    { name: "Excel", desc: "Advanced data cleaning, Pivot tables, VBA", icon: <FileSpreadsheet size={28} />, color: "from-green-500 to-emerald-400", shadow: "shadow-green-500/50", border: "hover:border-green-500/50" },
    { name: "Power BI", desc: "DAX, Data modeling, Interactive dashboards", icon: <LineChart size={28} />, color: "from-yellow-500 to-orange-400", shadow: "shadow-yellow-500/50", border: "hover:border-yellow-500/50" },
    { name: "SQL", desc: "Query optimization, Database management", icon: <Database size={28} />, color: "from-emerald-500 to-teal-400", shadow: "shadow-emerald-500/50", border: "hover:border-emerald-500/50" },
    { name: "Python", desc: "Pandas, NumPy, Automated data processing", icon: <Code2 size={28} />, color: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/50", border: "hover:border-blue-500/50" },
    { name: "Tableau", desc: "Visual storytelling, Complex datasets", icon: <Globe size={28} />, color: "from-indigo-500 to-blue-400", shadow: "shadow-indigo-500/50", border: "hover:border-indigo-500/50" },
    { name: "Data Viz", desc: "Information design, Insightful charts", icon: <BrainCircuit size={28} />, color: "from-purple-500 to-pink-400", shadow: "shadow-purple-500/50", border: "hover:border-purple-500/50" },
    { name: "Figma", desc: "UI/UX Prototyping, Design systems", icon: <Cpu size={28} />, color: "from-orange-500 to-red-400", shadow: "shadow-orange-500/50", border: "hover:border-orange-500/50" },
    { name: "UI/UX", desc: "User-centric design, Digital experiences", icon: <Terminal size={28} />, color: "from-pink-500 to-rose-400", shadow: "shadow-pink-500/50", border: "hover:border-pink-500/50" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl font-black font-outfit"
          >
            My Tech <span className="text-gradient">Arsenal.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 max-w-2xl mx-auto font-light"
          >
            A diverse toolkit focused on data processing, statistical modeling, and full-stack visualization.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass-card p-8 group border-white/[0.05] transition-all duration-500 ${skill.border} hover:bg-white/[0.02] relative overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white transition-all duration-500 shadow-lg ${skill.shadow} bg-gradient-to-br ${skill.color}`}>
                    {skill.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-outfit mb-3 group-hover:text-white transition-colors">{skill.name}</h3>
                <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors leading-relaxed min-h-[40px]">
                  {skill.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
                  <span className="text-[10px] px-3 py-1 bg-white/10 text-white/80 rounded-full font-bold uppercase tracking-wider border border-white/10 backdrop-blur-md">
                    Learner
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Background Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      </div>
    </section>
  );
};

export default Skills;
