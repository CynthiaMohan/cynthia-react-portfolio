import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import projectImg from '../../assets/images/5.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Work Day Scheduler"
                    height="140"
                    image={projectImg}
                    title="Work-Day-Scheduler"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Work Day Scheduler
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        A budget tracker application to allow for offline access and functionality. When the user enters transactions offline, the total should be updated when they're brought back online.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <a href="https://github.com/CynthiaMohan/Work-Day-Scheduler">
                        Github
                    </a>
                </Button>
                <Button size="small" color="primary">
                    <a href="https://cynthiamohan.github.io/Work-Day-Scheduler/">
                        Deployed App
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}
