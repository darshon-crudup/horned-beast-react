import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props.heart);
    return <h1>Horned Beast Collection {this.props.hearts}</h1>
  }
}

export default Header;