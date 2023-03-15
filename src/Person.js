import React from "react";
import './Person.css';
import Button from 'react-bootstrap/Button';


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    }
  }


handleFavorite = () => {
console.log('handleFavorite');
  this.setState({
    favorites: this.state.favorites + 1
  })
}

  render() {
    return (
      <article>
        <h1>Name {this.props.name}</h1>
        <p onClick={this.handleFavorite}>❤️ {this.state.favorites} # of Favorites </p>
        <p>Choose Your Fav!</p>
        <p>Title {this.props.title}</p>
        <p>Description:<br></br> {this.props.description}</p>
        <img src={this.props.image}alt="animal" style={{width:"200px"}}/>
        <Button>Message</Button>
      </article>
    )
  }
}

export default Person;