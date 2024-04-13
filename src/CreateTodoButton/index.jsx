import React from 'react';
import { ModalContext } from '../contexts/ModalContext';
import './CreateTodoButton.css';
import { AiOutlinePlus } from "react-icons/ai";

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(ModalContext);

    return (
        <button 
            className="create-btn"
            onClick={() => {
                setOpenModal(!openModal);
            }}>
            <AiOutlinePlus/>
            Añade una tarea
        </button>
    );
}

export { CreateTodoButton };