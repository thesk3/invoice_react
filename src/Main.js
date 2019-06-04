
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Homenav from "./homenav";
import TableData from "./TableData";
import AddClient from "./AddClient";

class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            
            <ul className="header">
              <li><NavLink exact to="/">Visits</NavLink></li>
              <li><NavLink to="/stuff">Clients</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/TableData">TableData</NavLink></li>
              <li><NavLink to="/Homenav">Homenav</NavLink></li>
            </ul>
            <div className="content">
              <Route exact  path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/TableData" component={TableData}/>
              <Route path="/Homenav" component={Homenav}/>
              <Route path="/AddClient" component={AddClient}/>
              
            </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;