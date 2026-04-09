import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import '../skills/skills.css'; 

export default function Hobbies({ onClose }) {
    const nodeRef = useRef(null);

    return (
        <div className='window-overlay'>
            <Draggable nodeRef={nodeRef} handle=".window-header">
                <div className='screen-pop' ref={nodeRef}>
                    
                    <div className='window-header'>
                        <span className='window-title'>C:\Users\Govher\Hobbies.txt</span>
                        <button className='close-btn' onClick={onClose}>X</button>     
                    </div>

                    <div className='window-body'>
                        <div className='main-content'>
                            
                            <h3 style={{ color: '#c268bd', borderLeft: '4px solid #c268bd', paddingLeft: '10px', marginBottom: '20px' }}>
                                 Personal Pursuits
                            </h3>
                            
                            <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                
                                <section className="skill-category">
                                    <h3 style={{ borderBottom: 'none', paddingBottom: '0', marginBottom: '5px' }}>
                                        Art
                                    </h3>
                                    <p style={{ color: '#444', margin: '0', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                        Creating digital art, illustrations, and exploring visual concepts. 
                                    </p>
                                </section>

                                <section className="skill-category">
                                    <h3 style={{ borderBottom: 'none', paddingBottom: '0', marginBottom: '5px' }}>
                                        Neuroscience
                                    </h3>
                                    <p style={{ color: '#444', margin: '0', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                        Exploring the human brain, and the intersection of biology and deep learning.
                                    </p>
                                </section>

                            </div>

                            <div style={{ textAlign: 'center', marginTop: '30px', color: '#888', borderTop: '1px dashed #ccc', paddingTop: '15px' }}>
                                <em>[ Note: more media coming soon... ]</em>
                            </div>

                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}