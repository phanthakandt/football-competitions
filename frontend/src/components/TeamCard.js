import React from 'react'
import './TeamCard.css'
import fc from '../assets/football-club.png'

export default function TeamCard(props) {
    return (
        <div className='container wrapper'>
            <h3><img src={fc} width='40px'/> {props.team.name} </h3>
            <hr />
            <p>Short name : {props.team.shortName}</p>
            <p>venue : {props.team.venue}</p>
            <p>Club Color : {props.team.clubColors}</p>
            <p>Active Competitions : {props.team.activeCompetitions.map((item)=>(`${item.name}, `))}</p>
            <p>Address : {props.team.address}</p>
        </div>
    )
}
