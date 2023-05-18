
import { useState, useEffect } from 'react'
import image from '../assets/img3.png'


function Apropos() {
    const [isOpen, setIsOpen] = useState(true)

    return (

        <div>

            <div className="apropos" style={{ backgroundImage: `url(${image})` }}></div>



            <div className="cadreMenuApropos">

                <div className="menuApropos">

                    <div className="titreApropos">  <span> Fiabilité</span>   <i class="fa-solid fa-chevron-up"></i></div>

                    <div className="contenuApropos">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les
                        informations sont régulièrement vérifiées  par nos équipes.</div>
                </div>



                <div className="menuApropos">

                    <div className="titreApropos">  <span> Respect</span>   <i class="fa-solid fa-chevron-up"></i></div>



                    <div className="contenuApropos">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..</div>
                </div>

                <div className="menuApropos">

                    <div className="titreApropos">  <span> Service</span>   <i class="fa-solid fa-chevron-down"></i></div>

                    <div className="contenuApropos">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                </div>

                <div className="menuApropos">

                    <div className="titreApropos">  <span> Sécurité</span>   <i class="fa-solid fa-chevron-down"></i></div>

                    <div className="contenuApropos">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                        logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
                </div>






            </div>







        </div>
    )

}

export default Apropos;