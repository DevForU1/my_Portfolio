import classes from './Header.module.scss';
import { NavLink } from 'react-router-dom';


export const Header = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.menuContainer}>
                <ul className={classes.mainMenu}>
                    {
                        props.state.menu.map((elem) => {
                            return (
                                <li className={classes.mainMenuItems}><NavLink to={elem.items} className={classes.link}>{elem.items}</NavLink></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

