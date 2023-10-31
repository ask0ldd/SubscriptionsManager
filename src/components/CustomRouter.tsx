import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import MemberForm from '../pages/MemberForm'
import PaymentForm from '../pages/PaymentForm'
import RemainderForm from '../pages/RemainderForm'
import AnomalyForm from '../pages/AnomalyForm'
import RefundForm from '../pages/RefundForm'
import RIBForm from '../pages/RIBForm'
import SubscriptionForm from '../pages/SubscriptionForm'

function CustomRouter() {
    /*<Router basename="/P13-UserInterface-API/ABFront/"> needs to add basename into vite config*/
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newmember" element={<MemberForm />} />
                <Route path="/newpayment" element={<PaymentForm />} />
                <Route path="/newremainder" element={<RemainderForm />} />
                <Route path="/newanomaly" element={<AnomalyForm/>} />
                <Route path="/newrefund" element={<RefundForm/>} />
                <Route path="/newrib" element={<RIBForm/>} />
                <Route path="/newsubscription" element={<SubscriptionForm/>} />
            </Routes>
        </Router>
    )
}

export default CustomRouter