// src/App.tsx

import { useState, useEffect, useRef } from 'react';

// Impor jenis elemen kustom
import './global.d.ts';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Perbaiki: Tentukan tipe data ref secara eksplisit
    const modalRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const modalElement = modalRef.current;
        if (modalElement) {
            const handleClose = () => {
                setIsModalOpen(false);
            };
            modalElement.addEventListener('modal-close', handleClose as EventListener);
            return () => {
                modalElement.removeEventListener('modal-close', handleClose as EventListener);
            }
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Hello World</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Open Modal
            </button>

            {/* Gunakan elemen kustom */}
            <my-modal
                ref={modalRef}
                isOpen={isModalOpen}
                maxWidth="xl"
            >
                <div>
                    <h2 className="text-2xl font-bold">Judul Modal</h2>
                    <p className="mt-2 text-gray-600">Konten modal</p>
                </div>
            </my-modal>
        </div>
    );
}

export default App;