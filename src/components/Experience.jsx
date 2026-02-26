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
import { GitCommit, GitBranch } from 'lucide-react';

const timeline = [
    {
        year: "ACTUALIDAD",
        title: "Ingeniería Civil Informática (3er Año)",
        description: "Recién pasado a 3er año de Ingeniería Civil Informática. Profundizando en arquitecturas y fortaleciendo la base lógico-matemática.",
        type: "feat"
    },
    {
        year: "2026",
        title: "Proyecto LoRa Helios 3DFAB",
        description: "Integración e implementación de sistema comunicacional IoT con protocolo LoRa para transmisión de datos a larga distancia.",
        type: "research"
    },
    {
        year: "2026",
        title: "Sistema de Inventarios",
        description: "Desarrollo de sistema de inventarios completo, hosteado 100% en local desde la empresa.",
        type: "build"
    },
    {
        year: "2025",
        title: "Portal ASD Contabilidad",
        description: "Creación de portal web Full-Stack para la gestión de clientes y automatización de procesos contables.",
        type: "build"
    },
    {
        year: "2024",
        title: "Arquitectura de Bots en Discord",
        description: "Proyecto personal: desarrollo de bots y automatizaciones complejas integrando bases de datos.",
        type: "init"
    },
    {
        year: "2018",
        title: "Olimpiadas de Matemáticas (U. de Chile)",
        description: "Participación en olimpiadas de matemáticas forjando una fuerte base de pensamiento lógico y analítico.",
        type: "logic"
    }
];

const Experience = () => {
    return (
        <section id="experiencia" className="py-20 px-4 md:px-20 border-t border-darkPurple/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-12 flex items-center space-x-3 md:space-x-4"
                >
                    <GitBranch className="text-neonPurple w-6 h-6 md:w-8 md:h-8 2xl:w-10 2xl:h-10" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-mono text-neonPurple border-b-2 border-neonPurple pb-2 pr-4 md:pr-10 inline-block">
                        [03] // SYSTEM_LOGS
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="relative border-l border-gray-700 ml-4 md:ml-8 space-y-12 pb-8"
                >
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, x: -50, rotateX: 20 },
                                show: { opacity: 1, x: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
                            }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline dot / commit icon */}
                            <div className="absolute -left-3.5 top-1 bg-dark rounded-full p-1 border border-neonPurple group-hover:bg-neonPurple/20 group-hover:shadow-[0_0_10px_#bc13fe] transition-all duration-300">
                                <GitCommit size={18} className="text-neonPurple group-hover:scale-125 transition-transform" />
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02, x: 5, md: { x: 10 } }}
                                className="bg-black/40 border border-gray-800 p-4 md:p-6 2xl:p-8 rounded-sm hover:border-neonPurple/50 transition-colors duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-bl from-neonPurple/10 to-transparent pointer-events-none"></div>
                                <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-2 md:mb-4 relative z-10">
                                    <span className="text-terminalGreen font-mono text-xs md:text-sm 2xl:text-lg bg-gray-900/80 px-2 py-1 rounded inline-block w-max mb-2 md:mb-0">
                                        commit: <span className="text-neonCyan">{item.type}</span>({item.year.replace(/\s+/g, '').toLowerCase()})
                                    </span>
                                    <span className="text-xs 2xl:text-base text-gray-500 font-mono hidden md:inline-block">--author Mankeke1</span>
                                </div>

                                <h3 className="text-lg md:text-xl 2xl:text-3xl font-bold font-mono text-white mb-2 md:mb-3 group-hover:text-neonPurple transition-colors relative z-10">
                                    {item.title}
                                </h3>

                                <p className="text-sm md:text-base 2xl:text-xl text-gray-400 font-sans leading-relaxed relative z-10">
                                    {item.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
