import React, { Component } from 'react';
import Header from "./header"
import MemeGenerator from "./MemeGenerator"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          name="Random IBM memes"
        />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
