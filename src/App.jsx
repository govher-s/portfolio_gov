import { useEffect } from 'react'
import Home from './pages/home/home'
import clickFile from './assets/click.mp3'

export default function App() {
  useEffect(() => {
    const audio = new Audio(clickFile);
    audio.volume = 0.5;

    const playClick = (e) => {
      if(e.target.closest('button, a, .pixel-icon, .dock-icon')){
        clickSound.currentTime = 0;
        clickSound.play().catch(err => console.log("Audio play clocked by browser, click anywhere to start!"));
      }
    };
    window.addEventListener('mousedown', playClick);

    return () => window.removeEventListener('mousedown', playClick);
  },[]);
  return <Home />
}