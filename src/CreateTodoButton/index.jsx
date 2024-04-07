import './CreateTodoButton.css';
import { AiOutlinePlus } from "react-icons/ai";

function CreateTodoButton() {
    return (
        <button className="create-btn">
            <AiOutlinePlus/>
            Añade una tarea
        </button>
    );
}

export { CreateTodoButton };