import React from 'react';
import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import Popup from 'reactjs-popup';
import Login from '../Header/Login/Login'
import style from './Modal.module.css'
import {auth} from '../../firebase-config'

const Modal = (props) => {

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            )
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    return <Popup trigger={Login} position='right center' modal>
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
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={(event) => {
                            setLoginEmail(event.target.value)
                        }}
                    />
                    <input
                        type='password'
                        placeholder='Parola'
                        onChange={(event) => {
                            setLoginPassword(event.target.value)
                        }}
                    />
                </form>
                <div className={style.content}>
                    Ai uitat parola?
                </div>
                <button onClick={login} className={style.login__button}>Logare</button>
            </div>
        )}
    </Popup>
};

export default Modal