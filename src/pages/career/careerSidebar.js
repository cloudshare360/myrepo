import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import Data1 from './career1';
import Data2 from './career2';
import {
  NavItem,
  NavLinks,
  NavMenu
} from '../../components/SidebarData';
function Navbar() {
  const { url } = useRouteMatch();
  return (
    <div style={{ background: "#101522" }} >
      <div style={{ justifyContent: "space-between", background: "#101522" }}>
        <div
          style={{
            float: "left",
            width: "20%",
            background: "#101522",
            marginLeft: "auto"
          }}
        >
          <h3 style={{
            padding: "0px 25px 10px 50px",
            color: "#fff",
            background: "#101522",
            marginLeft: "auto"
          }}>Career </h3>
          <NavMenu style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}>
            <NavItem>
              <NavLinks to={`${url}/career1`} activeClassName="selected"> Working At AASSOFT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={`${url}/career2`} activeClassName="selected">Open Positions</NavLinks>
            </NavItem>
          </NavMenu>
        </div>
      </div>
      <Route path={`${url}/career1`}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              background: "#ffffff"
            }}
          >
            <Data1 />
          </div>
        </div>
      </Route>
      <Route path={`${url}/career2`}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              background: "#ffffff"
            }}
          >
            <Data2 />
          </div>
        </div>
      </Route>
      <Route exact path={url}>
        <p style={{ textAlign: "center" }}> <product /></p>
      </Route>
    </div>
  );
}

export default Navbar;