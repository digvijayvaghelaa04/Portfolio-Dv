import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Play, Pause, Volume2, VolumeX, X } from 'lucide-react';

export function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio on mount
  useEffect(() => {
    // High-quality placeholder for lo-fi coding beats (Pixabay).
    // You can replace this URL with a local file path like '/assets/bg-music.mp3'
    const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3');
    audio.loop = true;
    audioRef.current = audio;

    // Load saved preferences
    const savedVolume = localStorage.getItem('portfolio_music_volume');
    const savedPlaying = localStorage.getItem('portfolio_music_playing');
    const savedMuted = localStorage.getItem('portfolio_music_muted');

    if (savedVolume) {
      const parsedVol = parseFloat(savedVolume);
      setVolume(parsedVol);
      audio.volume = parsedVol;
    } else {
      audio.volume = 0.5;
    }

    if (savedMuted === 'true') {
      setIsMuted(true);
      audio.muted = true;
    }

    if (savedPlaying === 'true') {
      // Attempt to play, browsers may block this until first interaction
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Autoplay blocked by browser. User needs to interact first.", e);
        setIsPlaying(false);
        localStorage.setItem('portfolio_music_playing', 'false');
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem('portfolio_music_playing', 'false');
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        localStorage.setItem('portfolio_music_playing', 'true');
      }).catch(e => console.error("Error playing audio", e));
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    localStorage.setItem('portfolio_music_volume', newVolume.toString());
    
    if (newVolume > 0 && isMuted) {
      toggleMute();
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
    localStorage.setItem('portfolio_music_muted', newMuted.toString());
  };

  return (
    <div className="fixed bottom-24 right-4 md:right-8 z-40 flex flex-col items-end gap-4 pointer-events-none">
      {/* Expandable Player Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
            className="glass-card p-5 rounded-3xl w-64 shadow-2xl dark:shadow-[0_0_40px_rgba(108,76,241,0.2)] border border-[var(--primary)]/20 pointer-events-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${isPlaying ? 'bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]' : 'bg-gray-400'}`} />
                <span className="text-sm font-bold text-gray-800 dark:text-gray-200 truncate pr-2">
                  Lo-Fi Coding Beats
                </span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors p-1"
                aria-label="Close music player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <button
                onClick={togglePlay}
                className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-tr from-[var(--primary)] to-[var(--accent-blue)] text-white flex items-center justify-center hover:shadow-[0_0_20px_rgba(108,76,241,0.5)] transition-all shadow-lg hover:scale-105 active:scale-95"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 ml-1 fill-current" />}
              </button>
              
              <div className="flex-1 relative">
                <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden w-full relative">
                   {isPlaying ? (
                     <motion.div 
                       className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-blue)] rounded-full w-full"
                       animate={{ x: ['-100%', '100%'] }}
                       transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                     />
                   ) : (
                     <div className="absolute top-0 left-0 bottom-0 bg-[var(--primary)]/30 rounded-full w-full" />
                   )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button 
                onClick={toggleMute}
                className="text-gray-500 hover:text-[var(--primary)] transition-colors p-1"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.01" 
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1.5 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                aria-label="Volume"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 relative pointer-events-auto ${
          isOpen || isPlaying
            ? 'bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(108,76,241,0.5)] border-none' 
            : 'glass-card text-gray-700 dark:text-gray-300 hover:text-[var(--primary)] hover:border-[var(--primary)]/50'
        }`}
        aria-label="Toggle music player"
      >
        <Music className="w-5 h-5" />
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-[#050505]"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
