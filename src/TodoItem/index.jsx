import './TodoItem.css';
import { TbTrash } from "react-icons/tb";

function TodoItem({ text, completed, onDeleted }) {
    return (
        <li>
            <label className="checkbox-container">
                <input type="checkbox" defaultChecked={completed} />
                <span className="checkmark"></span>
            </label>
            <p className={`${completed && 'line-through'}`}>{text}</p>
            <span>
                <button 
                    className="delete-btn"
                    onClick={onDeleted}
                >
                    <TbTrash/>
                </button>
            </span>
        </li>
    );
}

export { TodoItem };