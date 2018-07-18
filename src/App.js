import React, { Component } from 'react';
import Products from './components/product/Product'
import Header from './components/header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
