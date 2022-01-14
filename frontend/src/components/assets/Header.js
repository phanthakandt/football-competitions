import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <div className='card main-card flex-box'>
            {props.textArr.map((text)=>(
                <h1>{text}</h1>
            ))}
        </div>
    )
}
