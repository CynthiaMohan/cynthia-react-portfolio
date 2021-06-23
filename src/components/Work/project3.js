import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import projectImg from '../../assets/images/photo1.jpg';

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
                    image={projectImg}
                    title="Budget-Tracker"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Placeholder
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <a href="https://github.com/CynthiaMohan/Budget-tracker">
                        Github
                    </a>
                </Button>
                <Button size="small" color="primary">
                    <a href="https://evening-taiga-49403.herokuapp.com/">
                        Deployed App
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}
