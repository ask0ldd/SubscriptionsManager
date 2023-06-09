import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NewMember from '../pages/NewMember'
import NewPaiement from '../pages/NewPaiement'
import NewLeftover from '../pages/NewLeftover'

function CustomRouter() {
    /*<Router basename="/P13-UserInterface-API/ABFront/"> needs to add basename into vite config*/
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newmember" element={<NewMember />} />
                <Route path="/newpaiement" element={<NewPaiement />} />
                <Route path="/newleftover" element={<NewLeftover />} />
            </Routes>
        </Router>
    )
}

export default CustomRouter