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
                </ul>
            </nav>
        </header>
    )
}

export default Header