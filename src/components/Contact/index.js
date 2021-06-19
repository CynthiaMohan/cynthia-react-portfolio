import React from 'react';
import { FormControl, Input, InputLabel, FormHelperText, TextField, makeStyles } from '@material-ui/core';

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
}));

export default function ContactForm() {
    const classes = useStyles();
    return (
        <div>
            <h1>Contact Page</h1>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        defaultValue=""
                        placeholder="Enter your name here."
                        variant="outlined"
                    />

                    <TextField
                        required
                        id="email"
                        label="Email"
                        defaultValue=""
                        placeholder="Enter your email here."
                        variant="outlined"
                    />

                    <TextField
                        required
                        id="message"
                        label="Message"
                        defaultValue=""
                        placeholder="Enter your message here."
                        multiline
                        rows={4}
                        variant="outlined"
                    />

                </div>
            </form>
        </div>
    );
}
