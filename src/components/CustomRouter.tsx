import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NewMember from '../pages/NewMember'
import NewPaiement from '../pages/NewPaiement'
import NewRemainder from '../pages/NewRemainder'
import NewAnomaly from '../pages/NewAnomaly'
import NewRefund from '../pages/NewRefund'
import NewRIB from '../pages/NewRIB'

function CustomRouter() {
    /*<Router basename="/P13-UserInterface-API/ABFront/"> needs to add basename into vite config*/
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newmember" element={<NewMember />} />
                <Route path="/newpaiement" element={<NewPaiement />} />
                <Route path="/newremainder" element={<NewRemainder />} />
                <Route path="/newanomaly" element={<NewAnomaly/>} />
                <Route path="/newrefund" element={<NewRefund/>} />
                <Route path="/newrib" element={<NewRIB/>} />
            </Routes>
        </Router>
    )
}

export default CustomRouter