import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./Navbar.css"
export function Navbar() {
  const [userType] = useState("Admin")
  const [current, setCurrent] = useState("login")
  const toggleForm = (formName) => {
    setCurrent(formName)

  }
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }


  return (
    <>

      <header>
        <div className="logo">
          <Link to="/">BATTERY-WALA</Link>
        </div>



        <nav ref={navRef} >



          <Link to="/">Home</Link>
          {
            userType && <Link to="/products">Products</Link>

          }
          <Link to="/batteryFinder">Battery Finder</Link>
          <Link to="/dealer">Dealers</Link>
          <Link to="/help">Help & Support</Link>
          <Link to="/about">About Us</Link>
          {
            current === "login" ? <Link to="/login" >Login</Link> : <Link to="/register" onFormSwitch={toggleForm} >Register</Link>
          }

          <button className="nav_btn nav_close " onClick={showNavbar}>
            <FaTimes />
          </button>

        </nav >
        <button className="nav_btn " onClick={showNavbar}>
          <FaBars />
        </button>

      </header>


    </>
  );

}











