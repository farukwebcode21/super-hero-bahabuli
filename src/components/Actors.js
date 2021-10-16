import React, { useEffect } from 'react'
import { useState } from 'react'
import ActorCard from './ActorCard';

const Actors = () => {
    const [actors, setActors] = useState([]);

    useEffect(() =>{
        fetch('./actorssDb.JSON')
            .then(res => res.json())
            .then(data => setActors(data));
    },[])
    return (
        <div className="body-section">
            <div className="star-detail">
                {
                    actors.map(actor => <ActorCard key={actor.key} actor={actor}/>)
                }
            </div>
            <div className="add-card">
                <div className="add-cardText">
                    <h3>Total Added Start:20</h3>
                    <h3>Total Cost:$ 4000</h3>
                </div>
                <div className="card-img">
                 <img src="images/3.jpg" alt=""/>
                 <p>Anuskha Sharma</p>
                </div>
            </div>
        </div>
    )
}

export default Actors
