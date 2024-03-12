import React, { useContext } from "react";
import "./Navbar.css";
import { Container } from "react-bootstrap";
import { BsBag } from "react-icons/bs";
import productsContext from "../../Context/ProductContext";

function Navbar() {
  const contextData = useContext(productsContext);
  return (
    <nav className="navbar navbar-expand-sm py-3 d-flex">
      <Container>
        <a href="#" className="navbar-brand">
          Daniel Tehrani
        </a>

        <ul className="navbar-nav me-auto ms-3">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
        </ul>

        <div className="bag-box">
          <a href="#" className="bag">
            <BsBag
              className="text-white"
              onClick={() => contextData.setIsShowCart(true)}
            />
            <span className="bag-products-counter">{contextData.userCart.length}</span>
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
