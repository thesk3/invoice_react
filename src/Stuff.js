import React, { Component } from "react";
import DataTable from "./DataTable";
import { withRouter } from 'react-router-dom';

class Stuff extends Component {
  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `AddClient`;
    this.props.history.push(path);
  }

  // WARNING: this syntax is experimental!
  // Using an arrow here binds the method:
  handleClick = () => {
    alert(this.state.message);
  }

  render() {
    return (<div> 
      <button onClick={this.handleClick}>
        Say hello
      </button>
      <button onClick={this.routeChange}>
        change route
      </button>
      <DataTable></DataTable>
      </div>

    );
  }
}

export default Stuff;