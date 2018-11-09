import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css'
import NoteContainer from './Notes/NoteContainer';
import HeaderContainer from './Header/HeaderContainer';
import { Route} from 'react-router-dom';

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',

            notes: []
        }
    }

    newNote = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addNote = e => {
        e.preventDefault()
        const notes = this.state.notes.slice()
        notes.push({
            text: this.state.text,
            content: this.state.content,
        })
        this.setState({ text: '', content: ''})
    }



    render() {
        return (<div className='notes-container'>
            <Navbar />
            <Route exact path='/' render={routerProps => <NoteContainer {...routerProps}  />} />

        </div>);
    }
}

export default NotesContainer;