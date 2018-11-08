import React, { Component } from 'react'
import Note from './Note';

class NoteContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='note-container'>
            <Note />
            </div> );
    }
}
 
export default NoteContainer;