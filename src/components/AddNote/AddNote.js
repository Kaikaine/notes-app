import React from 'react';

const AddNote = (props) => {
    return (<div>

        <form onSubmit={props.add}>
            <div class="form-group">
                <label for="exampleFormControlFile1">Choose an image:</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1" />
            </div>

            <input name='title' value={props.title} onChange={props.new} class="form-control" type="text" placeholder="Enter title here" />

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea name='content' value={props.content} onChange={props.new} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>);
}

export default AddNote;