import React, { Component } from 'react';
import './assets/styles/App.css';
import Jumbotron from "./components/jumbotron";
import MainJumbo from "./components/MainJumbo";
import Footer from "./components/footer";
 
class App extends Component {

  state = {
    display: "none"
  }

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <MainJumbo />
        <Footer />
      </div>
    );
  }
}

export default App;