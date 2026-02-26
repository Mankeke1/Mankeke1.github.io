/*
 * ==========================================
 * PROPIEDAD INTELECTUAL DE TOMÁS
 * ==========================================
 * Este código es de mi autoría y está protegido por derechos de autor.
 * Queda estrictamente prohibida su copia, distribución, reproducción
 * o modificación sin mi consentimiento explícito. Todos los derechos reservados.
 * ==========================================
 */
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadComplete, setLoadComplete] = useState(false);
  const [bootLogs, setBootLogs] = useState([]);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const logs = [
      "INITIALIZING NEURAL NETWORKS...",
      "LOADING KERNEL MODULES [OK]",
      "MOUNTING ENCRYPTED FILE SYSTEMS...",
      "BYPASSING SECURITY PROTOCOLS [WARNING]",
      "ESTABLISHING SECURE CONNECTION...",
      "DECRYPTING USER DATA...",
      "ACCESS GRANTED."
    ];

    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < logs.length) {
        setBootLogs(prev => [...prev, logs[currentLog]]);
        currentLog++;
      }
    }, 450); // Slowed down from 200

    const progressInterval = setInterval(() => {
      setLoadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setLoadComplete(true), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 2; // Slower progress increments
      });
    }, 350); // Slowed down from 150

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  const navLinks = [
    { href: "#inicio", label: "_INIT", hoverClass: "hover:text-terminalGreen hover-glow" },
    { href: "#sobre-mi", label: "_ABOUT", hoverClass: "hover:text-neonCyan hover-glow-cyan" },
    { href: "#proyectos", label: "_PROJECTS", hoverClass: "hover:text-terminalGreen hover-glow" },
    { href: "#experiencia", label: "_LOGS", hoverClass: "hover:text-neonPurple hover:shadow-[0_0_15px_#bc13fe] transition-all" },
    { href: "#contacto", label: "_CONTACT", hoverClass: "hover:text-neonCyan hover-glow-cyan" },
  ];

  if (!loadComplete) {
    return (
      <div className="min-h-screen bg-black flex flex-col justify-center items-start p-8 md:p-20 text-terminalGreen font-mono relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #39ff14 2px, #39ff14 4px)' }}></div>

        <div className="max-w-2xl w-full z-10">
          <h1 className="text-3xl md:text-5xl mb-8 glitch-text font-bold" data-text="SYSTEM_BOOT_SEQ">SYSTEM_BOOT_SEQ</h1>

          <div className="space-y-2 mb-8 h-48 overflow-hidden flex flex-col justify-end">
            {bootLogs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm md:text-base text-gray-300"
              >
                {'>'} {log}
              </motion.div>
            ))}
          </div>

          <div className="w-full h-1 bg-gray-900 overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-neonCyan shadow-[0_0_10px_#00ffff]"
              initial={{ width: "0%" }}
              animate={{ width: `${loadProgress}%` }}
              transition={{ ease: "circOut" }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs">
            <span className="animate-pulse">LOADING...</span>
            <span>{Math.min(loadProgress, 100)}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-terminalGreen selection:text-black overflow-hidden relative">
      <ParticlesBackground />

      {/* Background Grid with Parallax */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(57, 255, 20, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.05) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          y: backgroundY
        }}
      ></motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 border-b-terminalGreen/20 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="flex-shrink-0 flex items-center"
            >
              <span className="font-mono text-terminalGreen font-bold text-xl glitch-text" data-text="TOM>">TOM{'>'}</span>
            </motion.div>

            <div className="hidden md:flex space-x-2 font-mono text-sm">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 1 + (index * 0.15), type: "spring", stiffness: 200, damping: 12 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 px-3 py-2 rounded-sm transition-all duration-300 ${link.hoverClass}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-6 text-center space-y-2">
        <p className="font-mono text-gray-500 italic text-sm">"Fortis Fortuna Adiuvat"</p>
        <p className="font-mono text-gray-600 text-xs mt-2">
          © {new Date().getFullYear()} Portafolios Tom. Coded with React & Tailwind.<br />
          <span className="text-terminalGreen/50 mt-1 inline-block">SYSTEM_SHUTDOWN // PENDING...</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
