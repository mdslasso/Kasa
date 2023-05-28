import Logo from '../assets/logo.png'
import { Link, NavLink } from "react-router-dom";

function Header() {

    return (



        <div className="header">

            <Link to="/"><img className='logo' src={Logo} alt='logo' /></Link>

            <ul>
                <li> <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Accueil</NavLink></li>
                <li>  <NavLink to="/apropos" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>A propos</NavLink></li>

            </ul>


        </div>
    )

}

export default Header;