import {Link, useParams} from 'react-router-dom';
import { useContext } from 'react';
import { FoodsContext } from '../../context/Foods';

const Card = ({food}) => {
    
    const {id, name, price, img} = food;
    const { addToCart, removeFromCart } = useContext(FoodsContext);


    const add = (e) => {
        e.preventDefault();
        addToCart(id);
    }
    
    
    return (
        <div className="card" style={{width:"20rem;", margin:"0.3rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap" height={250}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price} $</p>
                    <Link to={`/foods/add/${id}`} onClick={add} className="btn btn-primary m-1">Add To Cart</Link>
                    <Link to={`/foods/details/${id}`} className="btn btn-info">Details</Link>
                </div>
        </div>
    );
}
export default Card;