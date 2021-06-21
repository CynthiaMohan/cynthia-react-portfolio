import React, { useState } from 'react';
import { Grid, TextField, makeStyles, Button } from '@material-ui/core';
import { validateEmail } from '../../utils/helpers';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    buttonField: {
        paddingmarginLeft: '40px',
    },
}));


export default function ContactForm() {
    const classes = useStyles();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.id]: e.target.value });
            console.log('Handle Form', formState);
        }
    }
    // console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    }
    return (
        <>
            <h1>Contact Page</h1>
            <Grid container>
                <form className={classes.root} noValidate autoComplete="off" id="contact-form">
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="name"
                            label="Name"
                            defaultValue=""
                            placeholder="Enter your name here."
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="email"
                            label="Email"
                            defaultValue=""
                            placeholder="Enter your email here."
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="message"
                            label="Message"
                            defaultValue=""
                            placeholder="Enter your message here."
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Button className="classes.buttonField" variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </form>
            </Grid>
        </>
    );
}
