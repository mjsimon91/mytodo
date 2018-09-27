import React, { Component } from 'react';
import './App.css';
import SideNav from './components/SideNav'
import ToDoList from './components/ToDoList'
import API from "./utils/API"


class App extends Component {

  state = {
    toDoLists: []
}

  // Search for a list of user's to do lists
  searchUserLists = () => {
    API.getLists()
    .then(response => {
        this.setState({
            toDoLists: response.data
        })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
      this.searchUserLists();
  };

  render() {
    return (
      <div className="row">
        <SideNav
          className = 'sideNavComponent'
          toDoLists = {this.state.toDoLists}
        />
                  
        <ToDoList
          className = "toDoList col-10-xl"
          listName = {this.state.toDoLists}
        />
      </div> 
    );
  }
}

export default App;
