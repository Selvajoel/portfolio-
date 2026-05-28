import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);

    emailjs.sendForm(
      'service_0to3uom',
      'template_dxvuj6d',
      formRef.current,
      '65GHWE_hXHXqEMHNM'
    )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        setLoading(false);
        console.error("EmailJS Error:", error);
        alert(`Message failed: ${error.text || 'Unknown Error'}. Check your EmailJS dashboard keys and Whitelisted Domains.`);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Get In Touch</p>
          <h2 className="text-5xl font-black font-outfit">Let's Build <span className="text-gradient">Something.</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto font-light">
            Whether you have a question, an opportunity, or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-8 border-white/5 space-y-6">
              <h3 className="text-2xl font-bold font-outfit">Contact Info</h3>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-black tracking-widest">Email</p>
                  <p className="text-white font-medium">joeljobi371@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-black tracking-widest">Location</p>
                  <p className="text-white font-medium">Bangalore, India</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 border-white/5 flex justify-between px-12">
              <motion.a whileHover={{ y: -5, color: '#6366f1' }} href="https://github.com/Selvajoel" target="_blank" rel="noopener noreferrer" className="text-white/40"><FaGithub size={28} /></motion.a>
              <motion.a whileHover={{ y: -5, color: '#a855f7' }} href="https://www.linkedin.com/in/selvajoel-s-320770344" target="_blank" rel="noopener noreferrer" className="text-white/40"><FaLinkedin size={28} /></motion.a>
              <motion.a whileHover={{ y: -5, color: '#ec4899' }} href="https://www.instagram.com/j0elllllll" target="_blank" rel="noopener noreferrer" className="text-white/40"><FaInstagram size={28} /></motion.a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form ref={formRef} onSubmit={handleSubmit} className="glass p-10 border-white/5 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white font-medium"
                    placeholder="yourname@email.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-white/50 ml-1">Your Message</label>
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white font-medium resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className={`w-full py-5 text-lg flex items-center justify-center space-x-3 transition-colors ${success ? 'bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl' : 'btn-primary'
                  } ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                <span>{loading ? 'Sending...' : success ? 'Message Sent!' : 'Send Message'}</span>
                {loading ? <Loader2 className="animate-spin" size={20} /> : success ? <CheckCircle2 size={20} /> : <Send size={20} />}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
