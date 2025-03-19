import React from 'react'
import './mainpage.scss'
import About from '../about/about';
import Projects from '../projects/projects';

const MainPage = () => {
  return (
    <div className='mainpage'>
        <div className="sections">
            <About />
            <div className="section">
                <h1>My Personal Projects</h1>
                <p className='description'>
                    These are some of the projects that I have worked on. Click the title to visit the project link.
                </p>
                <Projects />
            </div>


        </div>
    </div>
  )
}

export default MainPage;