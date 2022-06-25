import style from './Header.module.css'
import logo from './images/Logo.png'
import users from './images/users.svg'
import registr from './images/inreg.svg'

function Header(props) {
    return <header className={style.header}>
    <div className={style.leftBlock}>
        <div id={style['burger']}></div>
        <img id={style['logo']} src={logo} alt="MiniCode"/>
    </div>
    <div className={style.centerBlock}>
        <hr/>
        <span>Cu siguranță, împreună!</span>
        <hr/>
    </div>
    <div className={style.rightBlock}>
        <div>
            <img src={users} alt="logare"/>
            <span>Logare</span>
        </div>
        <div>
            <img src={registr} alt="Înregistrare"/>
            <span>Înregistrare</span>
        </div>
    </div>
    </header>
}

export default Header;