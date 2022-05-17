import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FoodsContext } from "../context/Foods";

const Header = () => {
  const { count, searchFood } = useContext(FoodsContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
      <div className="container-fluid">
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-brand" to='/'>
            <img src="./images/f.png" className="rounded-circle" width="40" height="40" alt=""/>
          </Link>
        </nav>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className='nav-link' to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="foods">Foods</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="cart">Cart <sup className="badge badge-info">{count}</sup></NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <input className="form-control me-2" type="search" onChange={searchFood} placeholder="Search" aria-label="Search" />
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Header;