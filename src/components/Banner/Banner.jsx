import classes from './Banner.module.scss';
export const Banner = (props) => {
    return (

        <div className={classes.homeWrapperInner} >
            {props.state.map((elem) => {
                return (
                    <div className={classes.homeWrapperOuter}>
                        <div className={classes.bannerText}>
                            <h1 className={classes.title}>{elem.head}</h1>
                            <p className={classes.smallTitle}>{elem.title}</p>
                            <div className={classes.description}>
                            {
                                elem.items ? elem.items.text.map(elem => {
                                    return (
                                        <p className={classes.paragraph}>{elem.item}</p>
                                    )
                                }) : ""
                            }
                            </div>
                        </div>
                        <div className={classes.bannerImage}>
                            {elem.img && <img className={classes.image} src={elem.img} alt="" />}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}