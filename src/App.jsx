import { useEffect, useRef } from 'react'
import Home from './pages/home/home'
import clickSound from './assets/click.mp3'

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(clickSound);
    audioRef.current.volume = 0.5;

    const playClick = (e) => {

      if (e.target.closest('button, a, .pixel-icon, .dock-icon')) {
        if (audioRef.current) {
      
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {
            console.log("Audio play blocked: Click the page once to enable sound.");
          });
        }
      }
    };


    window.addEventListener('mousedown', playClick);

    return () => window.removeEventListener('mousedown', playClick);
  }, []);

  return <Home />
}