import React, { Component } from 'react';
import './SearchSong.css'


class SearchSong extends Component {


    constructor(props){
        super(props)

        this.state = {
            enteredSongName : ""
        }
    }

    onSearch = textField => {
        this.setState({
            enteredSongName : textField.target.value
        })
    }

    onSubmit = textField =>{
        textField.preventDefault()

        if(this.state.enteredSongName){
            this.props.onSongSearch(this.state.enteredSongName)
        }
    }


    render(){
        return(

            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="input_song_name">Search for any song you love</label>
                    <input type="text" 
                            className="form-control" id="input_song_name" placeholder="Enter song name"
                            value={this.state.enteredSongName}
                            onChange={this.onSearch}/>
                    <small id="emailHelp" className="form-text text-muted">We'll search it for you from Spotify</small>
                </div>

                <button type="submit" id="searchBtn" className="btn btn-primary">Search</button>
          </form>

        );
    }
}

export default SearchSong