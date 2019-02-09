import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";

export default class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=f3e11c023a3f0c0918993f25c872d2e0`
      )
      .then(res => {
        this.setState({ lyrics: res.data.message.body.lyrics });
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
              this.props.match.params.id
            }&apikey=f3e11c023a3f0c0918993f25c872d2e0`
          )
          .then(res => this.setState({ track: res.data.message.body.track }))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
  render() {
    const { track, lyrics } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <div className="card-header">
              <strong>{track.track_name}</strong> By:{" "}
              <span className="text-secondary">{track.artist_name}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>
        </>
      );
    }
  }
}
