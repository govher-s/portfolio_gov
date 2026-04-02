import { useRef } from 'react'
import Draggable from 'react-draggable'
import React from 'react';
import './projects.css';

export default function ProjectWindow({ projectId, onClose }) {
    const nodeRef = useRef(null);

    if (!projectId) return null;

    const projectData = {
        jaguard: {
            title: "C://projects/jaguard",
            content: (
                <div>
                    <h2>JaGuard</h2>
                    <p><strong>Role:</strong> Frontend Developer & Designer</p>
                    <p><strong>Tech Stack:</strong> React, Vite, JavaScript</p>
                    <p><strong>Design Tools:</strong> Adobe Illustrator, Figma</p>
                    <br />
                    <p>
                        JaGuard was a collaborative group project developed for my Software Engineering class. 
                        I was responsible for the user interface and the overall visual identity of the application.
                    </p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Created the brand identity and designed the project logo using Adobe Illustrator.</li>
                        <li>Designed the layout and visual structure for all official project documentation.</li>
                        <li>Developed and implemented the complete frontend using React, Vite, and JavaScript.</li>
                    </ul>

                    <h3 style={{ marginTop: '20px', borderBottom: '2px solid #c268bd', paddingBottom: '5px' }}>Project Media</h3>
                    
                    <div style={{ display: 'flex', gap: '15px', marginTop: '15px', overflowX: 'auto' }}>
                        <img src="/jaguard/jaguard.svg" alt="JaGuard Logo" style={{ width: '200px', height: '200px', objectFit: 'contain', border: '2px transparent' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <a href="/jaguard/Jaguard_RD.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Read Requirements Document
                        </a>
                        <a href="https://drive.google.com/file/d/1unquAns7hww024H6IAErE3n7VQJxIaFM/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            🎥 Watch Demo Video
                        </a>
                    </div>
                </div>
            )
        },
        mango: {
            title: "C://projects/mango",
            content: (
                <div>
                    <h2>manGo</h2>
                    <p><strong>Role:</strong> UI/UX Designer</p>
                    <p><strong>Tech Stack:</strong> Flutter, Dart</p>
                    <p><strong>Design Tools:</strong> Figma, Affinity</p>
                    <br />
                    <p>
                        manGo is a bike and scooter rental application developed as a team project for a UX/UI class. 
                        As the lead designer for the team, my primary focus was creating an intuitive, accessible, and visually engaging user experience.
                    </p>
                     <h3 style={{ marginTop: '20px', borderBottom: '2px solid #c268bd', paddingBottom: '5px' }}>Project Media</h3>
                     <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <a href="https://www.figma.com/proto/PdAk2KcjWZr8WTs2SbHGlE/manGO?node-id=7-3&p=f&t=051PrnELbhDlQHSG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A3&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Figma MockUp Version 1
                        </a>
                        <a href="https://www.figma.com/design/lMl8pR0jhcceuXcAXzftN5/manGo_rev01?node-id=63-863&t=DaNfaMMLpABjswej-1" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Figma MockUp Version 2
                        </a>
                        <break></break>
                        <a href="https://github.com/govher-s/mango.git" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Repo Link
                        </a>
                    </div>
                </div>
            )
        },
        research: {
            title: "C://projects/research.exe",
            content: (
                <div>
                    <h2>Medical Imaging AI</h2>
                    <p><strong>Role:</strong> Deep Learning Researcher</p>
                    <p><strong>Collaboration:</strong> Teamed with Sara Harrath (Data Science)</p>
                    <br />
                    <p>
                        An academic research project focused on the intersection of artificial intelligence and healthcare. 
                        We utilized deep learning techniques to classify ovarian ultrasound images.
                    </p>
                </div>
            )
        }
    };

    if (!projectData[projectId]) return null;

    const { title, content } = projectData[projectId];

    return (
        <div className='window-overlay' style={{ zIndex: 10000 }}> 
            <div className='screen-pop'>
                
                <div className='window-header'>
                    <span className='window-title'>{title}</span>
                    <button className='close-btn' onClick={onClose}>X</button>     
                </div>

                <div className='window-body'>
                    <div className='main-content' style={{ display: 'block' }}>
                        {content} 
                    </div>
                </div>

            </div>
        </div>
    );
}