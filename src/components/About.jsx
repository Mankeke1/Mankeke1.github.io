/*
 * ==========================================
 * PROPIEDAD INTELECTUAL DE TOMÁS
 * ==========================================
 * Este código es de mi autoría y está protegido por derechos de autor.
 * Queda estrictamente prohibida su copia, distribución, reproducción
 * o modificación sin mi consentimiento explícito. Todos los derechos reservados.
 * ==========================================
 */
import { motion } from 'framer-motion';
import { Cpu, Lock, TerminalSquare, Zap } from 'lucide-react';
import Typewriter from './Typewriter';
import Tilt from 'react-parallax-tilt';

const About = () => {
    return (
        <section id="sobre-mi" className="py-20 px-4 md:px-20 border-t border-darkPurple/50 mt-10 relative">
            <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-terminalGreen/20 to-transparent"></div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-mono text-neonCyan mb-2 inline-block border-b-2 border-neonCyan pb-2 pr-4 md:pr-10">
                        [01] // ABOUT_ME
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 2xl:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        className="space-y-4 md:space-y-6 text-gray-300 font-sans text-sm md:text-base 2xl:text-2xl leading-relaxed bg-black/60 p-4 md:p-6 2xl:p-10 border border-gray-800 rounded-sm relative hover:border-terminalGreen/50 transition-colors duration-500 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-1.5 md:w-2 h-full bg-neonPurple shadow-[0_0_15px_#bc13fe]"></div>
                        <p className="relative z-10">
                            Soy estudiante de <span className="text-terminalGreen font-mono">3er año de Ingeniería Civil Informática</span>. Mi objetivo no es solo escribir código, sino diseñar arquitecturas eficientes que funcionen por sí solas.
                        </p>
                        <p className="relative z-10">
                            Cuento con una base fuerte matemática y lógica. Me obsesiona la <span className="text-neonCyan border-b border-neonCyan/50 pb-1">privacidad digital</span>, el <span className="text-neonCyan border-b border-neonCyan/50 pb-1">trading algorítmico</span> y la automatización extrema de procesos. Considero a la IA no solo una herramienta, sino mi compañera técnica en este entorno digital.
                        </p>
                        <div className="text-xs md:text-sm 2xl:text-xl font-mono text-gray-500 mt-4 md:mt-6 p-3 md:p-4 bg-gray-900/80 rounded border-l-2 border-gray-700 relative z-10 leading-relaxed md:leading-normal">
                            <Typewriter text="> system.log('Passionate about hacking the matrix'); \n> User Mankeke1 loaded successfully." delay={30} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 xl:gap-4 2xl:gap-8"
                    >
                        {[
                            { icon: <Lock className="text-neonPurple group-hover:scale-110 transition-transform" size={32} />, title: "Offensive Sec", desc: "Ciberseguridad y pentesting" },
                            { icon: <Zap className="text-terminalGreen group-hover:scale-110 transition-transform" size={32} />, title: "Algorithmic", desc: "Trading bots & strategies" },
                            { icon: <TerminalSquare className="text-neonCyan group-hover:scale-110 transition-transform" size={32} />, title: "Full-Stack", desc: "WebApps funcionales" },
                            { icon: <Cpu className="text-yellow-400 group-hover:scale-110 transition-transform" size={32} />, title: "Automation", desc: "Scripts & IoT Integration" }
                        ].map((item, idx) => (
                            <Tilt key={idx} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="h-full">
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.9 },
                                        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
                                    }}
                                    className="bg-gray-900/50 border border-gray-800 p-4 rounded-sm transition-all group relative overflow-hidden h-full"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="mb-2 relative z-10 scale-90 md:scale-100 2xl:scale-125 origin-left">{item.icon}</div>
                                    <h3 className="font-mono text-white text-sm md:text-base 2xl:text-2xl mb-1 relative z-10">{item.title}</h3>
                                    <p className="text-gray-400 text-xs 2xl:text-lg font-sans relative z-10">{item.desc}</p>
                                </motion.div>
                            </Tilt>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
