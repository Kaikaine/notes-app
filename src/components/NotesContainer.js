import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import '../App.css'
import NoteContainer from './Notes/NoteContainer';
import HeaderContainer from './Header/HeaderContainer';
import { Route} from 'react-router-dom';
import AddNote from './AddNote/AddNote';

class NotesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            image: '',
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
            title: this.state.title,
            content: this.state.content,
            image: this.state.image
        })
        this.setState({ title: '', content: '', image: '', notes: notes})
    }



    render() {
        return (<div className='notes-container'>
            <Navbar />
            <Route exact path='/' render={routerProps => <NoteContainer {...routerProps} notes={this.state.notes}/>} />
            <Route exact path='/create' render={routerProps => <AddNote {...routerProps} new={this.newNote} add={this.addNote} title={this.state.title} content={this.state.content} image={this.state.image} />} />
        </div>);
    }
}

export default NotesContainer;