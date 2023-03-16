import React from "react";
import Person from "./Person";
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
        {this.props.beast.map((person,index) => {
          return (
          <Person
          name={person._id} 
          title={person.title} 
          image={person.image_url} key={index}
          description={person.description}
          addHearts={this.props.addHearts}
          handleOpenModal={this.props.handleOpenModal}
          />
        )  
        })}
      </main>
    )
  }
}

export default Main;