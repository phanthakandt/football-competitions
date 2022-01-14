import React from 'react'
import './TeamCard.css'
import fc from '../assets/football-club.png'
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns } from './assets/TeamColumns';

export default function TeamCard(props) {

    const data = props.team.squad 
    console.log(data);

    return (
        <div className='container wrapper'>
            <h3><img src={fc} width='40px'/> {props.team.name} </h3>
            <hr />
            <p>Short name : {props.team.shortName}</p>
            <p>venue : {props.team.venue}</p>
            <p>Club Color : {props.team.clubColors}</p>
            {/* <p>Active Competitions : {props.team.activeCompetitions.map((item)=>(`${item.name}, `))}</p> */}
            <p>Address : {props.team.address}</p>
            <hr />
            <h5>Team</h5>
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
    )
}
