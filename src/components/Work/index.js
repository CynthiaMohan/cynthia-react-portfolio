import React from 'react';
import Project1 from './project1';
import { Grid } from '@material-ui/core';
import Project2 from './project2';
const Work = () => {
    return (
        <>
            <h1>Work/Project Page</h1>
            <Grid container>
                <Grid item direction="row">
                    <Grid item direction="column"><Project1 /></Grid>
                    <Project2 />
                </Grid>
            </Grid>
        </>

    );
}

export default Work;