// src/components/Modal.tsx

import { type FC, type ReactNode } from 'react';
import { Fragment } from 'react';

export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const Modal: FC<ModalProps> = ({ children, isOpen = false, onClose, maxWidth = 'xl' }) => {
    if (!isOpen) {
        return <Fragment />;
    }

    const handleClose = () => {
        onClose();
    };

    return (
        <div
            onClick={handleClose}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative w-auto my-6 mx-auto max-w-${maxWidth}`}
            >
                {/* Konten modal */}
                {children}
            </div>
        </div>
    );
};

export default Modal;