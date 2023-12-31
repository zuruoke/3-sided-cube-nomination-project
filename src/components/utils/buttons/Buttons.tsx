import { poppins } from '@/app/layout';
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  additionalStyles?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  additionalStyles,
  disabled,
  type,
}) => {
  const buttonClass = `tracking-normal font-bold cursor-pointer 
                         transition-colors duration-300 ease-in-out hover:bg-gray-700 focus:outline-none ${poppins.className} ${additionalStyles}`;

  return (
    <button
      disabled={disabled}
      type={type}
      className={buttonClass}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;