import './SearchBar.css'

const SearchBar = (props) => {
    return(
        <form>
            <label>Filter by:</label>
            <select>
                <option>ID</option>
                <option>Title</option>
                <option>Artist</option>
                <option>Album</option>
                <option>Release Date</option>
                <option>Genre</option>
            </select>
            <br></br>
            <input type='text'></input>
            <br></br>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;