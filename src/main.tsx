// src/main.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import React from 'react';
import App from './App.tsx';
import Modal from './components/Modal.tsx';

import './index.css';

class ReactModal extends HTMLElement {
    private root: any;

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        // Perbaiki: Gunakan non-null assertion untuk memastikan shadowRoot tidak null
        this.root = createRoot(this.shadowRoot!);

        this.renderReactModal();

        // Perhatikan perubahan atribut dan render ulang
        new MutationObserver(() => this.renderReactModal()).observe(this, { attributes: true });
    }

    renderReactModal() {
        const isOpen = this.hasAttribute('isOpen');
        // Perbaiki: pastikan maxWidth memiliki tipe yang benar
        const maxWidth = this.getAttribute('maxWidth') as "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | null;

        const handleClose = () => {
            this.removeAttribute('isOpen');
            this.dispatchEvent(new CustomEvent('modal-close', { bubbles: true, composed: true }));
        };

        this.root.render(
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                maxWidth={maxWidth || undefined}
            >
                <slot></slot>
            </Modal>
        );
    }
}

// Daftarkan elemen kustom
customElements.define('my-modal', ReactModal);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);