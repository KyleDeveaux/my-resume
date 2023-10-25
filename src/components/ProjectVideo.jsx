import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import '../styling/ProjectVideo.css';

function ProjectVideo({ project }) {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  return (
    <div className='video'>
        <iframe className="video1" src={project.video} frameborder="0"></iframe>
    </div>
  )
}

export default ProjectVideo