import React from 'react';
import CustomButton from './Buttons';
import { poppins } from '@/app/layout';

interface StickyButtonsProps {
  onClick?: () => void;
  text: string;
}

const StickyButtons: React.FC<StickyButtonsProps> = ({ onClick, text }) => {
  return (
    <CustomButton
      text={text}
      onClick={onClick}
      additionalStyles={`bg-white ${poppins.className} border-2 mt-2 text-sm border-black text-black py-2.5 px-6 shadow-lg font-black transition-colors duration-300 hover:bg-black hover:text-white hover:border-white`}
    />
  );
};

export default StickyButtons;