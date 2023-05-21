
import { useParams } from 'react-router-dom';
import logements from '../datas/datas.json'
function DetailLogement() {
    const { logementId } = useParams()
    const logement = logements.find((logement) => logement.id === logementId)
    const { title, description } = logement


    return (

        <div className="DetailLogement">

            <h5>{title}</h5>
            <p>{description}</p>




        </div>
    )

}

export default DetailLogement;