import classes from './ProjectPage.module.scss';
import { Projects } from '../ProjectsCard/Projects';
import { Banner } from '../Banner/Banner';
import { SocialIcons } from '../SocialIcons/SocialIcons';
export const ProjectPage = (props) => {
    return (
        <div className={classes.projectWrapper}>
            <Banner state={props.state.description.projects} />
            <SocialIcons state={props.state.icons}/>
            <Projects />

        </div>
    )
}