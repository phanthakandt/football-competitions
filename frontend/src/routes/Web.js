import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Main from '../views/Main'

const Web = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default Web