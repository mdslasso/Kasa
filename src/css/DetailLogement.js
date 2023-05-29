import Img2 from '../assets/img2.png'
import { useParams } from 'react-router-dom';
import logements from '../datas/datas.json'
function DetailLogement() {
    const { logementId } = useParams()
    const logement = logements.find((logement) => logement.id === logementId)
    const { title, description, location, tags, host } = logement


    return (

        <div className="DetailLogement">

            <div className="slider">

                <img src={Img2} alt='logo' />




            </div>



            <div className="localisation">

                <div className="cadreLocalisation">

                    <div className="region">
                        <h3>{title}</h3>
                        <span>{location}</span>
                    </div>

                    <div className="adresse">

                        {tags.map((tag) => (
                            
                            <span>{tag}</span>

                        ))}


                    </div>


                </div>

                <div className="cadreUser">

                    <div className="user">
                        <span>{host.name}</span>
                        <div><img src={host.picture} alt={title} /></div>

                    </div> <br />

                    <div className="etoiles">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star last"></i>
                        <i class="fa-solid fa-star last"></i>
                    </div>
                </div>

            </div>









        </div>
    )

}

export default DetailLogement;