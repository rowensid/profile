import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wifi, Shield, Cpu } from 'lucide-react';

const VrsSpace: React.FC = () => {
  return (
    <section id="venture" className="py-24 bg-white px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <span className="font-mono text-green-600 text-sm tracking-tight">● SYSTEM OPERATIONAL</span>
                <h2 className="text-5xl md:text-8xl font-display font-bold text-black uppercase mt-2 tracking-tighter">
                    VRS Space
                </h2>
            </div>
            <p className="max-w-md text-neutral-600 font-sans text-sm md:text-base border-l border-neutral-200 pl-6">
                Premium Cloud Infrastructure.
                Kami menyediakan jaringan Game Hosting, VPS, dan RDP dengan performa enterprise.
            </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {[
                {
                    id: "01",
                    name: "GAME HOSTING",
                    desc: "FiveM & Minecraft Optimized",
                    icon: Wifi,
                    features: ["Anti-DDoS Pro", "Ryzen 9 Performance"]
                },
                {
                    id: "02",
                    name: "CLOUD VPS",
                    desc: "Root Access & Scalable",
                    icon: Cpu,
                    features: ["NVMe Storage", "10Gbps Uplink"]
                },
                {
                    id: "03",
                    name: "PRIVATE RDP",
                    desc: "Secure Remote Desktop",
                    icon: Shield,
                    features: ["Admin Access", "24/7 Uptime"]
                }
            ].map((service, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative bg-neutral-50 border border-neutral-200 p-8 hover:bg-black hover:border-black transition-all duration-300 min-h-[300px] flex flex-col justify-between"
                >
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-xl text-neutral-400 group-hover:text-neutral-500 transition-colors">/{service.id}</span>
                        <service.icon className="text-neutral-400 group-hover:text-white transition-colors" />
                    </div>

                    <div>
                        <h3 className="text-3xl font-display font-bold text-black group-hover:text-white uppercase mb-2 transition-colors">
                            {service.name}
                        </h3>
                        <p className="text-neutral-500 group-hover:text-neutral-400 font-sans text-sm mb-6 transition-colors">
                            {service.desc}
                        </p>
                        
                        <div className="space-y-2">
                            {service.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-neutral-400 group-hover:bg-white"></div>
                                    <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-300 uppercase tracking-widest">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <ArrowUpRight className="absolute bottom-8 right-8 text-neutral-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0" />
                </motion.div>
            ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
            <a href="#" className="inline-block px-12 py-4 bg-black text-white font-display font-bold text-xl uppercase tracking-wide hover:bg-neutral-800 transition-colors">
                Visit Official Site
            </a>
        </div>
      </div>
    </section>
  );
};

export default VrsSpace;