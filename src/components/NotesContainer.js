import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../App.css'

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    
    render() { 
        return ( <div className='notes-container'>
            <Sidebar />
            </div> );
    }
}
 
export default NotesContainer;