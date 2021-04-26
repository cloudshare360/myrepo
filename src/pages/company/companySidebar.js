import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import Data1 from './company1';
import Data2 from './company2';
import Data3 from './company3';
import {
  NavItem,
  NavLinks,
  NavMenu
} from '../../components/SidebarData';
function Navbar() {
  const { url } = useRouteMatch();
  return (
    <div style={{ background: "#101522"}} >
      <div style={{ justifyContent: "space-between", background: "#101522" }}>
        <div
          style={{
            float: "left",
            width: "25%",
            background: "#101522",
            marginLeft: "auto"
          }}
        >
          <h3 style={{
            padding: "0px 25px 10px 50px",
            color: "#fff",
            background: "#101522",
            marginLeft: "auto"
          }}>Company </h3>
          <NavMenu style={{ listStyleType: "none", padding: 0, fontSize: "15px",background: "#101522" }}>
            <NavItem >
              <NavLinks to={`${url}/company1`} activeClassName="selected"> Who We Are</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={`${url}/company2`} activeClassName="selected"> What we do</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={`${url}/company3`} activeClassName="selected"> Our Mission</NavLinks>
            </NavItem>
          </NavMenu>
        </div>
      </div>
      <Route path={`${url}/company1`}>
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
      <Route path={`${url}/company2`}>
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
      <Route path={`${url}/company3`}>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "100%",
              margin: "auto",
              background: "#ffffff"
            }}
          >
            <Data3 />
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