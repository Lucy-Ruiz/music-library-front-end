import axios from 'axios';
import React, { useState } from 'react';

const DeleteSong = (props) => {
    const[songId, setId] = useState(props.songId);


    async function deleteSong(songId){
        let response = await axios.delete('http://127.0.0.1:8000/api/music/' + songId + '/');
            await props.displaySongs();
    }

    function handleSubmit(event) {
        event.preventDefault();
        deleteSong(songId);
    }
        

    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>Delete</button>
        </form>
    );

};

export default DeleteSong;