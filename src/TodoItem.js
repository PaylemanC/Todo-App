import './TodoItem.css';

function TodoItem({ text, completed}) {
    return (
        <li>
            <p>{text}</p>
            <label class="checkbox-container">
                <input type="checkbox" defaultChecked={completed} />
                <span class="checkmark"></span>
            </label>
        </li>
    );
}

export { TodoItem };