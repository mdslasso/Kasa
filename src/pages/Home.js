import image from '../assets/img1.png'
import LogementList from '../components/LogementList';


function Home() {

    return (

        <div className="home">

            <div className="welcome" style={{ backgroundImage: `url(${image})` }}>

                <h1>Chez vous, partout et ailleurs</h1>

            </div>
            <div className="logements">

                <LogementList />


            </div>

        </div>
    )

}

export default Home;