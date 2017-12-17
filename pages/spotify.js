import React, { Component } from "react";
import PropTypes from "prop-types";
import master from "../hocs/master";
import { H1, H2, P, Items } from "../components/styles";

class Spotify extends Component {
  constructor(props) {
    super(props);
    this.state = { songs: [] };
  }
  componentDidMount() {
    const spRegEx = /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/;
    const getIDfromRegEx = (src, regExpy) =>
      src.match(regExpy) ? RegExp.$1 : null;
    fetch(
      "https://api.github.com/repos/maestroh/fullstory-challenge-api/issues"
    )
      .then(response => response.json())
      .then(json => {
        let songs = json.filter(j => getIDfromRegEx(j.body, spRegEx)).map(j => {
          return {
            title: j.title,
            songId: getIDfromRegEx(j.body, spRegEx)
          };
        });
        console.log(songs);
        this.setState({ songs });
      });
  }

  render() {
    console.log(this.state.songs);
    return (
      <div>
        <H1>Github Issues Integration</H1>
        <P>
          I've turned Github Issues into a hacky Spotify playlist. Go to &nbsp;<a
            href="https://github.com/maestroh/fullstory-challenge-api/issues"
            alt="github issues"
            target="_blank"
          >
            https://github.com/maestroh/fullstory-challenge-api/issues
          </a>&nbsp; and add a link to your favorite songs on Spotify. You'll
          see the songs appear here once you refresh the page.
        </P>
        <Items>
          {this.state.songs.map(s => (
            <div style={{width:300}}>
              <H2>{s.title}</H2>
              <iframe
                src={`https://open.spotify.com/embed/track/${s.songId}`}
                width="300"
                height="380"
                frameBorder="0"
                allowTransparency="true"
              />
            </div>
          ))}
        </Items>
      </div>
    );
  }
}

export default master(Spotify);

/*
{this.state.songs.map(s => (
      return <iframe
        src={`https://open.spotify.com/embed/track/{s.songId}`}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
    />))
    */
