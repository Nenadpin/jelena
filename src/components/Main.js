import React from "react";
import { useContext } from "react";
import RouteContext from "../Context";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Beekeeping from "./pages/Beekeeping";
import Health from "./pages/Health";
import Bits from "./pages/Bits";

const Main = () => {
  const { page } = useContext(RouteContext);
  return (
    <div className="main">
      {page === 0 ? (
        <Home />
      ) : page === 1 ? (
        <Health />
      ) : page === 2 ? (
        <Beekeeping />
      ) : page === 3 ? (
        <Store />
      ) : page === 4 ? (
        <Bits />
      ) : page === 5 ? (
        <Blog />
      ) : page === 6 ? (
        <Contact />
      ) : page === 7 ? (
        <Terms />
      ) : null}
    </div>
  );
};

export default Main;
