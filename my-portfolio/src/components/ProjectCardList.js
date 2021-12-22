import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import ProjectCard from './ProjectCard';

const ProjectCardList = () => {
    const { projects } = useContext(ProjectContext);
    const projectItems = projects.map(project => {
        <ProjectCard {...project} key={project.id} />
    });

    return (
        <div>
            {
                projectItems
            }
        </div>
    );
};

export default ProjectCardList;