import { useContext } from "react";
import { FoodsContext } from "../context/Foods";
import Card from "./mainfood/Card";

const Main = () => {
    const {foods} = useContext(FoodsContext);
    
    return (
        <div className="container">
            <div className="row">
                {foods.map(food => (
                    <div key={food.id} className="col-md-3">
                        <Card key={food.id} food={food} />  
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Main;