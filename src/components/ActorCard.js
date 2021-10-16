import React from 'react'

const ActorCard = (props) => {
    console.log(props);
    const {actor, age, birthPlace, salary,img,country} = props.actor;
    return (
        <div className="grid-item">
            <img src={img} alt="actor"/>
            <div className="text">
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{actor}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{age}</td>
                        </tr>
                        <tr>
                            <td>Birth:</td>
                            <td>{birthPlace}</td>
                        </tr>
                        <tr>
                            <td>Country:</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <td>Salary:</td>
                            <td>{salary}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn">Add To Cart</button>
        </div>
    )
}

export default ActorCard
