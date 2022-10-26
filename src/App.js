import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {

    const[songs, setSongs] = useState([]);
    const[search, setSearch] = useState('');
    
    useEffect(() => {
        getAllSongs();
    }, [])
    
    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/api/music/');
        if (search === ''){
            setSongs(response.data)
        }
        else {
            let results = response.data.filter((song) => {
                if(song.id.includes(search) || song.title.includes(search) || song.artist.includes(search) || song.album.includes(search) || song.release_date.includes(search) || song.genre.date.includes(search)){
                    return true;
                    }
                else{
                    return false;
                    }
                });
            setSongs(results)
            }
    }


  return (
    <div>
      <h3>Music Library</h3>
      <div>
        <SearchBar filteredSongs={setSearch}/>
      </div>
      <div>
        <MusicTable allSongs={songs}/>
      </div>
      
    </div>
  );
}

export default App;
