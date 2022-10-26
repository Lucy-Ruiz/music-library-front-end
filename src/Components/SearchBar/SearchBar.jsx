import './SearchBar.css'

const SearchBar = (props) => {

    function handleSubmit(event) {
        event.preventDefault()
        props.reDrawSongs();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Filter by:</label>
            <input type='text' value={props.filter} onChange={(event) => props.setFilter(event.target.value)}></input>
            <button type='submit'>Search</button>
        </form>
    );
}

export default SearchBar;