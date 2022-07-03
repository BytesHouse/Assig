import style from './Services.module.css'
import arrow from '../images/arrow.svg'

const Services = ({items}) => {
    return <div className={style.container}>
        {items.map(item => <button key={item} className={style.btn}>{item}</button>)}
        <div className={style.other}>
            Altele
            <img src={arrow} alt="arrow"/>
        </div>
        </div>
}

export default Services;