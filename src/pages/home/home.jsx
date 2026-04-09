import { useState } from 'react'
import './home.css'
import Profile from '../profile/profile'
import Projects from '../projects/projects'
import Experience from '../projects/experience'
import { User, Folder, Heart, Briefcase, Zap, Home as HomeIcon, Mail, SettingsCog2, Brush, File, Recycle} from 'pixelarticons/react'
import Skills from '../skills/skills'
import Hobbies from '../hobbies/hobbies'
import githubIcon from "../../assets/Github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import clickSound from "../../assets/click.mp3";

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);

  const closeAll = (e) => {
    e.preventDefault();
    setIsProfileOpen(false);
    setIsProjectsOpen(false);
    setIsExperienceOpen(false);
    setIsSkillsOpen(false);
    setIsHobbiesOpen(false);
  };

  const handleClose = () => {
    // Attemot to close
    if (window.confirm("Do you want to shut down?")) {
      window.close();
      window.location.href = "about:blank";
    }
  };
  
  return (
    <div className="home">
      <div className='desktop'>
        <div className='icon-group left'>
          <a onClick={(e) => {
            e.preventDefault();
            setIsProfileOpen(true);
          }}href='#profile' className='pixel-icon'>
            <File width={64} height={64} color="#c268bd" />
            <span className="icon-label">Readme.md</span>
          </a>
          <a onClick={(e) => {
            e.preventDefault();
            setIsProjectsOpen(true);}}
            href="#projects" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Projects</span>
            </a>
          <a onClick={(e) => {
            e.preventDefault();
            setIsHobbiesOpen(true);
          }} href="#hobbies" className="pixel-icon">
            <Brush width={64} height={64} color="#c268bd" />
            <span className="icon-label">Hobbies.bmp</span>
          </a>
        </div>

        <div className="icon-group right">
          <a onClick={(e) => {
            e.preventDefault();
            setIsExperienceOpen(true);
          }}href="#experience" className="pixel-icon">
            <Briefcase width={64} height={64} color="#c268bd" />
            <span className="icon-label">Experience</span>
          </a>
          <a onClick={(e) => {
            e.preventDefault();
            setIsSkillsOpen(true);
          }}href="#skills" className="pixel-icon">
            <SettingsCog2 width={64} height={64} color="#c268bd" />
            <span className="icon-label">Skills.ini</span>
          </a>
        </div>
        <div className="icon-group bottom-right">
        <a onClick={(e) => {
          e.preventDefault();
          handleClose();
        }} href="#close" className="pixel-icon">
          <Recycle width={64} height={64} color="#c268bd" />
          <span className="icon-label">Recycle</span>
        </a>
      </div>
        <div className='bottom-menu'>
          <a href='#home' onClick={closeAll} className='dock-icon'>
            <HomeIcon width={64} height={64} color="#c268bd" />
            <span className="dock-tooltip">Home</span>
          </a>
          <a href='https://github.com/govher-s' target="_blank" rel="noreferrer" className='dock-icon'>
            <img src={githubIcon} alt="Github" width={48} height={48} className="svg-img" />
            <span className="dock-tooltip">Github</span>
          </a>
          
          <a href='https://linkedin.com/in/govher-sapardurdyyeva' target="_blank" rel="noreferrer" className='dock-icon'>
            <img src={linkedinIcon} alt="LinkedIn" width={80} height={80} className="svg-img" />
            <span className="dock-tooltip">LinkedIn</span>
          </a>
          <a href='mailto:gs.govher@gmail.com' className='dock-icon'>
            <Mail width={64} height={64} color="#c268bd" />
            <span className="dock-tooltip">Email</span>
          </a>
        </div>
      </div>

      {isProfileOpen && <Profile onClose={() => setIsProfileOpen(false)} />}
      {isProjectsOpen && <Projects onClose={() => setIsProjectsOpen(false)} />}
      {isExperienceOpen && <Experience onClose={() => setIsExperienceOpen(false)} />}
      {isSkillsOpen && <Skills onClose={() => setIsSkillsOpen(false)} />}
      {isHobbiesOpen && <Hobbies onClose={() => setIsHobbiesOpen(false)} />}

      <div className='home-title'>
          <span className='home-sub'>Govher's</span>
          <h1 className='home-head'>Portfolio</h1>
      </div>
    </div>
  )
}