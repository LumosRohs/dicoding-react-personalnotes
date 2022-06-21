import React from 'react';
import NoteItem from './NoteItem';

function NotesList({notes, onDelete, onArchive, onSearch}) {
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NoteItem 
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onSearch={onSearch}
                    onArchive={onArchive}
                    isArchive={note.archived}
                    {...note}/>
                ))
            }
        </div>
    )
}

export default NotesList;