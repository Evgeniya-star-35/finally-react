import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modalRoot');

export default function ModalLogout({ children, onClose }) {
    useEffect(() => {
        const handleKeydown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeydown);
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <div className={s.overlay} onClick={handleBackdropClick}>
            <div className={s.modal}>{children}</div>
        </div>,
        modalRoot,
    );
}

ModalLogout.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};
