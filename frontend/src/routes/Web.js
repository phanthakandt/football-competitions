import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Main from '../views/Main'
import CompetitionDetail from '../views/CompetitionDetail'
import MatchDetail from '../views/MatchDetail'
import TeamDetail from '../views/TeamDetail'
import PlayerDetail from '../views/PlayerDetail'

const Web = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/competition-detail/:id" element={<CompetitionDetail />} />
                <Route path="/match-detail/:id" element={<MatchDetail />} />
                <Route path="/team-detail/:id" element={<TeamDetail />} />
                <Route path="/player/:id" element={<PlayerDetail />} />
            </Routes>
        </Router>
    )
}

export default Web