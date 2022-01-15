import React from 'react';
import { Button, Card, CardBody, CardHeader, CardFooter } from 'grommet';

const ProjectCard = (project) => {
    const { name, description, link } = project;

    return (
        <Card height='small' width='medium' background='light-4'>
            <CardHeader pad='medium'>{name}</CardHeader>
            <CardBody pad='medium'>{description}</CardBody>
            <CardFooter pad='medium' background='light-5'>
                <Button label="More on GitHub" href={link} />
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;