import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer ">
        <div className="footer_content_wrapper1">
          <div className="footer_wrapper">
            <p className="footer_text1">
              <NavLink to="/privacy">Privacy</NavLink>
            </p>
            <span className="split1">|</span>
            <p className="footer_text2">
              <a href="#terms">Terms</a>
            </p>
          </div>
        </div>
        <div className="footer_content_wrapper2">
          <div className="footer_wrapper">
            <p className="footer_text3">
              Contact Us:&nbsp;
              <a href="#privacy">lizaheadan@gmail.com</a>
            </p>
            <span className="split2">|</span>
            <p className="footer_text4">Copyright © 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
