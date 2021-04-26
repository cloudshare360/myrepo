import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Data from "../Itstaffingsolution/Itstaffingsolution";
import Data1 from "../Itstaffingsolution/Itstaffingsolution1";
import Data2 from "../Itstaffingsolution/Itstaffingsolution2";
import { NavItem, NavLinks, NavMenu } from "../../components/SidebarData";
function Navbar() {
    const { url } = useRouteMatch();
    return (
        <div class="full-height" style={{ background: "#101522"}}>
            <div style={{ justifyContent: "space-between", background: "#101522" }}>
                <div
                    style={{
                        float: "left",
                        width: "25%",
                        background: "#101522",
                        marginLeft: "auto",
                    }}
                >
                    <h3
                        style={{
                            padding: "0px 25px 10px 25px",
                            color: "#fff",
                            background: "#101522",
                            marginLeft: "auto",
                        }}
                    >
                        IT Staffing Solutions
                    </h3>
                    <NavMenu
                        style={{ listStyleType: "none", padding: 0, fontSize: "15px" }}
                    >
                        <NavItem>
                            <NavLinks to={`${url}/itstaffing1`} activeClassName="selected">
                            Employers
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={`${url}/itstaffing2`} activeClassName="selected">
                            IT Professionals
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to={`${url}/itstaffing3`} activeClassName="selected">
                            Fresh Graduates
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </div>
            </div>

            <Route path={`${url}/itstaffing1`}>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "100%",
                            margin: "auto",
                            background: "#ffffff",
                        }}
                    >
                        <Data />
                    </div>
                </div>
            </Route>

            <Route path={`${url}/itstaffing2`}>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "100%",
                            margin: "auto",
                            background: "#ffffff",
                        }}
                    >
                        <Data1 />
                    </div>
                </div>
            </Route>
            
            <Route  path={`${url}/itstaffing3`}>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            width: "100%",
                            margin: "auto",
                            background: "#ffffff",
                        }}
                    >
                        <Data2 />
                    </div>
                </div>
            </Route>
            <Route exact path={url}>
            <p style={{ textAlign: "center" }}> </p>
          </Route>
        </div>
    );
}

export default Navbar;