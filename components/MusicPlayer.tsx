
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Disc, Minus, Volume2, VolumeX, SkipForward, SkipBack, Music2 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // PLAYLIST LOCAL FILES
  // Note: Ensure these files exist in your 'public/music/' directory
  const playlist = [
    {
      title: "SEPERTI MATI LAMPU",
      artist: "KING NASSAR",
      src: "/music/seperti-mati-lampu.mp3" 
    },
    {
      title: "ONE IN A MILLION",
      artist: "CONKARAH (REGGAE)",
      src: "/music/one-in-a-million.mp3" 
    },
    {
      title: "SHE'S GONE",
      artist: "STEELHEART",
      src: "/music/shes-gone.mp3" 
    }
  ];

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    // Initialize Audio instance
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5;

    const handleEnded = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
      // Ensure playing continues
      // Note: We rely on the currentTrackIndex effect to trigger play
    };

    const handleTimeUpdate = () => {
      if (audioRef.current && audioRef.current.duration) {
        const current = audioRef.current.currentTime;
        const total = audioRef.current.duration;
        setProgress((current / total) * 100);
      }
    };

    audioRef.current.addEventListener('ended', handleEnded);
    audioRef.current.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        audioRef.current = null;
      }
    };
  }, []);

  // Handle Play/Pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.warn("Playback prevented. User interaction required.", error);
                setIsPlaying(false);
            });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Handle Track Change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = playlist[currentTrackIndex].src;
      setProgress(0);
      if (isPlaying) {
        audioRef.current.play().catch(console.warn);
      }
    }
  }, [currentTrackIndex]);

  // Handle Mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <div className="pointer-events-auto">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-black text-white w-[300px] border border-neutral-800 shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-neutral-900 px-3 py-2 flex justify-between items-center border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <span className="text-[10px] font-mono text-neutral-400 tracking-widest">
                    LOCAL_PLAYER /// {currentTrackIndex + 1}/{playlist.length}
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
                  <Minus size={14} />
                </button>
              </div>

              {/* Main Content */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  {/* Visualizer */}
                  <div className="relative w-12 h-12 bg-neutral-900 border border-neutral-700 flex items-center justify-center overflow-hidden group shrink-0">
                     {isPlaying ? (
                        <div className="flex items-end justify-center gap-[2px] h-6">
                            {[1,2,3,4].map(i => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [4, 16, 8, 20, 4] }}
                                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                                    className="w-1 bg-white"
                                />
                            ))}
                        </div>
                     ) : (
                        <Music2 size={20} className="text-neutral-500" />
                     )}
                  </div>

                  {/* Track Info */}
                  <div className="flex-1 overflow-hidden min-w-0">
                    <div className="relative overflow-hidden h-5 w-full">
                        <div className={`whitespace-nowrap ${isPlaying ? 'animate-marquee' : ''}`}>
                            <span className="text-sm font-bold font-display uppercase tracking-wide mr-8">
                                {currentTrack.title} /// {currentTrack.artist}
                            </span>
                            <span className="text-sm font-bold font-display uppercase tracking-wide">
                                {currentTrack.title} /// {currentTrack.artist}
                            </span>
                        </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-white transition-all duration-300 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <button onClick={toggleMute} className="text-neutral-400 hover:text-white transition-colors">
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </button>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={prevTrack} className="text-neutral-500 hover:text-white transition-colors">
                            <SkipBack size={20} />
                        </button>
                        
                        <button 
                            onClick={togglePlay}
                            className="w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors"
                        >
                            {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                        </button>
                        
                        <button onClick={nextTrack} className="text-neutral-500 hover:text-white transition-colors">
                            <SkipForward size={20} />
                        </button>
                    </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setIsOpen(true)}
              className="w-12 h-12 bg-black text-white border border-neutral-800 shadow-xl flex items-center justify-center group relative overflow-hidden"
            >
               <Disc size={24} className={isPlaying ? "animate-spin-slow" : ""} />
               {isPlaying && (
                 <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></span>
               )}
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;
