import React from 'react';
import NotesBody from './NotesBody';
import Header from './NotesHeader'
import { getInitialData } from '../utils/index';

class NotesApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
        }

        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onSearchHandler(keyword) {
        this.setState({
            searchKeyword: keyword.toLowerCase(),
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id, isArchive) {
        if(!isArchive) {
            const notes = [...this.state.notes];
            const index = notes.findIndex(note => note.id === id);
            let item = {...notes[index]};
            item.isArchive = true;
            notes[index] = item;
            this.setState({notes})
        } else {
            const notes = [...this.state.notes];
            const index = notes.findIndex(note => note.id === id);
            let item = {...notes[index]};
            delete item.isArchive;
            notes[index] = item;
            this.setState({notes})
        }
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    render() {
        const filteredNotes = this.state.notes.filter((note) => {
            if(this.state.searchKeyword === '') {
                return note;
            }
            else {
                return note.title.toLowerCase().includes(this.state.searchKeyword);
            }
        })
        const notes = filteredNotes.filter((note => note.isArchive === undefined));
        const archive = filteredNotes.filter((note => note.isArchive === true));
        return <>
            <Header onSearch={this.onSearchHandler}/>
            <NotesBody notes={notes} archive={archive} onAddNotes={this.onAddNotesHandler} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onSearch={this.onSearchHandler}/>
        </>
    }
}

export default NotesApp;