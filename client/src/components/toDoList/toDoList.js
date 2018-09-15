import React, { Component } from 'react'
import ListHeader from '../ListHeader'

// Creating a component which will hold each to do list. This will inclide the title of the list
// 'the to do items, and the ability to mark items as done. This will also show all completed items
class toDoList extends Component {
    render(){
        return(
            <div>
                <ListHeader/>
            </div>
        )
    }
}

export default toDoList