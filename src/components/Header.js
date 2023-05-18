import Logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

function Header() {

    return (



        <div className="header">

            <img className='logo' src={Logo} alt='logo' />


            <ul>
                <li> <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li>  <NavLink to="/apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>

            </ul>


        </div>
    )

}

export default Header;