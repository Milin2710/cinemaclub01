import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    const uls = document.getElementById("uls");
    const currentDisplay = window.getComputedStyle(uls).display;

    if (currentDisplay === "flex") {
      uls.style.display = "none";
    } else {
      uls.style.display = "flex";
    }
    setIsVisible(!isVisible); // Update state to force re-render if necessary
  };

  useEffect(() => {
    const handleResize = () => {
      const uls = document.getElementById("uls");
      const currentDisplay = window.getComputedStyle(uls).display;
      if (window.innerWidth >= 720) {
        uls.style.display = "flex"; // Ensure display is block for larger screens
      } else if (!isVisible) {
        uls.style.display = "none"; // Reset to none if menu is not supposed to be visible
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isVisible]);
  return (
    <header className="header">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="logo">
        <img className="logoimg" src={logo} alt="" />
      </div>
      <nav>
        <div className="burger">
          <i
            onClick={toggleMenu}
            class="fa fa-bars"
            style={{ fontSize: "21px", color: "grey", margin: "10px" }}
          ></i>
        </div>
        <ul id="uls" style={{ display: isVisible ? "flex" : "none" }}>
          <li>
            <a className="selected" href="#menu">
              Home
            </a>
          </li>
          <li>
            <a href="#how-to-order">Product</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
