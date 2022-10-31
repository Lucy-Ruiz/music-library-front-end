import axios from 'axios';
import React, { useState } from 'react';

const AddSong = (props) => {
    const[title, setTitle] = useState('');
    const[artist, setArtist] = useState('');
    const[album, setAlbum] = useState('');
    const[releaseDate, setReleaseDate] = useState('');
    const[genre, setGenre] = useState('');
    
    async function createSong(newSong){
        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if(response.status === 201){
            await props.displaySongs();
        };
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        }
        createSong(newSong);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input data-cy='titleTest' type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
            <label>Artist</label>
            <input data-cy='artistTest' type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
            <label>Album</label>
            <input data-cy='albumTest' type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
            <label>Release Date</label>
            <input data-cy='2022-01-01' type='text' value={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
            <label>Genre</label>
            <input data-cy='genreTest' type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    );
}

export default AddSong;