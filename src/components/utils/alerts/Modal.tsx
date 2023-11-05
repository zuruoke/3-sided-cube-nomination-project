import React from 'react';
import StickyButtons from '../buttons/StickyButtons';
import { anonymous, poppins } from '@/app/layout';

interface ModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  description: string;
  buttonText: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
  buttonText,
}) => {
  if (!isOpen) return null; // Return nothing if modal is not open

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-black opacity-50 absolute inset-0'></div>{' '}
      {/* Background overlay */}
      <div className='bg-white p-4 flex flex-col gap-y-9 shadow-lg h-[20rem] relative z-10 w-[29rem]'>
        {' '}
        {/* Modal content */}
        <h3 className={`text-lg text-black font-bold pt-5 -mb-5`}>{title}</h3>
        <p
          className={`mb-6 text-base pl-1.5 text-gray-600 ${anonymous.className}`}
        >
          {description}
        </p>
        <div className='flex shadow-lg flex-col space-y-4'>
          <StickyButtons onClick={onConfirm} text={buttonText} />
          <StickyButtons onClick={onCancel} text='CANCEL' />
        </div>
      </div>
    </div>
  );
};

export default Modal;