import './TodoSearch.css';

function TodoSearch() {
    return (
        <div class="search-bar--container">
            <input type="text" placeholder="Buscar tarea..." class="search-bar"/>
        </div>
    );
}

export { TodoSearch };