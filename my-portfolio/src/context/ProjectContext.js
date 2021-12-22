import React, { createContext, useState } from 'react';
import ProjectData from '../ProjectData.js';


export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
    const [projects] = useState(ProjectData);

    return (
        <ProjectContext.Provider value={{ projects }}>
            {
                children
            }
        </ProjectContext.Provider>
    );
}

export default ProjectContextProvider;
