import React from 'react';
import {Link} from 'react-router';
import Albums from './Albums';

class Artist extends React.Component {

  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectedArtistFunc = this.props.selectedArtistFunc;
    const selectedArtistAlbums = this.props.selectedArtistAlbums;

    selectedArtistFunc(artistId);
    selectedArtistAlbums(artistId);
  }

  render() {
    // console.log("TAG ", this.props.selectAlbum);
    const selectArtistAlbums = this.props.selectArtistAlbums || [];
    const artist = this.props.selectedArtist || {};
    console.log('artistAlbums', selectArtistAlbums);
    console.log('ARTIST PROPS', this.props)
    // console.log('HERE IS ', this.props);

    // var curArtistStuff =

    return (
      <div>
        <h3>{artist.name}</h3>
        <h4><Albums albums = {selectArtistAlbums}/></h4>
        {/*<h4><Songs /></h4>*/}
      </div>
    );
  }
}

export default Artist;

