declare namespace JSX {
    interface IntrinsicElements {
        // Define the custom element and its expected props
        'my-modal': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            isOpen?: boolean;
            maxWidth?: string;
        };
    }
}