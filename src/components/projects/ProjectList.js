import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {

  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <div>
            <ProjectSummary project={project} />
            <button onClick={() => this.removeProject(project.id)}>Delete</button>

          </div>
          
        )
      })}  
    </div>
  )
}

export default ProjectList