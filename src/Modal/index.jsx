import React from 'react';
import ReactDOM from 'react-dom';
import { TbSquareXFilled } from "react-icons/tb";
import { ModalContext } from '../contexts/ModalContext';
import './Modal.css';

function Modal({ children }) {
    const { openModal, setOpenModal } = React.useContext(ModalContext);

    return ReactDOM.createPortal( 
        <div className="modal-background">
            <div className="modal-container">
                <button className="modal-close-btn"
                    onClick={() => {
                        setOpenModal(!openModal);
                    }}>
                    <TbSquareXFilled/>
                </button>
                <div className="modal-content">
                    { children }
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };