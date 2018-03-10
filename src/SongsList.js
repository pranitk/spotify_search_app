import React, { Component } from "react";
import './SongsList.css'

class SongsList extends Component{
    render(){
        return(

            <div className="container">
                    <div className="row">

                        {this.props.songsList.map(track => {

                            return(
                                

                                <div key={track.id} className="col-xs-12  col-lg-6">
                                        <div className="card">
                                            <div className="row">
                                                
                                                    <img id="album_art" className="card-img-top" src={track.album.images[0].url} alt="No album art"/>
                                                    <div className="col">
                                                        <p id="track-name"> {track.name} </p>
                                                        <a id="view_album" href={track.album.external_urls.spotify} target="blank">
                                                            <button type="button" className="btn btn-outline-secondary btn-sm">View Album</button>
                                                        </a>
                                                    </div>
                                            </div>

                                            <div className="row">
                                                    <div className="card-block">
                                                        <p className="card-text">Album: {track.album.name}</p>
                                                        
                                                        <p className="card-text">Popularity: {track.popularity} </p>

                                                        <p className="card-text">Artists:</p>
                                                        <ul>
                                                            {track.artists.map(artist => {
                                                                return(
                                                                <li key={artist.id}>
                                                                    {/* <p className="card-text">
                                                                        {artist.name}
                                                                    </p> */}

                                                                    <a target="blank" href={artist.external_urls.spotify}>
                                                                       <button id="artist_name" type="button" className="btn btn-link"> {artist.name} </button>
                                                                    </a>

                                                                    
                                                                </li>)
                                                            })}
                                                        </ul>
                                                    </div>
                                                    
                                                    
                                            </div>

                                            <label>Song preview</label>
                                            
                                                <audio controls> 
                                                    <source src={track.preview_url} type="audio/mp3"/>
                                                </audio>
                                        
                                           

                                            {/* <a target="blank" href={track.preview_url}>
                                                <button id="preview_song" type="button" className="btn btn-success btn-sm">Preview song</button>
                                            </a> */}
                                        </div>
                                </div>
                            );


                        })}

                    </div>

            </div>
            

        );
    }
}

export default SongsList