const SpotifyWebApi = require('spotify-web-api-node');

var clientID = '15fded22ab5c48059fe93eba06df1b34';
var clientSecret = '0d43c0ee246c434fa6e336d8caf07fc6';

//Generate token access
/* Creating a new instance of the SpotifyWebApi class. */
var spotifyApi = new SpotifyWebApi({
    clientId: clientID,
    clientSecret: clientSecret
})

const consultSpotify = async(artist) => {
    spotifyApi.clientCredentialsGrant().then(function(data){
        console.log('Token generated', data.body['access_token'])
        spotifyApi.setAccessToken(data.body['access_token'])
        return spotifyApi.searchArtists(artist)
    }).then(function(data){
        var artists = data.body.artists.items
        artists.forEach((art)=>{
            console.log(art)
        })
    }).catch(console.error())
}

consultSpotify('Love')