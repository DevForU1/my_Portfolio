import { Banner } from '../Banner/Banner'
import {SocialIcons} from './../SocialIcons/SocialIcons'
import classes from './Contacts.module.scss'
export const Contacts = (props) => {
    return (
        <>
        <Banner state={props.state.description.contacts}/>
        <SocialIcons state={props.state.icons}/>
        <ul className={classes.contacts}>
            <li className={classes.contactsList}><img src="https://cdn.iconscout.com/icon/free/png-256/free-phone-1284-432876.png" alt="" /><a href="tel:+380936049701">+38(093) 604-97-01</a></li>
            <li className={classes.contactsList}><img src="https://cdn.iconscout.com/icon/free/png-256/free-mail-706-434075.png" alt="" /><a href="mailto:olehshmdt@gmail.com">Написать мне</a></li>
        </ul>
        </>
    )
}