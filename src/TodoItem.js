import './TodoItem.css';

function TodoItem({ text, completed}) {
    return (
        <li>
            <label class="checkbox-container">
                <input type="checkbox" defaultChecked={completed} />
                <span class="checkmark"></span>
            </label>
            <p className={`${completed && 'line-through'}`}>{text}</p>
            <span>
                <button className="delete-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#696969" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 7l16 0" />
                        <path d="M10 11l0 6" />
                        <path d="M14 11l0 6" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                </button>
            </span>
        </li>
    );
}

export { TodoItem };