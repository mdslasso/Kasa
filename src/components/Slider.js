

import { useParams } from 'react-router-dom';
import logements from '../datas/datas.json'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'




function Slider() {

    const { logementId } = useParams()
    const logement = logements.find((logement) => logement.id === logementId)
    const { pictures } = logement
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hideElement] = useState(true)



    // Action permettant d'afficher l'image precedende du slidershow
    const prevSlide = () => {

        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1)
    }


    //  Action permettant d'afficher l'image suivante du slidershow
    const nextSlide = () => {

        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1)

    }

    return (

        <div className="container-slider">
            <div className="slide" style={{ backgroundImage: `url(${pictures[currentIndex]})` }} >
            </div>




            <div className="btnSlider">

                {
                    //  Action permettant de cacher la  flèche precedendente si l'image est egale a une .
                    pictures.length === 1 ? hideElement :
                        <button className='btn-slide' onClick={prevSlide}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>

                }


                {
                    //  Action permettant de cacher la  flèche suivante si l'image est egale a une.
                    pictures.length === 1 ? hideElement :

                        <button className='btn-slide' onClick={nextSlide}>

                            <FontAwesomeIcon icon={faAngleRight} />

                        </button>

                }


                {   //  Action permettant de cacher la numérotation si l'image est egale a une.
                    pictures.length === 1 ? hideElement :
                        <div className='nbreSlide'><span>{currentIndex + 1}/{pictures.length}</span></div>
                }

            </div>

        </div >
    )

}

export default Slider;