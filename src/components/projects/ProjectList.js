import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import 'firebase/firestore';
import 'firebase/auth'

const ProjectList = ({projects}) => {

  
  return (
    <div className="project-list section" id="project-list">
      { projects && projects.map(project => {
        return (
          
              <Link to={'/project/' + project.id} key={project.id}>
              
            < ProjectSummary project={project}  />
            </Link>
         
          
        )
      })}  
    </div>
  )
}


export default ProjectList