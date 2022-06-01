import React, { Component } from "react";

export default class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: this.props.title,
    };
  }

  render() {
    return <li>{this.state.categoria}</li>;
  }
}
