import React from "react";
import Person from './Person';
import data from './data/data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
        {data.map((person,index) => {
          return <Person 
          name={person._id} 
          title={person.title} 
          image={person.image_url} key={index}
          description={person.description}
          />
        })}
      </main>
    )
  }
}

export default Main;