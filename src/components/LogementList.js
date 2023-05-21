
import datas from '../datas/datas.json'
import { Link } from 'react-router-dom';

function LogementList() {

    return (

        <div className="logements">

            {datas.map((data) => (


                <article key={data.id}>

                    <Link to={`/logements/${data.id}`}>

                        <img src={data.cover} alt={data.title} />
                        <span>{data.title}</span>

                    </Link>



                </article>



            ))}


        </div>
    )

}

export default LogementList;