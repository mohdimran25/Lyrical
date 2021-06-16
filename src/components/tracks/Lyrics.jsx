import React, { Component } from 'react'
import axios from 'axios';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';

class Lyrics extends Component {
    state ={
        track:{},
        lyrics:{},
        album:{}
    }

    componentDidMount() {
        
        axios.all([
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`),
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        ])
        .then( res => {
            this.setState({lyrics:res[0].data.message.body.lyrics});
            this.setState({track:res[1].data.message.body.track});
            axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.get?album_id=${res[1].data.message.body.track.album_id}&apikey=${process.env.REACT_APP_MM_KEY}`)        
            .then( res => {
                this.setState({album:res.data.message.body.album})
        }) 
            
        })
        .catch(err => console.log(err));
        
    }
    
    render() {
        const { track, lyrics, album}  = this.state;
        console.log(album);
        if( track === undefined || lyrics === undefined || Object.keys(track).length === 0|| Object.keys(lyrics).length === 0){
            return <Spinner />
        }
        else {
            return (
                <>
                  <Link to="/" className="btn btn-dark btn-md mb-4">Back</Link>
                  <div className="card">
                    <h5 className="card-header">
                        {track.track_name} by {'  '} <span className="text-secondary">
                            {track.artist_name}
                        </span>
                    </h5>
                        <div className="card-body">
                            <p className="card-text">{lyrics.lyrics_body} </p>
                        </div>
                  </div>
                  <ul className="list-group mt-3">
                      {/* <li className="list-group-item">
                          <strong>Cover Art</strong>  : {track.album_coverart_100x100}
                      </li> */}
                    <li className="list-group-item">
                        <strong>Album ID</strong>: {track.album_id}
                    </li>
                    {/* <li className="list-group-item">
                        <strong>Song Genre</strong>:
                        {album.primary_genres.music_genre_list[0].music_genre.music_genre_name}
                    </li> */}
                    <li className="list-group-item">
                        <strong>Album Name</strong>: {track.album_name}
                    </li>
                    <li className="list-group-item">
                        <strong>Explicit Words</strong>:{' '} {track.explicit === 0? 'No' : 'Yes'}
                    </li>
                    <li className="list-group-item">
                        <strong>Release Date</strong>: {album.album_release_date}
                    </li>
                    <li className="list-group-item">
                        <strong>Album Copyright</strong>: {album.album_copyright}
                    </li>
                   </ul>  
                </>
            )
        }
    }
}

export default Lyrics;