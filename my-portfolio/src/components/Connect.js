import React, { useState } from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Form, FormField, Heading, MaskedInput, TextArea, TextInput } from 'grommet';

const defaultValue = {
    name: '',
    email: '',
    message: '',
};

const Connect = () => {
    const [value, setValue] = useState(defaultValue);

    return (
        <>
            <NavBar />
            <Heading level="2" responsive="true" textAlign="left" className="heading">Connect</Heading>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Form value={value} onChange={} onSubmit={}>
                        <FormField label="Name" name="name">
                            <TextInput name="name" />
                        </FormField>
                        <FormField label="Email" name="email">
                            <MaskedInput name="email"
                            mask={[
                                    { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                                    { fixed: '@' },
                                    { regexp: /^[\w]+$/, placeholder: 'my' },
                                    { fixed: '.' },
                                    { regexp: /^[\w]+$/, placeholder: 'com' },
                                ]} />
                        </FormField>
                        <FormField label="Message" name="message">
                            <TextArea name="message" />
                        </FormField>
                        <Box direction="row" justify="between" margin={{ top: 'medium' }}>
                            <Button type="submit" label="Send" />
                        </Box>
                    </Form>
                </Box>
            </Box>
            <SiteFooter />
        </>
    )
};

export default Connect;