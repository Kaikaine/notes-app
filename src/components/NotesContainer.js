import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css'
import NoteContainer from './Notes/NoteContainer';
import HeaderContainer from './Header/HeaderContainer';

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            view: 0
         }
    }


    
    render() { 
        return ( <div className='notes-container'>
            <HeaderContainer />
            <NoteContainer />
            <Navbar />
            </div> );
    }
}
 
export default NotesContainer;