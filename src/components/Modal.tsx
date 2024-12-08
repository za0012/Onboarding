import React, { PropsWithChildren } from 'react';
import '../css/Modal.css'

interface ModalDefaultType {
    onClickToggleModal: () => void;
}

function Modal({
    onClickToggleModal,
    children,
}: PropsWithChildren<ModalDefaultType>) {
    return (
        <div className="ModalContainer">
            <dialog className="DialogBox">{children}</dialog>
            <div
                className="Backdrop"
                onClick={(e: React.MouseEvent) => {
                    e.preventDefault();

                    if (onClickToggleModal) {
                        onClickToggleModal();
                    }
                }}
            />
        </div>
    );
}
export default Modal;
