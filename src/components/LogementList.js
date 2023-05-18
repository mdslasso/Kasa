import React, { useState, useEffect } from 'react';
import datas from '../datas/datas.json'

function LogementList() {

    return (

        <div className="logements">

            {datas.map((data, index) => (


                <article key={index}>

                    <img src={data.cover} alt={data.title} />
                    <span>{data.title}</span>

                </article>



            ))}


        </div>
    )

}

export default LogementList;