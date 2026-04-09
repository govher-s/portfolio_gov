import { useEffect, useRef } from 'react'
import Home from './pages/home/home'
import clickFile from './assets/click.mp3'

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(clickFile);
    audioRef.current.volume = 0.5;
    
   
    audioRef.current.load();

    const playClick = (e) => {
      if (e.target.closest('button, a, .pixel-icon, .dock-icon')) {
        const sound = audioRef.current;
        if (sound) {
          sound.currentTime = 0;
          sound.play().catch(err => {
            console.warn("Audio waiting for first user interaction...");
          });
        }
      }
    };

    window.addEventListener('mousedown', playClick);
    return () => window.removeEventListener('mousedown', playClick);
  }, []);

  return <Home />
}