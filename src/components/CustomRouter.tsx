import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NewMember from '../pages/NewMember'

function CustomRouter() {
    /*<Router basename="/P13-UserInterface-API/ABFront/"> needs to add basename into vite config*/
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newmember" element={<NewMember />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter