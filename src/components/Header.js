import React from "react";
import RouteContext from "../Context";
import { Reorder } from "@mui/icons-material";
import { useContext, useState, useEffect } from "react";

const Header = () => {
  const { page, setPage, small, setSmall } = useContext(RouteContext);
  const [expand, setExpand] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 780) {
      setExpand(false);
      setSmall(true);
    }
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img src="bee.jpg" alt="logo"></img>
      </div>
      <ul className={expand ? "open" : "close"}>
        <li
          onClick={() => {
            setPage(0);
            if (small) setExpand(false);
          }}
          style={{ color: page === 0 ? "#5f4444" : "black" }}
        >
          Home
        </li>
        <li
          onClick={() => {
            setPage(1);
            if (small) setExpand(false);
          }}
          style={{ color: page === 1 ? "#5f4444" : "black" }}
        >
          Health Lifestyle
        </li>
        <li
          onClick={() => {
            setPage(2);
            if (small) setExpand(false);
          }}
          style={{ color: page === 2 ? "#5f4444" : "black" }}
        >
          Beekeeping
        </li>
        <li
          onClick={() => {
            setPage(3);
            if (small) setExpand(false);
          }}
          style={{ color: page === 3 ? "#5f4444" : "black" }}
        >
          Store
        </li>
        <li
          onClick={() => {
            setPage(4);
            if (small) setExpand(false);
          }}
          style={{ color: page === 4 ? "#5f4444" : "black" }}
        >
          Bits 'n' pieces
        </li>
        <li
          onClick={() => {
            setPage(5);
            if (small) setExpand(false);
          }}
          style={{ color: page === 5 ? "#5f4444" : "black" }}
        >
          Blog
        </li>
      </ul>
      <button onClick={() => setExpand((prev) => !prev)}>
        <Reorder />
      </button>
    </div>
  );
};

export default Header;
