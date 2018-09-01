import React, {Component} from 'react';
import "./SideNav.css";
import ListItem from "../ListItem"
import calendarIcon from "../../icons/baseline-calendar_today-black-18/2x/baseline_calendar_today_black_18dp.png"

class SideNav extends Component {

    // state = {
    //     toDoLists=[]
    // }

    render() {
        return(
            <div>
                <ListItem 
                icon = {calendarIcon}
                listNameText = "Today"   
                >
                </ListItem>
            </div>
        )
    }
}

export default SideNav