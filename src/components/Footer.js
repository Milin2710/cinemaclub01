import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <footer className="footer">
        <div className="logofooter">
          <img className="logoimgfooter" src={logo} alt="" />
        </div>
        <div className="socials">
          <i className="fa fa-twitter" style={{fontSize: "30px"}}></i>
          <i className="fa fa-facebook" style={{fontSize: "30px"}}></i>
          <i className="fa fa-instagram" style={{fontSize: "30px"}}></i>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2020 BellaOnojie.com</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
