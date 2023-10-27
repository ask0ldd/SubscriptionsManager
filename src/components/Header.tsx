import { NavLink } from "react-router-dom"
import '../style/Header.css'

function Header(){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/newmember">New Member</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newpayment">New Payment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newsubscription">New Subscription</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newanomaly">New Anomaly</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newrefund">New Refund</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newremainder">New Remainder</NavLink>
                    </li>
                    <li>
                        <NavLink to="/newrib">New RIB</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header