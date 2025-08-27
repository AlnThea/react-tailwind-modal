// src/main.tsx

import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client'; // Import 'Root' from react-dom/client
// import React from 'react';
import App from './App.tsx';
import Modal from './components/Modal.tsx';

import './App.css';

class ReactModal extends HTMLElement {
    // Change 'any' to 'Root' and add ' | null' since it's initially null
    private root: Root | null = null;

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        // You can now safely assign the root
        this.root = createRoot(this.shadowRoot!);

        this.renderReactModal();

        // Perhatikan perubahan atribut dan render ulang
        new MutationObserver(() => this.renderReactModal()).observe(this, { attributes: true });
    }

    renderReactModal() {
        const isOpen = this.hasAttribute('isOpen');
        const maxWidth = this.getAttribute('maxWidth') as "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | null;

        const handleClose = () => {
            this.removeAttribute('isOpen');
            this.dispatchEvent(new CustomEvent('modal-close', { bubbles: true, composed: true }));
        };

        // Add a check to ensure this.root is not null before rendering
        if (this.root) {
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
}

// Daftarkan elemen kustom
customElements.define('my-modal', ReactModal);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);