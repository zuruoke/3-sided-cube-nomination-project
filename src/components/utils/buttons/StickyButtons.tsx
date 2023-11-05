import React from 'react';
import CustomButton from './Buttons';

interface StickyButtonsProps {
    onClick?: () => void;
    text: string;
}

const StickyButtons: React.FC<StickyButtonsProps> = ({ onClick, text }) => {
    return (
        <CustomButton 
            text={text}
            onClick={onClick}
            additionalStyles="bg-white border-2 border-black text-black py-2 px-6 shadow-md transition-colors duration-300 hover:bg-black hover:text-white hover:border-white"
        />
    );
}

export default StickyButtons;