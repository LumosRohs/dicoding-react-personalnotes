import React from 'react';

function DeleteButton({id, onDelete}) {
    return (
        <button className='note-item__delete-button' onClick={() => onDelete(id)}>Delete</button>
    )
}

function ArchiveButton({id, isArchive, onArchive}) {
    return (
        <button className='note-item__archive-button' onClick={() => onArchive(id, isArchive)}>{isArchive ? 'Pindahkan' : 'Arsipkan'}</button>
    )
}

function ActionButton ({id, onDelete, onArchive, isArchive}) {
    return (<div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive} />
    </div>
    )
}

export default ActionButton;