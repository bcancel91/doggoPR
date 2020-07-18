import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">



        {/* <a className="navbar-brand font" href="#"> <h1>Doggo<span className="logoColor">PR</span></h1></a> */}
        <Link to="/" className="nav-link active"> <h1>Doggo<span className="logoColor">PR</span></h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav font">
            <li className="nav-item active">
              {/* <a className="nav-link" href="#"><span className="sr-only">(current)</span></a> */}
              <Link to="/" className="nav-link active"></Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link zoom" href="#">New Features</a> */}
            </li>
            <li className="nav-item">
              <Link to="/store" className="nav-link">Store</Link>
            </li>
            <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
            </li>

          </ul>


        </div>
      </nav>



    </div>
  );
}

export default Nav;