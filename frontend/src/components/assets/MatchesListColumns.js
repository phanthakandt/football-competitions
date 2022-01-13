import './MatchesListColumns.css'

export const columns = [
    {
        name: 'Date',
        selector: row => new Date(row['utcDate']).toLocaleString('th-TH')
    },
    {
        name: 'Status',
        selector: row => row['status'] === 'FINISHED' ? <div className='finished tag'>finished</div> :
            row['status'] === 'POSTPONED' ? <div className='postponed tag'>postponed</div> :
                <div className='scheduled tag'>scheduled</div>
    },
    {
        name: 'Home Team',
        selector: row => row['homeTeam']['name']
    },
    {
        name: 'Away Team',
        selector: row => row['awayTeam']['name']
    },
    {
        name: 'Score',
        selector: row => row['status'] === 'FINISHED' ?
            row['score']['fullTime']['homeTeam'] + ' : ' + row['score']['fullTime']['awayTeam'] : '- : -'
    }

]