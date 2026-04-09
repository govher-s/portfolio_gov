import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import './skills.css';

const SkillsData = {
  programming: [
    { name: "Python", stars: 4 }, 
    { name: "JavaScript", stars: 3 }, 
    { name: "Dart", stars: 2 }, 
    { name: "SQL (Postgres)", stars: 3 },
    { name: "C++ / C#", stars: 3 }
  ],
  tools: [
    { name: "React / Vite", stars: 4 }, 
    { name: "Flutter", stars: 2 }, 
    { name: ".Net", stars: 4 }, 
    { name: "Git", stars: 4 },
    { name: "Docker", stars: 4},
    { name: "Google Colab", stars: 5 }, 
    { name: "Jupyter Notebook", stars: 4 }, 
    { name: "Overleaf", stars: 5 }
  ],
  design: [
    { name: "Adobe Creative Suite", stars: 3 },
    { name: "Affinity", stars: 3 },
    { name: "Figma", stars: 4 }, 
    { name: "Blender", stars: 3 }, 
    { name: "AutoCAD", stars: 3 }, 
    { name: "Krita", stars: 4 }
  ],
  languages: [
    { name: "Russian (Native)", stars: 5 }, 
    { name: "Turkmen (Native)", stars: 5 }, 
    { name: "English", stars: 5 }, 
    { name: "Turkish", stars: 5 }, 
    { name: "German", stars: 2 } 
  ]
};


const StarRating = ({ count }) => {
  const safeCount = (typeof count === 'number' && count >= 0 && count <= 5) ? count : 0;
  
  return (
    <span className="star-container">
      {"★".repeat(safeCount)}{"☆".repeat(5 - safeCount)}
    </span>
  );
};

export default function Skills({ onClose }) {
    const nodeRef = useRef(null);

    return (
        <div className='window-overlay'>
            <Draggable nodeRef={nodeRef} handle=".window-header">
                <div className='screen-pop' ref={nodeRef}>
                    
                    <div className='window-header'>
                        <span className='window-title'>C:\Users\Govher\Skills_Inventory.ini</span>
                        <button className='close-btn' onClick={onClose}>X</button>     
                    </div>

                    <div className='window-body'>
                        <div className='main-content skills-container'>
                            
                            <section className="skill-category">
                                <h3>[ Programming ]</h3>
                                {SkillsData.programming.map(s => (
                                    <div key={s.name} className="skill-row">
                                        <span className="skill-name">{s.name}</span>
                                        <StarRating count={s.stars} />
                                    </div>
                                ))}
                            </section>

                            <section className="skill-category">
                                <h3>[ Tools & Frameworks ]</h3>
                                {SkillsData.tools.map(t => (
                                    <div key={t.name} className="skill-row">
                                        <span className="skill-name">{t.name}</span>
                                        <StarRating count={t.stars} />
                                    </div>
                                ))}
                            </section>

                            <section className="skill-category">
                                <h3>[ Design ]</h3>
                                {SkillsData.design.map(d => (
                                    <div key={d.name} className="skill-row">
                                        <span className="skill-name">{d.name}</span>
                                        <StarRating count={d.stars} />
                                    </div>
                                ))}
                            </section>

                            <section className="skill-category">
                                <h3>[ Spoken Languages ]</h3>
                                {SkillsData.languages.map(l => (
                                    <div key={l.name} className="skill-row">
                                        <span className="skill-name">{l.name}</span>
                                        <StarRating count={l.stars} />
                                    </div>
                                ))}
                            </section>

                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}