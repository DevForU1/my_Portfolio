import React from 'react';
import classes from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

export const Footer = (props) => {
    return (
        <footer className={classes.footer}>
            <div className={classes.menuWrapper}>
                <ul className={classes.mainMenu}>
                    {props.state.menu.map((elem, index) => (
                        <li key={index} className={classes.mainMenuItems}>
                            <NavLink to={elem.items} className={classes.link}>
                                {elem.items}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <p className={classes.footerParagraph}>© 2023 Oleh Pokotyliuk All Rights Reserved.</p>
        </footer>
    );
};
