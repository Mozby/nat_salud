import React, { Component } from "react";

export default class notfound extends Component {
  render() {
    var myStyle = {
      fontSize: 100,
      color: "Red",
      marging: 20
    };
    return (
      <div>
        <h1 style={myStyle}>SORRY NOT FOUND</h1>
      </div>
    );
  }
}
