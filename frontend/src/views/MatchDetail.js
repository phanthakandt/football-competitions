import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './MatchDetail.css'
import { get_match_detail } from '../services/Football.Service'
import Header from '../components/assets/Header'
import Footer from '../components/assets/Footer'
import trophy from '../assets/trophy.png'

export default function MatchDetail() {

    let { id } = useParams()
    const [match, setMatch] = useState({})
    const [homeWin, setHomeWin] = useState('d-none')
    const [awayWin, setAwayWin] = useState('d-none')

    useEffect(async () => {
        try {
            let res = await get_match_detail(id)
            console.log(res);
            setMatch(res.data)
            if (res.data.match.score.winner === 'HOME_TEAM') {
                setHomeWin('')
            } else if (res.data.match.score.winner === 'AWAY_TEAM') {
                setAwayWin('')
            }

        } catch (err) {

        }
    }, [])

    return (
        <div>
            <Header textArr={match.head2head ? [match.head2head.homeTeam.name, ' -Vs- ', match.head2head.awayTeam.name] : ['Football Competitions']} />
            <div className="wrapper">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <a href={'/team-detail/' + (match.head2head ? match.head2head.homeTeam.id : '-')}>
                            <div className="card team-performance-card">
                                <h3><img src={trophy} width='25px' className={homeWin} /> {match.head2head ? match.head2head.homeTeam.name : '---'}</h3>
                                <p className='tag-home'>home</p>
                                <p>Venue : {match.head2head ? match.match.venue : '-'}</p>
                                <p>Score : {match.head2head ? match.match.score.fullTime.homeTeam : '-'}</p>
                                <hr />
                                <h5>Performance Against Away Team</h5>
                                <p>Wins : {match.head2head ? match.head2head.homeTeam.wins : '-'}</p>
                                <p>Draws : {match.head2head ? match.head2head.homeTeam.draws : '-'}</p>
                                <p>Losses : {match.head2head ? match.head2head.homeTeam.losses : '-'}</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <a href={'/team-detail/' + (match.head2head ? match.head2head.awayTeam.id : '-')}>
                            <div className="card team-performance-card">
                                <h3><img src={trophy} width='25px' className={awayWin} /> {match.head2head ? match.head2head.awayTeam.name : '---'}</h3>
                                <p className='tag-away'>away</p>
                                <p>Venue : {match.head2head ? match.match.venue : '-'}</p>
                                <p>Score : {match.head2head ? match.match.score.fullTime.awayTeam : '-'}</p>
                                <hr />
                                <h5>Performance Against Home Team</h5>
                                <p>Wins : {match.head2head ? match.head2head.awayTeam.wins : '-'}</p>
                                <p>Draws : {match.head2head ? match.head2head.awayTeam.draws : '-'}</p>
                                <p>Losses : {match.head2head ? match.head2head.awayTeam.losses : '-'}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
