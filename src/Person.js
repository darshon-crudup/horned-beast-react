import React from "react";
import './Person.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  this.props.addHearts()
}

  render() {
    // console.log(this.props.title)
    // console.log(this.props.description)
    return (
      <Card>
        <Card.Title onClick={this.props.handleNameClick}>{this.props.title}</Card.Title>
        <Card.Text>❤️ {this.state.favorites} Favorites</Card.Text>
        <Card.Text onClick={this.handleFavorite}>Choose Your Fav!</Card.Text>
        <Card.Img onClick={this.props.addHearts} src={this.props.image} alt={this.props.name} />
        <Card.Text>{this.props.description}</Card.Text>
        <Button onClick={this.needsHelp} variant="danger">Help!</Button>
        <Button onClick={this.gotHelp} variant="success">I got help</Button>
      </Card>
    )
  }
}

export default Person;