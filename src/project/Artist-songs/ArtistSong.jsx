
import React, { useEffect, useState } from 'react';
import './ArtistSong-Styles.css'

function ArtistSong({ artistName, setPageTab }) {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    fetch('/singers-data.json')
      .then(response => response.json())
      .then(data => {
        const artistSongs = data.filter(song => song.name === artistName);
        setArtist(artistSongs);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [artistName]);

  return (
    <div className='artist-song-page'>
      <button onClick={() => setPageTab('home')} className='backTohome'>Back to Home</button>
      <div className="artist-container">

        {artist.map(singer => (
          <>

            <div className="artist-box">
              <img src={singer.image} alt={singer.name} className='artist-image' />
              <h1 className="artist-name">{singer.name}</h1>

            </div>
            {singer.songs.map((song, index) => (
              <div className='artist-song-list'>
                <img src={song.image} alt='song-name' className='song-image'/>
                <p>{song.title}</p>
                <p>{song.movie}</p>

                <audio controls>
                  <source src={song.audio} type="audio/mpeg" />

                </audio>



              </div>

            ))}
          </>
        ))
        }
      </div>

    </div >
  );
}

export default ArtistSong;
