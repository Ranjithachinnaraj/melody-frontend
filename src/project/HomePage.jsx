// import '../styles/Style.css';
// import '../styles/Media-query.css'
// import { useEffect, useState } from 'react';

// function HomePage({ setPageTab }) {
//   const [songs, setSongs] = useState([]);
//   const [artist, setArtist] = useState([]);

//   useEffect(() => {
//     fetch('/musicdata.json')
//       .then(response => response.json())
//       .then(data => setSongs(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     fetch('singers-data.json')
//       .then(response => response.json())
//       .then(data => setArtist(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


//   return (
//     <>
//       <div className="home">
//         <div className="home-header">
//           <div className="home-top">
//             <img
//               src='https://i.pinimg.com/originals/6b/ab/ee/6babeeeeadb5ccf27187166cfd250e78.jpg' alt="icon" className="home-icon" />
//             <p className="text-home">Home</p>
//           </div>
//           <br />
//           <button className="home-btn">Playlist</button>
//           <button className="home-btn">Artist</button>
//         </div>

//         <h2 className='artist-heading'>Popular artists</h2>
//         <div className="home-artist-container">
        
//           {artist.map(singer => (

//             <div className="home-artist-box">
//               <img src={singer.image} alt={singer.name} className='home-artist-name' />
//               <div className="home-artist-name">{singer.name}</div>

//             </div>
//           ))
//           }
//           </div>


//           <h2 className='artist-heading'>Popular Songs</h2>
//         <div className="home-song-container">
//           {songs.map(song => (

//             <div className="home-song-box">
//               <img src={song.image} alt={song.title} />
//               <div className="home-song-name">{song.title}</div>
//               <div> <marquee>{song.movie}</marquee> </div>

//             </div>
//           ))
//           }


//           {/* <audio controls>

//             <source src="/public/song1.mp3" type="audio/mpeg" />
             
//           </audio> */}

//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;



import '../styles/Style.css';
import '../styles/Media-query.css';
import { useEffect, useState } from 'react';
import ArtistSong from './Artist-songs/ArtistSong';

function HomePage({ setPageTab }) {
  const [songs, setSongs] = useState([]);
  const [artist, setArtist] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    fetch('/musicdata.json')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('/singers-data.json')
      .then(response => response.json())
      .then(data => setArtist(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const navigateToArtistPage = (artistName) => {
    setSelectedArtist(artistName);
    setCurrentPage('artist');
  };

  if (currentPage === 'artist') {
    return <ArtistSong artistName={selectedArtist} setPageTab={setCurrentPage} />;
  }

  return (
    <div className="home">
      <div className="home-header">
        <div className="home-top">
          <img
            src="https://i.pinimg.com/originals/6b/ab/ee/6babeeeeadb5ccf27187166cfd250e78.jpg"
            alt="icon"
            className="home-icon"
          />
          <p className="text-home">Home</p>
        </div>
        <br />
        <button className="home-btn">Playlist</button>
        <button className="home-btn">Artist</button>
      </div>

      <h2 className="artist-heading">Popular artists</h2>
      <div className="home-artist-container">
        {artist.map((singer) => (
          <div
            className="home-artist-box"
            key={singer.name}
            onClick={() => navigateToArtistPage(singer.name)}
          >
            <img
              src={singer.image}
              alt={singer.name}
              className="home-artist-name"
            />
            <div className="home-artist-name">{singer.name}</div>
          </div>
        ))}
      </div>

      <h2 className="artist-heading">Popular Songs</h2>
      <div className="home-song-container">
        {songs.map((song) => (
          <div className="home-song-box" key={song.title}>
            <img src={song.image} alt={song.title} />
            <div className="home-song-name">{song.title}</div>
            <div>
              <marquee>{song.movie}</marquee>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

