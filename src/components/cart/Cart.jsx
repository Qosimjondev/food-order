import { useContext } from "react";
import { FoodsContext } from "../../context/Foods";
import Table from "./Table";

const Cart = () => {
    const {cart, total, showCart, clearCart} = useContext(FoodsContext);
    console.log(cart);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showCart?   
                                   <>
                                    {cart.map((food, index) => (
                                       <Table key={index} food={food} index={index}/>
                                    ))}  
                                    <tr>
                                        <td colSpan={3} className="text-right">Total:</td>
                                        <td colSpan={2} className='text-center'>{total} $</td>
                                        <td><button onClick={clearCart} className="btn btn-danger">Clear Cart</button></td>

                                    </tr>
                                    </> 
                                    :
                                    <tr>
                                        <td colSpan={6} className="text-center">Empty cart</td>
                                    </tr>
                                    }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;