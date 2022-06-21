import React from 'react';

class SearchNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.props.onSearch(event.target.value.toLowerCase());
        this.setState((prevState) => {
          return {
            ...prevState,
            keyword: event.target.value.toLowerCase(),
          }
        });
    }

    render() {
        return (
            <div className='note-search'>
                <input type="text" placeholder="Cari catatan ..." value={this.state.keyword} onChange={this.onSearchChangeEventHandler} />
            </div>
        )
    }
}

export default SearchNote;