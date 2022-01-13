import React from 'react'
import './FootballCard.css'

export default function FootballCard(props) {

    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
            <a href={"/competition-detail/" + props.competition.id}>
                <div className="card secondary-card mt-3 flex-box">
                    <h3>
                        <div className="text-one-line">
                            {props.competition.name}
                        </div>
                    </h3>
                    {props.competition.area.name}
                    <hr />
                </div>
            </a>
        </div>
    )
}
