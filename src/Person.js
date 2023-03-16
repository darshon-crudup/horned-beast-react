import React from "react";
import './Person.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

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

handleOpenModal = () => {
  this.setState({
    showModal: true
  })
}  

handleNameClick = () => {
  this.props.handleOpenModal(this.props.name)
}

  render() {
    return (
      <Card>
        <Card.Title onClick={this.handleNameClick}>{this.props.name}</Card.Title>
        <p>❤️ {this.state.favorites} Favorites</p>
        <p on Click={this.handleFavorite}>Choose Your Fav!</p>
        <Card.Img onClick={this.props.addHearts} src={this.props.image} alt={this.props.name} />
        <p>Title {this.props.title}</p>
        <p>Description:<br></br> {this.props.description}</p>
        {/* <img src={this.props.image}alt="animal" style={{width:"200px"}}/> */}
        <Button onClick={this.needsHelp} variant="danger">Help!</Button>
        <Button onClick={this.gotHelp} variant="success">I got help</Button>
      </Card>
    )
  }
}

export default Person;