import React from 'react'
import projects from '../../data/projects.json'
import './projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
        {projects.map((project, index) => (
            <div key={index} className="project">
                <div className="upper">
                    <a href={project.link} target='_blank'>
                        <h1 className='title'>{project.title}</h1>
                    </a>
                    <p className='date'>{project.date}</p>
                </div>
                <div className="tools">
                    <p>Made with</p>
                    {project.tools.map((tool, toolIndex) => (
                        <p key={toolIndex} className='tool'>{tool} {toolIndex === project.tools.length - 1 ? "" : "+"} </p>
                    ))}
                </div>
                <div className="showcase">
                    {project.images.map((image, imageIndex) => (
                        <img key={imageIndex} src={`../../assets/images/${image}`} alt={project.title} />
                    ))}
                </div>
                <p>{project.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Projects;