import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { get_player_detail } from '../services/Football.Service'
import Header from '../components/assets/Header'
import Footer from '../components/assets/Footer'
import soccer from '../assets/soccer.png'
import team from '../assets/team.png'
import './PlayerDetail.css'

export default function PlayerDetail() {

    let { id } = useParams()
    const [credential, setCredential] = useState({})

    useEffect(async () => {
        try {
            let res = await get_player_detail(id)
            console.log(res);
            setCredential(res.data)
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div className='player-detail-page'>
            <Header textArr={credential.name ? [credential.name, credential.nationality ? `(${credential.nationality})` : ''] : ['Football Competitions']} />
            <div className='container flex-box'>
                <div className="card team-performance-card mt-3 player-detail-card">
                    <h3>{credential.name ? credential.name : '---'}</h3>
                    {credential.position ? <h5><img src={soccer} width='20px' /> {credential.position}</h5> : <h5> - </h5>}
                    <hr />
                    <p>Date of Birth : {credential.dateOfBirth}</p>
                    <p>Nationality : {credential.nationality}</p>
                    <p>Position : {credential.position ? credential.position : '-'}</p>
                    <p>Shirt Number : {credential.shirtNumber ? credential.shirtNumber : '-'}</p>

                    <img src={team} width='150px' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
