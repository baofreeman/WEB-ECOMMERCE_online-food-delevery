import { useState } from 'react';
const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(false);

    function toggle() {
        setIsOpen(true);
    }

    function click() {
        setIsAdd(true);
    }

    return {
        isOpen,
        isAdd,
        toggle,
        setIsAdd,
        setIsOpen,
        click,
    };
};

export default useModal;
