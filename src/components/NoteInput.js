import React from 'react';

class NoteInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            title: event.target.value,
          }
        });
        this.props.onSearch();
    }

    onBodyChangeEventHandler(event) {
        this.setState((prevState) => {
          return {
            ...prevState,
            body: event.target.value,
          }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNotes(this.state);
    }

    render () {
        return (
            <div className='note-input'>
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa karakter: {50 - this.state.title.length}</p>
                    <input className="note-input__title" maxLength={50} type="text" placeholder="Ini adalah judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} required/>
                    <textarea className='note-input__body' type='text' placeholder='Tuliskan catatanmu di sini ...' value={this.state.body} onChange={this.onBodyChangeEventHandler} required/>
                    <button type='submit'>Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;