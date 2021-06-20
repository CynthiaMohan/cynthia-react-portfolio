import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
                    alt="Interactive Front-end Project "
                    height="140"
                    image="/images/project-ss.png"
                    title="Weather-Clock-with-Currency-Converter"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Weather Clock with Currency Converter
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The World clock is an app that helps the users find the current time, current weather along with the exchange rates from USD to other currencies.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <a href="https://github.com/Kingly77/Project">
                        Github
                    </a>
                </Button>
                <Button size="small" color="primary">
                    <a href="https://kingly77.github.io/Project/">
                        Deployed App
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}
