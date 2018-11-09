import React from 'react';
import './note.css'

const Note = (props) => {
    console.log(props)

    return (<div >
        <h1>Your Notes:</h1>
        <div className='notes'>

            {props.notes.map((note, i) => {
                return (<div key={i} className='note'>
                <h4>{note.title}</h4>
                <p>{note.content}</p>
                <button>Button</button>
            </div>)
            })}

            

        </div>


    </div>);
}

export default Note;