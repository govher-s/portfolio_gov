import { useRef } from 'react'
import Draggable from 'react-draggable'
import './profile.css'

export default function Profile({ onClose }) {
    const nodeRef = useRef(null)
    return (
        <div className='window-overlay'>
            <Draggable nodeRef={nodeRef} handle=".window-header">
            <div className='screen-pop' ref={nodeRef}>
                <div className='window-header'>
                    <span className='window-title'>C://users/govher/readme.md</span>
                    <button className='close-btn' onClick={onClose}>X</button>
                </div>
                <div className='window-body'>
                    <div className='main-content'>
                        <h2>System Profile: Govher Sapardurdyyeva</h2>
                        <h3>Hello! My name is Govher Sapardurdyyeva.</h3>
                        <p>I am a junior Computer Science student with Software 
                            Engineering minor at South Dakota State University.
                            I built this 90s-inspired portfolio because I wanted a 
                            space that showcases my technical skills while
                            showing my creative side as well. I love building digital 
                            experiences that make people smile. Take a look around my desktop!</p>
                    </div>
                 <div style={{ textAlign: 'center', marginTop: '30px', color: '#888', borderTop: '1px dashed #ccc', paddingTop: '15px' }}>
                                <em>[ Note: you can drag the windows! ]</em>
                            </div>
                </div>
            </div>
        </Draggable>
        </div>
    )
}