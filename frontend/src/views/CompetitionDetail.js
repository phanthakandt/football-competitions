import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Header from '../components/assets/Header'
import Footer from '../components/assets/Footer'
import { get_competition_matches } from '../services/Football.Service'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from "../components/assets/MatchesListColumns";
import './CompetitionDetail.css'

export default function CompetitionDetail() {

    let { id } = useParams()
    const [competition, setCompentition] = useState({})
    const [data, setMatches] = useState([
    ])

    useEffect(async () => {
        try {
            let res = await get_competition_matches(id)
            // console.log(res.data);
            // console.log(res.data.matches);
            // console.log(columns);
            setCompentition(res.data)
            setMatches(res.data.matches)

        } catch (err) {
            console.log(err);
            window.location = 'https://www.football-data.org/coverage'

        }

    }, [])

    return (
        <body className='page'>
            <Header text={competition.competition ? competition.competition.name : 'Football Competitions'} />
            <div className="wrapper">
                <h3>
                    Matches
                </h3>
                <div className="overflow-table">
                    <DataTableExtensions {...{ columns, data }}>
                        <DataTable
                            columns={columns}
                            data={data}
                            noHeader
                            defaultSortField="id"
                            defaultSortAsc={false}
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </div>
            </div>
            <Footer />
        </body>
    )
}
