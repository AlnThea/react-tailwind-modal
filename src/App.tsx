// src/App.tsx

import { useState } from 'react';
import Modal from './components/Modal'; // Pastikan path impornya benar

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fungsi untuk menutup modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
            <h1 className="text-3xl font-bold mb-6">Hello World</h1>
            <button
                onClick={() => setIsModalOpen(true)} // Aksi ini yang memicu modal
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Open Modal
            </button>

            {/* Komponen Modal Anda hanya akan dirender saat isModalOpen bernilai true */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                maxWidth="xl"
            >
                {/* Konten modal di sini */}
                <div onClick={(e) => e.stopPropagation()} className="p-6 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold">Judul Modal</h2>
                    <p className="mt-2 text-gray-600">Konten modal</p>
                    <button
                        onClick={closeModal}
                        className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Close
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default App;