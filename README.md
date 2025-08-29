# React Tailwind Modal

A lightweight, customizable, and fully animated React modal component built with Tailwind CSS. This component is designed to provide a smooth and intuitive user experience with fluid transitions.
Currently, two official plugins are available:

<div align="center">
  <table width="100%" border="0" cellPadding="5" cellSpacing="0">
    <tr>
      <td align="center" width="20%">
        <img src="https://github.com/AlnThea/react-tailwind-modal/blob/master/public/box.png" width="400" alt="React Tailwind Modal Demo" />
        <p><small><strong>Box Modal</strong></small></p>
      </td>
      <td align="center" width="20%">
        <img src="https://github.com/AlnThea/react-tailwind-modal/blob/master/public/left.png" width="400" alt="React Tailwind Modal Demo" />
        <p><small><strong>Sidebar Left</strong></small></p>
      </td>
      <td align="center" width="20%">
        <img src="https://github.com/AlnThea/react-tailwind-modal/blob/master/public/right.png" width="400" alt="React Tailwind Modal Demo" />
        <p><small><strong>Sidebar Right</strong></small></p>
      </td>
      <td align="center" width="20%">
        <img src="https://github.com/AlnThea/react-tailwind-modal/blob/master/public/top.png" width="400" alt="React Tailwind Modal Demo" />
        <p><small><strong>Sidebar Top</strong></small></p>
      </td>
      <td align="center" width="20%">
        <img src="https://github.com/AlnThea/react-tailwind-modal/blob/master/public/bottom.png" width="400" alt="React Tailwind Modal Demo" />
        <p><small><strong>Sidebar Bottom</strong></small></p>
      </td>
    </tr>
  </table>
</div>

### Key Features

- Smooth Animations: Enjoy seamless fade-in and scale-in animations on open, and fade-out and scale-out animations on close.
- Multiple Modal Types: Support for various modal positions, including a standard box modal, and sidebars from the left, right, top, and bottom.
- Full Customization: Easily control the modal's maximum width (maxWidth), handle closing behavior, and add custom classes.
- Lightweight: Contains only the necessary logic, keeping the bundle size small.
- Tailwind CSS v4 Ready: Designed to work flawlessly with the latest Tailwind CSS ecosystem.

### Require
```bash
   React v18 and up from v.1.0.3 
```


### Installation
Install the component using npm or yarn.
```bash
  npm install react-tailwind-modal
  # or
  yarn add react-tailwind-modal
```

### How to Use


Use the ```useState ``` hook to control the modal's visibility. You can specify the desired ```modal type ``` using the type prop.
```tsx
// App.tsx
import { useState } from 'react';
import Modal from '@alnthea/react-tailwind-modal';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarRightOpen, setIsSidebarRightOpen] = useState(false);
    const [isSidebarBottomOpen, setIsSidebarBottomOpen] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        setIsSidebarRightOpen(false);
        setIsSidebarBottomOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-200">
            <h1 className="text-3xl font-bold mb-6">Modal Usage Example</h1>
            <div className="flex space-x-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                    Open Box Modal
                </button>
                <button
                    onClick={() => setIsSidebarRightOpen(true)}
                    className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                >
                    Open Right Sidebar
                </button>
                <button
                    onClick={() => setIsSidebarBottomOpen(true)}
                    className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none"
                >
                    Open Bottom Sidebar
                </button>
            </div>

            {/* Box Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} maxWidth="3xl">
                <div className="p-4 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold">Box Modal</h2>
                    <p className="mt-2 text-gray-600">
                        This is a standard box modal.
                    </p>
                    <button
                        onClick={closeModal}
                        className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Close
                    </button>
                </div>
            </Modal>

            {/* Right Sidebar */}
            <Modal isOpen={isSidebarRightOpen} onClose={closeModal} type="sidebar-right">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Right Sidebar</h2>
                    <p className="text-gray-600">Your sidebar content goes here.</p>
                </div>
            </Modal>

            {/* Bottom Sidebar */}
            <Modal isOpen={isSidebarBottomOpen} onClose={closeModal} type="sidebar-bottom">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Bottom Sidebar</h2>
                    <p className="text-gray-600">Your sidebar content goes here.</p>
                </div>
            </Modal>
        </div>
    );
}

export default App;
```
### Props

Use the `useState` hook to control the modal's visibility.

| Property              | Type                                                                              | Default        | Description                                                     |
|:----------------------|:----------------------------------------------------------------------------------|:---------------|:----------------------------------------------------------------|
| `children`            | `ReactNode`                                                                       | `undefined`    | The content to be displayed inside the modal.                   |
| `isOpen`              | `boolean`                                                                         | `false`        | Controls the visibility of the modal.                           |
| `onClose`             | `() => void`                                                                      | **(Required)** | A function called when the modal should be closed.              |
| `disableClickOutside` | `boolean`                                                                         | `false`        | If true, the modal will not close when clicking on the overlay. |
| `maxWidth`            | `'sm' \| 'md' \| 'lg' \|'xl' \|'2xl' \|'3xl' \|'4xl' \|'5xl' \|'6xl' \|'7xl' \|`  | `'xl'`         | Sets the maximum width of the modal.                            |
| `type/ModalType`      | `'box' \| 'sidebar-left' \| 'sidebar-right' \| 'sidebar-top' \| 'sidebar-bottom'` | `'box'`        | Determines the type of modal and its animation.                 |
| `className`           | `string`                                                                          | `''`           | Additional custom classes to be added to the modal container.   |


### Tailwinds CSS v4 Safelist

Add safelist for tailwind css v4.1 and up  in your ```app.css``` without this, the modal won't work.
```
  @import "tailwindcss";
  @source inline("{sm:,md:,lg:,xl:,2xl:,}max-w-{sm,md,lg,xl,2xl,3xl,4xl,5xl,6xl,7xl}");
```

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