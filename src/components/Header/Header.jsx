import React from 'react'
import {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth'
import style from './Header.module.css'
import array from './arrayMenu'

import {auth} from '../../firebase-config'
import User from './User/User'
// import images
import logo from './images/Logo.svg'
import burger from './images/Menu.svg'
//import components
import Burger from './Burger/Burger'
import Modal from '../Modal/Modal'
import ModalR from '../ModalR/ModalR'

const Header = (props) => {

    const [menuActive, setMenuActive] = useState(false)

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
            {/*<User/>*/}
        </div>
        <Burger active={menuActive} setActive={setMenuActive} header={'Menu'} items={array}/>
    </header>
}

export default Header;