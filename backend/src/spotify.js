const fetch = require('node-fetch');
require('dotenv').config();
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = process.env.SPOTIFY_ACCESS_TOKEN;
async function main() {
    const topTracksResponse = await fetch(
        'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!topTracksResponse.ok) {
        console.error('API request failed:', topTracksResponse.status, topTracksResponse.statusText);
        throw new Error('API request failed');
      }
      
      console.log(topTracksResponse.status);
      console.log(topTracksResponse.statusText);
      
      const topTracksData = await topTracksResponse.json();
      console.log(topTracksData);
};
main();
