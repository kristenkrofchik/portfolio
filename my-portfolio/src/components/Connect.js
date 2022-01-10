import React, { useState } from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Form, FormField, Heading, MaskedInput, TextArea, TextInput } from 'grommet';
import emailjs from '@emailjs/browser';

const defaultValues = {
    name: '',
    email: '',
    message: '',
};

const Connect = () => {
    const [values, setValues] = useState(defaultValues);

    const handleSubmit = evt => {
        evt.preventDefault();

        const templateParams = {
            from_name: values.name + " (" + values.email + ") ",
            to_name: "Kristen Krofchik (k.krofchik@gmail.com)",
            message: values.message
        };

        emailjs.sendForm('default_service', 'portfolio_contact_form', templateParams,  )
        setValues(defaultValues)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleChange = evt => {
        const { name, value } = evt.target;
        setValues(data => ({
            ...data,
            [name]: value
        }));
    };

    return (
        <>
            <NavBar />
            <Heading level="2" responsive="true" textAlign="left" className="heading">Connect</Heading>
            <Box fill align="center" justify="center">
                <Box width="medium">
                    <Form value={values} onSubmit={handleSubmit}>
                        <FormField label="Name" name="name">
                            <TextInput name="name" onChange={handleChange}/>
                        </FormField>
                        <FormField label="Email" name="email">
                            <MaskedInput name="email" onChange={handleChange} 
                            mask={[
                                    { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                                    { fixed: '@' },
                                    { regexp: /^[\w]+$/, placeholder: 'my' },
                                    { fixed: '.' },
                                    { regexp: /^[\w]+$/, placeholder: 'com' },
                                ]} />
                        </FormField>
                        <FormField label="Message" name="message">
                            <TextArea name="message" onChange={handleChange} />
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