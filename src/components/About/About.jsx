import { Banner } from '../Banner/Banner';
import { SocialIcons } from './../SocialIcons/SocialIcons';
import classes from './About.module.scss';

export const About = (props) => {
    return (
        <div className={classes.about}>
            <Banner state={props.state.description.about} />
            <SocialIcons state={props.state.icons}  className={classes.aboutIcons}/>
        </div>
    )
}