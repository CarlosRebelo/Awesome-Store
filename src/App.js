import React, { Component } from 'react';
import Products from './components/product/Product'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Products/>
      </div>
    );
  }
}

export default App;
