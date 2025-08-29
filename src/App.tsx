// src/App.tsx

import { useState } from 'react';
import Modal from './components/Modal'; // Pastikan path impornya benar

function App() {
    // State untuk setiap tipe modal
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [isSidebarLeftOpen, setIsSidebarLeftOpen] = useState(false);
    const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);
    const [isSidebarTopOpen, setIsSidebarTopOpen] = useState(false);
    const [isSidebarBottomOpen, setIsSidebarBottomOpen] = useState(false);

    // Fungsi penutup modal
    const closeModal = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Modal Demo</h1>

            {/* Grid tombol */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
                <button
                    onClick={() => setIsBoxOpen(true)}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none shadow"
                >
                    Open Box Modal
                </button>

                <button
                    onClick={() => setIsSidebarLeftOpen(true)}
                    className="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none shadow"
                >
                    Sidebar Left
                </button>

                <button
                    onClick={() => setIsSidebarRightOpen(true)}
                    className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 focus:outline-none shadow"
                >
                    Sidebar Right
                </button>

                <button
                    onClick={() => setIsSidebarTopOpen(true)}
                    className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none shadow"
                >
                    Sidebar Top
                </button>

                <button
                    onClick={() => setIsSidebarBottomOpen(true)}
                    className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 focus:outline-none shadow"
                >
                    Sidebar Bottom
                </button>

                <button
                    onClick={() => {
                        setIsBoxOpen(false);
                        setIsSidebarLeftOpen(false);
                        setIsSidebarRightOpen(false);
                        setIsSidebarTopOpen(false);
                        setIsSidebarBottomOpen(false);
                    }}
                    className="col-span-2 md:col-span-1 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none shadow"
                >
                    Close All
                </button>
            </div>

            {/* === Modal Kotak (Box) === */}
            <Modal
                isOpen={isBoxOpen}
                onClose={() => closeModal(setIsBoxOpen)}
                maxWidth="2xl"
                type="box"
                disableClickOutside={false}
            >
                <div className="bg-white rounded-lg p-6 max-h-[80vh] overflow-y-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Box Modal</h2>
                    <p className="text-gray-600 mb-4">
                        Ini adalah modal standar yang muncul di tengah layar dengan animasi scale.
                    </p>
                    <div className="space-y-2 text-sm text-gray-500">
                        {Array(10)
                            .fill(0)
                            .map((_, i) => (
                                <p key={i}>
                                    Konten tambahan untuk scroll test #{i + 1}. Ini menunjukkan bahwa modal bisa discroll.
                                </p>
                            ))}
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={() => closeModal(setIsBoxOpen)}
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>

            {/* === Modal Sidebar Kiri === */}
            <Modal
                isOpen={isSidebarLeftOpen}
                onClose={() => closeModal(setIsSidebarLeftOpen)}
                type="sidebar-left"
                disableClickOutside={true}
            >
                <div className="bg-white h-full p-6 w-80 flex flex-col">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">⬅️ Sidebar Kiri</h2>
                    <p className="text-gray-600 mb-6 flex-1">
                        Muncul dari kiri dengan animasi slide. Cocok untuk menu navigasi atau panel pengaturan.
                    </p>
                    <button
                        onClick={() => closeModal(setIsSidebarLeftOpen)}
                        className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
                    >
                        Tutup
                    </button>
                </div>
            </Modal>

            {/* === Modal Sidebar Kanan === */}
            <Modal
                isOpen={isSidebarRightOpen}
                onClose={() => closeModal(setIsSidebarRightOpen)}
                type="sidebar-right"
                disableClickOutside={true}
            >
                <div className="bg-white h-full p-6 w-80 flex flex-col">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">➡️ Sidebar Kanan</h2>
                    <p className="text-gray-600 mb-6 flex-1">
                        Slide dari kanan. Sering digunakan untuk panel notifikasi atau detail item.
                    </p>
                    <button
                        onClick={() => closeModal(setIsSidebarRightOpen)}
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
                    >
                        Close
                    </button>
                </div>
            </Modal>

            {/* === Modal Sidebar Atas === */}
            <Modal
                isOpen={isSidebarTopOpen}
                onClose={() => closeModal(setIsSidebarTopOpen)}
                type="sidebar-top"
                disableClickOutside={true}
            >
                <div className="bg-white w-full p-6 h-64">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">⬆️ Sidebar Atas</h2>
                    <p className="text-gray-600">
                        Muncul dari atas. Bisa dipakai untuk alert, toast, atau quick action bar.
                    </p>
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => closeModal(setIsSidebarTopOpen)}
                            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
                        >
                            Dismiss
                        </button>
                    </div>
                </div>
            </Modal>

            {/* === Modal Sidebar Bawah === */}
            <Modal
                isOpen={isSidebarBottomOpen}
                onClose={() => closeModal(setIsSidebarBottomOpen)}
                type="sidebar-bottom"
                disableClickOutside={true}
            >
                <div className="bg-white w-full p-6 h-64">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">⬇️ Sidebar Bawah</h2>
                    <p className="text-gray-600">
                        Slide dari bawah. Cocok untuk mobile bottom sheet atau quick menu.
                    </p>
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => closeModal(setIsSidebarBottomOpen)}
                            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default App;