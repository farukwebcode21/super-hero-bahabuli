import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StartCart = (props) => {
    
    const {stars} = props;
    const total = stars.reduce((previous, currentValue) => previous + currentValue.salary, 0);
   
    return (
        <>
            <div className="add-cardText">
                    <h3>Total Added Start:{stars.length}</h3>
                    <h3>Total Cost: ${total}</h3>
            </div>
            <div>

                {
                 stars.map((star, index)=> 
                    <div key={index} className="card-img">
                        <img src={star.img} alt=""/>
                        <p>{star.actor}</p>
                    </div>
                    )   
                }
                <button className="btn-buy"><FontAwesomeIcon icon={faAddressCard}/>  Buy Now</button>
            </div>
        </>
    )
}

export default StartCart
