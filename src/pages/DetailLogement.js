import { useNavigate, useParams } from 'react-router-dom';
import logements from '../datas/datas.json'
import { useEffect, useState } from 'react'
import Slider from '../components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons'


function DetailLogement() {
    const { logementId } = useParams()
    const logement = logements.find((logement) => logement.id === logementId)



    const [showDescription, setShowDescription] = useState(false)
    const [showEquipement, setShowEquipement] = useState(false)


    // Afficher la page d'erreur si l'id du logement n'existe pas 
    let navigate = useNavigate();
    useEffect(() => {
        if (logement === undefined) { navigate("404", { replace: true }) }
    }, [logementId, logement, navigate]);

    if (logement === undefined) {
        return null;
    }

    // avis  fond jaune 
    const fullFavoris = Array(parseFloat(logement.rating)).fill(<FontAwesomeIcon icon={faStar} />)
    // avis fond fond blanc 
    const emptyFavoris = Array(parseFloat(5 - logement.rating)).fill(<FontAwesomeIcon icon={faStar} />)



    return (

        <div className="DetailLogement">

            <Slider />


            <div className="localisation" >

                <div className="cadreLocalisation">

                    <div className="region">
                        <h3>{logement.title}</h3>
                        <span>{logement.location}</span>
                    </div>




                    <div className="tag">

                        {logement.tags.map((tag, index) => (

                            <span key={index}>{tag}</span>

                        ))}


                    </div>


                </div>




                <div className="cadreUser">

                    <div className="user">
                        <span>{logement.host.name}</span>
                        <div><img src={logement.host.picture} alt={logement.title} /></div>

                    </div> <br />

                    <div className="etoiles">


                        {fullFavoris.map((favoris, index) => (

                            <span key={index}>{favoris}</span>

                        ))}


                        {emptyFavoris.map((favoris, index) => (

                            <span className='emptyFavoris' key={index}>{favoris}</span>

                        ))}


                    </div>
                </div>


            </div>



            <div className="cadreInfos">

                <div className='cadreDescription'>


                    <div className="titreDescription">  <span> Description</span>

                        <button onClick={() => setShowDescription(!showDescription)}>  {showDescription ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</button>
                    </div>


                    {

                        // Afficher contenu description 
                        showDescription ?

                            <div className="description">

                                {logement.description}

                            </div> : null

                    }

                </div>



                <div className='cadreEquipement'>

                    <div className="titreEquipement">  <span> Équipements</span>

                        <button onClick={() => setShowEquipement(!showEquipement)}>  {showEquipement ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</button>
                    </div>


                    {

                        // Afficher contenu equipement 
                        showEquipement ?

                            <div className="equipement">


                                {logement.equipments.map((equipment, index) => (

                                    <span key={index}>{equipment}</span>

                                ))}

                            </div> : null

                    }


                </div>



            </div>





        </div>
    )

}

export default DetailLogement;