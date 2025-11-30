import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const useTypingEffect = (fullText: string, pauseTime: number = 8000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentLength = text.length;

      if (isDeleting) {
        if (currentLength === 0) {
          // Finished deleting, wait a bit before retyping
          setIsDeleting(false);
        } else {
          setText(fullText.substring(0, currentLength - 1));
        }
      } else {
        if (currentLength === fullText.length) {
          // Finished typing, trigger delete phase after pause
          setIsDeleting(true);
        } else {
          setText(fullText.substring(0, currentLength + 1));
        }
      }
    };

    // Determine speed based on state
    let delay = isDeleting ? 50 : 150; // Deleting is faster than typing
    
    // Override delay for pauses
    if (!isDeleting && text === fullText) {
      delay = pauseTime; // Wait long time when full
    } else if (isDeleting && text === '') {
      delay = 1000; // Wait 1s before starting to type again
    }

    const timer = setTimeout(handleTyping, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, fullText, pauseTime]);

  return text;
};

const Hero: React.FC = () => {
  const marqueeText = "FULL STACK DEVELOPER — CEO VRS SPACE — FIVEM — ROBLOX — WEB DEV — ";
  
  // The | character acts as our line break marker
  const typedText = useTypingEffect("NCANG|ROWENS", 8000);
  const textParts = typedText.split('|');

  return (
    <section className="relative min-h-screen w-full flex flex-col pt-20 bg-white">
      
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" 
           style={{ backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>

      <div className="flex-grow flex flex-col justify-center px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Top Meta Info */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-end border-b border-black pb-4 mb-8"
          >
             <div className="flex flex-col">
                <span className="text-xs font-mono text-neutral-500">AVAILABLE FOR NEW PROJECTS</span>
                <span className="text-xs font-mono text-black font-bold">MEDAN, ID</span>
             </div>
             <div className="text-right hidden md:block">
                <span className="text-xs font-mono text-neutral-500 block">SCROLL DOWN</span>
             </div>
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden min-h-[160px] md:min-h-[280px]"> 
            {/* min-h added to prevent layout shift when text is empty */}
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-9xl font-display font-bold text-black uppercase tracking-tighter leading-[0.9]"
            >
              {textParts[0]}
              {textParts.length > 1 && <br />}
              {textParts.length > 1 && textParts[1]}
              <span className="inline-block w-3 h-10 md:w-6 md:h-20 bg-black align-baseline md:align-middle animate-pulse ml-1 md:ml-4 mb-2 md:mb-4" />
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-4">
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-start gap-6"
            >
                <div className="bg-black text-white px-3 py-1 inline-block">
                    <span className="text-sm font-bold font-mono uppercase">NR. / 2024</span>
                </div>
                <p className="max-w-xl text-neutral-600 font-sans text-lg md:text-xl leading-relaxed">
                   I build digital infrastructure and immersive gaming experiences. 
                   Founder of <span className="text-black border-b border-black font-medium">VRS Space</span>. 
                   Specialized in backend systems, game logic, and cloud architecture.
                </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex gap-4"
          >
             <a href="#about" className="group flex items-center gap-2 px-6 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
                <span className="font-mono text-sm uppercase">Explore</span>
                <ArrowDownRight size={16} />
             </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="border-y border-neutral-200 py-4 overflow-hidden bg-white/50 backdrop-blur-sm relative z-20">
         <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(4)].map((_, i) => (
                <span key={i} className="text-4xl md:text-6xl font-display font-bold text-transparent stroke-text uppercase mx-4 opacity-70">
                    {marqueeText}
                </span>
            ))}
         </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px #000;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;