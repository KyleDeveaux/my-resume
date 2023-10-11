import React from 'react'
import '../styling/ProjectVideo.css';

function ProjectVideo({ project }) {


  return (
    <div className='video'>
        <iframe className="video1" src={project.video} frameborder="0"></iframe>
    </div>
  )
}

export default ProjectVideo