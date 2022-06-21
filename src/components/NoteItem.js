import React from 'react';
import ActionButton from './ActionButton';
import NoteItemContent from './NoteItemContent';

function NoteItem ({id, title, createdAt, body, onDelete, onArchive, isArchive}) {
    return (
        <div className='note-item'>
            <NoteItemContent title={title} date={createdAt} body={body}/>
            <ActionButton id={id} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive}/>
        </div>
    )
}

export default NoteItem;