import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import './TeamDetail.css'
import { get_team_detail } from '../services/Football.Service'
import Header from '../components/assets/Header'
import Footer from '../components/assets/Footer'
import TeamCard from '../components/TeamCard'

export default function TeamDetail() {

    let { id } = useParams()
    const [team, setTeam] = useState({})

    useEffect(async () => {
        try {
            let res = await get_team_detail(id)
            console.log(res.data);
            setTeam(res.data)
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <div>
            <Header textArr={team.name ? [`${team.name} (${team.tla})`, `(${team.area.name})`] : ['Football Competitions']} />
            <TeamCard team={team} />
            <Footer />
        </div>
    )
}
