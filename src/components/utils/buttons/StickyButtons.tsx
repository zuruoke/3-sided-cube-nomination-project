import React from 'react';
import CustomButton from './Buttons';

interface StickyButtonsProps {
    onClick?: () => void;
}

const StickyButtons: React.FC<StickyButtonsProps> = ({ onClick }) => {
    return (
        <CustomButton 
            text="NOMINATE ANOTHER CUBE" 
            onClick={onClick}
            additionalStyles="bg-white border-2 border-black text-black py-2 px-6 shadow-md transition-colors duration-300 hover:bg-black hover:text-white hover:border-white"
        />
    );
}

export default StickyButtons;
