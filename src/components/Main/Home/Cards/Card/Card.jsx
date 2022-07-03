import './Card.css'

const Card = (props) => {
    return <div className='card'>
            <div><img src={props.image} alt={props.description}/></div>
            <div>{props.value}</div>
        </div>
}

export default Card