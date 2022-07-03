import {useState} from 'react'
import style from './Languages.module.css'
import lang from '../images/lang.svg'

const Languages = () => {

    const [isActive, setIsActive] = useState(false)
    const handleClick = event => {
        setIsActive(current => !current)
    }
    return <div className={style.languageBox}>
            <img src={lang} alt="languages"/>
            <div className={style.langs}>
                <div className={isActive ? 'active' : ' '} onClick={handleClick}>Рус</div>
                <div className={style.verticalLine}></div>
                <div className={isActive ? 'active' : ' '} onClick={handleClick}>Eng</div>
            </div>
        </div>
}

export default Languages;