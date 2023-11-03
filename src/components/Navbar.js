import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>

      
      <div className="left-content ">
        <div className="circle-navbar">
          <Link to="/">
            <img src="/Msn.png" alt="profile image" />
          </Link>
          
          </div>        
        <Link className="name" to="/"> Sivanag </Link>
      </div>
      
      <div className="links">
        <Link className="navLink" to="/Resume"> Resume </Link>
        <div className="separator">|</div>
        <Link className="navLink" to="/projects"> Projects </Link>
        <div className="separator">|</div>
        <Link className="navLink" to="/Contact"> Contact </Link>
      </div>
      
    </div>
  );
}

export default Navbar;