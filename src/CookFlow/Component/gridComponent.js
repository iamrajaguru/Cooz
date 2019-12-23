import React, { Component } from "react";
import '../styles/grid.css'
export default class GridComponent extends Component {
  render() {
    return (
      <div>
        <div className="container ">
          <div className="row ">
            <div className="col-6 myStyle">Hai</div>
            <div className="col-6 myStyle">Hello</div>
            <div className="col-6 myStyle">Hai</div>
            <div className="col-6 myStyle">Hello</div>
            <div className="col-6 myStyle">Hai</div>
            <div className="col-6 myStyle">Hello</div>
            <div className="col-6 myStyle">Hai</div>
            <div className="col-6 myStyle">Hello</div>
          </div>
        </div>
      </div>
    );
  }
}
