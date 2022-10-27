import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/NavBar/NavBar';
import AddSong from './Components/AddSong/AddSong';

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
                if (song.title.includes(search) || song.artist.includes(search) || song.album.includes(search) || song.release_date.includes(search) || song.genre.includes(search)){
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
        <div>
        <Header/>
        </div>
        <div>
            <SearchBar setFilter={setSearch} filter={search} reDrawSongs={getAllSongs}/>
        </div>
        <div>
            <AddSong displaySongs={getAllSongs}/>
        </div>
        <div>
            <MusicTable allSongs={songs}/>
        </div>
      
    </div>
  );
}

export default App;
