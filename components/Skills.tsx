import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { cat: "LANGUAGES", list: ["TypeScript", "Lua", "Python", "PHP"] },
    { cat: "FRAMEWORKS", list: ["Next.js 14", "React", "Laravel", "Tailwind"] },
    { cat: "GAME DEV", list: ["FiveM Native", "Roblox Studio", "ESX/QBCore", "Anti-Cheat"] },
    { cat: "DEVOPS", list: ["Linux (Ubuntu/Debian)", "Docker", "Nginx", "Cyberpanel"] },
  ];

  return (
    <section id="skills" className="bg-white border-b border-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-r border-b border-neutral-200 p-8 md:p-12 hover:bg-neutral-50 transition-colors group"
          >
            <h3 className="font-mono text-xs text-neutral-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-neutral-300 group-hover:bg-black transition-colors"></span>
                {category.cat}
            </h3>
            <ul className="space-y-4">
                {category.list.map((item, i) => (
                    <li key={i} className="text-xl md:text-2xl font-display font-bold text-neutral-800 group-hover:text-black transition-colors uppercase cursor-default">
                        {item}
                    </li>
                ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;