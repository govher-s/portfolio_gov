import React, { useState } from 'react';
import { use, useRef } from 'react';
import Draggable from 'react-draggable';
import '../home/home'
import Profile from '../profile/profile'
import './projects.css'
import { User, Folder, Heart, Briefcase, Zap, Home as HomeIcon} from 'pixelarticons/react'
import ProjectWindow from "./projectWindow";

export default function Projects({ onClose }) {
    const [activeProject, setActiveProject] = useState(null);
    const nodeRef = useRef(null);
    return (
        <>

        <div className='window-overlay'>
            <Draggable nodeRef={nodeRef} handle=".window-header">
            <div className='screen-pop' ref={nodeRef}>
                <div className='window-header'>
                    <span className='window-title'>C://users/govher/projects</span>
                    <button className='close-btn' onClick={onClose}>X</button>     
                </div>
                <div className='window-body'>
            <div className='main-content'>
            <a onClick={() => setActiveProject('jaguard')} href="#jaguard" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">JaGuard</span>
          </a>
          <a onClick={() => setActiveProject('mango')} href="#mango" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">manGo</span>
          </a>
          <a onClick={() => setActiveProject('research')} href="#dlresearch" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Research</span>
          </a>
          <a onClick={() => setActiveProject('heranPortfolio')} href="#porfolio" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Heran Portfolio</span>
          </a>
          <a onClick={() => setActiveProject('coffeeshop')} href="#coffeeshop" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">Kag's Coffee</span>
          </a>
           <a onClick={() => setActiveProject('rnafolder')} href="#rnafolder" className="pixel-icon">
            <Folder width={64} height={64} color="#c268bd" />
            <span className="icon-label">RNA Folder</span>
          </a>
        </div>
            </div>
        </div>
    </Draggable>
        </div>
        <ProjectWindow 
                    projectId={activeProject} 
                    onClose={() => setActiveProject(null)} 
                />
                </>
    );
}