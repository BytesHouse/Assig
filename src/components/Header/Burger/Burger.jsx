import React from 'react'
import './Burger.css'
import close from './icons/close.svg'

const Burger = ({header, items, active, setActive}) => {

        return (
            <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
                <div className='blur'/>
                <div className='menu__content' onClick={e => e.stopPropagation()}>
                    <div className='menu__header'>
                        <img className='close__btn' src={close} alt="close" onClick={() => setActive(false)}/>
                        <div className='headerLogo'>{header}</div>
                    </div>
                    <ul>
                        {items.map(item =>
                            <li>
                                <img src={item.icon} alt=""/>
                                <a href={item.href}>{item.value}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
}

export default Burger