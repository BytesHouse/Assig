import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import style from './Header.module.css'
import Modal from '../Modal/Modal'
import ModalR from '../ModalR/ModalR'
import Login from './Login/Login'
import Registr from './Registr/Registr'
import {auth} from '../../firebase-config'
import User from './User/User'
// import images
import logo from './images/Logo.svg'
import users from './images/users.svg'
import registr from './images/inreg.svg'
import home from './images/icons/home.svg'
import about from './images/icons/user.svg'
import products from './images/icons/check-circle.svg'
import services from './images/icons/delivery.svg'
import carier from './images/icons/file-reg.svg'
import events from './images/icons/star.svg'
import news from './images/icons/support.svg'
import questions from './images/icons/question.svg'
import contacts from './images/icons/phone.svg'
import burger from './images/Menu.svg'
//import components
import Burger from './Burger/Burger'

const Header = (props) => {

    const [user, setUser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    const [menuActive, setMenuActive] = useState(false)
    const items = [
        {value: 'Pagina Principala', href: '/home', icon: home},
        {value: 'Despre Minicode', href: '/about', icon: about},
        {value: 'Produse de asigurare', href: '/products', icon: products},
        {value: 'Caz asigurat', href: '/services', icon: services},
        {value: 'Cariera', href: '/carier', icon: carier},
        {value: 'Oferte', href: '/events', icon: events},
        {value: 'Noutati', href: '/news', icon: news},
        {value: 'Intrebari', href: '/questions', icon: questions},
        {value: 'Contacte', href: '/contacts', icon: contacts}
    ]

    return <header className={style.header}>
        <div className={style.leftBlock}>
            <div id={style['burger']} onClick={() => setMenuActive(!menuActive)}>
                <img src={burger} alt="menu"/>
            </div>
            <img id={style['logo']} src={logo} alt="MiniCode"/>
        </div>
        <div className={style.centerBlock}>
            <hr/>
            <span>Cu siguranță, împreună!</span>
            <hr/>
        </div>
        <div className={style.rightBlock}>
            <Modal/>
            <ModalR/>
            <User test={user}/>
        </div>
        <Burger active={menuActive} setActive={setMenuActive} header={'Menu'} items={items}/>
    </header>
}

export default Header;