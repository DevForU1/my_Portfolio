import classes from './Home.module.scss';
import {SocialIcons} from './../SocialIcons/SocialIcons'
import { Projects } from '../ProjectsCard/Projects';
import { Banner } from '../Banner/Banner';

export const Home = (props) => {
    return (
        <div className={classes.homeWrapper} >
            <Banner state={props.state.description.home} />
            <SocialIcons state={props.state.icons}/>
            <h2>Мои проекты :</h2>
            <Projects />
        </div>
    )
}
