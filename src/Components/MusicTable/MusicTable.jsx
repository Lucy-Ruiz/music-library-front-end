import { getActiveElement } from "@testing-library/user-event/dist/utils";
import DeleteSong from "../DeleteSong/DeleteSong";

const MusicTable = (props) => {
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                </tr>
            </thead>
            <tbody>
                {props.allSongs.map((song, index) => {
                    return(
                        <tr key={index}>
                            <td>{song.id}</td>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td><DeleteSong songId={song.id} displaySongs={props.displaySongs}/></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default MusicTable;