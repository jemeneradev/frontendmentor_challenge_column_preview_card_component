import Card from '../pages/Card'
import CardsStyles from '../styles/Cards.module.css'

import Link from 'next/link'

export default function Cards(props) {
    const content = props.cards.map((card) => <li key={card.id} className={CardsStyles.carListItem}><Card  carType={card.type} carDesc={card.content} carBColor={card.bcolor}/></li>);
    return (
    <ul className={CardsStyles.carList}>
        {content}
    </ul>
    )
}