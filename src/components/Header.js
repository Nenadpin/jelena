import React from "react";
import RouteContext from "../Context";
import { useContext } from "react";

const Header = () => {
  const { page, setPage } = useContext(RouteContext);
  return (
    <div className="header">
      <div className="header-logo">
        <img src="bee.jpg" alt="logo"></img>
      </div>
      <ul>
        <li
          onClick={() => setPage(0)}
          style={{ color: page === 0 ? "#bababa" : "black" }}
        >
          Home
        </li>
        <li
          onClick={() => setPage(1)}
          style={{ color: page === 1 ? "#bababa" : "black" }}
        >
          Health Lifestyle
        </li>
        <li
          onClick={() => setPage(2)}
          style={{ color: page === 2 ? "#bababa" : "black" }}
        >
          Beekeeping
        </li>
        <li
          onClick={() => setPage(3)}
          style={{ color: page === 3 ? "#bababa" : "black" }}
        >
          Store
        </li>
        <li
          onClick={() => setPage(4)}
          style={{ color: page === 4 ? "#bababa" : "black" }}
        >
          Bits 'n' pieces
        </li>
        <li
          onClick={() => setPage(5)}
          style={{ color: page === 5 ? "#bababa" : "black" }}
        >
          Blog
        </li>
      </ul>
    </div>
  );
};

export default Header;
