import React from 'react';
import { Github, Instagram, LinkedinOption } from 'grommet-icons';
import { Anchor, Box, Footer, Text } from 'grommet';

const Media = () => {
    return (
        <Box direction="row" gap="xxsmall" justify="center">
            <Anchor 
                allyTitle="LinkedIn Profile" href="https://www.linkedin.com/in/kristenkrofchik/" icon={<LinkedinOption color="brand" />}
            />
            <Anchor 
                allyTitle="GitHub Profile" href="https://github.com/kristenkrofchik" icon={<Github color="brand" />}
            />
            <Anchor 
                allyTitle="Instagram Shop" href="https://www.instagram.com/piratechicksvintage/" icon={<Instagram color="brand" />}
            />
        </Box>
    );
};

let year = new Date().getFullYear();

const SiteFooter = () => {
    return (
        <Footer background="light-4" pad="small">
            <Media />
            <Text textAlign="center" size="xsmall">
                `© {year} Copyright Kristen Krofchik`
            </Text>
        </Footer>
    )
};

export default SiteFooter; 