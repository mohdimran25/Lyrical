import React from 'react'
import {Link} from 'react-router-dom'
const Track = (props) => {
    const {track} = props;
    return (
        <div className="col-md-6">
           <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.arstist_name}</h5>
                    <p className="card-test">
                        <strong><i className="fas fa-play"></i> Tracks</strong>:{' '}{track.track_name}
                        <br/>
                        <strong><i className="fas fa-compact-disc"></i>  Album </strong>:{' '}
                        {track.album_name}
                        <br/>
                        <strong><i className="fas fa-user"></i>  Artist Name</strong>:{' '}{track.artist_name}
                    </p>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>            
            </div>           
        </div>
    )
}

export default Track;