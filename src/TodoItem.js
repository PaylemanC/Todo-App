import './TodoItem.css';

function TodoItem({ text, completed}) {
    return (
        <li>
            <p className={`${completed && 'line-through'}`}>{text}</p>
            <label class="checkbox-container">
                <input type="checkbox" defaultChecked={completed} />
                <span class="checkmark"></span>
            </label>
        </li>
    );
}

export { TodoItem };