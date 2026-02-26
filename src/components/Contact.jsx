/*
 * ==========================================
 * PROPIEDAD INTELECTUAL DE TOMÁS
 * ==========================================
 * Este código es de mi autoría y está protegido por derechos de autor.
 * Queda estrictamente prohibida su copia, distribución, reproducción
 * o modificación sin mi consentimiento explícito. Todos los derechos reservados.
 * ==========================================
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalSquare, Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
    const [inputVal, setInputVal] = useState('');
    const [messages, setMessages] = useState([
        { text: "Conexión segura establecida.", type: "system" },
        { text: "Esperando input del usuario...", type: "system" }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputVal.trim()) return;

        setMessages(prev => [...prev, { text: `> ${inputVal}`, type: "user" }]);

        // Open default mail client with the message
        setTimeout(() => {
            window.location.href = `mailto:contactousr@pm.me?subject=Mensaje desde Portafolio&body=${encodeURIComponent(inputVal)}`;

            setMessages(prev => [...prev, {
                text: "Abriendo cliente de correo local para enviar: " + inputVal,
                type: "system"
            }]);
        }, 600);

        setInputVal('');
    };

    return (
        <section id="contacto" className="py-20 px-4 md:px-20 border-t border-darkPurple/50 pb-32">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-mono text-terminalGreen mb-2 flex items-center">
                        <TerminalSquare className="mr-2 md:mr-3 w-6 h-6 md:w-8 md:h-8 2xl:w-12 2xl:h-12" />
                        [05] // CONTACT
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    className="bg-black/80 border border-gray-700 rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.8)] overflow-hidden hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] transition-shadow duration-500"
                >
                    {/* Terminal Header */}
                    <div className="bg-gray-900 border-b border-gray-700 px-3 md:px-4 py-2 2xl:py-4 flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 2xl:w-4 2xl:h-4 rounded-full bg-red-500 shadow-[0_0_5px_#ef4444]"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 2xl:w-4 2xl:h-4 rounded-full bg-yellow-500 shadow-[0_0_5px_#eab308]"></div>
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 2xl:w-4 2xl:h-4 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
                        <span className="text-[10px] md:text-xs 2xl:text-base text-gray-400 font-mono ml-2 md:ml-4">guest@mankeke1:~</span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-4 md:p-6 2xl:p-10 font-mono text-xs md:text-sm 2xl:text-xl h-48 md:h-64 2xl:h-96 overflow-y-auto space-y-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-terminalGreen/5 to-transparent pointer-events-none"></div>

                        {messages.map((msg, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`relative z-10 ${msg.type === 'system' ? 'text-gray-400' : msg.type === 'error' ? 'text-red-500' : 'text-neonCyan'}`}
                            >
                                {msg.text}
                            </motion.div>
                        ))}

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center mt-4 md:mt-6 relative z-10 w-full gap-2 sm:gap-0">
                            <span className="text-terminalGreen whitespace-nowrap sm:mr-2">{'>'} Ingrese mensaje:</span>
                            <div className="flex-grow flex items-center w-full bg-black/50 sm:bg-transparent p-2 sm:p-0 rounded border border-gray-700 sm:border-none">
                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={(e) => setInputVal(e.target.value)}
                                    className="bg-transparent border-none outline-none text-white w-full font-mono caret-terminalGreen text-xs md:text-sm 2xl:text-xl"
                                    autoComplete="off"
                                    spellCheck="false"
                                />
                                <button type="submit" className="text-terminalGreen sm:hidden p-1 bg-gray-800 rounded ml-2"><Send size={14} /></button>
                                {/* Hidden submit button for Enter key support on desktop */}
                                <button type="submit" className="hidden"><Send size={16} /></button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6"
                >
                    <motion.a
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
                        }}
                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px -10px rgba(57, 255, 20, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Mankeke1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-6 py-3 border border-gray-600 hover:border-terminalGreen text-gray-300 hover:text-terminalGreen transition-all bg-gray-900/50 w-full md:w-auto hover-glow"
                    >
                        <Github size={24} />
                        <span className="font-mono">GitHub://Mankeke1</span>
                    </motion.a>

                    <motion.a
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
                        }}
                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px -10px rgba(0, 255, 255, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://www.linkedin.com/in/tomasquinelen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 px-6 py-3 border border-gray-600 hover:border-neonCyan text-gray-300 hover:text-neonCyan transition-all bg-gray-900/50 w-full md:w-auto hover-glow-cyan"
                    >
                        <Linkedin size={24} />
                        <span className="font-mono">LinkedIn://Tomás</span>
                    </motion.a>

                    <motion.a
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200 } }
                        }}
                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 20px -10px rgba(188, 19, 254, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:contactousr@pm.me"
                        className="flex items-center space-x-3 px-6 py-3 border border-gray-600 hover:border-neonPurple text-gray-300 hover:text-neonPurple transition-all bg-gray-900/50 w-full md:w-auto hover:shadow-[0_0_15px_#bc13fe] hover:-translate-y-0.5"
                    >
                        <Mail size={24} />
                        <span className="font-mono">MAIL</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
