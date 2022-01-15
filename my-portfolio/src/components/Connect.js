import React, { useState } from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Form, FormField, Heading, MaskedInput, TextArea, TextInput } from 'grommet';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const defaultValues = {
    name: '',
    sender_email: '',
    message: '',
};

const Connect = () => {
    const [values, setValues] = useState(defaultValues);
    let history = useHistory();
    const notify = () => toast('Thank you for your message, I will get back to you soon!');

    const handleSubmit = () => {

        emailjs.sendForm('default_service', 'portfolio_contact_form', '#contact-form', 'user_YGMYi0rilDflr9LqE8WLt', '#contact-form')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
               console.log(error.text);
            });
        
        setValues(defaultValues);
        history.push('/');
        notify();
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
                    <Form value={values} onSubmit={handleSubmit} id="contact-form">
                        <FormField label="Name" name="name">
                            <TextInput name="name" onChange={handleChange}/>
                        </FormField>
                        <FormField label="Email" name="sender_email">
                            <MaskedInput name="sender_email" onChange={handleChange} 
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