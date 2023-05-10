import React from 'react';
import projectData from '../projectData.json';


function ProjectGallery() {
        return (
          <div className="project-gallery">
            {projectData.map((project) => (
              <div className="project" key={project.id}>
                <img src={project.imageUrl} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  console.log(project.title)
                </div>
              </div>
            ))}
          </div>
        );
      }
      
      

//     const projectList = projectData.map(Project => <Project {...project} key={project.id} />)
//     return (
//         <ul>
//             <li className='proj-container' data-test='proj-gallery'>
//             {projectList}</li>
//         </ul>
//     );
// };

export default ProjectGallery;

