import React from 'react';
import { Grid, TextField, makeStyles, Button } from '@material-ui/core';

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
    return (
        <>
            <h1>Contact Page</h1>
            <Grid container>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="name"
                            label="Name"
                            defaultValue=""
                            placeholder="Enter your name here."
                            variant="outlined"
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
                        />
                    </Grid>
                    <Button className="classes.buttonField" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Grid>
        </>
    );
}
