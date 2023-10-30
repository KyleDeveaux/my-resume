import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import '../styling/ProjectVideo.css';
import noVideo from '../images/maintenance.gif';

function ProjectVideo({ project }) {

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }


  return (
<div className='video'>
  {project.video === '' ? (
    <img src={noVideo} alt="No Video Available" className="video1" />
  ) : (
    <iframe className="video1" src={project.video} frameborder="0" allowfullscreen></iframe>
  )}
</div>
  )
}

export default ProjectVideo