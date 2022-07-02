import React from 'react';
import Popup from 'reactjs-popup';
import Regist from '../Header/Registr/Registr'
import './ModalR.css'

const ModalR = (props) => (
    <Popup trigger={Regist} position='right center' modal>
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
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='Parola'/>
                    <input type='text' placeholder='Confirmă parola'/>
                </form>
                <div className='content'>
                    Ai uitat parola?
                </div>
                <button className='login__button'>Înregistrare</button>
            </div>
        )}
    </Popup>
);

export default ModalR