import './SearchBar.css'

const SearchBar = (props) => {
    return(
        <form>
            <label>Filter by:</label>
            <input type='text'></input>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;