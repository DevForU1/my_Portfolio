import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Card.module.scss';
import { content } from './../../base';

export function MediaCard() {
    return (
        <div className={classes.cardWrapper}>
            {content.project.projects.map((project, index) => {
                return (
                    <Card key={index} className={classes.mainCard} variant="outlined" sx={{ maxWidth: 345 }}>
                        <CardMedia className={classes.image}
                            sx={{ height: 140 }}
                            image={project.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" className={classes.description}>
                                {project.items}
                            </Typography>
                            <Typography variant="body2"  color="text.secondary">
                                {project.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <div className={classes.cardStack}>
                                {project.javascript && <img src={project.javascript} className={classes.iconImage} alt="" />}
                                {project.css && <img src={project.css} className={classes.iconImage} alt="" />}
                                {project.react && <img src={project.react} className={classes.iconImage} alt="" />}
                                {project.antDesign && <img src={project.antDesign} className={classes.iconImage} alt="" />}
                                {project.html && <img src={project.html} className={classes.iconImage} alt="" />}
                            </div>
                        </CardActions>
                        <CardActions>
                            <Button size="small">{project.link}</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                );
            })}
        </div>
    );
}


