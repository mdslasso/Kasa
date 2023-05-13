import Logo from '../assets/logo.png'

function Header() {

    return (



        <div className="header">

            <img className='logo' src={Logo} alt='logo' />


            <ul>
                <li>Accueil</li>
                <li>A propos</li>

            </ul>


        </div>
    )

}

export default Header;