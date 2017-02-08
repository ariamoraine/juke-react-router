import React from 'react';
import {Link} from 'react-router';

class Artist extends React.Component {

  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;

    selectArtist(artistId);

  }

  render() {
    const artist = this.props.selectedArtist || {};
    console.log('artist', this.props)
    return (
      <div>
        <h3>{artist.name}</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
    );
  }
}

export default Artist;

