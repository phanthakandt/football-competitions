import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <div className='card main-card flex-box'>
            <h1>{props.text}</h1>
        </div>
    )
}
