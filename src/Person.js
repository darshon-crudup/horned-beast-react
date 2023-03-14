import React from "react";

class Person extends React.Component {
  render() {
    return (
      <article>
        <p>Hello {this.props.name}</p>
      </article>
    )
  }
}

export default Person;