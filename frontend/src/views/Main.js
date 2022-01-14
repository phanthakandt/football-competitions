import React, { useEffect, useState } from 'react'
import { get_all_competition } from '../services/Football.Service'
import FootballCard from '../components/FootballCard'
import './Main.css'
import Header from '../components/assets/Header'
import Footer from '../components/assets/Footer'

const Main = () => {

    const [data, setData] = useState({})

    useEffect(async () => {
        try {
            let res = await get_all_competition()
            setData(res.data)
            // console.log(res.data.competitions);
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <body className='page'>
            <Header textArr={['Football Competitions']} />
            <div className='page-wrapper'>
                <div className="row mt-3 mx-3">
                    {data.competitions && data.competitions.map((item) => (
                        <FootballCard competition={item} />
                    ))}
                </div>
            </div>
            <Footer />
        </body>
    )
}

export default Main
