import React, { Component } from 'react'

export default class NavLinkClass extends Component {
  constructor(props){
      super(props);
      this.title = props.title;
  }
  
  render() {
    return (
      <div>{this.title}</div>
    )
  }
}
