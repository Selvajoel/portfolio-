import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BarChart3, TrendingUp, Users, Brain, Globe, ShieldCheck, Network } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Nama Community",
      desc: "A platform connecting donors with NGOs and orphanages, featuring a 'Community Fridge' system to reduce food waste and support those in need.",
      tech: ["Python", "HTML", "CSS", "Notifications"],
      icon: <Globe className="text-primary" />,
      github: "https://github.com/Selvajoel/Nama-community",
      demo: "#",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Customer Churn Analysis",
      desc: "End-to-end machine learning system identifying high-risk customers with 85%+ accuracy using gradient boosting.",
      tech: ["SKLearn", "SQL", "Tableau", "Python"],
      icon: <Users className="text-secondary" />,
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "JurisGuard",
      desc: "Graph-based AI system for legal risk detection, analyzing relationships between entities to identify suspicious patterns and anomalies.",
      tech: ["Python", "Flask", "Pandas", "Graph AI"],
      icon: <Network className="text-accent" />,
      github: "https://github.com/Selvajoel/JurisGuard-Graph-Based-AI-System-for-Legal-Risk-and-Anomaly-Detection",
      demo: "#",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Forecasting Model",
      desc: "Custom Neural Network architecture for time-series forecasting in volatile cryptocurrency markets.",
      tech: ["PyTorch", "NumPy", "Pandas", "Streamlit"],
      icon: <Brain className="text-primary" />,
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Portfolio</p>
            <h2 className="text-5xl font-black font-outfit">Featured <span className="text-gradient">Projects.</span></h2>
          </div>
          <p className="text-white/40 max-w-md font-light text-right hidden md:block">
            A selection of my recent work focusing on predictive modeling and data visualization.
            Each project solves a specific business problem using advanced analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass border-white/5 h-[450px]"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <div className="mb-6 flex justify-between items-start">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <motion.a whileHover={{ y: -5 }} href={project.github} className="p-3 glass rounded-full hover:bg-white/10 border-white/10 transition-colors">
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a whileHover={{ y: -5 }} href={project.demo} className="p-3 glass rounded-full hover:bg-white/10 border-white/10 transition-colors">
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-3xl font-black font-outfit mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/50 mb-6 font-light line-clamp-2">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest glass bg-white/5 rounded-full border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Border Glow on Hover */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-3xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.a
            href="https://github.com/Selvajoel"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-4 glass border-white/10 rounded-full text-white/50 font-bold hover:text-white hover:border-white/20 transition-all inline-block"
          >
            View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
