import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.user.name}</h3>
      </div>
    );
  }
}

export default Details;
