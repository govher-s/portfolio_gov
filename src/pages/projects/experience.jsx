import { useRef } from 'react'
import Draggable from 'react-draggable'
import './projects.css' 
import resume from '../assets/Govher_Sapardurdyyeva_Resume.pdf'

export default function Experience({ onClose }) {
    const nodeRef = useRef(null)
    
    return (
        <div className='window-overlay'>
            <Draggable nodeRef={nodeRef} handle=".window-header">
                <div className='screen-pop' ref={nodeRef}>
                    <div className='window-header'>
                        <span className='window-title'>C://users/govher/experience</span>
                        <button className='close-btn' onClick={onClose}>X</button>
                    </div>
                    <div className='window-body'>
                        <div className='main-content' style={{ display: 'block' }}>
                            
                            <h2 style={{ borderBottom: '2px solid #c268bd', paddingBottom: '5px' }}>Professional Experience</h2>
                            
                            {/* SDSU Housing */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ margin: '10px 0 0 0' }}>Resident Assistant</h3>
                                <p style={{ color: '#c268bd', fontWeight: 'bold', margin: '2px 0' }}>South Dakota State University - Housing and Residential Life</p>
                                <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Aug. 2023 – Present | Brookings, SD</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Enforcing university housing policies and code of conduct to ensure the safety and security of residents.</li>
                                    <li>Documenting incidents in confidential reports.</li>
                                    <li>Serving as a primary resource and mentor for residents.</li>
                                </ul>
                            </div>

                            {/* Miller Wellness Center */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ margin: '10px 0 0 0' }}>Esports Desk Attendant</h3>
                                <p style={{ color: '#c268bd', fontWeight: 'bold', margin: '2px 0' }}>South Dakota State University - Miller Wellness Center</p>
                                <p style={{ fontSize: '12px', fontStyle: 'italic' }}>March 2023 – Present | Brookings, SD</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Monitoring and maintained esports lab equipment and gaming PCs.</li>
                                    <li>Troubleshooting hardware, software, and network connectivity issues.</li>
                                    <li>Assisting students with system logins and basic technical troubleshooting.</li>
                                </ul>
                            </div>

                             {/* Walmart */}
                             <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ margin: '10px 0 0 0' }}>Health and Beauty TA</h3>
                                <p style={{ color: '#c268bd', fontWeight: 'bold', margin: '2px 0' }}>Walmart Supercenter #1538</p>
                                <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Nov. 2024 – Oct. 2025 | Brookings, SD</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Assist with product inquiries, and provide personalized product recommendations.</li>
                                </ul>
                            </div>

                            {/* American Councils */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ margin: '10px 0 0 0' }}>Program Intern</h3>
                                <p style={{ color: '#c268bd', fontWeight: 'bold', margin: '2px 0' }}>American Councils for International Education</p>
                                <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Aug. 2025 – Dec. 2025 | Remote</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Mentored students through the college application process.</li>
                                    <li>Assisted with SAT and TOEFL exam readiness by reinforcing test-taking strategies.</li>
                                </ul>
                            </div>

                            {/* Gap Construction */}
                            <div style={{ marginBottom: '20px' }}>
                                <h3 style={{ margin: '10px 0 0 0' }}>Architect Assistant</h3>
                                <p style={{ color: '#c268bd', fontWeight: 'bold', margin: '2px 0' }}>Gap Construction and Investment Ltd</p>
                                <p style={{ fontSize: '12px', fontStyle: 'italic' }}>Oct. 2017 – March 2020 | Turkmenbashi city, Turkmenistan</p>
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Assisted architects and engineers in updating and revising technical drawings using AutoCAD.</li>
                                    <li>Used Microsoft Excel to track revisions, quantities, and project-related data.</li>
                                </ul>
                            </div>

                            <h2 style={{ borderBottom: '2px solid #c268bd', paddingBottom: '5px', marginTop: '30px' }}>Honors & Awards</h2>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><strong>Jerome J. Lohr College of Engineering Scholarship</strong> — 2026</li>
                                <li><strong>Han & Bang Kim Student Employee Award</strong> — 2024</li>
                                <li><strong>Top Up Scholarship</strong> (American Councils for International Education) — 2023 - 2025</li>
                                <li><strong>Jackrabbit Guarantee Scholarship</strong> — 2023 - Present</li>
                            </ul>

                            <h2 style={{ borderBottom: '2px solid #c268bd', paddingBottom: '5px', marginTop: '30px' }}>Volunteering</h2>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><strong>Technovation Girls:</strong> Mentored young girls to create an app that solves a problem in their community.</li>
                                <li><strong>Local Orphanage:</strong> Created activities to help children get familiar with technology.</li>
                            </ul>

                            {/* DOWNLOAD BUTTON MOVED TO BOTTOM */}
                            <div style={{ 
                                display: 'flex', 
                                justifyContent: 'center', 
                                marginTop: '40px', 
                                padding: '20px', 
                                borderTop: '2px dashed #c268bd' 
                            }}>
                                <a 
                                    href={resume} 
                                    download 
                                    style={{ 
                                        backgroundColor: '#c268bd', 
                                        color: 'white', 
                                        padding: '12px 24px', 
                                        textDecoration: 'none', 
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        boxShadow: '4px 4px 0px #444',
                                        display: 'inline-block',
                                        fontFamily: "'Silkscreen', sans-serif"
                                    }}
                                >
                                    [ DOWNLOAD_FULL_RESUME.PDF ]
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    )
}