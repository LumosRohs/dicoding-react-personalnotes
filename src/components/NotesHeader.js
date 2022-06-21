import React from 'react';
import SearchNote from './SearchNote';

function Header (props) {
    return (
        <div className='note-app__header'>
            <h1>Notes</h1>
            <SearchNote onSearch={props.onSearch}/>
        </div>
    )
}

export default Header;