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
import { Layers } from 'lucide-react';

const technologies = [
    { name: "Python", category: "Backend / Scripts" },
    { name: "JavaScript", category: "Frontend / Node.js" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React (Vite)", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Django", category: "Framework" },
    { name: "SQL", category: "Database" },
    { name: "Linux / Kali", category: "OS / Sec" },
    { name: "Git & GitHub", category: "VCS" },
    { name: "Ciberseguridad", category: "Skill" },
    { name: "TailwindCSS", category: "Styles" },
    { name: "VS Code", category: "Tools" },
];

const TechStack = () => {
    return (
        <section id="tecnologias" className="py-20 px-4 md:px-20 border-t border-darkPurple/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex flex-col items-center justify-center space-y-4"
                >
                    <Layers className="text-neonCyan" size={40} />
                    <h2 className="text-3xl md:text-4xl font-mono text-neonCyan mb-2">
                        [04] // TECH_STACK
                    </h2>
                    <p className="text-gray-400 mt-2 font-mono text-sm max-w-lg mx-auto">
                        {'>'} Módulos cargados exitosamente. Mostrando dependencias del sistema.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4"
                >
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, scale: 0.5, y: 20 },
                                show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 10 } }
                            }}
                            animate={{
                                y: [0, -8, 0],
                                transition: {
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: Math.random() * 2
                                }
                            }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                                borderColor: '#00ffff',
                                boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
                                zIndex: 10
                            }}
                            className="bg-black/60 border border-gray-800 p-3 md:p-4 rounded-sm flex flex-col items-center justify-center group cursor-crosshair transition-all relative aspect-square"
                        >
                            <h3 className="text-terminalGreen font-mono text-xs md:text-sm group-hover:text-white transition-colors text-center">
                                {tech.name}
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-500 font-sans mt-1 md:mt-2 group-hover:text-neonCyan transition-colors text-center">
                                {tech.category}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
