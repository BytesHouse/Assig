import React from 'react';
import style from './Block.module.css'

const Block = (props) => {
    return <div className={style.container}>
        <img src={props.image} alt={props.name}/>
        <div>{props.name}</div>
        </div>
};

export default Block;