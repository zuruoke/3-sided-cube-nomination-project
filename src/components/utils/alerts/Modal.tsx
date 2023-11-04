import React from 'react';
import StickyButtons from '../buttons/StickyButtons';

interface ModalProps {
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null; // Return nothing if modal is not open
    
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black opacity-50 absolute inset-0"></div> {/* Background overlay */}
            
            <div className="bg-white p-8 rounded-lg shadow-lg relative z-10 w-96"> {/* Modal content */}
                <h2 className="text-2xl font-bold mb-4">ARE YOU SURE?</h2>
                <p className="mb-6">If you leave this page, you will lose any progress made.</p>
                
                <div className="flex flex-col space-y-4">
                    <StickyButtons 
                        onClick={onConfirm} 
                        text="YES, LEAVE PAGE"
                    />
                    <StickyButtons 
                        onClick={onCancel} 
                        text="CANCEL"
                    />
                </div>
            </div>
        </div>
    );
}

export default Modal;
