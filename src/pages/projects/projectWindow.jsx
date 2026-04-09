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
                        Jaguard is a data breach monitoring platform designed to empower users to safeguard their digital identities. 
                        By leveraging multiple security APIs, the application allows users to scan for compromised emails and usernames.
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
                        <img src="jaguard/jaguard.svg" alt="JaGuard Logo" style={{ width: '200px', height: '200px', objectFit: 'contain', border: '2px transparent' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <a href="jaguard/Jaguard_RD.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
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
            title: "C://projects/research",
            content: (
                <div>
                    <h2>Ovarian Ultrasound Image Classification Using Supervised and Semi-Supervised Learning</h2>
                    <p><strong>Role:</strong> Team Lead</p>
                    <p><strong>Tools:</strong>PyTorch, Google Colab</p>
                    <br />
                    <p>
                        An academic research project focused on the intersection of artificial intelligence and healthcare. 
                        We utilized deep learning techniques to classify ovarian ultrasound images. The research is still in progress.
                    </p>
                     <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <a href="report.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Read Midterm Report
                        </a>
                    </div>
                </div>
            )
        },
    heranPortfolio: {
            title: "C://projects/Heran's Portfolio",
            content: (
                <div>
                    <h2>Personalized portfolio for a business student.</h2>
                    <p><strong>Role:</strong> Developer</p>
                    <p><strong>Tools:</strong>React + Vite, Javascript</p>
                    <br />
                    <p>
                        Designed and deployed a custom personal portfolio website tailored for the business sector, focusing on a clean UI/UX and a structured it to present professional milestones and project case studies.
                    </p>
                     <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <a href="https://govher-s.github.io/heran-portfolio/#/" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Website Link
                        </a>
                        <a href="https://github.com/govher-s/heran-portfolio.git" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Repo Link
                        </a>
                    </div>
                </div>
            )
        },
    coffeeshop: {
            title: "C://projects/Kag's coffee and bagels",
            content: (
                <div>
                    <h2>Kag's Coffee and Bagels</h2>
                    <p><strong>Role:</strong> UX / UI Designer</p>
                    <p><strong>Tools:</strong>Fimga, React Native, Javascript</p>
                    <br />
                    <p>
                        Designed a comprehensive food and beverage interface focused on user engagement and personalization. 
                        Kag's Coffee & Bagels streamlines the ordering process while introducing social interactivity,
                        allowing users to share their customized orders and connect directly with support through a centralized chat hub.
                        The project is still in progress.
                    </p>
                     <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <a href="https://www.figma.com/proto/MxW7du3RnkpVFTsTNdkMU3/KAG-S-Coffee?node-id=102-38&t=VF39vZ58JXblcIIr-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" style={{ color: '#c268bd', fontWeight: 'bold', textDecoration: 'none' }}>
                            Figma MockUp (In progress)
                        </a>
                        
                    </div>
                </div>
            )
        },
    rnafolder: {
            title: "C://projects/RNA folder",
            content: (
                <div>
                    <h2>RNA Folding Engine</h2>
                    <p><strong>Tools:</strong>Google Colab, Pytorch</p>
                    <br />
                    <p>
                        Can you predict the shape of a puzzle just by looking at the pieces? 
                        This project uses Deep Learning to predict the 3D structure of RNA. 
                        By identifying patterns in molecular sequences, the model "folds" the 
                        RNA into the shapes that define its biological function.
                        (This research is still in progress.)
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