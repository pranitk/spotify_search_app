import React, { Component } from 'react';
import './App.css';
import SearchSong from './SearchSong'
import SongsList from './SongsList'
import Axios from 'axios'

var access_token = ""

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      song: "",
      songList: [],
      matchingTracksFound: 0  // 0 - Default state  1 - Found  2 - Not found
    }
  }


  componentDidMount(){

      Axios.post('https://cs-554-spotify-proxy.herokuapp.com/api/token',{data: {grant_type: 'client_credentials'}},{headers: {'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic <MY TOKEN IN REQUIRED FORMAT>' }  // removed token for security reasons..
      }).then(res => {
        access_token = res.data.access_token
        //console.log("Response from Spotify "+access_token)
      })


  }





  onSongSearch = songName => {


     Axios.get('https://cs-554-spotify-proxy.herokuapp.com/v1/search?q='+songName+'&type=track',
     { headers: { 'Content_type': 'application/json','Authorization': 'Bearer '+access_token } } )
     .then(res => {
        
      console.log("Search response from Spotify "+JSON.stringify(res.data.tracks.items[0]))

      var found = 0;

      if(res.data.tracks.items.length > 0)
        found = 1;
      else
        found = 2;

      //console.log("Found "+found)

      this.setState({
        song:songName,
        songList: res.data.tracks.items,
        matchingTracksFound: found
      })
        
    })

    
  }

  render() {

    const tracksFound = this.state.matchingTracksFound;

    let result = null

    if(tracksFound === 1){
      result = <SongsList songsList={this.state.songList}/>
    }
    else if(tracksFound === 2){
      result = <p>No matching tracks found for '{this.state.song}'</p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Spotify Search</h1>
          <h2 className="App-sub-title">Made by Pranit Kulkarni</h2>
        </header>
        <div className="App-intro">
          <SearchSong onSongSearch={this.onSongSearch}/>

          {result}
          
        </div>
      </div>
    );
  }
}

export default App;
