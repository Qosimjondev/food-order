import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FoodsContext } from '../../context/Foods';

const OneFood = () => {
    const { slug } = useParams();
    const { foods } = useContext(FoodsContext);
    const {id, name, price, img, desc } = foods[slug];
    const { addToCart } = useContext(FoodsContext);

    const add = () => {
        addToCart(id);
    }

    return (
        <div className="card" style={{ width: "25rem", margin: "0.3rem" }}>
            <img className="card-img-top" src={img} alt="Card image cap" height={250} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price} $</p>
                <p className="card-text">{desc}</p>
                <button onClick={add} className="btn btn-primary">Add To Cart</button>
            </div>
        </div>
    );
}
export default OneFood;