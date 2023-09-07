import React from "react";
import { useContext } from "react";
import Social from "./Social";
import RouteContext from "../Context";

const Footer = () => {
  const { setPage } = useContext(RouteContext);
  return (
    <div className="footer">
      <Social />
      <div>
        <p>
          <span>Copyright © 2023 nenadpin </span>
          <span
            className="footer-link"
            onClick={() => {
              setPage(0);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Home
          </span>
          <span
            className="footer-link"
            onClick={() => {
              setPage(6);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Contact Us
          </span>
          <span
            className="footer-link"
            onClick={() => {
              setPage(7);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Terms and Conditions
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
