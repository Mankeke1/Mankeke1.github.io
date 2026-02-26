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
import { Github, ExternalLink, Code2 } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
    {
        title: "3DFAB_LoRa",
        description: "Sistema de comunicación IoT implementando protocolo LoRa para transmisión de datos. Fuerte enfoque en la integración de hardware y software para entornos de conectividad limitada.",
        tags: ["IoT", "LoRa", "C++", "Node.js", "MongoDB", "React"],
        color: "neonCyan",
        github: "#",
        demo: "https://lorahelios.com"
    },
    {
        title: "ASD Contabilidad",
        description: "Portal web full-stack y aplicación de escritorio para la gestión eficiente de clientes y automatización de procesos contables. Arquitectura escalable y segura.",
        tags: ["React", "Node.js", "Express", "MySQL", "Electron"],
        color: "terminalGreen",
        github: "#",
        demo: "https://asdcontabilidad.cl/"
    },
    {
        title: "Bot Architecture & Inventory",
        description: "Mención especial: Sistemas locales de inventario en Django y arquitecturas de bots en Discord con SQLite.",
        tags: ["Python", "Django", "SQLite", "Discord.js"],
        color: "neonPurple",
        github: "#",
        demo: "#"
    }
];

const colorStyles = {
    neonCyan: {
        cardHover: "hover-glow-cyan hover:border-neonCyan",
        icon: "text-neonCyan",
        titleHover: "group-hover:text-neonCyan",
        tagBorderHover: "group-hover:border-neonCyan/50"
    },
    terminalGreen: {
        cardHover: "hover-glow hover:border-terminalGreen",
        icon: "text-terminalGreen",
        titleHover: "group-hover:text-terminalGreen",
        tagBorderHover: "group-hover:border-terminalGreen/50"
    },
    neonPurple: {
        cardHover: "hover:shadow-[0_0_20px_#bc13fe] hover:border-neonPurple",
        icon: "text-neonPurple",
        titleHover: "group-hover:text-neonPurple",
        tagBorderHover: "group-hover:border-neonPurple/50"
    }
};

const Projects = () => {
    return (
        <section id="proyectos" className="py-20 px-4 md:px-20 border-t border-darkPurple/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: 50, skewX: 10 }}
                    whileInView={{ opacity: 1, x: 0, skewX: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="mb-12 text-right"
                >
                    <h2 className="text-3xl md:text-4xl font-mono text-terminalGreen mb-2 inline-block border-b-2 border-terminalGreen pb-2 pl-10">
                        [02] // FEATURED_PROJECTS
                    </h2>
                    <p className="text-gray-400 mt-4 font-mono text-sm max-w-2xl ml-auto">
                        {'>'} Escaneando repositorios locales... Encontrados {projects.length} proyectos relevantes.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, idx) => (
                        <Tilt
                            key={idx}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={1500}
                            className="h-full"
                        >
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 50, rotateX: -20, scale: 0.9 },
                                    show: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
                                }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className={`bg-black/80 border border-gray-800 p-6 rounded-sm relative flex flex-col group transition-all duration-300 transform-gpu preserve-3d h-full ${colorStyles[project.color]?.cardHover}`}
                            >
                                {/* Holographic overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <Code2 className={`${colorStyles[project.color]?.icon} group-hover:scale-125 transition-transform duration-500`} size={32} />
                                    <div className="flex space-x-3">
                                        {project.github !== "#" && (
                                            <a href={project.github} className="text-gray-400 hover:text-white transition-colors hover:scale-125 transform" title="Repository">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.demo !== "#" && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-125 transform" title="Live Demo">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className={`text-xl font-bold font-mono text-white mb-3 ${colorStyles[project.color]?.titleHover} transition-colors group-hover:translate-x-2 transform duration-300`}>
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm font-sans mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className={`text-xs font-mono px-2 py-1 bg-gray-900 border border-gray-700 text-gray-300 ${colorStyles[project.color]?.tagBorderHover} transition-colors`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
