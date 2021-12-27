import React, { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import ProjectCard from './ProjectCard';
import { Box, Grid, ResponsiveContext } from 'grommet';

const ProjectCardList = () => {
    const { projects } = useContext(ProjectContext);
    const projectItems = projects.map(project => (
        <ProjectCard {...project} key={project.id} />
    ));
    const size = useContext(ResponsiveContext);

    return (
        <Box pad='large'>
            <Grid columns={size !== 'small' ? 'small' : '100%'} gap='small'>
                { projectItems }
            </Grid>
        </Box>
    );
};

export default ProjectCardList;