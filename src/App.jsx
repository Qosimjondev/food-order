import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import image from '../images/carousel/food.jpg';
import image1 from '../images/carousel/food1.jpg';
import image2 from '../images/carousel/food2.jpg';
import image3 from '../images/carousel/food3.jpg';
import Main from './components/Main';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import foodsData from './json/food.js';
import { FoodsContext } from './context/Foods';
import FoodMenus from './components/FoodMenus';
import OneFood from './components/mainfood/OneFood';
import Cart from './components/cart/Cart';
import './Loader.css';




function App() {
  const [images] = useState([image, image1, image2]);
  const [foods, setFood] = useState(foodsData);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [total, setTotal] = useState(JSON.parse(localStorage.getItem('total')) || 0);
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
  const [showCart, setShowCart] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setIsLoad(true);

    setTimeout(() => {
      setIsLoad(false);
    }, 3000);

    setFood(foodsData);

    if (cart.length > 0) {
      setShowCart(true);
    }

  }, [foodsData]);

  const searchFood = (e) => { 
    if(e.target.value !== ''){
    const search = e.target.value.toLowerCase();
    const newFood = foods.filter(food => (food.name.toLowerCase().includes(search) || food.desc.toLowerCase().includes(search)));
    setFood(newFood);
    if(newFood.length === 0){
      setNotFound(true);
    } 

    }else{
      setFood(foodsData);
      setNotFound(false);
    }
  }

  const addToCart = (id) => {
    const food = foods.find(food => food.id == id);
    if (food) {
      if (cart.find(item => item.id == id)) {
        const index = cart.findIndex(item => item.id == id);
        const newTotal = total + food.price * cart[index].count;
        cart[index].count += 1;
        setTotal(newTotal);
        setCart([...cart]);
        setCount(count + 1);
      }
      else {
        food.count = 1;
        const newTotal = total + food.price * food.count;
        setTotal(newTotal);
        setCount(count + 1);
        setCart([...cart, food]);
      }
      setShowCart(true);
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('total', total);
      localStorage.setItem('count', count);
    }
  }


  const removeFromCart = (id) => {
    if (cart.find(food => food.id == id)) {
      const newCart = cart.filter(food => food.id != id);
      const newTotal = total - cart.find(food => food.id == id).price * cart.find(food => food.id == id).count;
      setCart(newCart);
      setTotal(newTotal);
      setCount(count - cart.find(food => food.id == id).count);
      if (newCart.length == 0) {
        setShowCart(false);
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
      localStorage.setItem('total', newTotal);
      localStorage.setItem('count', count - cart.find(food => food.id == id).count);
    }
  }

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setCount(0);
    setShowCart(false);
    localStorage.setItem('cart', JSON.stringify([]));
    localStorage.setItem('total', 0);
    localStorage.setItem('count', 0);
  }

  const Decreament = (id) => {
    const food = cart.find(food => food.id == id);
    if (food) {
      const newTotal = total - food.price * 1;
      setTotal(newTotal);
      if (food.count > 1) {
        food.count -= 1;
        setCount(count - 1);
        setCart([...cart]);
      }
      else {
        removeFromCart(id);
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('total', newTotal);
      localStorage.setItem('count', count - 1);
    }
  }

  const Increament = (id) => {
    const food = cart.find(food => food.id == id);
    if (food) {
      const newTotal = total + food.price * 1;
      setTotal(newTotal);
      food.count += 1;
      setCount(count + 1);
      setCart([...cart]);
      localStorage.setItem('cart', JSON.stringify(cart));
      localStorage.setItem('total', newTotal);
      localStorage.setItem('count', count + 1);
    }
  }

  if (isLoad) {
    return (
      <div className="loader-bg">
        <h3>Loading...</h3>
        <div className="loader">
          <span></span>
        </div>
      </div>

    );
  }


  return (
    <FoodsContext.Provider value={{ foods, searchFood, addToCart, count, cart, total, showCart, removeFromCart, clearCart, Increament, Decreament }} className="fluid-container">
      <Router>
        <Header />
        <Carousel images={images} />
        <div className='container p-5'>
          <Routes>
            <Route path='' exact element={notFound?<h4 className='alert alert-warning'>Not Found</h4>:<Main />} />
            <Route path='contact' exact element={<Contact />} />
            <Route path='about' exact element={<About />} />
            <Route path='foods' exact element={notFound?<h4 className='alert alert-warning'>Not Found</h4>:<FoodMenus />} />
            <Route path='cart' element={<Cart />} />
            <Route path='foods/details/:slug' element={<OneFood />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </FoodsContext.Provider>
  )
}

export default App
