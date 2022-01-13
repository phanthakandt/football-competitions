import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Main from '../views/Main'
import CompetitionDetail from '../views/CompetitionDetail'

const Web = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/competition-detail/:id" element={<CompetitionDetail />} />
            </Routes>
        </Router>
    )
}

export default Web