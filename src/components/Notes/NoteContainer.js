import React, { Component } from 'react'
import Note from './Note';

const NoteContainer = props => {
        return ( <div className='note-container'>
            <Note notes={props.notes}/>
            </div> );
    }

 
export default NoteContainer;