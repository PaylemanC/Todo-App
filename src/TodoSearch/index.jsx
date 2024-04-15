import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../contexts/TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext)

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