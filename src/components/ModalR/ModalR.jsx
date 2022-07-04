import React from 'react';
import {useState, setState} from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import Popup from 'reactjs-popup';
import Regist from '../Header/Registr/Registr'
import './ModalR.css'
import {auth} from '../../firebase-config'

const ModalR = (props) => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }


    return <Popup trigger={Regist} position='right center' modal>
        {close => (
            <div className='modal'>
                <div className='header'>
                    <div>Înregistreaza-te</div>
                    <button className='close' onClick={close}>
                        &times;
                    </button>
                </div>
                <div className='content'>
                    Deja ai un cont?
                    <a href=''>Logheaza-te</a>
                </div>
                <form className='modal__form' action="#">
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={(event) => {
                            setRegisterEmail(event.target.value)
                        }}
                    />
                    <input
                        type='password'
                        placeholder='Parola'
                        onChange={(event) => {
                            setRegisterPassword(event.target.value)
                        }}
                    />
                    <input
                        type='password'
                        placeholder='Confirmă parola'/>
                </form>
                <div className='content'>
                    Ai uitat parola?
                </div>
                <button onClick={register} className='login__button'>Înregistrare</button>
            </div>
        )}
    </Popup>
};

export default ModalR