import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const DiscordIcon = ({ size = 24 }: { size?: number | string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    stroke="none"
  >
    <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09.01-.02-.01-.07-.07-.07-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.2 2.65.03.02.07 0 .08-.03.41-.56.77-1.16 1.09-1.8-.02-.05-.07-.09-.12-.1-.57-.21-1.11-.48-1.64-.78-.06-.03-.06-.11 0-.14.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.45 1.57 7.18 1.57 10.63 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.06.03.06.11 0 .14-.53.3-1.08.57-1.64.78-.05.02-.1.05-.12.1.32.64.68 1.24 1.09 1.8.01.03.05.05.08.03 1.67-.53 3.4-1.33 5.2-2.65.02-.01.03-.03.03-.05.44-4.52-.6-9.67-4.27-13.72-.01-.01-.02-.02-.03-.02ZM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12Z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white py-20 px-6 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <h2 className="text-6xl md:text-8xl font-display font-bold text-neutral-200 uppercase tracking-tighter hover:text-black transition-colors cursor-default">
                Let's <br/> Collaborate
            </h2>
            <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
                <a href="mailto:rowensid2802@gmail.com" className="text-2xl md:text-3xl text-black font-sans border-b border-black hover:text-neutral-600 hover:border-neutral-600 transition-all pb-1 mb-6">
                    rowensid2802@gmail.com
                </a>
                <div className="flex gap-4">
                    {[Github, DiscordIcon, Linkedin, Mail].map((Icon, i) => (
                        <a key={i} href="https://discord.gg/ZeTEe3RHEW" className="w-12 h-12 flex items-center justify-center border border-neutral-300 text-neutral-500 hover:bg-black hover:text-white transition-all">
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-neutral-200 pt-8">
            <span className="text-neutral-400 font-mono text-xs uppercase mb-4 md:mb-0">
                © 2025 NR. All Rights Reserved.
            </span>
            <span className="text-neutral-400 font-mono text-xs uppercase">
                Designed with <span className="text-black">Next.js</span> & <span className="text-black">Tailwind</span>
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;