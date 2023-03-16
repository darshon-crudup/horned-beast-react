import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hearts: '',
      showModal: false,
      selectedbeast: {},
      beast:data 
    }
  }
  
  addHearts = () => {
    this.setState({
      hearts: this.state.hearts + '💙'
    })
  }

  handleCloseModal = () => {
    this.setState({ 
      showModal: false
    })
  } 

  handleOpenModal = (name) => {
    this.setState({ 
      showModal: true,
      selectedbeast: this.state.selectedbeast
    })
  } 

  render() {
    return (
      <>
    <Header hearts={this.state.hearts} />  
    <Main beast={this.state.beast} addHearts={this.addHearts} handleOpenModal={this.handleOpenModal} />   

    <Footer />
    </>
    )
  }
}

export default App;