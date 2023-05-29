import { NavLink } from "react-router-dom";



function Error() {





    return (
        <div className="error">

            <div> <span>404 </span> </div>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className={({ isActive }) => (isActive ? "activeLink" : undefined)}>Retourner sur la page d’accueil</NavLink>


        </div>
    )
}

export default Error

