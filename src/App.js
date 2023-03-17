import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import data from './data/data.json';
import Selectedbeast from "./Selectedbeast";

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

  handleOpenModal = (beastTitle) => {
    const beastSelected = data.find(x => x.title === beastTitle);
    console.log(beastTitle)
    console.log(beastSelected)

///MAP THROUGH THE DATA.JSON FILE AND FIND THE BEAST_TITLE THAT MATCHES MY CONSOLE LOGGED beastTitle
    // let beastForModal=data.map()

    this.setState({ 
      showModal: true,
      selectedbeast: beastSelected,
    },() => {
      console.log(this.state.selectedbeast)
    })
    
  } 

  handleNameClick = (e) => {
    this.handleOpenModal(e.target.textContent);
  }

  render() {
    return (
      <>
    <Header hearts={this.state.hearts} />  
    <Main 
      beast={this.state.beast} 
      addHearts={this.addHearts} 
      handleOpenModal={this.handleOpenModal} 
      handleNameClick={this.handleNameClick}
    />   
    <Selectedbeast
    selectedbeast={this.state.selectedbeast}
    showModal={this.state.showModal}
    close={this.handleCloseModal}
    />
    <Footer />
    </>
    )
  }
}

export default App;