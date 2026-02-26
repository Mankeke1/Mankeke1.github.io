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
import Typewriter from './Typewriter';
import { Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center px-4 md:px-20 pt-20 relative">
            <div className="w-full max-w-4xl z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8, duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-4 md:mb-6 flex items-center space-x-2 text-neonCyan font-mono"
                >
                    <Terminal className="w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10" />
                    <span className="text-lg md:text-xl 2xl:text-3xl">_SYSTEM_INIT</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                    animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                    transition={{ delay: 2.2, duration: 1, type: "spring" }}
                    className="bg-black/60 border border-terminalGreen/30 p-4 sm:p-6 md:p-10 2xl:p-16 rounded-sm shadow-[0_0_20px_rgba(57,255,20,0.15)] backdrop-blur-md relative overflow-hidden"
                >
                    {/* Decorative cyber lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-terminalGreen to-transparent opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neonCyan to-transparent opacity-50"></div>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-8xl font-bold font-mono text-terminalGreen mb-4 glitch-text leading-tight" data-text="> Hola, soy Tomás.">
                        <Typewriter text="> Ejecutando inicio.exe... \n> Hola, soy Tomás." delay={40} />
                    </h1>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.5, duration: 0.8 }}
                        className="mt-6 space-y-4"
                    >
                        <h2 className="text-lg sm:text-xl md:text-2xl 2xl:text-4xl text-gray-300 font-sans leading-relaxed">
                            Estudiante de Ing. Civil Informática | <span className="text-neonCyan">Backend & Full-Stack</span> | Ciberseguridad | Algorithmic Trading
                        </h2>

                        <p className="text-gray-400 font-mono text-xs sm:text-sm 2xl:text-xl border-l-2 border-neonPurple pl-4 py-2 bg-darkPurple/10">
                            [Status: Online] | [Location: Chile_] | [Mission: Automate_Everything]
                        </p>

                        <div className="pt-6 md:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 md:mt-10">
                            <motion.a
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 20, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                href="#proyectos"
                                className="px-6 py-3 sm:px-8 2xl:px-12 2xl:py-5 bg-terminalGreen/10 border border-terminalGreen text-terminalGreen font-mono transition-all relative group overflow-hidden text-center 2xl:text-2xl"
                            >
                                <span className="relative z-10">_VIEW_PROJECTS</span>
                                <div className="absolute inset-0 bg-terminalGreen/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                href="#contacto"
                                className="px-6 py-3 sm:px-8 2xl:px-12 2xl:py-5 bg-neonCyan/10 border border-neonCyan text-neonCyan font-mono transition-all relative group overflow-hidden text-center 2xl:text-2xl"
                            >
                                <span className="relative z-10">_CONTACT_ME</span>
                                <div className="absolute inset-0 bg-neonCyan/20 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
