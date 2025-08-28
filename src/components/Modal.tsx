// src/components/Modal.tsx

import { type FC, type ReactNode, useState, useEffect, Fragment } from 'react';

export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    disableClickOutside?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const Modal: FC<ModalProps> = ({
                                   children,
                                   isOpen = false,
                                   onClose,
                                   disableClickOutside = false,
                                   maxWidth = 'xl',
                               }) => {
    // State to control if the modal should be in the DOM
    const [shouldRender, setShouldRender] = useState(false);
    // State to control the transition animation status
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        let animationFrame: number;

        if (isOpen) {
            setShouldRender(true);
            // Use requestAnimationFrame for a more reliable animation trigger
            animationFrame = requestAnimationFrame(() => {
                setIsAnimating(true);
            });
        } else {
            setIsAnimating(false);
            timer = setTimeout(() => {
                setShouldRender(false);
            }, 300);
        }

        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(animationFrame);
        };
    }, [isOpen]);

    if (!shouldRender) {
        return <Fragment />;
    }

    const handleClose = () => {
        if (!disableClickOutside) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleClose}
            className={`fixed inset-0 z-50 bg-slate-500/75 flex items-center justify-center 
                       transition-opacity duration-300 ease-in-out
                       ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`p-6 relative bg-white mx-auto w-full rounded-2xl shadow-lg 
                            max-w-${maxWidth} transition-all duration-300 ease-in-out
                            ${isAnimating ? 'scale-85 opacity-100' : 'scale-95 opacity-0'}`}
            >
                {/* Modal content */}
                {children}
            </div>
        </div>
    );
};

export default Modal;