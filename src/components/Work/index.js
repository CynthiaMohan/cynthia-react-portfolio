import React from 'react';
import Project1 from './project1';
import { Grid } from '@material-ui/core';

const Work = () => {
    return (
        <>
            <h1>Work/Project Page</h1>
            <Grid container>
                <Grid item direction="row">
                    <Grid item direction="column"><Project1 /></Grid>

                </Grid>
            </Grid>
        </>

    );
}

export default Work;