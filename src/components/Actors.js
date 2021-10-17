import React, { useEffect } from 'react'
import { useState } from 'react'
import ActorCard from './ActorCard';
import StartCart from './StartCart';

const Actors = () => {
    const [actors, setActors] = useState([]);
    const [stars, setStars] = useState([]);
    
    useEffect(() =>{
        fetch('./actorssDb.JSON')
            .then(res => res.json())
            .then(data => setActors(data));
    },[]);

   
    const handleAddToActor =(actors)=>{
        const newStarCart =[...stars, actors];
        setStars(newStarCart)
      
    }

    return (
        <div className="body-section">
            <div className="star-detail">
                {
                    actors.map(actor => <ActorCard key={actor.key} actor={actor} handleAddToActor={handleAddToActor}/>)
                }
            </div>
            <div className="add-card">
                <StartCart stars ={stars}/>
            </div>
        </div>
    )
}

export default Actors
