// src/global.d.ts

declare namespace JSX {
    interface IntrinsicElements {
        'my-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            isOpen?: boolean;
            maxWidth?: string;
        };
    }
}