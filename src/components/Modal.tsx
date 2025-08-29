import React, { type FC, type ReactNode, useState, useEffect, Fragment } from 'react';

export type ModalType = 'box' | 'sidebar-left' | 'sidebar-right' | 'sidebar-top' | 'sidebar-bottom';


export interface ModalProps {
    children?: ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    disableClickOutside?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | string;
    type?: ModalType; // 🔁 Tambahkan ini
    className?: string; // opsional: untuk custom tambahan
}

const Modal: FC<ModalProps> = ({
                                   children,
                                   isOpen = false,
                                   onClose,
                                   disableClickOutside = false,
                                   maxWidth = 'xl',
                                   type = 'box', // default ke 'box'
                                   className = '',
                               }) => {
    const [shouldRender, setShouldRender] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;
        let animationFrame: number;

        if (isOpen) {
            setShouldRender(true);
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

    // Tentukan kelas berdasarkan `type`
    const getModalClasses = () => {
        switch (type) {
            // ... case 'box' ...
            case 'sidebar-left':
                return `
          h-full w-80 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isAnimating ? 'translate-x-0' : '-translate-x-full'}
        `;

            case 'sidebar-right':
                return `
          h-full w-80 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isAnimating ? 'translate-x-0' : 'translate-x-full'}
        `;

            case 'sidebar-top':
                return `
          w-full h-64 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isAnimating ? 'translate-y-0' : '-translate-y-full'}
        `;

            case 'sidebar-bottom':
                return `
          w-full h-64 bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isAnimating ? 'translate-y-0' : 'translate-y-full'}
        `;

            default:
                return '';
        }
    };

    // Tentukan posisi overlay
    const getOverlayClasses = () => {
        switch (type) {
            case 'box':
                return 'flex items-center justify-center';
            case 'sidebar-left':
                return 'justify-start'; // ⬅️ Perbaiki ini
            case 'sidebar-right':
                return 'justify-end'; // ⬅️ Perbaiki ini
            case 'sidebar-top':
                return 'items-start'; // ⬅️ Perbaiki ini
            case 'sidebar-bottom':
                return 'items-end'; // ⬅️ Perbaiki ini
            default:
                return 'flex items-center justify-center';
        }
    };


    return (
        <div
            onClick={handleClose}
            // Gabungkan kelas-kelas ini
            className={`fixed inset-0 z-99 bg-slate-500/75 flex 
             ${getOverlayClasses()}
             transition-opacity duration-300 ease-in-out
             ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        >
            <div
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className={`${getModalClasses()} ${className}`}
            >
                {/* Close Button (opsional, bisa di-hide) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
                >
                    ✕
                </button>

                {/* Modal Content */}
                <div className="p-4 h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;