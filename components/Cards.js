import Card from './Card.js'
import CardsStyles from '../styles/Cards.module.css'

export default function Cards(props) {
    const content = props.cards.map((card) => 
        <li key={card.id} className={CardsStyles.carListItem}>
            <Card  carType={card.type} carDesc={card.content} carBColor={card.bcolor}/>
        </li>
        );
    return (
    <ul className={CardsStyles.carList}>
        {content}
    </ul>
    )
}