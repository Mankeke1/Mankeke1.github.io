import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Shield, Layout, Terminal, Server, Code2, Database, Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

import projectIotImg from './assets/images/project_iot.png';
import projectFinanceImg from './assets/images/project_finance.png';
import projectNetworkImg from './assets/images/project_network.png';

// ==========================================
// 1. MAGNETIC CUSTOM CURSOR
// ==========================================
const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/40 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%'
      }}
    />
  );
};

// ==========================================
// 2. SPOTLIGHT BENTO CARD
// ==========================================
const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden glass-panel group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-out z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      {/* Default Subtle Border Glow active on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 40%)`,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: '1px' // border width
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// ==========================================
// 3. 3D TILT KINEMATIC CARD
// ==========================================
const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
      className={`relative w-full h-full ${className}`}
    >
      <div style={{ transform: "translateZ(40px)" }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

// ==========================================
// 4. STAGGERED HERO TEXT
// ==========================================
const StaggeredText = ({ text, className }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1, y: 0, rotateX: 0,
      transition: { type: "spring", damping: 30, stiffness: 400 }
    }
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", overflow: "hidden", perspective: "1000px" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block origin-bottom font-display tracking-tighter">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// ==========================================
// 5. MAIN APP COMPONENT
// ==========================================
export default function App() {
  const projects = [
    {
      title: "3DFAB_LoRa",
      description: "Sistema IoT LoRa. Integración hardware/software.",
      tags: ["IoT", "C++", "Node.js", "React"],
      image: projectIotImg,
      link: "#"
    },
    {
      title: "ASD Contabilidad",
      description: "Ecosistema de automatización contable web/desktop.",
      tags: ["React", "Express", "MySQL", "Electron"],
      image: projectFinanceImg,
      link: "#"
    },
    {
      title: "Arquitecturas Asíncronas",
      description: "Bots de Discord y sistemas de inventario.",
      tags: ["Python", "Django", "SQLite"],
      image: projectNetworkImg,
      link: "#"
    }
  ];

  const toolkit = [
    { name: "Python", icon: <Terminal size={16} /> },
    { name: "Node.js", icon: <Server size={16} /> },
    { name: "C++", icon: <Code2 size={16} /> },
    { name: "React", icon: <Layout size={16} /> },
    { name: "SQL", icon: <Database size={16} /> },
  ];

  // Nav Drop-in Animation
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.2 } }
  };

  return (
    <div className="relative min-h-screen bg-bgDark text-neutral-200">
      <div className="bg-noise" />
      <CustomCursor />

      {/* AMBIENT GLOW BLOBS */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-brandIndigo/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] bg-brandCyan/15 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">

        {/* NAVBAR */}
        <motion.nav variants={navVariants} initial="hidden" animate="visible" className="fixed top-8 w-[90%] max-w-7xl mx-auto flex justify-between items-center z-50 mix-blend-difference">
          <span className="font-display font-bold text-xl tracking-tighter text-white">TQ.</span>
          <div className="flex gap-6 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-white transition-colors duration-300">Sobre Mí</a>
            <a href="#work" className="hover:text-white transition-colors duration-300">Trabajo</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contacto</a>
          </div>
        </motion.nav>

        {/* HERO SECTION */}
        <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 pt-20">
          <StaggeredText text="TOMÁS / SYSTEMS ENGINEER." className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-center text-titanium mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-lg md:text-xl text-neutral-400 font-light mb-12 text-center max-w-2xl tracking-wide">
              Arquitectura Lógica. Ciberseguridad Ofensiva. Algorithmic Trading.
            </p>

            {/* Crystal CTA Button */}
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden group flex items-center gap-3 text-white font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brandIndigo/50 to-brandCyan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"></div>
              <span className="relative z-10">Explorar Ecosistemas</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
          </motion.div>

          {/* Thin Line Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.2, duration: 1.5, ease: "circOut" }}
            className="absolute bottom-12 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"
          />
        </section>

        {/* BENTO GRID (ABOUT) */}
        <section id="about" className="w-full max-w-7xl px-6 py-32">
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-500 mb-12 ml-4"
          >
            01 — Manifiesto
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Box 1: Mindset */}
            <SpotlightCard className="md:col-span-2 p-10 flex flex-col justify-end min-h-[300px]">
              <h3 className="text-3xl font-display font-semibold text-white mb-4">Mindset Estructural.</h3>
              <p className="text-neutral-400 leading-relaxed text-lg max-w-xl">
                Basado en lógica matemática severa y automatización extrema. No escribo código por escribir; dimensiono ecosistemas que resuelven problemas de manera autónoma, escalable y con fricción cero.
              </p>
            </SpotlightCard>

            {/* Box 2: Focus */}
            <SpotlightCard className="p-10 flex flex-col justify-between min-h-[300px]">
              <Shield className="text-brandCyan mb-6" size={32} />
              <div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">Focus</h3>
                <ul className="text-neutral-400 space-y-2 font-medium">
                  <li>Algorithmic Trading</li>
                  <li>Ciberseguridad Ofensiva</li>
                  <li>Privacidad Digital</li>
                  <li>IA Generativa</li>
                </ul>
              </div>
            </SpotlightCard>

            {/* Box 3: Toolkit */}
            <SpotlightCard className="md:col-span-3 p-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <h3 className="text-2xl font-display font-semibold text-white shrink-0">Toolkit Core</h3>
              <div className="flex flex-wrap gap-4 w-full sm:justify-end">
                {toolkit.map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-sm text-neutral-300 font-medium whitespace-nowrap">
                    <span className="text-brandCyan">{tool.icon}</span>
                    {tool.name}
                  </div>
                ))}
              </div>
            </SpotlightCard>

          </div>
        </section>

        {/* PROJECTS (CINEMATIC GALLERY) */}
        <section id="work" className="w-full max-w-7xl px-6 py-32 border-t border-white/[0.05]">
          <motion.h2
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] uppercase text-neutral-500 mb-16 ml-4"
          >
            02 — Ecosistemas Críticos
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1, type: "spring", damping: 20 }}
                className="group h-[500px]"
              >
                <TiltCard className="w-full h-full">
                  <div className="absolute inset-0 rounded-2xl overflow-hidden glass-panel flex flex-col border-white/10 group-hover:border-white/20 transition-colors duration-500">

                    <div className="relative h-1/2 overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
                    </div>

                    <div className="p-8 h-1/2 flex flex-col justify-between bg-[#0a0a0a]/90 backdrop-blur-md">
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brandCyan transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded border border-white/10 text-neutral-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <section id="contact" className="w-full flex justify-center pb-12 pt-32 px-6">
          <motion.footer
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="w-full max-w-7xl glass-panel p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div>
              <h2 className="text-xl font-display font-bold text-white">TOMÁS QUINELEN</h2>
              <p className="text-sm font-medium tracking-widest text-neutral-500 mt-1">FORTIS FORTUNA ADIUVAT.</p>
            </div>

            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-neutral-300 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-neutral-300 hover:text-brandCyan">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contactousr@pm.me" className="p-3 bg-white/5 rounded-full hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-neutral-300 hover:text-brandIndigo">
                <Mail size={20} />
              </a>
            </div>
          </motion.footer>
        </section>

      </div>
    </div>
  );
}
