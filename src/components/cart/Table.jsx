import { useContext } from "react";
import { FoodsContext } from "../../context/Foods";

export default function Table({ food, index}) {
    const {removeFromCart, Increament, Decreament} = useContext(FoodsContext);
    
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{food.name}</td>
            <td><img src={food.img} alt="food" height={80} width={70} /></td>
            <td>{food.price} $</td>
            <td>                
                <strong onClick={()=>{Increament(food.id)}} style={{fontSize:'36px', cursor:'pointer'}}>+</strong><span style={{fontSize:'28px'}}>{food.count}</span><strong onClick={()=>{Decreament(food.id)}} style={{fontSize:'36px', cursor:'pointer'}}>-</strong></td>
            <td>
                <button onClick={()=>{removeFromCart(food.id)}} className="btn btn-danger">Remove</button>
            </td>
        </tr>
    );
}