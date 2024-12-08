import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../css/Modal.css';
function Modal({ onClickToggleModal, children, }) {
    return (_jsxs("div", { className: "ModalContainer", children: [_jsx("dialog", { className: "DialogBox", children: children }), _jsx("div", { className: "Backdrop", onClick: (e) => {
                    e.preventDefault();
                    if (onClickToggleModal) {
                        onClickToggleModal();
                    }
                } })] }));
}
export default Modal;
