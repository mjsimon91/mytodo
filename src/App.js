import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/listItem'
import ListItem from './components/listItem';

class App extends Component {
  render() {
    return (
      <ListItem/>
    );
  }
}

export default App;
