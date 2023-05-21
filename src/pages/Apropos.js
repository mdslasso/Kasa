
import { useState } from 'react'
import image from '../assets/img3.png'


function Apropos() {
    const [showFiabilite, setShowFiabilite] = useState(false)
    const [showRespect, setShowRespect] = useState(false)
    const [showService, setShowService] = useState(false)
    const [showSecurite, setShowSecurite] = useState(false)


    return (

        <>

            <div className="baniereApropos" style={{ backgroundImage: `url(${image})` }}></div>



            <div className="cadreMenuApropos">

                <div className="menuApropos">

                    <div className="titreApropos">  <span> Fiabilité</span>

                        <button onClick={() => setShowFiabilite(!showFiabilite)}>  {showFiabilite ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</button>
                    </div>

                    {

                        showFiabilite ?

                            <div className="contenuApropos">

                                Les annonces postées sur Kasa garantissent une fiabilité totale.

                                Les photos sont conformes aux logements, et toutes les
                                informations sont régulièrement vérifiées  par nos équipes.

                            </div> : null

                    }

                </div>



                <div className="menuApropos">

                    <div className="titreApropos">  <span> Respect</span>   <button onClick={() => setShowRespect(!showRespect)}>  {showRespect ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</button></div>


                    {showRespect ?

                        <div className="contenuApropos">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme..</div>

                        : null

                    }

                </div>


                <div className="menuApropos">

                    <div className="titreApropos">  <span> Service</span>    <button onClick={() => setShowService(!showService)}>  {showService ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</button></div>


                    {

                        showService ?

                            <div className="contenuApropos">

                                Nos équipes se tiennent à votre disposition pour vous
                                fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>

                            : null

                    }

                </div>


                <div className="menuApropos">

                    <div className="titreApropos">  <span> Sécurité</span>     <button onClick={() => setShowSecurite(!showSecurite)}>  {showSecurite ? <i class="fa-solid fa-chevron-up"></i> : <i class="fa-solid fa-chevron-down"></i>}</button></div>


                    {

                        showSecurite ?

                            <div className="contenuApropos">
                                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque
                                logement correspond aux critères de sécurité établis par nos services. En laissant une note
                                aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.

                            </div>



                            : null

                    }
                </div>



            </div>


        </>
    )

}

export default Apropos;