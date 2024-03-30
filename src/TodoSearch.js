import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
    return (
        <div className="search-bar--container">
            <input 
                type="text" 
                placeholder="Buscar tarea..." 
                value={searchValue}
                className="search-bar"
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };