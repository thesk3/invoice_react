
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import TableData from "./TableData";

class Homenav extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            
            <ul className="header">
              <li><NavLink exact to="/home/">Visits</NavLink></li>
              <li><NavLink to="/home/stuff">Clients</NavLink></li>
              <li><NavLink to="/home/contact">Contact</NavLink></li>
              <li><NavLink to="/home/TableData">TableData</NavLink></li>
            </ul>
            <div className="content">
              <Route exact  path="/home/" component={Home}/>
              <Route path="/home/stuff" component={Stuff}/>
              <Route path="/home/contact" component={Contact}/>
              <Route path="/home/TableData" component={TableData}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Homenav;