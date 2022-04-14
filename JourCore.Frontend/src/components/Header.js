import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="center">
      <h1 className="center">Jour Management App</h1>
      <div className="links">
        <NavLink className="link" to="/" activeClassName="active" exact="true">
          Hem
        </NavLink>
        <NavLink className="link" to="/jour" activeClassName="active" exact="true">
          Jourer
        </NavLink>
        <NavLink className="link" to="/addjour" activeClassName="active">
          Lägg till jour
        </NavLink>
        <NavLink className="link" to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <hr />
    </div>
  );
};

export default Header;
