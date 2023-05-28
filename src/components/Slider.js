

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


    const prevSlide = () => {
        const firstSlide = currentIndex === 0
        const newIndex = firstSlide ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const lastSlide = currentIndex === pictures.length - 1
        const newIndex = lastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (

        <div className="container-slider">
            <div className="slide" style={{ backgroundImage: `url(${pictures[currentIndex]})` }} >
            </div>

            <div className="btnSlider">



                <button className='btn-slide' onClick={prevSlide}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>



                <button className='btn-slide' onClick={nextSlide}>
                    <FontAwesomeIcon icon={faAngleRight} />

                </button>


                <div className='nbreSlide'><span>{currentIndex + 1}/{pictures.length}</span></div>
            </div>

        </div >
    )

}

export default Slider;