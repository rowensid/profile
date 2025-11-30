import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white px-6 md:px-12 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
           <div className="w-3 h-3 bg-black"></div>
           <span className="font-mono text-sm text-neutral-500 tracking-widest uppercase">/ PROFILE_DATA_01</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Text Info */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
            >
                <h2 className="text-5xl md:text-7xl font-display font-bold text-black uppercase leading-[0.9] mb-8">
                    The Architect <br/> 
                    <span className="text-neutral-400">Behind The Code.</span>
                </h2>

                <div className="space-y-6 text-lg md:text-xl font-sans text-neutral-600 leading-relaxed border-l-2 border-black pl-6">
                    <p>
                        <strong className="text-black">Ncang Rowens.</strong> Developer, Founder, Visionary. 
                        Based in <strong className="text-black">Medan</strong>, gue crafting digital experiences dari script FiveM yang kompleks sampe infrastruktur server <strong className="text-black">VRS Space</strong> yang solid.
                    </p>
                    <p>
                        Gak cuma sekedar coding, gue paham betul soal <em>scalability</em> dan logic bisnis. Gue main di <span className="text-black underline decoration-neutral-400 underline-offset-4">Next.js</span>, <span className="text-black underline decoration-neutral-400 underline-offset-4">Lua</span>, & <span className="text-black underline decoration-neutral-400 underline-offset-4">Python</span>. 
                        Intinya, <em className="italic text-black">I build things that work seamlessly.</em>
                    </p>
                </div>

                {/* Tech Specs / Mini Grid */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="bg-neutral-50 border border-neutral-200 p-4">
                        <Cpu className="text-black mb-2" size={20} />
                        <h4 className="font-mono text-xs text-neutral-500 uppercase">Current Role</h4>
                        <span className="font-display font-bold text-black uppercase">CEO @ VRS Space</span>
                    </div>
                    <div className="bg-neutral-50 border border-neutral-200 p-4">
                        <Terminal className="text-black mb-2" size={20} />
                        <h4 className="font-mono text-xs text-neutral-500 uppercase">Main Stack</h4>
                        <span className="font-display font-bold text-black uppercase">Fullstack & DevOps</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Profile Picture */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 relative group"
            >
                {/* Decorative Frame Elements */}
                <div className="absolute -inset-2 border border-neutral-300 z-0"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-black z-20"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-black z-20"></div>

                {/* Image Container */}
                <div className="relative z-10 bg-neutral-100 aspect-[3/4] overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                    {/* Placeholder Image - Replace with your actual photo */}
                    <img 
                        src="https://i.ibb.co.com/8n3cx6fK/profile.jpg" 
                        alt="Ncang Rowens Profile" 
                        className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    
                    {/* Overlay Info on Image */}
                    {/* Dark gradient kept for text legibility on top of image */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                        <div className="flex justify-between items-end border-b border-white/30 pb-4">
                            <div>
                                <h3 className="text-3xl font-display font-bold text-white uppercase">NCANG ROWENS</h3>
                                <p className="font-mono text-xs text-neutral-300 mt-1">LOC: MEDAN, ID</p>
                            </div>
                            <ArrowUpRight className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-4 top-10 bg-black text-white py-2 px-4 z-30 font-bold font-mono text-xs tracking-wider rotate-90 origin-right shadow-xl">
                    AUTHORIZED_PERSONNEL
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;