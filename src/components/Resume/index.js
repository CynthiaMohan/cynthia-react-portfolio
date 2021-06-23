import React from 'react';
import { loadCSS } from 'fg-loadcss';
import { Grid, makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Resume from '../../assets/resume/Cynthia Mohan.pdf';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        '& > .fa': {
            margin: theme.spacing(2),
        },
        fab: {
            margin: theme.spacing(2),
        },
        absolute: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(3),
        },
    },
}));

export default function ImageAvatars() {
    const classes = useStyles();

    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);

    return (
        <>
            <h1>Skills</h1>
            <div className={classes.root}>
                <Tooltip title="HTML5">
                    <Icon className="fab fa-html5" style={{ fontSize: 40 }} />
                </Tooltip>
                <Tooltip title="CSS3">
                    <Icon className="fab fa-css3-alt" style={{ fontSize: 40 }} />
                </Tooltip>
                <Tooltip title="JavaScript">
                    <Icon className="fab fa-js-square" style={{ fontSize: 40 }} />
                </Tooltip>
                <Tooltip title="Node js">
                    <Icon className="fab fa-node-js" style={{ fontSize: 40 }} />
                </Tooltip>
                <Tooltip title="React js">
                    <Icon className="fab fa-react" style={{ fontSize: 40 }} />
                </Tooltip>


            </div>
            <h2><a href={Resume} target="/">Download my Resume here</a></h2>
        </>
    );
}
