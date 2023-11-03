import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    additionalStyles?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick, additionalStyles }) => {
    const buttonClass = `bg-black text-white px-8 py-3 text-xl font-bold border-none rounded-lg cursor-pointer 
                         transition-colors duration-300 ease-in-out hover:bg-gray-700 focus:outline-none ${additionalStyles}`;

    return (
        <button 
            className={buttonClass}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default CustomButton;
