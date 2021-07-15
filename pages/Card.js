import CardStyles from '../styles/Card.module.css'

import Link from 'next/link'

export default function Card(props) {
    const imgsrc = `/images/${props.carType}.svg`
    const imgalt = `${props.carType} Car`
    const bcolor = `#${props.carBColor}`
    return (
    <div className={CardStyles.card} style={{backgroundColor:bcolor}}>
        <img className={CardStyles.cardLogo} src={imgsrc}  alt={imgalt} width="64" height="40" />
        <h2 className={CardStyles.title}>
          {props.carType}
        </h2>
        <p className={CardStyles.message}>{props.carDesc}</p>
        <div className={CardStyles.learn}>
            <a className={CardStyles.learn_a} style={{color:bcolor}}>Learn More</a>
        </div>
        
    </div>
    )
}