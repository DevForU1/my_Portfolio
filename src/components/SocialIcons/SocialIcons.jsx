import classes from './SocialIcons.module.scss';
export const SocialIcons = (props) => {
    return (
        <div className={classes.socials}>
            <ul className={classes.socialList}>
                {props.state.item.map((elem) => {
                    return (
                        <li className={classes.listIcons}>
                            <a href={elem.link} className={classes.listLink}>
                                <img src={elem.source} className={classes.listImage} alt="" />
                            </a>
                        </li>
                    )
                })
                }
            </ul>

        </div>
    )
}