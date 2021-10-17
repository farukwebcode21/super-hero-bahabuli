import React from 'react'

const SingleStar = (props) => {
   
    const {img, actor} = props.star;
    return (
        <div className="card-img">
             <img src={img} alt=""/>
             <p>{actor}</p>
         </div>
    )
}

export default SingleStar
