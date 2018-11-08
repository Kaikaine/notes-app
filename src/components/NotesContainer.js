import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import '../App.css'
import Toggle from './Sidebar/Toggle';
import NoteContainer from './Notes/NoteContainer';

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            view: 0
         }
    }

    toggleSidebar = e => {
        if (this.state.view === 0) {
            document.querySelector('.side-bar').classList.remove('view')
            document.querySelector('.side-bar').classList.add('no-view')
            this.setState({
                view: 1
            })
        }
        else {
            document.querySelector('.side-bar').classList.remove('no-view')
            document.querySelector('.side-bar').classList.add('view')
            this.setState({
                view: 0
            })
        }
    }
    
    render() { 
        return ( <div className='notes-container'>
            <Sidebar />
            <Toggle toggle={this.toggleSidebar} />
            <NoteContainer />
            </div> );
    }
}
 
export default NotesContainer;