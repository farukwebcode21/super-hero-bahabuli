import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import SingleStar from './SingleStar'

const StartCart = (props) => {
    const {stars} = props;
    // const total = stars.reduce((previous, currentValue) => previous + currentValue.salary, 0);
    let total = 0;
    let totalStar =[];
    for(const star of stars){
        total = total + star.salary;
        totalStar.push(star);
    }

    return (
        <>
            <div className="add-cardText">
                    <h3>Total Added Start:{stars.length}</h3>
                    <h3>Total Cost:$ {total}</h3>
            </div>
            <>
                {
                    totalStar.map(star => <SingleStar key={star.actor} star={star}/>)
                }
                <button className="btn-buy"><FontAwesomeIcon icon={faBullseye}/>  Buy Now</button>
            </>
        </>
    )
}

export default StartCart
