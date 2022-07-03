import style from './Cards.module.css'
import Card from './Card/Card'

const Cards = ({items}) => {
    return <div className={style.gridDiv}>
        {items.map(item => <Card image={item.image} description={item.description} value={item.value}/>)}
        </div>
}

export default Cards;