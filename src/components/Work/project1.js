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
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/images/project2ss.png"
                    title="Silicon-Clicker"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Silicon-Clicker
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Silicon-Clicker is an incremental web browser clicker game similar to Cookie Clicker or Universal Paper Clips designed for entertainment. It has been developed using HTML5 CSS3 jQuery Vuejs for the Frontend. We have used Nodejs and express for our backend as well as MySql database with sequelize ORM.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="https://github.com/Kingly77/stacking">
                        Github
                    </a>
                </Button>
                <Button size="small" color="primary">
                    <a href="https://silicon-clicker.herokuapp.com/">
                        Deployed App
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}
