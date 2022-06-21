import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NotesBody(props){
    return (
    <div className='note-app__body'>
        <NoteInput addNotes={props.onAddNotes}/>
        <h2>Catatan Aktif</h2>
        <NotesList notes={props.notes} onDelete={props.onDelete} onArchive={props.onArchive} onSearch={props.onSearch}/>
        <h2>Arsip</h2>
        <NotesList notes={props.archive} onDelete={props.onDelete} onArchive={props.onArchive} onSearch={props.onSearch}/>
    </div>
    )
}

export default NotesBody;