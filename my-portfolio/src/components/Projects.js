import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import ProjectCardList from './ProjectCardList';
import { Heading, Main} from 'grommet';

const Projects = () => {
    return (
        <>
            <NavBar />
            <Main pad="medium">
                <Heading level="2" responsive="true" textAlign="left">Projects</Heading>
                <ProjectCardList />
            </Main>
            <SiteFooter />
        </>
    )
};

export default Projects;