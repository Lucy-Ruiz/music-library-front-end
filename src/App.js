import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {

    const[songs, setSongs] = useState([]);
    
    
    useEffect(() => {
        getAllSongs();
    }, [])
    
    async function getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/api/music/');
        setSongs(response.data);
    }


  return (
    <div>
      <h3>Music Library</h3>
      <div>
        <SearchBar/>
      </div>
      <div>
        <MusicTable allSongs={songs}/>
      </div>
      
    </div>
  );
}

export default App;
