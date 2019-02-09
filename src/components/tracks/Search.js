import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

export default class Search extends Component {
  state = {
    trackTitle: ""
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="text-center">
                <i className="fas fa-music" /> Search for a song
              </h1>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
