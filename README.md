# React Tailwind Modal

A lightweight, customizable, and fully animated React modal component built with Tailwind CSS. This component is designed to provide a smooth and intuitive user experience with fluid transitions.
Currently, two official plugins are available:

### Key Features

- Smooth Animations: Enjoy seamless fade-in and scale-in animations on open, and fade-out and scale-out animations on close.
- Full Customization: Easily control the modal's maximum width (maxWidth) and handle closing behavior.
- Lightweight: Contains only the necessary logic, keeping the bundle size small.
- Tailwind CSS v4 Ready: Designed to work flawlessly with the latest Tailwind CSS ecosystem.

### Installation

Install the component using npm or yarn.
```bash
  npm install react-tailwind-modal
  # or
  yarn add react-tailwind-modal
```

### How to Use

Use the useState hook to control the modal's visibility.
```tsx
// App.tsx
import { useState } from 'react';
import Modal from 'react-tailwind-modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <h1 className="text-3xl font-bold mb-6">Example Page</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Open Modal
            </button>

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                maxWidth="3xl"
                disableClickOutside={false}
            >
                {/* Your modal content goes here */}
                <div className="p-4 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold">Modal Title</h2>
                    <p className="mt-2 text-gray-600">
                        You can place any content inside the modal.
                    </p>
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
```
### Props

Use the `useState` hook to control the modal's visibility.

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | `undefined` | The content to be displayed inside the modal. |
| `isOpen` | `boolean` | `false` | Controls the visibility of the modal. |
| `onClose` | `() => void` | **(Required)** | A function called when the modal should be closed. |
| `disableClickOutside` | `boolean` | `false` | If true, the modal will not close when clicking on the overlay. |
| `maxWidth` | `'sm' \| 'md' \| ...` | `'xl'` | Sets the maximum width of the modal. |



### Local Development

Install the component using npm or yarn.
```bash
  # Clone the repository
  git clone https://github.com/AlnThea/react-tailwind-modal.git
    
  # Navigate to the project directory
  cd react-tailwind-modal
    
  # Install dependencies
  npm install
    
  # Run the development server
  npm run dev
```

### License

```
  This project is licensed under the MIT License.
```