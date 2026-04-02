import './profile.css'

export default function Profile({ onClose }) {
    return (
        <div className='window-overlay'>
            <div className='screen-pop'>
                <div className='window-header'>
                    <span className='window-title'>C://users/govher/profile</span>
                    <button className='close-btn' onClick={onClose}>X</button>
                </div>
                <div className='window-body'>
                    <div className='main-content'>
                        <h2>About Me</h2>
                        <p>Hello! My name is Govher Sapardurdyyeva. 
                        I am a junior computer science student at South Dakota State University.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}