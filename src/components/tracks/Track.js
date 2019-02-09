import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;

  return (
    <div className="col-md-6">
      <div className="card mb-4">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>Track: </strong>
            {track.track_name}
          </p>
          <Link
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right" /> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
