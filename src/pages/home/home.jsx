import { useState } from 'react'
import './home.css'
import Profile from '../profile/profile'
import { User, Folder, Heart, Briefcase, Zap, Home as HomeIcon} from 'pixelarticons/react'

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  return (
    <div className="home">
      <div className='desktop'>
        <div className='icon-group left'>
          <a onClick={(e) => {
            e.preventDefault();
            setIsProfileOpen(true);
          }}href='#profile' className='pixel-icon'>
            <User width={64} height={64} color="#c268bd" />
            <span className="icon-label">Profile</span>
          </a>
          <a href="#projects" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Projects</span>
          </a>
          <a href="#hobbies" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Hobbies</span>
          </a>
        </div>

        <div className="icon-group right">
          <a href="#experience" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Experience</span>
          </a>
          <a href="#skills" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Skills</span>
          </a>
        </div>
        <div className='bottom-menu'>
          <a href='#home' className='dock-icon'>
            <HomeIcon width={64} height={64} color="#c268bd" />
            <span className="dock-tooltip">Home</span>
          </a>
          <a href='https://github.com/govher-s' target="_blank" rel="noreferrer" className='dock-icon'>
            <img src="/Github.svg" alt="Github" width={48} height={48} className="svg-img" />
            <span className="dock-tooltip">Github</span>
          </a>
          
          <a href='https://linkedin.com/in/govher-sapardurdyyeva' target="_blank" rel="noreferrer" className='dock-icon'>
            <img src="/linkedin.svg" alt="LinkedIn" width={80} height={80} className="svg-img" />
            <span className="dock-tooltip">LinkedIn</span>
          </a>
        </div>
      </div>

      {isProfileOpen && <Profile onClose={() => setIsProfileOpen(false)} />}

      <div className='home-title'>
          <span className='home-sub'>Govher's</span>
          <h1 className='home-head'>Portfolio</h1>
      </div>
    </div>
  )
}