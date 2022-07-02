import React from 'react';
import Popup from 'reactjs-popup';
import Login from '../Header/Login/Login'
import style from './Modal.module.css'

const Modal = (props) => (
    <Popup trigger={Login} position='right center' modal>
        {close => (
            <div className={style.modal}>
                <div className={style.header}>
                    <div>Loghează-te</div>
                    <button className={style.close} onClick={close}>
                        &times;
                    </button>
                </div>
                <div className={style.content}>
                    Nu ai un cont?
                    <a href=''>Înregistreaza-te </a>
                </div>
                <form className={style.modal__form} action="#">
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='Parola'/>
                </form>
                <div className={style.content}>
                    Ai uitat parola?
                </div>
                <button className={style.login__button}>Logare</button>
                </div>
        )}
    </Popup>
);

export default Modal